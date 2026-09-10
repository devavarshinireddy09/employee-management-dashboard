# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Employee Management Dashboard

## Project Overview

The Employee Management Dashboard is a full-stack CRUD web application developed using React.js, Node.js, Express.js, and MySQL.

The application allows users to manage employee records through Create, Read, Update, and Delete operations.

It also provides dashboard statistics, search functionality, department filtering, status filtering, form validation, loading indicators, success/error messages, and responsive UI design.

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
- Postman / Browser API Testing

## Features

- Add a new employee
- View all employees
- Edit employee details
- Delete employee records
- Delete confirmation before removing an employee
- Search employees by name
- Search employees by email
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
- Responsive dashboard layout
- REST API integration
- Persistent data storage using MySQL

## Employee Fields

Each employee contains the following information:

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

## Project Architecture

The application follows a simple three-layer architecture:
React.js Frontend
        |
        | Axios / REST API
        v
Node.js + Express.js Backend
        |
        | MySQL2
        v
MySQL Database
