from django.contrib import admin
from .models import User, StudentProfile, Subject, Enrollment

# Register your models here.

admin.site.register(User)
admin.site.register(StudentProfile)
admin.site.register(Subject)
admin.site.register(Enrollment)
