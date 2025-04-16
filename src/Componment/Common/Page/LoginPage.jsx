import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const { login, isLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const location = useLocation();

  if (isLoggedIn) {
    return <Navigate to="/admin" />;
  }

  const handleLogin = () => {
    if (email) {
      login();
    } else {
      alert("Please enter your email.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      {location?.pathname === "/super-admin/login" && (
        <input type="password" value={"password"} />
      )}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
