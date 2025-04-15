import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PositionList() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetch("/positions")
      .then(res => res.json())
      .then(data => setPositions(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/delete/${id}`, { method: "POST" });
    setPositions(prev => prev.filter(p => p._id !== id));
  };

  return (
    <div className="main-content">
      <h1 className="page-title">Position Listings</h1>
      <Link to="/addPosition">Add New Position</Link>

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
          {positions.map(position => (
            <tr key={position._id}>
              <td>{position.fullName}</td>
              <td>{position.title}</td>
              <td>{position.email}</td>
              <td>{position.role}</td>
              <td>{position.hireDate ? new Date(position.hireDate).toISOString().split("T")[0] : "N/A"}</td>
              <td>
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
