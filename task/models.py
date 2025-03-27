from django.db import models
from django.conf import settings

# Create your models here.


class Task(models.Model):

    STATUS_CHOICES = [
        ("waiting", "Waiting"),
        ("completed", "Completed"),
    ]

    title = models.CharField(max_length=150)
    description = models.TextField(null=True, blank=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default="waiting")
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name="tasks", on_delete=models.CASCADE
    )

    def __str__(self):
        return f"id: {self.id} - {self.user.username} - {self.title}"
