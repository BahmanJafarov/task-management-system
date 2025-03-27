from django.urls import path
from core.views import register_view, login_view, task_view_create, home

urlpatterns = [
    path("", home, name="home"),
    path("register/", register_view, name="register"),
    path("login/", login_view, name="login"),
    path("tasks/", task_view_create, name="task-view-create"),
]
