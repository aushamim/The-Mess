from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView

from UserManagement.models import User
from UserManagement.serializers import (
    LoginSerilizer,
    RegistrationSerilizer,
    UserSerializer,
)


# Create your views here.
class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserRegistrationViewset(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = User.objects.none()
    serializer_class = RegistrationSerilizer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token, _ = Token.objects.get_or_create(user=user)
        login(request, user)
        return Response({"token": token.key, "user_id": user.id})


class UserLoginViewset(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = User.objects.none()
    serializer_class = LoginSerilizer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.validated_data["username"]
        password = serializer.validated_data["password"]
        user = authenticate(username=username, password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            login(request, user)
            return Response({"token": token.key, "user_id": user.id})
        else:
            return Response({"error": "Invalid Username or Password"})


class UserLogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        logout(request)
        return Response({"success": "Logged Out"})
