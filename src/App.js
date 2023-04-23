import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import MyTrades from "./components/MyTrades/MyTrades";




function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/belgikgBot" element={<Login />} />
            <Route path="/belgikgBot/mytrades" element={<MyTrades />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
