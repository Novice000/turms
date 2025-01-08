from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class UserAccount(AbstractUser):
    choice = [("driver", "DRIVER"),("requester", "REQUESTER")]
    email = models.EmailField(max_length=255)
    first_name = models.CharField(max_length=255)
    