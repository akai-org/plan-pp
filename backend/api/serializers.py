from django.contrib.auth import authenticate
from api.models import PlanUser
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanUser
        fields = ('id', 'username')

class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(read_only=True, source="user.username")
    password = serializers.CharField(read_only=True, source="user.password")
    class Meta:
        model = PlanUser
        fields = ('id', 'username', 'password')
    
    def create(self, validated_data):
        user = PlanUser.objects.create_user(
            validated_data['username'],
            validated_data['password']
        )
        return user


class LoginSerializer(serializers.Serializer):
    login = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Niepoprawne dane logowania")