from djoser.email import ActivationEmail
from djoser.email import PasswordResetEmail
from djoser.email import UsernameResetEmail

class CustomActivationEmail(ActivationEmail):
    template_name = "emails/activation_email.html"
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["protocol"] = "http"
        context["domain"] = "localhost:8000"
        context["site_name"] = "Turms"
        return context
