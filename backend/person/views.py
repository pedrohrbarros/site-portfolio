from .models import Person, Role, Project, Work
from .serializer import PersonSerializer, RoleSerializer, ProjectSerializer, WorkSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class PersonView(APIView):
  def get(self, request, format='json'):
    persons = [person for person in Person.objects.all()]
    serializer = PersonSerializer(persons)
    return Response(serializer.data)

class ProjectView(APIView):
  def get(self, request, format='json'):
    projects = [project for project in Project.objects.all()]
    serializer = ProjectSerializer(projects)
    return Response(serializer.data)

class RoleView(APIView):
  def get(self, request, format='json'):
    roles = [role for role in Role.objects.all()]
    serializer = RoleSerializer(roles)
    return Response(serializer.data)

class WorkView(APIView):
  def get(self, request, format='json'):
    works = [work for work in Work.objects.all()]
    serializer = WorkSerializer(works)
    return Response(serializer.data)