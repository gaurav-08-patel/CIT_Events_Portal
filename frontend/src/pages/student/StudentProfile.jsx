import { useAuthContext } from "../../context/AuthContext";

export default function StudentProfile() {
    const { user } = useAuthContext();

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
                    Profile
                </h1>
                <p style={{ margin: 0, color: "#65676B" }}>
                    Your student profile details will appear here soon.
                </p>
                <div style={{ marginTop: 20, display: "grid", gap: 12 }}>
                    <div
                        style={{
                            padding: 14,
                            borderRadius: 12,
                            background: "#F7F9FC",
                            border: "1px solid #DADDE1",
                        }}
                    >
                        <strong>Email:</strong> {user?.email || "Not available"}
                    </div>
                    <div
                        style={{
                            padding: 14,
                            borderRadius: 12,
                            background: "#F7F9FC",
                            border: "1px solid #DADDE1",
                        }}
                    >
                        <strong>Role:</strong> {user?.role || "student"}
                    </div>
                </div>
            </div>
        </main>
    );
}
