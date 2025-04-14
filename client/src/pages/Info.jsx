import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PositionList() {
  const [positions, setPositions] = useState([]);

  // 👇 Using VITE_API_URL from .env
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/positions`)
      .then(res => res.json())
      .then(data => setPositions(data))
      .catch(err => console.error("Failed to load positions:", err));
  }, [API]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this position?");
    if (!confirmed) return;

    await fetch(`${API}/delete/${id}`, {
      method: "POST",
    });

    setPositions(prev => prev.filter(p => p._id !== id));
  };

  return (
    <div className="main-content">
      <h1 className="page-title">Position Listings</h1>
      <Link to="/addPosition" className="button">Add New Position</Link>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position Title</th>
            <th>Email</th>
            <th>Role</th>
            <th>Hire Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position) => (
            <tr key={position._id}>
              <td>{position.fullName}</td>
              <td>{position.title}</td>
              <td>{position.email}</td>
              <td>{position.role}</td>
              <td>
                {position.hireDate
                  ? new Date(position.hireDate).toISOString().split("T")[0]
                  : "N/A"}
              </td>
              <td className="actions">
                <Link to={`/editPosition/${position._id}`}>Edit</Link>
                <button onClick={() => handleDelete(position._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
