from django.db import models
from django.db.models import Q
from django.contrib.auth.models import User

WEEKTYPE = [(False, 'NIEPARZYSTY'), (True, 'PARZYSTY')]


class CoursePlan(models.Model):
    """Model for database table of plans"""
    courseID = models.AutoField(primary_key=True)
    faculty = models.CharField(max_length=100)
    # stationary studies: True, extramural: False
    MODE = [(True, 'STACJONARNE'), (False, 'ZAOCZNE')]
    studiesMode = models.BooleanField(choices=MODE)
    course = models.CharField(max_length=100)
    term = models.PositiveSmallIntegerField()
    startAt = models.DateField()
    endAt = models.DateField()
    # even week: True, odd week: False
    firstWeekType = models.BooleanField(choices=WEEKTYPE)

    def __str__(self):
        return f'{self.faculty}, {self.course}, {self.studiesMode}, {self.term}'


class PlanUser(models.Model):
    """table of course plans users"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='db_user')
    group = models.ForeignKey('StudentGroup', on_delete=models.SET_NULL, null=True)
    coursePlan = models.ForeignKey('CoursePlan', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f'Username: {self.user.username} groupID: {self.group_id} coursePlanID: {self.coursePlan}'


class StudentGroup(models.Model):
    """table for all student groups across the university, id for identyfication in database, name for students"""
    groupID = models.AutoField(primary_key=True)
    groupName = models.CharField(max_length=10)


class Teacher(models.Model):
    """table of teachers"""
    teacherID = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=40)
    lastName = models.CharField(max_length=80)
    title = models.CharField(max_length=80, blank=True, null=True)


class LessonTeacher(models.Model):
    """table connects teachers with their lessons"""
    teacher = models.ForeignKey('Teacher', on_delete=models.CASCADE)
    lesson = models.ForeignKey('Lesson', on_delete=models.CASCADE)


class Slot(models.Model):
    """table of time slots: it includes course plan classes and individual modifications for all courses and users,
    probably the biggest table in database"""
    slotID = models.AutoField(primary_key=True)
    dayOfWeek = models.PositiveSmallIntegerField()
    startHour = models.TimeField()
    endHour = models.TimeField()
    description = models.TextField(blank=True, null=True)
    # Field says after what date slot shouldn't be displayed in schedule
    endAtDate = models.DateField(blank=True, null=True)
    # Field says after what date slot should be displayed in schedule
    startAtDate = models.DateField(blank=True, null=True)
    # 0 - every, 1 - odd, 2 - even
    weekType = models.SmallIntegerField()


class Lesson(models.Model):
    """all lessons for all course plans"""
    slot = models.ForeignKey('Slot', on_delete=models.CASCADE)
    classroom = models.CharField(max_length=10)
    # lecture, lab, seminary etc
    lessonType = models.CharField(max_length=20)
    course = models.ForeignKey('CoursePlan', on_delete=models.CASCADE)
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE)


class OtherActivity(models.Model):
    """activities added by user, not from course plans"""
    slot = models.ForeignKey('Slot', on_delete=models.CASCADE)
    title = models.CharField(max_length=40)


class Subject(models.Model):
    """table of all subjects in all courses plans"""
    subjectID = models.AutoField(primary_key=True)
    # full name of subject
    name = models.CharField(max_length=40)
    # abbreviated name of subject
    abbr = models.CharField(max_length=10)


class LessonGroups(models.Model):
    """table that keeps connection between student group and their lessons"""
    lesson = models.ForeignKey('Lesson', on_delete=models.CASCADE)
    group = models.ForeignKey('StudentGroup', on_delete=models.CASCADE)


class Modification(models.Model):
    """table keeps modifications of all users"""
    TYPES = [(-1, 'REMOVE'), (1, 'ADD')]
    type = models.SmallIntegerField()
    slot = models.ForeignKey('Slot', on_delete=models.CASCADE)
    user = models.ForeignKey('PlanUser', on_delete=models.CASCADE)
