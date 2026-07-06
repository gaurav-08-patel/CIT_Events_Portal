export default function AdminUsers() {
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
                    Users
                </h2>
                <p style={{ margin: "10px 0 0", color: "#65676B" }}>
                    Manage students, organizers, and admin accounts from here.
                </p>
            </section>
        </div>
    );
}
