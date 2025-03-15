import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    console.log("Username: ", username);
  }, [username]);

  useEffect(() => {
    console.log("Password: ", password);
  }, [password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Total:");
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
// eslint-disable-next-line no-undef
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>
);
