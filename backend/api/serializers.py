from django.contrib.auth import authenticate
from rest_framework import serializers
import api.models as myModels

from django.contrib.auth.models import User


class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = myModels.Slot
        exclude = ['slotID']


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = myModels.Subject
        exclude = ['subjectID']


class LessonSerializer(serializers.ModelSerializer):
    subject = SubjectSerializer(read_only=True)
    slot = SlotSerializer(read_only=True)

    class Meta:
        model = myModels.Lesson
        fields = ['classroom', 'lessonType', 'subject', 'slot']


class OtherActivitySerialzier(serializers.ModelSerializer):
    slotSer = SlotSerializer(read_only=True)

    class Meta:
        model = myModels.OtherActivity
        fields = ['title', 'slotSer']


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
        fields = ['id']


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Niepoprawne dane logowania")
