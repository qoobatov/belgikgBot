import "./App.css";
import {Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import MyTrades from "./components/MyTrades/MyTrades";

function App() {
  return (
    <>
      <div className="app">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/mytrades" element={<MyTrades />} />
          </Routes>
      </div>
    </>
  );
}

export default App;


