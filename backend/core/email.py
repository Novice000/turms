from djoser.email import ActivationEmail

class CustomActivationEmail(ActivationEmail):
    template_name = "email/activation_email.html"
    def get_context_data(self):
        context = super().get_context_data()
        context["protocol"] = "http"
        context["domain"] = "localhost:8000"
        context["site_name"] = "Turms"
        return context
