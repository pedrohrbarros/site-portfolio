from rest_framework import serializers
from .models import Person, Role, Project, Work

class RoleSerializer(serializers.ModelSerializer):
  class Meta:
    model = Role
    fields = ['name', 'timeInMonths', 'description']

class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = ['name', 'description', 'url', 'repository', 'frontendTool', 'backendTool', 'database']

class WorkSerializer(serializers.ModelSerializer):
  roles = RoleSerializer(many = True, read_only = True)
  
  class Meta:
    model = Work
    fields = ['workplace', 'roles']
    depth = 1
    
class PersonSerializer(serializers.ModelSerializer):
  works = WorkSerializer(many = True, read_only = True)
  projects = ProjectSerializer(many = True, read_only = True)
  
  class Meta:
    model = Person
    fields = ['name', 'email', 'dev_role', 'github', 'whatsapp', 'linkedin', 'works', 'projects']
    depth = 1