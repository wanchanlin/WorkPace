import { useEffect, useState } from "react";

export default function UserDashboard() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("/user/profile") // You must have this route in Express to return session user
      .then(res => res.json())
      .then(data => setUsername(data.username))
      .catch(() => setUsername("Guest"));
  }, []);

  return (
    <div className="main-content">
      <h1 className="page-title">Hello, {username}</h1>
      <p>
        Welcome to your personal dashboard. Here, you can access various features and tools related to your account.
      </p>
      <a href="/info">View the Dashboard</a>
    </div>
  );
}
