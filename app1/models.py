from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    is_faculty = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10)
    blood_group = models.CharField(max_length=5)
    contact_number = models.CharField(max_length=15)
    address = models.TextField()

class Subject(models.Model):
    name = models.CharField(max_length=100)
    faculty = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='subjects')

class Enrollment(models.Model):
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

