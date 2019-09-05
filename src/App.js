import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoome from "./pages/SingleRoom";
import Error from "./pages/Error";
import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Rooms />
      <SingleRoome />
      <Error />
    </>
  );
}

export default App;
