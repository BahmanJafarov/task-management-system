from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from account.serializers import UserLoginSerializer, UserRegisterSerializer
from drf_yasg.utils import swagger_auto_schema


# Create your views here.


@swagger_auto_schema(
    method="post",
    request_body=UserRegisterSerializer,
    responses={201: "User created successfully", 400: "Bad Request"},
)
@api_view(["POST"])
def register_user(request):

    if request.method == "POST":
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User registered succesfully!"},
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(
    method="post",
    request_body=UserLoginSerializer,
    responses={200: "Login successful", 400: "Invalid credentials"},
)
@api_view(["POST"])
def login_user(request):

    if request.method == "POST":
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data["username"]
            password = serializer.validated_data["password"]
            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                return Response(
                    {"message": "Login succesfull!"}, status=status.HTTP_200_OK
                )
            return Response(
                {"message": "Invalid credentials!"}, status=status.HTTP_400_BAD_REQUEST
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
