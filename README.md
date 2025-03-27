# Task Management System

A web-based task management system built using [Django](https://www.djangoproject.com/) and [Bootstrap](https://getbootstrap.com/). This system allows users to create, edit, and manage tasks efficiently.

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

## Contributing

If you'd like to contribute to this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Django](https://www.djangoproject.com/) - The web framework used for the backend
- [Bootstrap](https://getbootstrap.com/) - Frontend framework for responsive design
- [SQLite](https://www.sqlite.org/) - Database used for this project (you can modify this section if using a different database)

# Task Management API

## Overview
This is a Django-based Task Management API that provides endpoints for user authentication and task management. The API allows users to register, login, and perform CRUD (Create, Read, Update, Delete) operations on tasks.

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

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/task-management-api.git
cd task-management-api
```

2. **Create a virtual environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Run database migrations**
```bash
python manage.py migrate
```

5. **Start the development server**
```bash
python manage.py runserver
```

## Authentication
The API uses token-based authentication. Include the authentication token in the request headers after logging in.

## Example Requests

### Login
```bash
curl -X POST http://localhost:8000/login/ \
     -H "Content-Type: application/json" \
     -d '{"username":"youruser", "password":"yourpassword"}'
```

### Create Task
```bash
curl -X POST http://localhost:8000/tasks/ \
     -H "Authorization: Token your-auth-token" \
     -H "Content-Type: application/json" \
     -d '{"title":"New Task", "description":"Task description"}'
```

## Error Handling
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Server Error

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Your Name - your.email@example.com

**Project Link**: [https://github.com/yourusername/task-management-api](https://github.com/yourusername/task-management-api)
