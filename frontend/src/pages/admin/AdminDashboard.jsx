export default function AdminDashboard() {
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
                    Admin Dashboard
                </h1>
                <p style={{ margin: 0, color: "#65676B" }}>
                    Admin routes will be built here soon.
                </p>
            </div>
        </main>
    );
}
