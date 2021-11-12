from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    path('', views.CoursePlanList.as_view()),
    path('user', views.UserAPIView.as_view()),
    path('login', views.LoginAPIView.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)
