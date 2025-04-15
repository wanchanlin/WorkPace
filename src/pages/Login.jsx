import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ u: "", pw: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.message || "Login failed");
    } else {
      window.location.href = "/user"; // redirect
    }
  };

  return (
    <div className="main-content">
      <h1 className="page-title">Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="u">Username:</label>
          <input type="text" id="u" name="u" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="pw">Password:</label>
          <input type="password" id="pw" name="pw" onChange={handleChange} />
        </div>
        <br/>
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account? <a href="/user/register">Register now</a>
      </p>
    </div>
  );
}
