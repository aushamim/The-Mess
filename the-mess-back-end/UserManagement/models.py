from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    phone_no = models.CharField(max_length=12, blank=True, null=True)
    address = models.CharField(max_length=200, blank=True, null=True)
    role = models.CharField(max_length=10, default="user")
    tier = models.CharField(max_length=10, default="free")
    max_groups = models.IntegerField(default=1)
    max_posts = models.IntegerField(default=1)
