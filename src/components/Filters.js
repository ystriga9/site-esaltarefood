import React from 'react';

/**
 * Simple filter form with start/end date and category selector.
 * Calls `onChange` when any field changes.
 */
export default function Filters({ filters, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  };

  return (
    <div className="filters">
      <label>
        Start:
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
        />
      </label>
      <label>
        End:
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="food">Food</option>
          <option value="beverage">Beverage</option>
        </select>
      </label>
    </div>
  );
}

