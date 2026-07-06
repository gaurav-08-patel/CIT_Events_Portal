import { useAuthContext } from "../../context/AuthContext";

export default function StudentProfile() {
    const { user } = useAuthContext();

    return (
        <main className="min-h-screen bg-(--cit-bg) px-6 py-10 md:px-8 lg:px-10">
            <div className="mx-auto max-w-6xl rounded-(--cit-radius-xl) border border-(--cit-border) bg-(--cit-surface) p-7">
                <h1 className="text-3xl font-extrabold text-(--cit-text)">
                    Profile
                </h1>
                <p className="mt-2 text-sm text-(--cit-text-muted)">
                    Your student profile details will appear here soon.
                </p>
                <div className="mt-6 grid gap-4">
                    <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-4">
                        <strong>Email:</strong> {user?.email || "Not available"}
                    </div>
                    <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-4">
                        <strong>Role:</strong> {user?.role || "student"}
                    </div>
                </div>
            </div>
        </main>
    );
}
