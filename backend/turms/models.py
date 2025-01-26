from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class UserAccount(AbstractUser):
    choice = [("driver", "DRIVER"),("requester", "REQUESTER")]
    
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    role = models.CharField(max_length=255, choices=choice)
    
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name", "username", "password"]
    def get_fullname(self):
        return f"{self.first_name} {self.last_name}"