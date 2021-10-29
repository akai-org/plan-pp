from django.db import models

# Model for database table of users
class User(models.Model):
    CourseID = models.AutoField()
    Faculty = models.CharField(max_length=100)
    # stationary studies: True, extramural: False
    StudiesMode = models.BooleanField()
    Course = models.CharField(max_length=100)
    Term = models.PositiveSmallIntegerField()
    StartAt = models.DateField()
    EndAt = models.DateField()
    # even week: True, odd week: False
    FirstWeekType = models.BooleanField()
