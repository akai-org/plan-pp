from django.urls import path

from .views import UserAPIView, LoginAPIView

urlpatterns = [
    path('user', UserAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
]