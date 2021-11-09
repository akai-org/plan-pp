from rest_framework.views import APIView
import api.models as myModels
import api.serializers as mySerializers
from rest_framework.response import Response

# Create your views here.
class CoursePlanList(APIView):
    def get(self, request, format=None):
        plans = myModels.CoursePlan.objects.all()
        serializer = mySerializers.CoursePlanSerializer(plans, many=True)
        return Response(serializer.data)
