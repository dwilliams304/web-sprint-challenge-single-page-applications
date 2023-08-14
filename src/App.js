import React from "react";
import Home from "./Components/Home";
import OrderForm from "./Components/OrderForm";
import NavBar from "./Components/Navbar";
import {Routes, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='pizza' element={<OrderForm />} />
      </Routes>

    </>
  );
};
export default App;
