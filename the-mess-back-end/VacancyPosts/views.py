from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from VacancyPosts.models import Post
from VacancyPosts.serializers import PostEditSerializer, PostSerializer


# Create your views here.
class PostsViewset(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostsEditViewset(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]

    queryset = Post.objects.all()
    serializer_class = PostEditSerializer
