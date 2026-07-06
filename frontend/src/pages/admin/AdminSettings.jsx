export default function AdminSettings() {
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
                    Settings
                </h2>
                <p style={{ margin: "10px 0 0", color: "#65676B" }}>
                    Configure platform settings, access controls, and system
                    defaults.
                </p>
            </section>
        </div>
    );
}
