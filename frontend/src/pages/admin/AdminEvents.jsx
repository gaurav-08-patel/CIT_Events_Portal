export default function AdminEvents() {
    return (
        <div style={{ display: "grid", gap: 18 }}>
            <section
                style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: 24,
                    border: "1px solid #DADDE1",
                }}
            >
                <h2
                    style={{
                        margin: 0,
                        fontSize: 28,
                        fontWeight: 800,
                        color: "#1C1E21",
                    }}
                >
                    Events
                </h2>
                <p style={{ margin: "10px 0 0", color: "#65676B" }}>
                    Review event submissions and approve or update event
                    details.
                </p>
            </section>
        </div>
    );
}
