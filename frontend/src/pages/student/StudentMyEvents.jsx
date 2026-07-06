import { Link } from "react-router-dom";
import { ALL_EVENTS } from "../../data/events";

const registeredEventIds = [1, 5, 8];
const studentEvents = ALL_EVENTS.filter((event) =>
    registeredEventIds.includes(event.id),
);

export default function StudentMyEvents() {
    return (
        <main
            style={{
                background: "#F0F2F5",
                minHeight: "100vh",
                padding: "32px 24px 64px",
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    background: "#fff",
                    borderRadius: 20,
                    padding: 24,
                    border: "1px solid #DADDE1",
                }}
            >
                <h1
                    style={{
                        margin: "0 0 8px",
                        fontSize: 28,
                        color: "#1C1E21",
                        fontWeight: 800,
                    }}
                >
                    My Events
                </h1>
                <p style={{ margin: 0, color: "#65676B" }}>
                    All events you have registered for.
                </p>
                <div style={{ display: "grid", gap: 16, marginTop: 20 }}>
                    {studentEvents.map((event) => (
                        <div
                            key={event.id}
                            style={{
                                border: "1px solid #E7EAF0",
                                borderRadius: 16,
                                padding: 16,
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 16,
                                flexWrap: "wrap",
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        margin: "0 0 6px",
                                        color: "#1877F2",
                                        fontWeight: 700,
                                        fontSize: 13,
                                    }}
                                >
                                    {event.category}
                                </p>
                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: 18,
                                        color: "#1C1E21",
                                        fontWeight: 800,
                                    }}
                                >
                                    {event.title}
                                </h3>
                                <p
                                    style={{
                                        margin: "8px 0 0",
                                        color: "#65676B",
                                    }}
                                >
                                    {event.date} • {event.venue}
                                </p>
                            </div>
                            <Link
                                to={`/events/${event.id}`}
                                style={{
                                    alignSelf: "center",
                                    padding: "10px 16px",
                                    borderRadius: 10,
                                    background: "#1877F2",
                                    color: "#fff",
                                    textDecoration: "none",
                                    fontWeight: 700,
                                }}
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
