function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <div className="employee-section">
      <div className="table-header">
        <h2>Employees</h2>
        <span>{employees.length} records</span>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Date of Joining</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="10" className="no-records">
                  No employees found.
                </td>
              </tr>
            ) : (
              employees.map((employee) => (
                <tr key={employee.employee_id}>
                  <td>{employee.employee_id}</td>

                  <td>
                    <strong>
                      {employee.first_name} {employee.last_name}
                    </strong>
                  </td>

                  <td>{employee.email}</td>

                  <td>{employee.phone_number}</td>

                  <td>{employee.department}</td>

                  <td>{employee.designation}</td>

                  <td>
                    ₹{Number(employee.salary).toLocaleString("en-IN")}
                  </td>

                  <td>{employee.date_of_joining?.slice(0, 10)}</td>

                  <td>
                    <span
                      className={
                        employee.status === "Active"
                          ? "status active-status"
                          : "status inactive-status"
                      }
                    >
                      {employee.status}
                    </span>
                  </td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="edit-button"
                        onClick={() => onEdit(employee)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-button"
                        onClick={() =>
                          onDelete(employee.employee_id)
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;