import React from "react";
import { Routes, Route } from "react-router-dom";
import Item from "./page/Item";
import Form from "./page/Form";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </>
  );
}

export default App;
