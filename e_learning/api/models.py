from django.db import models

# Create your models here.
class Teacher(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    org_name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

class Student(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    class_code = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
