from django.urls import path,include
from .views import RoomView
urlpatterns = [
    path('',RoomView.as_view()),
]
