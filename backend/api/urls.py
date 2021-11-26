from django.urls import path, register_converter
from rest_framework.urlpatterns import format_suffix_patterns
from api import views


class NegativeIntConverter:
    regex = '-?\d+'

    def to_python(self, value):
        return int(value)

    def to_url(self, value):
        return '%d' % value


register_converter(NegativeIntConverter, 'negint')

urlpatterns = [
    path('courseList', views.CoursePlanList.as_view()),
    path('user', views.UserAPIView.as_view()),
    path('login', views.LoginAPIView.as_view()),

    path('weekType/<negint:offset>', views.UserPlanWeekType.as_view())
]
urlpatterns = format_suffix_patterns(urlpatterns)
