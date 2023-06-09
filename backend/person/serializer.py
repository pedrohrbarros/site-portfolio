from rest_framework import serializers
from .models import Person, Role, Project, Work

class PersonSerializer(serializers.ModelSerializer):
  