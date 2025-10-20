from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello_world, name='hello_world'),
    path('hello/<str:name>/', views.hello_name, name='hello_name'),
    path('template/', views.hello_template, name='hello_template'),
    path('singlepage/', views.singlepage, name='singlepage'),
]