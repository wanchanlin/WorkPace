import { useEffect, useState } from "react";

export default function Info() {
  const [positions, setPositions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  const API_URL = "https://workpace-pug.vercel.app/api";
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPositions(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching positions:", err);
        setError("Could not load positions. Please check the API URL and network connection.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
  <>

    <div className="main-content">
      
    <h1 className="page-title">Position Listings</h1>
    <div class="table-container">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {/* <a className="button" href="/addPosition">Add New Position</a> */}
      <table className="table-container">
      
        <thead>
          <tr>
            <th>Name</th>
            <th>Position Title</th>
            <th>Email</th>
            <th>Role</th>
            <th>Hire Date</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {positions.length === 0 ? (
            <tr>
              <td colSpan="6">No positions found.</td>
            </tr>
          ) : (
            positions.map((position) => (
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
                {/* <td className="actions">
                  <a href={`/editPosition/${position._id}`}>Edit</a>
                  <form
                    action={`/delete/${position._id}`}
                    method="POST"
                    style={{ display: "inline" }}
                  >
                    <button type="submit">Delete</button>
                  </form>
                </td> */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
}