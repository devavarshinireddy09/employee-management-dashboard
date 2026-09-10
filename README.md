[Certain] Use this as your **single final `README.md`**, and remove all default Vite template text above it.

````markdown
# Employee Management Dashboard

## Project Overview

The Employee Management Dashboard is a full-stack CRUD web application developed using React.js, Node.js, Express.js, and MySQL.

The application allows users to manage employee records using Create, Read, Update, and Delete operations.

It also provides dashboard statistics, search functionality, department filtering, status filtering, form validation, loading indicators, success/error messages, and responsive UI design.

---

## Technologies Used

### Frontend
- React.js
- Vite
- Axios
- JavaScript
- HTML
- CSS

### Backend
- Node.js
- Express.js
- MySQL2
- CORS
- dotenv

### Database
- MySQL

### Development Tools
- Visual Studio Code
- MySQL Workbench
- Git
- GitHub
- Browser / Postman for API Testing

---

## Features

- Add a new employee
- View all employees
- Edit employee details
- Delete employee records
- Delete confirmation before removing an employee
- Search employees by name or email
- Filter employees by department
- Filter employees by status
- Display total employee count
- Display active employee count
- Display inactive employee count
- Display department-wise employee count
- Required field validation
- Email validation
- Salary validation
- Success messages
- Error messages
- Loading indicator
- Responsive dashboard design
- REST API integration
- Persistent data storage using MySQL

---

## Employee Fields

Each employee contains the following details:

- Employee ID
- First Name
- Last Name
- Email
- Phone Number
- Department
- Designation
- Salary
- Date of Joining
- Status

---

## Project Architecture

```text
React.js Frontend
        |
        | Axios / REST API
        v
Node.js + Express.js Backend
        |
        | MySQL2
        v
MySQL Database
````

### Application Flow

```text
User performs an action
        ↓
React Component
        ↓
Axios HTTP Request
        ↓
Express REST API
        ↓
Employee Controller
        ↓
SQL Query
        ↓
MySQL Database
        ↓
JSON Response
        ↓
React updates the UI
```

---

## Project Structure

```text
Employee-dashboard-project/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── employeeController.js
│   │
│   ├── routes/
│   │   └── employeeRoutes.js
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── database/
│   └── employee_management.sql
│
├── screenshots/
│   ├── dashboard.png
│   ├── add-employee.png
│   ├── edit-employee.png
│   ├── search-filter.png
│   └── delete-confirmation.png
│
├── public/
│
├── src/
│   ├── api/
│   │   └── employeeApi.js
│   │
│   ├── components/
│   │   ├── EmployeeForm.jsx
│   │   ├── EmployeeTable.jsx
│   │   ├── Filters.jsx
│   │   └── SummaryCards.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Prerequisites

Before running the project, install:

* Node.js
* npm
* MySQL Server
* MySQL Workbench
* Git

---

## Database Setup

1. Open MySQL Workbench.
2. Connect to your local MySQL Server.
3. Open the following file:

```text
database/employee_management.sql
```

4. Execute the SQL script.

The script creates:

```text
Database: employee_management
Table: employees
```

It also inserts sample employee records.

---

## Database Structure

### Database Name

```text
employee_management
```

### Table Name

```text
employees
```

| Column          | Data Type     | Description                    |
| --------------- | ------------- | ------------------------------ |
| employee_id     | INT           | Primary key and auto increment |
| first_name      | VARCHAR(100)  | Employee first name            |
| last_name       | VARCHAR(100)  | Employee last name             |
| email           | VARCHAR(150)  | Unique employee email          |
| phone_number    | VARCHAR(20)   | Employee phone number          |
| department      | VARCHAR(100)  | Employee department            |
| designation     | VARCHAR(100)  | Employee designation           |
| salary          | DECIMAL(12,2) | Employee salary                |
| date_of_joining | DATE          | Employee joining date          |
| status          | ENUM          | Active or Inactive             |
| created_at      | TIMESTAMP     | Record creation timestamp      |
| updated_at      | TIMESTAMP     | Record update timestamp        |

---

## MySQL SQL Script

```sql
CREATE DATABASE IF NOT EXISTS employee_management;

USE employee_management;

CREATE TABLE IF NOT EXISTS employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone_number VARCHAR(20),
    department VARCHAR(100) NOT NULL,
    designation VARCHAR(100) NOT NULL,
    salary DECIMAL(12,2) NOT NULL,
    date_of_joining DATE NOT NULL,
    status ENUM('Active', 'Inactive') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

INSERT IGNORE INTO employees
(
    first_name,
    last_name,
    email,
    phone_number,
    department,
    designation,
    salary,
    date_of_joining,
    status
)
VALUES
(
    'Rahul',
    'Sharma',
    'rahul@gmail.com',
    '9876543210',
    'IT',
    'Software Engineer',
    60000,
    '2025-01-10',
    'Active'
),
(
    'Priya',
    'Reddy',
    'priya@gmail.com',
    '9988776655',
    'HR',
    'HR Executive',
    45000,
    '2024-08-15',
    'Active'
),
(
    'Arun',
    'Kumar',
    'arun@gmail.com',
    '8877665544',
    'Finance',
    'Accountant',
    50000,
    '2023-05-20',
    'Inactive'
);
```

---

## Environment Variables

Create a `.env` file inside the `backend` folder:

```text
backend/.env
```

Add:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=employee_management
DB_PORT=3306
```

Replace:

```text
YOUR_MYSQL_PASSWORD
```

with your MySQL root password.

The `.env` file is excluded from GitHub using `.gitignore`.

---

## Backend Setup

Open a terminal and navigate to the backend folder:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

Start the backend server:

```bash
node server.js
```

The backend runs at:

```text
http://localhost:5000
```

To verify the server, open:

```text
http://localhost:5000
```

Expected response:

```json
{
  "message": "Employee Management API is running"
}
```

---

## Frontend Setup

Open another terminal in the project root.

Install frontend dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

Vite will display a URL similar to:

```text
http://localhost:5173
```

Open the URL in the browser.

---

## REST API Endpoints

### Base URL

```text
http://localhost:5000/api
```

### Get All Employees

```http
GET /api/employees
```

Returns all employee records.

---

### Get Employee by ID

```http
GET /api/employees/:id
```

Example:

```text
GET /api/employees/1
```

---

### Create Employee

```http
POST /api/employees
```

Example request body:

```json
{
  "first_name": "Varshini",
  "last_name": "Reddy",
  "email": "varshini@gmail.com",
  "phone_number": "9876543210",
  "department": "IT",
  "designation": "Software Developer",
  "salary": 55000,
  "date_of_joining": "2026-09-09",
  "status": "Active"
}
```

---

### Update Employee

```http
PUT /api/employees/:id
```

Example:

```text
PUT /api/employees/1
```

Example request body:

```json
{
  "first_name": "Rahul",
  "last_name": "Sharma",
  "email": "rahul@gmail.com",
  "phone_number": "9876543210",
  "department": "IT",
  "designation": "Senior Software Engineer",
  "salary": 70000,
  "date_of_joining": "2025-01-10",
  "status": "Active"
}
```

---

### Delete Employee

```http
DELETE /api/employees/:id
```

Example:

```text
DELETE /api/employees/1
```

---

### Dashboard Statistics

```http
GET /api/employees/stats
```

Returns:

* Total Employees
* Active Employees
* Inactive Employees
* Department-wise Employee Count

---

## Search and Filter APIs

### Search by Name or Email

```text
GET /api/employees?search=rahul
```

### Filter by Department

```text
GET /api/employees?department=IT
```

### Filter by Status

```text
GET /api/employees?status=Active
```

### Combined Search and Filters

```text
GET /api/employees?search=rahul&department=IT&status=Active
```

---

## CRUD Operations

### Create

The user enters employee information in the React form.

React sends a POST request to the Node.js backend.

The backend validates the request and inserts the employee information into MySQL.

```text
React Form
   ↓
POST /api/employees
   ↓
Express
   ↓
INSERT INTO employees
   ↓
MySQL
```

---

### Read

When the dashboard loads, React sends a GET request.

The backend retrieves employee records from MySQL and returns them as JSON.

```text
React
   ↓
GET /api/employees
   ↓
Express
   ↓
SELECT * FROM employees
   ↓
MySQL
```

---

### Update

When the user clicks Edit, the existing employee information is loaded into the form.

After updating the information, React sends a PUT request.

```text
Edit Employee
   ↓
PUT /api/employees/:id
   ↓
Express
   ↓
UPDATE employees
   ↓
MySQL
```

---

### Delete

When the user clicks Delete, a confirmation message is displayed.

After confirmation, React sends a DELETE request.

```text
Delete Employee
   ↓
Confirmation
   ↓
DELETE /api/employees/:id
   ↓
Express
   ↓
DELETE FROM employees
   ↓
MySQL
```

---

## Frontend Components

### App.jsx

The main React component responsible for:

* Employee data
* API integration
* Search state
* Department filter state
* Status filter state
* Add employee logic
* Edit employee logic
* Delete employee logic
* Loading state
* Success messages
* Error messages

---

### SummaryCards.jsx

Displays:

* Total Employees
* Active Employees
* Inactive Employees
* Department-wise employee counts

---

### Filters.jsx

Provides:

* Search by employee name
* Search by employee email
* Department filter
* Status filter
* Clear filters option

---

### EmployeeTable.jsx

Displays employee information in table format.

It also provides:

* Edit button
* Delete button
* Employee status display

---

### EmployeeForm.jsx

The same form component is used for:

* Adding an employee
* Editing an employee

The form also performs frontend validation.

---

### employeeApi.js

Contains Axios functions used by React to communicate with the Node.js REST APIs.

Example flow:

```text
React
   ↓
Axios
   ↓
REST API
   ↓
Node.js
```

---

## Backend Structure

### server.js

Starts the Express server and registers middleware and employee API routes.

### routes/employeeRoutes.js

Defines REST API routes such as:

```text
GET
POST
PUT
DELETE
```

### controllers/employeeController.js

Contains the actual CRUD logic and SQL queries.

### config/db.js

Creates the MySQL connection pool used by the backend.

---

## Validation

The frontend validates:

* Required fields
* Valid email format
* Salary greater than zero

The backend also validates required employee information.

The email column is configured with a UNIQUE constraint in MySQL to prevent duplicate employee emails.

---

## Error Handling

The application handles errors such as:

* Missing required fields
* Invalid employee data
* Duplicate employee email
* Employee not found
* API request failure
* Database errors

Success and error messages are displayed to the user.

---

## Responsive Design

The dashboard uses:

* CSS Flexbox
* CSS Grid
* Media Queries
* Responsive table handling

On smaller screens:

* Summary cards stack vertically
* Filters adjust to screen width
* Employee form becomes single-column
* Employee table supports horizontal scrolling

---

## Screenshots

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Add Employee

![Add Employee](screenshots/add-employee.png)

### Edit Employee

![Edit Employee](screenshots/edit-employee.png)

### Search and Filter

![Search and Filter](screenshots/search-filter.png)

### Delete Confirmation

![Delete Confirmation](screenshots/delete-confirmation.png)

---

## How to Run the Complete Project

### Step 1 - Start MySQL

Make sure MySQL Server is running.

---

### Step 2 - Start Backend

Open Terminal 1:

```bash
cd backend
npm install
node server.js
```

Backend URL:

```text
http://localhost:5000
```

---

### Step 3 - Start Frontend

Open Terminal 2 from the project root:

```bash
npm install
npm run dev
```

Open the Vite URL displayed in the terminal.

---

## Git and GitHub

The project uses Git for version control and GitHub for source-code hosting.

Example commands:

```bash
git add .
git commit -m "Implemented employee CRUD dashboard"
git push origin main
```

The `.env` file and `node_modules` folders are excluded from GitHub using `.gitignore`.

---

## Future Improvements

Possible future enhancements include:

* Authentication and authorization
* Pagination
* Sorting
* Advanced dashboard charts
* Export employee data to CSV or Excel
* Role-based access control
* Cloud deployment

---

## Author

Varshini Reddy

````
