import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate()
  const handleLogout = () => {
    fetch('/logout', {method: "DELETE"})
    navigate('/')
  }

  return (
    <div>
      <button className="logout-button" type="submit" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
