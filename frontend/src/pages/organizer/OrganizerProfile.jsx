import { useAuthContext } from "../../context/AuthContext.jsx";

export default function OrganizerProfile() {
    const { user } = useAuthContext();

    return (
        <div className="grid gap-6">
            <section className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-6">
                <h2 className="text-2xl font-extrabold text-(--cit-text)">
                    Profile
                </h2>
                <p className="mt-3 text-(--cit-text-muted)">
                    Organizer profile details will appear here.
                </p>
                <div className="mt-6 grid gap-3">
                    <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-4">
                        <strong>Email:</strong> {user?.email || "Not available"}
                    </div>
                    <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-4">
                        <strong>Role:</strong> {user?.role || "organizer"}
                    </div>
                </div>
            </section>
        </div>
    );
}
