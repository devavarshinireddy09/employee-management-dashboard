import { useEffect, useState } from "react";
import "./App.css";

import SummaryCards from "./components/SummaryCards";
import Filters from "./components/Filters";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";

import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "./api/employeeApi";


function App() {

  const [employees, setEmployees] = useState([]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(true);


  // Fetch employees from backend
  const fetchEmployees = async () => {

    try {

      setLoading(true);
      setErrorMessage("");

      const response = await getEmployees();

      setEmployees(response.data);

    } catch (error) {

      console.error(error);

      setErrorMessage(
        error.response?.data?.message ||
        "Failed to load employees"
      );

    } finally {

      setLoading(false);

    }
  };


  // Fetch employees when page loads
  useEffect(() => {

    fetchEmployees();

  }, []);


  // Search and filters
  const filteredEmployees = employees.filter((employee) => {

    const fullName =
      `${employee.first_name} ${employee.last_name}`.toLowerCase();

    const matchesSearch =
      fullName.includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "" ||
      employee.department === department;

    const matchesStatus =
      status === "" ||
      employee.status === status;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesStatus
    );
  });


  // Get unique departments
  const departments = [
    ...new Set(
      employees.map(
        (employee) => employee.department
      )
    ),
  ];


  // Add button
  const handleAddEmployee = () => {

    setEditingEmployee(null);
    setShowForm(true);

  };


  // Edit button
  const handleEditEmployee = (employee) => {

    setEditingEmployee(employee);
    setShowForm(true);

  };


  // Add or Update employee
  const handleSaveEmployee = async (employeeData) => {

    try {

      setErrorMessage("");

      if (editingEmployee) {

        await updateEmployee(
          editingEmployee.employee_id,
          employeeData
        );

        setMessage(
          "Employee updated successfully."
        );

      } else {

        await createEmployee(employeeData);

        setMessage(
          "Employee added successfully."
        );

      }

      // Refresh employees from database
      await fetchEmployees();

      setShowForm(false);
      setEditingEmployee(null);

      setTimeout(() => {
        setMessage("");
      }, 3000);

    } catch (error) {

      console.error(error);

      setErrorMessage(
        error.response?.data?.message ||
        "Unable to save employee"
      );

    }
  };


  // Delete employee
  const handleDeleteEmployee = async (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) {
      return;
    }

    try {

      await deleteEmployee(id);

      setMessage(
        "Employee deleted successfully."
      );

      await fetchEmployees();

      setTimeout(() => {
        setMessage("");
      }, 3000);

    } catch (error) {

      console.error(error);

      setErrorMessage(
        error.response?.data?.message ||
        "Unable to delete employee"
      );
    }
  };


  const handleCloseForm = () => {

    setShowForm(false);
    setEditingEmployee(null);

  };


  return (
    <div className="app">

      <header className="header">

        <div>
          <h1>
            Employee Management Dashboard
          </h1>

          <p>
            Manage employees, departments and employee status
          </p>
        </div>

        <button
          className="add-button"
          onClick={handleAddEmployee}
        >
          + Add Employee
        </button>

      </header>


      {message && (
        <div className="success-message">
          {message}
        </div>
      )}


      {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}


      <SummaryCards employees={employees} />


      <Filters
        search={search}
        setSearch={setSearch}

        department={department}
        setDepartment={setDepartment}

        status={status}
        setStatus={setStatus}

        departments={departments}
      />


      {loading ? (

        <div className="loading">
          Loading employees...
        </div>

      ) : (

        <EmployeeTable
          employees={filteredEmployees}
          onEdit={handleEditEmployee}
          onDelete={handleDeleteEmployee}
        />

      )}


      {showForm && (

        <EmployeeForm
          employee={editingEmployee}
          onSave={handleSaveEmployee}
          onClose={handleCloseForm}
        />

      )}

    </div>
  );
}


export default App;