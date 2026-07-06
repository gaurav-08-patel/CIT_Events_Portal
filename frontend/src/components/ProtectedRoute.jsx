import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
    const { user, isLoggedIn } = useAuthContext();
    const location = useLocation();

    if (!isLoggedIn) {
        return (
            <Navigate to="/login" state={{ from: location.pathname }} replace />
        );
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
        return <Navigate to="/" replace />;
    }

    return children;
}
