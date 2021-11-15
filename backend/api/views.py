from rest_framework.views import APIView
import api.models as myModels
import api.serializers as mySerializers
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer, LoginSerializer
import datetime


# Create your views here.
class CoursePlanList(APIView):
    def get(self, request, format=None):
        plans = myModels.CoursePlan.objects.all()
        serializer = mySerializers.CoursePlanSerializer(plans, many=True)
        return Response(serializer.data)


"""
Return user plans and groups
"""
def userRelated(user):
    try:
        userRelatedObjects = myModels.PlanUser.objects.get(user_id=user.id)
    except myModels.PlanUser.DoesNotExist:
        raise myModels.PlanUser.DoesNotExist
    return userRelatedObjects


"""Returns course plan"""
def planByID(planID):
    try:
        plan = myModels.CoursePlan.objects.get(pk=planID)
    except myModels.CoursePlan.DoesNotExist:
        return myModels.CoursePlan.DoesNotExist
    return plan


""""
Return week type for current week +- offset weeks for designated user
Return True or False according to models.WEEKTYPE
"""
def userPlanWeekType(user, offset):
    try:
        userObjects = userRelated(user)
    except myModels.PlanUser.DoesNotExist:
        raise myModels.PlanUser.DoesNotExist
    try:
        # plan = myModels.CoursePlan.objects.get(pk=plan.coursePlan_id)
        plan = planByID(userObjects.coursePlan_id)
    except myModels.CoursePlan.DoesNotExist:
        return myModels.CoursePlan.DoesNotExist
    daysFromStart = datetime.date.today() - plan.startAt
    weeks = daysFromStart.days // 7
    weeks += abs(offset)
    even = False
    if weeks % 2 == 0:
        even = True
    return even


class UserPlanWeekType(APIView):
    def get(self, request, offset, format=None):
        currentUser = request.user
        offset = int(offset)
        try:
            answer = userPlanWeekType(currentUser, offset)
        except myModels.CoursePlan.DoesNotExist:
            return Response({'error': "Użytkownik nie ma planu"})
        except myModels.PlanUser.DoesNotExist:
            return Response({'error': "Brak użytkownika"})
        answer = myModels.WEEKTYPE[answer][1]
        return Response({'weektype': answer})


class UserAPIView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get_or_create(user=user)[0].key
        })
