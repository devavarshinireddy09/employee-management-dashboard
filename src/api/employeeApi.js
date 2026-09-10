import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getEmployees = () => {
  return API.get("/employees");
};

export const createEmployee = (employeeData) => {
  return API.post("/employees", employeeData);
};

export const updateEmployee = (id, employeeData) => {
  return API.put(`/employees/${id}`, employeeData);
};

export const deleteEmployee = (id) => {
  return API.delete(`/employees/${id}`);
};