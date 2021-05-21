"""PixelVibe URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from home import views
urlpatterns = [
    path('',views.home , name='home' ),
    path('paint/',views.paint , name='paint' ),
    path('signup/',views.handleSignUp , name='handleSignUp' ),
    path('login/',views.Handlelogin , name='login' ),
    path('login2/',views.login2 , name='login2' ),
    path('loginpage/',views.loginpage , name='loginpage' ),
    path('logout/',views.logout , name='logout' ),
    path('contact/',views.contact , name='contact' ),
    
]
