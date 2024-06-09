from rest_framework.routers import DefaultRouter
from django.urls import path, include

from VacancyPosts.views import PostsEditViewset, PostsViewset


router = DefaultRouter()
router.register("list", PostsViewset, basename="all-posts")
router.register("edit/add", PostsEditViewset, basename="add-post")
urlpatterns = [
    path("", include(router.urls)),
]
