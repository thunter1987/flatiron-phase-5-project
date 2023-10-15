import React, { useEffect, useState } from "react";
import { useNavigate, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Form from "./Form";

function App() {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [errors, setErrors] = useState(null);

  const updateUser = (user) => setUser(user);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user)
          handleUserRole(user.role)
          setUser(user)
        });
        console.log(user)
        navigate('/')
      }
    });
  }, []);

  const handleUserRole = ((user) => setUserRole(user.role))

  return (
    <>
      <h1>Project Client</h1>
      <Navbar />
      <Form />
    </>
  );
}

export default App;
