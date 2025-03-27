from django.shortcuts import render


def register_view(request):
    return render(request, "register.html")


def login_view(request):
    return render(request, "login.html")


def task_view_create(request):
    return render(request, "task-view-create.html")


def home(request):
    return render(request, "index.html")
