from django.db import models

from UserManagement.models import User


# Create your models here.
class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=10)
    count = models.IntegerField()
    location = models.CharField(max_length=200)
    full_address = models.CharField(max_length=200)
    map = models.URLField(max_length=500)
    extra = models.CharField(max_length=200)
    rent = models.CharField(max_length=20)
    contact = models.CharField(max_length=100)
    images = models.JSONField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"Vacancy post by {self.user.username}"
