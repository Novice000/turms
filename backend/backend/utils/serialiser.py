from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers
from django.conf import settings
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email

from dj_rest_auth.registration.serializers import RegisterSerializer


class CustomRegisterSerializer(RegisterSerializer):
    reg_no = serializers.CharField(max_length=10)
    department = serializers.CharField(required=True, max_length=5)
    university = serializers.CharField(required=True, max_length=100)

    def get_cleaned_data(self):
        data_dict = super().get_cleaned_data()
        data_dict['roles'] = self.validated_data.get('roles', '')
        data_dict['first_name'] = self.validated_data.get('first_name', '')
        data_dict['last_name'] = self.validated_data.get('last_name', '')
        return data_dict


class CustomUserDetailsSerializer(UserDetailsSerializer):

    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + \
            ('role', 'first_name', 'last_name')