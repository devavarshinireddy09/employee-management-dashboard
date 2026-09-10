function SummaryCards({ employees }) {
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status === "Inactive"
  ).length;

  const departmentCounts = employees.reduce((counts, employee) => {
    counts[employee.department] =
      (counts[employee.department] || 0) + 1;

    return counts;
  }, {});

  return (
    <>
      <div className="summary-cards">
        <div className="summary-card">
          <span>Total Employees</span>
          <h2>{totalEmployees}</h2>
        </div>

        <div className="summary-card active-card">
          <span>Active Employees</span>
          <h2>{activeEmployees}</h2>
        </div>

        <div className="summary-card inactive-card">
          <span>Inactive Employees</span>
          <h2>{inactiveEmployees}</h2>
        </div>
      </div>

      <div className="department-section">
        <h2>Department-wise Employees</h2>

        <div className="department-grid">
          {Object.entries(departmentCounts).map(
            ([department, count]) => (
              <div className="department-card" key={department}>
                <span>{department}</span>
                <strong>{count}</strong>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default SummaryCards;