import os
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.twitter.views import TwitterOAuthAdapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.social_serializers import TwitterConnectSerializer
from dj_rest_auth.registration.views import SocialLoginView, SocialConnectView
from dotenv import load_dotenv

load_dotenv()
callback_uri: str = os.getenv("REDIRECT_URI")

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = callback_uri
    client_class = OAuth2Client
    
class FacebookConnect(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

class TwitterConnect(SocialLoginView):
    serializer_class = TwitterConnectSerializer
    adapter_class = TwitterOAuthAdapter