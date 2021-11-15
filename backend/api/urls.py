from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    path('', views.CoursePlanList.as_view()),
    path('user', views.UserAPIView.as_view()),
    path('login', views.LoginAPIView.as_view()),
    # offset is string, because it can has negative value, which does not wok in django, so it is casted in view
    path('weekType/<str:offset>', views.UserPlanWeekType.as_view())
]
urlpatterns = format_suffix_patterns(urlpatterns)
