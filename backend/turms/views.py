from rest_framework.views import APIView

# Create your views here.
class Test(APIView):
    def get(self, request):
        return "Hello world"  