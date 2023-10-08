import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Authentication from "./Authentication";

function App() {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(null);

  const updateUser = (user) => setUser(user);

  useEffect(() => {
    fetch("/").then((resp) => {
      console.log(resp);
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      } else {
        resp.json().then((err) => setErrors(err));
      }
    }, []);
  });

  return (
    <>
      <h1>Project Client</h1>
      <Navigation />
      <Authentication updateUser={updateUser} />
    </>
  );
}

export default App;
