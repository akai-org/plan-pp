from django.db import models
from django.contrib.auth.models import User

# Model for database table of plans
class CoursePlan(models.Model):
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
    WEEKTYPE = [(True, 'EVEN'), (False, 'ODD')]
    firstWeekType = models.BooleanField(choices=WEEKTYPE)


# table of users
class PlanUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='db_user')
    group = models.ForeignKey('StudentGroup', on_delete=models.SET_NULL, null=True)
    coursePlan = models.ForeignKey('CoursePlan', on_delete=models.SET_NULL, null=True)

# table for all student groups across the university, id for identyfication in database, name for students
class StudentGroup(models.Model):
    groupID = models.AutoField(primary_key=True)
    groupName = models.CharField(max_length=10)


# table of teachers
class Teacher(models.Model):
    teacherID = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=40)
    lastName = models.CharField(max_length=80)
    title = models.CharField(max_length=80, blank=True, null=True)


# table connects teachers with their lessons
class LessonTeacher(models.Model):
    teacher = models.ForeignKey('Teacher', on_delete=models.CASCADE)
    lesson = models.ForeignKey('Lesson', on_delete=models.CASCADE)


# table of time slots: it includes course plan classes and individual modifications for all courses and users
# probably the biggest table in database
class Slot(models.Model):
    slotID = models.AutoField(primary_key=True)
    dayOfWeek = models.PositiveSmallIntegerField()
    startHour = models.TimeField()
    endHour = models.TimeField()
    description = models.TextField(blank=True, null=True)
    # Field says after what date slot shouldn't be displayed in schedule
    endAtDate = models.DateField(blank=True, null=True)
    # Field says after what date slot should be displayed in schedule
    startAtDate = models.DateField(blank=True, null=True)


# all lessons for all course plans
class Lesson(models.Model):
    slot = models.ForeignKey('Slot', on_delete=models.CASCADE)
    classroom = models.CharField(max_length=10)
    # lecture, lab, seminary etc
    lessonType = models.CharField(max_length=20)
    course = models.ForeignKey('CoursePlan', on_delete=models.CASCADE)
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE)


# activities added by user, not from course plans
class OtherActivity(models.Model):
    slot = models.ForeignKey('Slot', on_delete=models.CASCADE)
    title = models.CharField(max_length=40)


# table of all subjects in all courses plans
class Subject(models.Model):
    subjectID = models.AutoField(primary_key=True)
    # full name of subject
    name = models.CharField(max_length=40)
    # abbreviated name of subject
    abbr = models.CharField(max_length=10)


# table that keeps connection between student group and their lessons
class LessonGroups(models.Model):
    lesson = models.ForeignKey('Lesson', on_delete=models.CASCADE)
    group = models.ForeignKey('StudentGroup', on_delete=models.CASCADE)



