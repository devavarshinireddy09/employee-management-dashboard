function Filters({
  search,
  setSearch,
  department,
  setDepartment,
  status,
  setStatus,
  departments,
}) {
  const handleClearFilters = () => {
    setSearch("");
    setDepartment("");
    setStatus("");
  };

  return (
    <div className="filters">
      <div className="filter-item search-box">
        <label>Search</label>

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="filter-item">
        <label>Department</label>

        <select
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        >
          <option value="">All Departments</option>

          {departments.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>Status</label>

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <button className="clear-button" onClick={handleClearFilters}>
        Clear
      </button>
    </div>
  );
}

export default Filters;