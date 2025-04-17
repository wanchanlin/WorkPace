export default function Home() {
    return (
      <div className="container">
        <h1>Welcome to the HR Management System</h1>
  
        <div className="dashboard">
          <div className="card">
            <h2>How This System Helps You</h2>
            <p>
              As an HR professional, you can <strong>easily manage employees, positions, and departments</strong> in just a few clicks.
            </p>
            <p>Follow these simple steps to navigate the system.</p>
          </div>
  
          <div className="grid">
            <div className="card">
              <h3>👩‍💼 Manage Employees</h3>
              <p>- View all employees in one place<br />- Add new employees<br />- Update or remove employee records</p>
            </div>
            <div className="card">
              <h3>🏢 Manage Positions</h3>
              <p>- Assign job roles to employees<br />- Edit existing job positions<br />- Track open positions for hiring</p>
            </div>
            <div className="card">
              <h3>🏛 Manage Departments</h3>
              <p>- Organize employees by department<br />- Create new departments<br />- Move employees between teams</p>
            </div>
          </div>
  
         
        </div>
      </div>
    );
  }
  