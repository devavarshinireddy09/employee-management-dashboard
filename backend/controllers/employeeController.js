const db = require("../config/db");


// GET all employees
const getEmployees = async (req, res) => {
  try {
    const { search, department, status } = req.query;

    let query = "SELECT * FROM employees WHERE 1=1";
    const params = [];

    if (search) {
      query += `
        AND (
          first_name LIKE ?
          OR last_name LIKE ?
          OR email LIKE ?
          OR CONCAT(first_name, ' ', last_name) LIKE ?
        )
      `;

      const value = `%${search}%`;

      params.push(value, value, value, value);
    }

    if (department) {
      query += " AND department = ?";
      params.push(department);
    }

    if (status) {
      query += " AND status = ?";
      params.push(status);
    }

    query += " ORDER BY employee_id DESC";

    const [employees] = await db.execute(query, params);

    res.status(200).json(employees);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch employees",
    });
  }
};


// GET one employee
const getEmployeeById = async (req, res) => {
  try {
    const [employees] = await db.execute(
      "SELECT * FROM employees WHERE employee_id = ?",
      [req.params.id]
    );

    if (employees.length === 0) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json(employees[0]);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch employee",
    });
  }
};


// CREATE employee
const createEmployee = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      department,
      designation,
      salary,
      date_of_joining,
      status,
    } = req.body;

    if (
      !first_name ||
      !last_name ||
      !email ||
      !department ||
      !designation ||
      !salary ||
      !date_of_joining
    ) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    const [result] = await db.execute(
      `
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
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        first_name,
        last_name,
        email,
        phone_number || null,
        department,
        designation,
        salary,
        date_of_joining,
        status || "Active",
      ]
    );

    res.status(201).json({
      message: "Employee added successfully",
      employee_id: result.insertId,
    });

  } catch (error) {
    console.error(error);

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    res.status(500).json({
      message: "Failed to create employee",
    });
  }
};


// UPDATE employee
const updateEmployee = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      department,
      designation,
      salary,
      date_of_joining,
      status,
    } = req.body;

    const [result] = await db.execute(
      `
      UPDATE employees
      SET
        first_name = ?,
        last_name = ?,
        email = ?,
        phone_number = ?,
        department = ?,
        designation = ?,
        salary = ?,
        date_of_joining = ?,
        status = ?
      WHERE employee_id = ?
      `,
      [
        first_name,
        last_name,
        email,
        phone_number || null,
        department,
        designation,
        salary,
        date_of_joining,
        status,
        req.params.id,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json({
      message: "Employee updated successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update employee",
    });
  }
};


// DELETE employee
const deleteEmployee = async (req, res) => {
  try {
    const [result] = await db.execute(
      "DELETE FROM employees WHERE employee_id = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json({
      message: "Employee deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete employee",
    });
  }
};


// Dashboard statistics
const getStats = async (req, res) => {
  try {
    const [summary] = await db.execute(`
      SELECT
        COUNT(*) AS totalEmployees,
        SUM(status = 'Active') AS activeEmployees,
        SUM(status = 'Inactive') AS inactiveEmployees
      FROM employees
    `);

    const [departments] = await db.execute(`
      SELECT
        department,
        COUNT(*) AS employeeCount
      FROM employees
      GROUP BY department
    `);

    res.status(200).json({
      totalEmployees: summary[0].totalEmployees || 0,
      activeEmployees: summary[0].activeEmployees || 0,
      inactiveEmployees: summary[0].inactiveEmployees || 0,
      departments,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch statistics",
    });
  }
};


module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getStats,
};