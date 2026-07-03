import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { EventsPage } from "./pages/EventsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
        </Routes>
    );
}

export default App;
