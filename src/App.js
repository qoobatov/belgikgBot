import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import MyTrades from "./components/MyTrades/MyTrades";
import TradesList from "./components/TradesList/TradesList";
import NewOrder from "./components/NewOrder/NewOrder";
import BayerServices from "./components/BayerServices/BayerServices";
import Production from "./components/Production/Production";
import TestForm from "./components/TestForm";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/belgikgBot" element={<Login />} />
            <Route path="/mytrades" element={<MyTrades />} />
            <Route path="/tradelist" element={<TradesList />} />
            <Route path="/neworder" element={<NewOrder />} />
            <Route path="/bayerservices" element={<BayerServices />} />
            <Route path="/production" element={<Production />} />
            <Route path="/xz" element={<TestForm />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
