from django.contrib.auth import authenticate
from rest_framework import serializers
import api.models as myModels


class CoursePlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = myModels.CoursePlan
        fields = [
            'faculty',
            'studiesMode',
            'course',
            'term'
        ]



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = myModels.PlanUser
        fields = ('id', 'username')

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Niepoprawne dane logowania")