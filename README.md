# Task Management System

## Overview
This is a Django-based Task Management API that provides endpoints for user authentication and task management. The API allows users to register, login, and perform CRUD (Create, Read, Update, Delete) operations on tasks.

## Features

- User authentication (login, registration)
- Task creation, editing, and deletion
- Task viewing with details

## Technologies Used

- **Backend**: Django, Python, Django REST Framework
- **Frontend**: HTML, Bootstrap, jQuery/AJAX
- **Database**: SQLite

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/BahmanJafarov/task-management-system.git
    ```

2. Navigate to the project directory:
    ```bash
    cd task-management-system
    ```

3. Create a virtual environment (optional but recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

4. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

5. Apply database migrations:
    ```bash
    python manage.py migrate
    ```

6. Create a superuser for accessing the admin panel:
    ```bash
    python manage.py createsuperuser
    ```

7. Run the development server:
    ```bash
    python manage.py runserver
    ```

8. Open the project in your browser:
    ```
    http://127.0.0.1:8000/
    ```

## Usage

- **Login/Registration**: Access the login page to register or log in.
- **Create a Task**: After logging in, navigate to the task creation page and start managing your tasks.
- **View Tasks**: You can view, edit, and delete your tasks from the task management dashboard.

## Features
- User Registration
- User Authentication
- Create Tasks
- List Tasks
- Read Individual Task
- Update Tasks
- Delete Tasks

## Endpoints

### Authentication
- `POST /login/`: User login
- `POST /register/`: User registration

### Tasks
- `GET /tasks/`: List all tasks
- `POST /tasks/`: Create a new task
- `GET /tasks/{id}/`: Retrieve a specific task
- `PUT /tasks/{id}/`: Update a specific task
- `DELETE /tasks/{id}/`: Delete a specific task

## Prerequisites
- Python 3.12+
- Django
- Django Rest Framework
