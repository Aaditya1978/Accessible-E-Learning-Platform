from django.urls import path,include
from .views import TeacherSignUpView, StudentSignUpView, UserLogin
urlpatterns = [
    path('teacher_sign_up',TeacherSignUpView.as_view()),
    path('student_sign_up', StudentSignUpView.as_view()),
    path('user_login', UserLogin.as_view()),
]
