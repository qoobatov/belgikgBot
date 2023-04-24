// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import MyTrades from "./components/MyTrades/MyTrades";

// function App() {
//   return (
//     <>
//       <div className="app">
//         <Router>
//           <Routes>
//             <Route path="/belgikgBot" element={<Login />} />
//             <Route path="/belgikgBot/mytrades" element={<MyTrades />} />
//           </Routes>
//         </Router>
//       </div>
//     </>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import MyTrades from "./components/MyTrades/MyTrades";

function App() {
return (
<>
<div className="app">
<Router basename={process.env.PUBLIC_URL}>
<Routes>
<Route path="/belgikgBot" element={<Login />} />
<Route path="/belgikgBot/mytrades" element={<MyTrades />} />
<Route path="/*" element={<Navigate to="/belgikgBot" />} />
</Routes>
</Router>
</div>
</>
);
}

export default App;
