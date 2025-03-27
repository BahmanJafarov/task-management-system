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


API Documentation
The Task Management System API provides endpoints for user authentication, task management, and more.

Base URL
arduino
Copy
Edit
http://127.0.0.1:8000/api
Authentication
This API uses Basic Authentication.

Login
Endpoint: /login/

Method: POST

Description: Logs in a user.

Request Body:

json
Copy
Edit
{
  "username": "string",
  "password": "string"
}
Responses:

200 OK: Login successful

400 Bad Request: Invalid credentials

Register
Endpoint: /register/

Method: POST

Description: Registers a new user.

Request Body:

json
Copy
Edit
{
  "username": "string",
  "email": "string",
  "first_name": "string (optional)",
  "last_name": "string (optional)",
  "password": "string"
}
Responses:

201 Created: User created successfully

400 Bad Request: Invalid input

Task Management
Get All Tasks
Endpoint: /tasks/

Method: GET

Description: Retrieves a list of all tasks.

Responses:

200 OK: A list of tasks

Create Task
Endpoint: /tasks/

Method: POST

Description: Creates a new task.

Request Body:

json
Copy
Edit
{
  "title": "string",
  "description": "string (optional)",
  "due_date": "string (optional)"
}
Responses:

201 Created: Task created successfully

Get Task by ID
Endpoint: /tasks/{id}/

Method: GET

Description: Retrieves details of a specific task by ID.

Responses:

200 OK: Task details

Update Task
Endpoint: /tasks/{id}/

Method: PUT

Description: Updates a task by ID.

Request Body:

json
Copy
Edit
{
  "title": "string",
  "description": "string (optional)",
  "due_date": "string (optional)"
}
Responses:

200 OK: Task updated successfully

Delete Task
Endpoint: /tasks/{id}/

Method: DELETE

Description: Deletes a task by ID.

Responses:

204 No Content: Task deleted successfully

Definitions
UserLogin
Properties:

username (string, required): The user's username

password (string, required): The user's password

UserRegister
Properties:

username (string, required): The user's username

email (string, required): The user's email address

first_name (string, optional): The user's first name

last_name (string, optional): The user's last name

password (string, required): The user's password
