from django.urls import path, include

from .views import UserAPIView, RegisterAPIView, LoginAPIView

urlpatterns = [
    path('user', UserAPIView.as_view()),
    path('register', RegisterAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
]