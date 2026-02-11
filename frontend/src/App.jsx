import { Routes, Route } from "react-router-dom";

import Card from "./components/Card";
import CardDetails from "./pages/CardDetails";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

import cards from "./data";

function App() {
  return (
    <Routes>
      {/* Layout */}
      <Route path="/" element={<HomePage />}>
        {/* Home - Cards */}
        <Route
          index
          element={
            <div className="flex flex-wrap justify-center gap-8">
              {cards.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          }
        />

        {/* Details Page */}
        <Route path="card/:id" element={<CardDetails />} />

        {/* Login */}
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
