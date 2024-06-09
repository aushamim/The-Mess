from rest_framework import serializers

from UserManagement.models import User
from VacancyPosts.models import Post


class PostUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "phone_no",
            "address",
        ]


class PostSerializer(serializers.ModelSerializer):
    user = PostUserSerializer()

    class Meta:
        model = Post
        fields = "__all__"


class PostEditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"
