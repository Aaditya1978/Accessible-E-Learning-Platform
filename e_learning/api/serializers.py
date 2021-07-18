from rest_framework import fields, serializers
from .models import Teacher, Student


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ('first_name', 'last_name', 'email', 'org_name', 'password')

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fiels = ('first_name', 'last_name', 'email', 'class_code', 'password')
