from django.db import models

# Create your models here.

class Person(models.Model):
  DEV_ROLES = [
    ("Fullstack", "Fullstack"),
    ("Front-end", "Front-end"),
    ("Back-end", "Back-end"),
  ]
  id = models.AutoField(primary_key = True)
  name = models.CharField(max_length = 255 ,blank = False, null = False, verbose_name = "Name")
  email = models.EmailField(blank = False, null = False, verbose_name = "E-mail adress")
  dev_role = models.CharField(max_length = 9, choices = DEV_ROLES, verbose_name = "Developer Role")
  github = models.URLField(verbose_name = "Github profile", blank = False, null = False)
  whatsapp = models.CharField(max_length = 15, blank = False, null = False, verbose_name = "Whatsapp number with area code")
  linkedin = models.URLField(verbose_name = "LinkedIn profile", blank = False, null = False)
  
  def __str__(self):
    return self.name

class Project(models.Model):
  id = models.AutoField(primary_key = True)
  name = models.CharField(max_length = 255, blank = False, null = False, verbose_name = "Name")
  description = models.TextField(blank = False, null = False, verbose_name = "Description")
  url = models.URLField(blank = False, null = False, verbose_name = "URL")
  repository = models.URLField(blank = False, null = False, verbose_name = "Github/Bitbucket Repository")
  frontendTool = models.CharField(max_length = 255, blank = False, null = False, verbose_name = "Front end tool used")
  backendTool = models.CharField(max_length = 255, blank = False, null = False, verbose_name = "Back end tool used")
  database = models.CharField(max_length = 255, blank = False, null = False, verbose_name = "Database used")
  person = models.ForeignKey(Person, on_delete = models.CASCADE, verbose_name = "Author", blank = False, null = False, related_name = "projects")
  
  def __str__(self):
    return self.name

class Work(models.Model):
  id = models.AutoField(primary_key = True)
  workplace = models.CharField(verbose_name = "Workplace", blank = False, null = False)
  person = models.ForeignKey(Person, on_delete = models.CASCADE, verbose_name = "Employee", blank = False, null = False, related_name = "works")
  
  def __str__(self):
    return self.workplace

class Role(models.Model):
  id = models.AutoField(primary_key = True)
  name = models.CharField(max_length = 255, blank = False, null = False, verbose_name = "Name")
  timeInMonths = models.IntegerField(verbose_name = "Time spent in months", blank = False, null = False)
  description = models.TextField(verbose_name = "Description", blank = False, null = False)
  work = models.ForeignKey(Work, on_delete = models.CASCADE, verbose_name = "Workplace", blank = False, null = False, related_name = "roles")
  
  def __str__(self):
    return self.name