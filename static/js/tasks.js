$(document).ready(function() {
    // Fetch tasks when the page is loaded
    fetchTasks();

    // Fetch tasks when the status filter is changed
    $('#status-filter').on('change', function() {
        fetchTasks();
    });

    // Create a new task when the form is submitted
    $('#taskForm').on('submit', function(event) {
        event.preventDefault();

        // Get values from the form
        const title = $('#title').val();
        const description = $('#description').val();
        const status = $('#status').val();

        // Prepare data to send in POST request
        const taskData = {
            title: title,
            description: description,
            status: status,
        };

        // Send a POST request to create a new task
        $.ajax({
            url: '/api/tasks/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(taskData),
            success: function(data) {
                // On success, clear the form and fetch updated tasks
                $('#taskForm')[0].reset();
                fetchTasks();  // Fetch the tasks again to show the updated list
            },
            error: function(xhr, status, error) {
                console.error('Error creating task:', error);
                alert('Error creating task.');
            }
        });
    });

    // Save changes when the edit form is submitted
    $('#editTaskForm').on('submit', function(event) {
        event.preventDefault();

        const taskId = $('#edit-task-id').val();
        const title = $('#edit-title').val();
        const description = $('#edit-description').val();
        const status = $('#edit-status').val();

        const taskData = {
            title: title,
            description: description,
            status: status,
        };

        // Send a PUT request to update the task
        $.ajax({
            url: `/api/tasks/${taskId}`,
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(taskData),
            success: function(data) {
                fetchTasks();  // Refresh task list after editing
                $('#editTaskForm').hide();  // Hide the edit form
                $('#taskForm').show();  // Show the create task form
                $('#edit-form-header').hide();  // Hide the edit header
            },
            error: function(xhr, status, error) {
                console.error('Error updating task:', error);
                alert('Error updating task.');
            }
        });
    });
});

// Function to fetch tasks from the API with filter
function fetchTasks() {
    const statusFilter = $('#status-filter').val();  // Get the selected status filter

    $.ajax({
        url: '/api/tasks/',
        type: 'GET',
        dataType: 'json',
        data: {
            status: statusFilter === 'all' ? '' : statusFilter  // Pass the selected status filter
        },
        success: function(data) {
            $('#task-list').empty();  // Clear the task list

            if (data.length === 0) {
                $('#task-list').append('<tr><td colspan="4" class="text-center">No tasks available.</td></tr>');
            } else {
                data.forEach(task => {
                    $('#task-list').append(`
                        <tr>
                            <td>${task.title}</td>
                            <td>${task.description || 'No description'}</td>
                            <td>${task.status}</td>
                            <td>
                                <button class="btn btn-warning btn-sm edit-btn" data-id="${task.id}">Edit</button>
                                <button class="btn btn-danger btn-sm delete-btn" data-id="${task.id}">Delete</button>
                            </td>
                        </tr>
                    `);
                });
            }
        },
        error: function(xhr, status, error) {
            console.error('Error fetching tasks:', error);
            alert('Error fetching tasks.');
        }
    });
}

// Edit task when the edit button is clicked
$(document).on('click', '.edit-btn', function() {
    const taskId = $(this).data('id');

    // Fetch the task data from the API
    $.ajax({
        url: `/api/tasks/${taskId}`,
        type: 'GET',
        success: function(data) {
            // Populate the edit form with the current task data
            $('#edit-title').val(data.title);
            $('#edit-description').val(data.description);
            $('#edit-status').val(data.status);
            $('#edit-task-id').val(data.id);  // Set the hidden task ID field

            // Hide the create form and show the edit form
            $('#taskForm').hide();
            $('#editTaskForm').show();
            $('#edit-form-header').show();
        },
        error: function(xhr, status, error) {
            console.error('Error fetching task data:', error);
            alert('Error fetching task data.');
        }
    });
});

// Delete task when the delete button is clicked
$(document).on('click', '.delete-btn', function() {
    const taskId = $(this).data('id');

    // Send a DELETE request to remove the task
    $.ajax({
        url: `/api/tasks/${taskId}`,
        type: 'DELETE',
        success: function(data) {
            alert('Task deleted successfully!');
            fetchTasks();  // Refresh task list after deleting
        },
        error: function(xhr, status, error) {
            console.error('Error deleting task:', error);
            alert('Error deleting task.');
        }
    });
});
