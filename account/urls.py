from django.urls import path
from account.views import login_user, register_user


urlpatterns = [
    path("register/", register_user, name="register_user"),
    path("login/", login_user, name="login_user"),
]
