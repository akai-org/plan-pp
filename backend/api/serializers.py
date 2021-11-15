from django.contrib.auth import authenticate
from rest_framework import serializers
import api.models as myModels

from django.contrib.auth.models import User


class CoursePlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = myModels.CoursePlan
        fields = [
            'faculty',
            'studiesMode',
            'course',
            'term'
        ]


class UserPlanWeekTypeSerializer(serializers.Serializer):
    weektype = serializers.CharField()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = myModels.PlanUser
        fields = ('id', 'username')
        # fields = ('__all__')   # blad

    # class Meta:
    #     model = User
    #     fields = ('__all__')


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Niepoprawne dane logowania")
