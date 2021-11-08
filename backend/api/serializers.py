from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('userID', 'login')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('userID', 'login', 'password')


    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['login'],
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