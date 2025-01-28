from random import choice, choices
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.forms import CharField, EmailField

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("User must have an email address")
        if not extra_fields.get("username"):
            raise ValueError("User must have a username")
        if not extra_fields.get("first_name"):
            raise ValueError("User must have a firstname")
        if not extra_fields.get("last_name"):
            raise ValueError("User must have a lastname")
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        user = self.create_user(email, password, **extra_fields)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    choices: list[tuple[str, str]] = [("requester", "requester"), ("responder", "responder")]
    
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    username = models.CharField(max_length=255, unique= True)
    role =  models.CharField(max_length=50, choices=choices)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    
    objects = UserManager()
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name", "username", "role"]
    
    def __str__(self):
        return self.email
    
    def get_fullname(self):
        return f"{self.first_name} {self.last_name}"
    