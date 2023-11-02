import React from "react";

export default function Logout() {
  const handleLogout = () => console.log("Logging Out");

  return (
    <div>
      <button className="logout-button" type="submit" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
