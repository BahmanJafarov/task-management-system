from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from task.models import Task
from task.serializers import TaskSerializer

# Create your views here.


@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def task_list_create(request):

    if request.method == "GET":
        status = request.GET.get("status", None)
        if status:
            tasks = Task.objects.filter(user=request.user, status=status)
        else:
            tasks = Task.objects.filter(user=request.user)

        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
@permission_classes([IsAuthenticated])
def task_detail(request, pk):

    task = Task.objects.filter(id=pk, user=request.user).first()
    if not task:
        return Response(
            {"message": "Task not found."}, status=status.HTTP_404_NOT_FOUND
        )

    if request.method == "GET":
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    elif request.method == "DELETE":
        task.delete()
        return Response(
            {"message": "Task deleted succesfully."}, status=status.HTTP_204_NO_CONTENT
        )

    elif request.method == "PUT":
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
