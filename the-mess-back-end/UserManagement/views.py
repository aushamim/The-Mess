from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView

from UserManagement.models import User
from UserManagement.serializers import (
    ChangePasswordSerializer,
    LoginSerilizer,
    RegistrationSerilizer,
    UserBasicEditSerializer,
    UserSerializer,
)
from VacancyPosts import serializers


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
    authentication_classes = [TokenAuthentication]

    def post(self, request):
        request.user.auth_token.delete()
        logout(request)
        return Response({"success": "Logged Out"})


class UserBasicEditViewset(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]

    queryset = User.objects.all()
    serializer_class = UserBasicEditSerializer


class UserChangePassword(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def post(self, request):
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            user = request.user

            if not user.check_password(serializer.data.get("old_password")):
                return Response({"error": "Wrong password"})

            if serializer.data.get("old_password") == serializer.data.get(
                "new_password"
            ):
                return Response({"error": "New password is the same as old password"})

            if serializer.data.get("new_password") != serializer.data.get(
                "confirm_password"
            ):
                return Response({"error": "Password didn't match"})

            user.set_password(serializer.data.get("new_password"))
            user.save()

            return Response({"success": "Password changed successfully."})
        return Response(serializer.errors)
