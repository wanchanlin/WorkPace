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
  
          <div className="recent-activity">
            <h3>🔍 Recent HR Actions</h3>
            <ul>
              <li><span>📅 2024-02-20</span> <p><strong>John Doe</strong> joined the HR department.</p></li>
              <li><span>📅 2024-02-18</span> <p><strong>Jane Smith</strong> promoted to Senior Developer.</p></li>
              <li><span>📅 2024-02-15</span> <p><strong>Finance Department</strong> created.</p></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  