import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { ReactElement } from "react";

function App(props) {
  return (
    <div className="EventLogin">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
