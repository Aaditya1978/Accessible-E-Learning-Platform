from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .serializers import TeacherSerializer, StudentSerializer
from .models import Student, Teacher
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.


class TeacherSignUpView(APIView):
    serializer_class = TeacherSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            first_name = serializer.data.get("first_name")
            last_name = serializer.data.get("last_name")
            email = serializer.data.get("email")
            org_name = serializer.data.get("org_name")
            password = serializer.data.get("password")
        data = Teacher()
        data.first_name = first_name
        data.last_name = last_name
        data.email = email
        data.org_name = org_name
        data.password = password
        data.save()
        return Response({"Success": "data saved"}, status=status.HTTP_200_OK)


class StudentSignUpView(APIView):
    serializer_class = StudentSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            first_name = serializer.data.get("first_name")
            last_name = serializer.data.get("last_name")
            email = serializer.data.get("email")
            class_code = serializer.data.get("class_code")
            password = serializer.data.get("password")
        data = Student()
        data.first_name = first_name
        data.last_name = last_name
        data.email = email
        data.class_code = class_code
        data.password = password
        data.save()
        return Response({"Success": "data saved"}, status=status.HTTP_200_OK)

class UserLogin(APIView):
    def post(self, request):
        curr_email = request.data.get("email", None)
        curr_password = request.data.get("password", None)
        
        student_obj = Student.objects.filter(email=curr_email, password=curr_password)
        teacher_obj = Teacher.objects.filter(email=curr_email, password=curr_password)
        
        if student_obj:
            return Response({"Success": "data saved"}, status=status.HTTP_200_OK)
        elif teacher_obj:
            return Response({"Success": "data saved"}, status=status.HTTP_200_OK)
        else:
            print("Wrong credentials!!")
            return Response({"Success": "data saved"}, status=status.HTTP_200_OK)
        
        # return Response({"Success": "data saved"}, status=status.HTTP_200_OK)
