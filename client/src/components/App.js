import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const response = async () => {
      const data = await fetch("http://127.0.0.1:5555/users");
      const json = await data.json();
      console.log(data);
      setUsers(json);
    };
    return response;
  }, []);

  return <>
    <h1>Project Client</h1>
  <Navigation/>
  </>

}

export default App;
