from django.contrib import admin
from django.conf import settings
from django.urls import include, path
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("user/", include("UserManagement.urls")),
    path("posts/", include("VacancyPosts.urls")),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
