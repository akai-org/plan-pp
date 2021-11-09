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
