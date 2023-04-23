import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import MyTrades from "./components/MyTrades/MyTrades";

function App() {
  return (
    <>
      <div className="app">
        <Router basename="/belgikgBot#">
          <Route exact path="/" component={Login} />
          <Route path="/mytrades" component={MyTrades} />
        </Router>
      </div>
    </>
  );
}

export default App;
