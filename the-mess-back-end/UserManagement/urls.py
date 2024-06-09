from rest_framework.routers import DefaultRouter
from django.urls import path, include

from UserManagement.views import (
    UserLoginViewset,
    UserLogoutView,
    UserRegistrationViewset,
    UserViewset,
)

router = DefaultRouter()
router.register("list", UserViewset, basename="all-users")
router.register("register", UserRegistrationViewset, basename="register-user")
router.register("login", UserLoginViewset, basename="login-user")
urlpatterns = [
    path("", include(router.urls)),
    path("logout/", UserLogoutView.as_view(), name="logout"),
]