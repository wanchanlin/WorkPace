import { useEffect, useState } from "react";

export default function Info() {
  const [positions, setPositions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPositions = async () => {
      try {
        const response = await fetch("https://workpace-pug.vercel.app/api");

        // 🔧 FIXED: use .json() instead of a nonexistent method like API_URLjson()
        const data = await response.json(); // <-- THIS LINE WAS WRONG

        setPositions(data); // 🔧 FIXED: you had setCategories(data), which doesn't exist
        setLoading(false);
        
      } catch (err) {
        console.error("Error fetching positions:", err);
        setError("Could not load positions. Please check the API URL and network connection.");
        setLoading(false);
      }
    };

    getPositions();
  }, []);

  // const API_URL = "https://workpace-pug.vercel.app/api";
  // const API_URL = "data.json"; // Replace with your actual API URL
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(API_URL);

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       setPositions(data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error("Error fetching positions:", err);
  //       setError("Could not load positions. Please check the API URL and network connection.");
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   // 模拟API调用
  //   const fetchData = async () => {
  //     try {
  //       // 使用您提供的API数据
  //       const mockData = [
  //         {
  //           "_id": "67b39fac79edc2a577a57cc9",
  //           "fullName": "John Doe",
  //           "email": "johndoe@example.com",
  //           "title": "CEO",
  //           "description": "Lead the company",
  //           "role": "employee",
  //           "hireDate": "2025-02-28T00:00:00.000Z",
  //           "__v": 0
  //         },
  //         {
  //           "_id": "67b39fac79edc2a577a57cca",
  //           "fullName": "Jane Smith",
  //           "email": "janesmith@example.com",
  //           "title": "Software Developer",
  //           "description": "Develop software",
  //           "role": "employer",
  //           "hireDate": "2025-03-10T00:00:00.000Z",
  //           "__v": 0
  //         },
  //         {
  //           "_id": "67b3bea6dfbc1f662dc25999",
  //           "fullName": "JOJO",
  //           "email": "ohanalin@gmail.com",
  //           "title": "CTO",
  //           "description": "sdsds",
  //           "role": "employer",
  //           "hireDate": "2025-12-13T00:00:00.000Z",
  //           "__v": 0
  //         },
  //         {
  //           "_id": "67bdd0f3bada50b129460e01",
  //           "fullName": "Wanda White",
  //           "email": "wandawhite@gmail.com",
  //           "title": "cook",
  //           "description": "sdas",
  //           "role": "employee",
  //           "hireDate": "2024-12-05T00:00:00.000Z",
  //           "__v": 0
  //         },
  //         {
  //           "_id": "67fbfd59719b349d894d5b14",
  //           "fullName": "Alice Meow",
  //           "email": "alicem@gmail.com",
  //           "title": "wooo",
  //           "description": "sfdfss",
  //           "role": "employer",
  //           "hireDate": "2025-04-23T00:00:00.000Z",
  //           "__v": 0
  //         },
  //         {
  //           "_id": "67fbfdb7719b349d894d5b18",
  //           "fullName": "Mariko Tokushima",
  //           "email": "MarikoT@gmail.com",
  //           "title": "Marketing Manager",
  //           "description": "dfjsldfjs",
  //           "role": "employee",
  //           "hireDate": "2025-04-11T00:00:00.000Z",
  //           "__v": 0
  //         },
  //         {
  //           "_id": "67fbfe69bbaba02e67c8144d",
  //           "fullName": "Maliha Hasan",
  //           "email": "MH@gmail.com",
  //           "title": "Accountant",
  //           "description": "213216546",
  //           "role": "employee",
  //           "hireDate": "2025-04-18T00:00:00.000Z",
  //           "__v": 0
  //         },
  //         {
  //           "_id": "67fbfea4bbaba02e67c81450",
  //           "fullName": "Agustin Marquz",
  //           "email": "AgusM@gmail.com",
  //           "title": "Account Manager",
  //           "description": "12345646",
  //           "role": "employee",
  //           "hireDate": "2025-04-15T00:00:00.000Z",
  //           "__v": 0
  //         }
  //         // 其他数据...
  //       ];

  //       // 模拟API调用延迟
  //       await new Promise(resolve => setTimeout(resolve, 1000));

  //       // 更新状态
  //       setPositions(mockData);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error("Error fetching positions:", err);
  //       setError("Could not load positions.");
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="main-content">
      <h1 className="page-title">Position Listings</h1>
      <a className="button" href="/addPosition">Add New Position</a>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

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
                <td className="actions">
                  <a href={`/editPosition/${position._id}`}>Edit</a>
                  <form
                    action={`/delete/${position._id}`}
                    method="POST"
                    style={{ display: "inline" }}
                  >
                    <button type="submit">Delete</button>
                  </form>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}