# Task Management System

A web-based task management system built using [Django](https://www.djangoproject.com/) and [Bootstrap](https://getbootstrap.com/). This system allows users to create, edit, and manage tasks efficiently.

## Features

- User authentication (login, registration)
- Task creation, editing, and deletion
- Task viewing with details
- Responsive design for mobile and desktop views

## Technologies Used

- **Backend**: Django, Python
- **Frontend**: Bootstrap
- **Database**: SQLite (or specify your database)
- **Others**: jQuery (if used), etc.

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
