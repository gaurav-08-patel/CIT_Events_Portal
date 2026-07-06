import { Link } from "react-router-dom";
import { ALL_EVENTS } from "../../data/events";
import { useAuthContext } from "../../context/AuthContext";

const registeredEventIds = [1, 5, 8];
const studentEvents = ALL_EVENTS.filter((event) => registeredEventIds.includes(event.id));
const totalCertificates = 2;

export default function StudentDashboard() {
    const { user } = useAuthContext();
    const displayName = user?.name || user?.email?.split("@")[0] || "Student";

    return (
        <main style={{ background: "#F0F2F5", minHeight: "100vh", padding: "32px 24px 64px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <section style={{ background: "#fff", borderRadius: 20, padding: "28px 28px 24px", border: "1px solid #DADDE1", boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                        <div>
                            <p style={{ margin: 0, color: "#1877F2", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.18em" }}>Student Portal</p>
                            <h1 style={{ margin: "8px 0 8px", fontSize: "clamp(24px, 3vw, 34px)", color: "#1C1E21", fontWeight: 800 }}>Welcome back, {displayName}</h1>
                            <p style={{ margin: 0, color: "#65676B", fontSize: 16 }}>Here is your overview of participation, teams, and certificates.</p>
                        </div>
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                            <Link to="/student/my-events" style={{ padding: "10px 16px", borderRadius: 999, background: "#E7F3FF", color: "#1877F2", fontWeight: 700, textDecoration: "none" }}>My Events</Link>
                            <Link to="/student/my-teams" style={{ padding: "10px 16px", borderRadius: 999, background: "#F7F9FC", color: "#1C1E21", fontWeight: 700, textDecoration: "none", border: "1px solid #DADDE1" }}>My Teams</Link>
                            <Link to="/student/certificates" style={{ padding: "10px 16px", borderRadius: 999, background: "#F7F9FC", color: "#1C1E21", fontWeight: 700, textDecoration: "none", border: "1px solid #DADDE1" }}>Certificates</Link>
                        </div>
                    </div>
                </section>

                <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 20 }}>
                    <div style={{ background: "#fff", borderRadius: 16, padding: 20, border: "1px solid #DADDE1" }}>
                        <p style={{ margin: 0, color: "#65676B", fontSize: 13, fontWeight: 600 }}>Events Registered</p>
                        <h3 style={{ margin: "8px 0 0", fontSize: 32, color: "#1C1E21", fontWeight: 800 }}>{studentEvents.length}</h3>
                    </div>
                    <div style={{ background: "#fff", borderRadius: 16, padding: 20, border: "1px solid #DADDE1" }}>
                        <p style={{ margin: 0, color: "#65676B", fontSize: 13, fontWeight: 600 }}>Teams Joined</p>
                        <h3 style={{ margin: "8px 0 0", fontSize: 32, color: "#1C1E21", fontWeight: 800 }}>2</h3>
                    </div>
                    <div style={{ background: "#fff", borderRadius: 16, padding: 20, border: "1px solid #DADDE1" }}>
                        <p style={{ margin: 0, color: "#65676B", fontSize: 13, fontWeight: 600 }}>Certificates Earned</p>
                        <h3 style={{ margin: "8px 0 0", fontSize: 32, color: "#1C1E21", fontWeight: 800 }}>{totalCertificates}</h3>
                    </div>
                </section>

                <section style={{ marginTop: 24, background: "#fff", borderRadius: 20, padding: "24px 24px 28px", border: "1px solid #DADDE1" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
                        <div>
                            <h2 style={{ margin: 0, fontSize: 22, color: "#1C1E21", fontWeight: 800 }}>Your Registered Events</h2>
                            <p style={{ margin: "6px 0 0", color: "#65676B" }}>Upcoming events you have joined.</p>
                        </div>
                    </div>

                    {studentEvents.length === 0 ? (
                        <div style={{ padding: 24, border: "1px dashed #DADDE1", borderRadius: 16, textAlign: "center", color: "#65676B" }}>
                            No registered events yet. Browse events and join your first one.
                        </div>
                    ) : (
                        <div style={{ display: "grid", gap: 16 }}>
                            {studentEvents.map((event) => (
                                <div key={event.id} style={{ border: "1px solid #E7EAF0", borderRadius: 16, padding: 16, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                                    <div>
                                        <p style={{ margin: "0 0 6px", color: "#1877F2", fontWeight: 700, fontSize: 13 }}>{event.category}</p>
                                        <h3 style={{ margin: 0, fontSize: 18, color: "#1C1E21", fontWeight: 800 }}>{event.title}</h3>
                                        <p style={{ margin: "8px 0 0", color: "#65676B" }}>{event.date} • {event.venue}</p>
                                    </div>
                                    <Link to={`/events/${event.id}`} style={{ alignSelf: "center", padding: "10px 16px", borderRadius: 10, background: "#1877F2", color: "#fff", textDecoration: "none", fontWeight: 700 }}>View Details</Link>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
