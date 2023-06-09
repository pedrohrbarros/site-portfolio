from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('person.urls'))
]

admin.site.site_header = 'Site Portfolio'
admin.site.index_title = 'Site Portfolio Admin Home'
admin.site.site_title = 'Site Portfolio'