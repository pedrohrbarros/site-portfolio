from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.views.static import serve
from django.conf.urls.static import static
from django.conf import settings
import re
from django.urls import re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('person.urls')),
    re_path(r'^%s(?P<path>.*)$' % re.escape(settings.STATIC_URL.lstrip('/')), serve, {"document_root": settings.STATIC_ROOT}),
]

url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT})
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)
admin.site.site_header = 'Site Portfolio'
admin.site.index_title = 'Site Portfolio Admin Home'
admin.site.site_title = 'Site Portfolio'