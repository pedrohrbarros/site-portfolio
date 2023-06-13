from .models import Person, Work
from .serializer import PersonSerializer, WorkSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class PersonView(APIView):
  def get(self, request, format='json'):
    persons = Person.objects.all()
    serializer = PersonSerializer(persons, many = True)
    return Response(serializer.data)