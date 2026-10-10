import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import FoodSearch from "./pages/FoodSearch.jsx";
import SmartRoute from "./pages/SmartRoute.jsx";
import Assignment from "./pages/Assignment.jsx";
import AlgorithmLab from "./pages/AlgorithmLab.jsx";
import Analytics from "./pages/Analytics.jsx";

const links = [["/", "Home"], ["/restaurants", "Restaurants"], ["/search", "Food search"], ["/route", "Smart route"],
  ["/assign", "Assignment"], ["/lab", "Algorithm lab"], ["/analytics", "Analytics"]];

export default function App() {
  return (
    <>
      <nav className="nav">
        <b className="brand">SmartFood</b>
        {links.map(([to, t]) => <NavLink key={to} to={to} end={to === "/"}>{t}</NavLink>)}
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/search" element={<FoodSearch />} />
          <Route path="/route" element={<SmartRoute />} />
          <Route path="/assign" element={<Assignment />} />
          <Route path="/lab" element={<AlgorithmLab />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>
    </>
  );
}
