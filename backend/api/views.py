from rest_framework.response import Response
from rest_framework.views import APIView
import api.models as my_models
import api.serializers as my_serializers
from rest_framework import generics, permissions
from django.http import JsonResponse
from rest_framework.authtoken import views
from .serializers import UserSerializer
from rest_framework.generics import ListAPIView
import datetime
from rest_framework.permissions import IsAuthenticated


# Create your views here.
class CoursePlanList(ListAPIView):
    queryset = my_models.CoursePlan.objects.all()
    serializer_class = my_serializers.CoursePlanSerializer
    # permission_classes = [permissions.IsAuthenticated]


def user_related(user):
    """ Return user plans and groups """
    return my_models.PlanUser.objects.get(user_id=user.id)


def plan_by_id(plan_id):
    """Returns course plan"""
    return my_models.CoursePlan.objects.get(pk=plan_id)


def user_plan_week_type(user, offset):
    """"
    Return week type for current week +- offset weeks for designated user
    Return True or False according to models.WEEKTYPE
    """
    try:
        user_objects = user_related(user)
    except my_models.PlanUser.DoesNotExist:
        return Response({'error': "Brak użytkownika"})

    try:
        plan = plan_by_id(user_objects.coursePlan_id)
    except my_models.CoursePlan.DoesNotExist:
        return Response({'error': "Użytkownik nie ma planu"})

    days_from_start = datetime.date.today() - plan.startAt
    even = not bool(((days_from_start.days // 7) + abs(offset)) % 2)
    return even


class UserPlanWeekType(APIView):
    def get(self, request, offset, format=None):
        current_user = request.user
        answer = user_plan_week_type(current_user, offset)
        answer = my_models.WEEKTYPE[answer][1]
        return Response({'weektype': answer})


class UserAPIView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user.data

class LogoutAPIView(views.ObtainAuthToken):
    def get(self, request):
        request.user.auth_token.delete()
        return Response({"Wylogowano pomyslnie"})
