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

INSERT INTO employees
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