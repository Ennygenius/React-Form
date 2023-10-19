import react from "react";
import Form from "./pages/Form";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Thanks from "./pages/Thanks/Thanks";
import Details from "./pages/Details/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/thankyou" element={<Thanks />}></Route>
      <Route path="/details/:id" element={<Details />}></Route>
    </Routes>
  );
}

export default App;
