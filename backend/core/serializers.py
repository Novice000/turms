from pyexpat import model
from djoser.serializers import UserCreateSerializer
from djoser.serializers import UserSerializer
from djoser.serializers import UserDetailsSerializer
from django.contrib.auth import get_user_model


class CustomUserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = get_user_model()
        fields = ["email", "password", "first_name", "last_name", "role"]