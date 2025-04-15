import { useState } from "react";

export default function AddPosition() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    title: "",
    role: "employee",
    description: "",
    hireDate: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/addPosition", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    // Optional: redirect or show success
  };

  return (
    <div>
      <h1>Add New Position</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" name="fullName" required onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" required onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select name="role" required onChange={handleChange}>
            <option value="employee">Employee</option>
            <option value="employer">Employer</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea name="description" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="hireDate">Hire Date:</label>
          <input type="date" name="hireDate" onChange={handleChange} />
        </div>
        <button type="submit">Add Position</button>
      </form>
    </div>
  );
}
