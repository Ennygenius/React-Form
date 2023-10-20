import react from "react";
import Form from "./pages/Form";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Thanks from "./pages/Thanks/Thanks";
import Details from "./pages/Details/Details";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/thankyou" element={<Thanks />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </I18nextProvider>
  );
}

export default App;
