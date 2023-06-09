from django.contrib import admin
from .models import Person, Work, Role, Project

class PersonAdmin (admin.ModelAdmin):
  list_display = ('name', 'email', 'dev_role')
  
class ProjectAdmin (admin.ModelAdmin):
  list_display = ('name', 'frontendTool', 'backendTool', 'database', 'person')
  
class WorkAdmin (admin.ModelAdmin):
  list_display = ('workplace', 'person')
  
class RoleAdmin (admin.ModelAdmin):
  list_display = ('name', 'timeInMonths', 'work')
  
admin.site.register(Person, PersonAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Work, WorkAdmin)
admin.site.register(Role, RoleAdmin)