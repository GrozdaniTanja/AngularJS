# Employee Management App

A simple employee management web application built with **AngularJS**, designed to manage a list of employees, display their details in a modal popup, and allow deletion of employees with a confirmation dialog.

## Features

- **Employee List:** Displays a table of employees fetched from a REST API.
- **Employee Details Modal:** Shows employee details in a reusable modal component with `<ng-transclude>`.
- **Delete Confirmation:** Deletes an employee after confirming via an alert-style confirmation modal.
- **Reusable Components:** Modular components (`userDetail`, `confirmationModal`) to ensure reusability and clean code.
- **Custom Directive:** Includes a `onLongPress` directive for extending functionality.

## Tech Stack

- **Frontend Framework:** AngularJS 1.8.2
- **Styling:** Bootstrap 4.5.2
- **Backend (API):** Placeholder REST API for employee data (e.g., [JSONPlaceholder](https://jsonplaceholder.typicode.com/)).

## How to Run the Application

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/GrozdaniTanja/AngularJS.git
   cd AngularJS

2. **Open the Project: Open the project in your favorite code editor.**

3. **Set Up the Environment Configuration:**

    Create a file named environment.js in the environments/ directory.
    Inside the environment.js file, define the API URL for your application:

    ```bash
    const environment = {
        production: false, 
        apiUrl: 'https://jsonplaceholder.typicode.com/users'
    };


4. **Run a Local Server:**
    Since AngularJS apps often require a web server, you can use a lightweight server like http-server:

    # Install http-server globally if not already installed
    npm install -g http-server

    # Run the server in the project directory
    http-server

5. **Access the App:**
    The app will be accessible at http://localhost:8080 (default port).

