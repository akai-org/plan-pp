from django.contrib.auth import authenticate
from rest_framework import serializers
import api.models as my_models


class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = my_models.Slot
        exclude = ['slotID']


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = my_models.Subject
        exclude = ['subjectID']


class LessonSerializer(serializers.ModelSerializer):
    subject = SubjectSerializer(read_only=True)
    slot = SlotSerializer(read_only=True)

    class Meta:
        model = my_models.Lesson
        fields = ['classroom', 'lessonType', 'subject', 'slot']


class OtherActivitySerialzier(serializers.ModelSerializer):
    slotSer = SlotSerializer(read_only=True)

    class Meta:
        model = my_models.OtherActivity
        fields = ['title', 'slotSer']


class CoursePlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = my_models.CoursePlan
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
        model = my_models.PlanUser
        fields = ['id']


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Niepoprawne dane logowania")
