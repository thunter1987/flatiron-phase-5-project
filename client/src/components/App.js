import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    const response = async () => {
      const data = await fetch("/users");
      const json = await data.json();
      console.log(json);
    };
    return json ? response : null;
  }, []);

  return <h1>Project Client</h1>;
}

export default App;
