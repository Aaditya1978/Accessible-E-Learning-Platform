from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics

# Create your views here.
class RoomView(generics.CreateAPIView):
    def post(self, request):
        return HttpResponse("Hello, world. You're at the polls index.")