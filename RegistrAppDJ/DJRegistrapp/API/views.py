from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *


# Create your views here.
class UsuarioViewSet(generics.ListAPIView):
        queryset = Usuario.objects,all()
        serializers_class = UsuarioSerializer