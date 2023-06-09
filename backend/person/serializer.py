from rest_framework import serializers
from .models import Person, Role, Project, Work

class PersonSerializer(serializers.ModelSerializer):
  class Meta:
    model = Person
    
class RoleSerializer(serializers.ModelSerializer):
  class Meta:
    model = Role

class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project

class WorkSerializer(serializers.ModelSerializer):
  class Meta:
    model = Work