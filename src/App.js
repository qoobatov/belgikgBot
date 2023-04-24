import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import MyTrades from "./components/MyTrades/MyTrades";
import TradesList from "./components/TradesList/TradesList";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/belgikgBot" element={<Login />} />
            <Route path="/mytrades" element={<MyTrades />} />
            <Route path="/tradelist" element={<TradesList />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
