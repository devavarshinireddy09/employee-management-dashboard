import { useEffect, useState } from "react";

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  department: "",
  designation: "",
  salary: "",
  date_of_joining: "",
  status: "Active",
};

function EmployeeForm({ employee, onSave, onClose }) {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (employee) {
      setFormData({
        first_name: employee.first_name || "",
        last_name: employee.last_name || "",
        email: employee.email || "",
        phone_number: employee.phone_number || "",
        department: employee.department || "",
        designation: employee.designation || "",
        salary: employee.salary || "",
        date_of_joining: employee.date_of_joining?.slice(0, 10) || "",
        status: employee.status || "Active",
      });
    } else {
      setFormData(initialForm);
    }
  }, [employee]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.first_name.trim() ||
      !formData.last_name.trim() ||
      !formData.email.trim() ||
      !formData.department ||
      !formData.designation.trim() ||
      !formData.salary ||
      !formData.date_of_joining
    ) {
      setError("Please fill all required fields.");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;

    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (Number(formData.salary) <= 0) {
      setError("Salary must be greater than zero.");
      return;
    }

    setError("");
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="employee-form-modal">
        <div className="form-header">
          <div>
            <h2>
              {employee ? "Edit Employee" : "Add Employee"}
            </h2>

            <p>
              {employee
                ? "Update employee information"
                : "Enter employee information"}
            </p>
          </div>

          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>First Name *</label>

              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name *</label>

              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email *</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Department *</label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">
                  Select Department
                </option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Operations">Operations</option>
              </select>
            </div>

            <div className="form-group">
              <label>Designation *</label>

              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Salary *</label>

              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Date of Joining *</label>

              <input
                type="date"
                name="date_of_joining"
                value={formData.date_of_joining}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Status *</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">
                  Inactive
                </option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-button"
            >
              {employee
                ? "Update Employee"
                : "Add Employee"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;