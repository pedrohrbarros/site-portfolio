from .models import Person, Role, Project, Work
from .serializer import PersonSerializer, RoleSerializer, ProjectSerializer, WorkSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class PersonView(APIView):
  def get(self, request, format='json'):
    persons = [person for person in Person.objects.all()]
    return Response(persons)

class ProjectView(APIView):
  def get(self, request, format='json'):
    projects = [project for project in Project.objects.all()]
    return Response(project)

class RoleView(APIView):
  def get(self, request, format='json'):
    roles = [role for role in Role.objects.all()]
    return Response(roles)

class WorkView(APIView):
  def get(self, request, format='json'):
    works = [work for work in Work.objects.all()]
    return Response(works)