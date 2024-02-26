import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./layout/Navbar";
import UserCard from "./UserCard";
import NumberCruncher from "./NumberCruncher";

function App() {
  return (
    <div>
      
      <Navbar />
      <div className="dashboard">
        <Routes>
          <Route path="/" element={<UserCard/>} />
          <Route path="/numbers" element={<NumberCruncher/>} />
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
