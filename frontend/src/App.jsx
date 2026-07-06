import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { EventsPage } from "./pages/EventsPage";
import EventDetails from "./pages/EventDetails";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentMyEvents from "./pages/student/StudentMyEvents";
import StudentMyTeams from "./pages/student/StudentMyTeams";
import StudentCertificates from "./pages/student/StudentCertificates";
import StudentProfile from "./pages/student/StudentProfile";
import OrganizerDashboard from "./pages/organizer/OrganizerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />

            <Route
                path="/student/dashboard"
                element={
                    <ProtectedRoute allowedRoles={["student"]}>
                        <StudentDashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/student/my-events"
                element={
                    <ProtectedRoute allowedRoles={["student"]}>
                        <StudentMyEvents />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/student/my-teams"
                element={
                    <ProtectedRoute allowedRoles={["student"]}>
                        <StudentMyTeams />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/student/certificates"
                element={
                    <ProtectedRoute allowedRoles={["student"]}>
                        <StudentCertificates />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/student/profile"
                element={
                    <ProtectedRoute allowedRoles={["student"]}>
                        <StudentProfile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/organizer/dashboard"
                element={
                    <ProtectedRoute allowedRoles={["organizer"]}>
                        <OrganizerDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/dashboard"
                element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;
