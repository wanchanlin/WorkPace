import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditPosition() {
  const { id } = useParams();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    fetch(`/editPosition/${id}`)
      .then(res => res.json())
      .then(data => setPosition(data));
  }, [id]);

  const handleChange = (e) => {
    setPosition(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/editPosition/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(position)
    });
    // Optional: redirect or show success
  };

  if (!position) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Edit Position</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input name="fullName" value={position.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input name="email" value={position.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Title:</label>
          <input name="title" value={position.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={position.description} onChange={handleChange} />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={position.role} onChange={handleChange} required>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
