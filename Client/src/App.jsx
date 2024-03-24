import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./layout/Navbar";
import UserCard from "./UserCard";
import NumberCruncher from "./NumberCruncher";
import { InventoryManagementPage } from "./pages/inventory-page";
import { OtherStationaryItemsPage } from "./pages/other-stationary-items";

function App() {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <Routes>
          <Route path="/" element={<UserCard />} />
          <Route path="/numbers" element={<NumberCruncher />} />
          <Route
            path="/inventory-management"
            element={<InventoryManagementPage />}
          />
          <Route path="/other-items" element={<OtherStationaryItemsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
