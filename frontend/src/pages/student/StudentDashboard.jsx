import { Link } from "react-router-dom";
import { ALL_EVENTS } from "../../data/events";
import { useAuthContext } from "../../context/AuthContext";

const registeredEventIds = [1, 5, 8];
const studentEvents = ALL_EVENTS.filter((event) =>
    registeredEventIds.includes(event.id),
);
const totalCertificates = 2;

export default function StudentDashboard() {
    const { user } = useAuthContext();
    const displayName = user?.name || user?.email?.split("@")[0] || "Student";

    return (
        <main className="min-h-screen bg-(--cit-bg) px-6 py-10 md:px-8 lg:px-10">
            <div className="mx-auto max-w-6xl space-y-6">
                <section className="rounded-(--cit-radius-xl) border border-(--cit-border) bg-(--cit-surface) p-7 shadow-(--cit-shadow-sm)">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--cit-primary)">
                                Student Portal
                            </p>
                            <h1 className="text-3xl font-extrabold text-(--cit-text) md:text-4xl">
                                Welcome back, {displayName}
                            </h1>
                            <p className="text-sm text-(--cit-text-muted)">
                                Here is your overview of participation, teams,
                                and certificates.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                to="/student/my-events"
                                className="inline-flex rounded-full bg-(--cit-primary-soft) px-4 py-2 text-sm font-semibold text-(--cit-primary)"
                            >
                                My Events
                            </Link>
                            <Link
                                to="/student/my-teams"
                                className="inline-flex rounded-full border border-(--cit-border) bg-(--cit-surface-subtle) px-4 py-2 text-sm font-semibold text-(--cit-text)"
                            >
                                My Teams
                            </Link>
                            <Link
                                to="/student/certificates"
                                className="inline-flex rounded-full border border-(--cit-border) bg-(--cit-surface-subtle) px-4 py-2 text-sm font-semibold text-(--cit-text)"
                            >
                                Certificates
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-5">
                        <p className="text-sm font-semibold text-(--cit-text-muted)">
                            Events Registered
                        </p>
                        <h3 className="mt-3 text-3xl font-extrabold text-(--cit-text)">
                            {studentEvents.length}
                        </h3>
                    </div>
                    <div className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-5">
                        <p className="text-sm font-semibold text-(--cit-text-muted)">
                            Teams Joined
                        </p>
                        <h3 className="mt-3 text-3xl font-extrabold text-(--cit-text)">
                            2
                        </h3>
                    </div>
                    <div className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-5">
                        <p className="text-sm font-semibold text-(--cit-text-muted)">
                            Certificates Earned
                        </p>
                        <h3 className="mt-3 text-3xl font-extrabold text-(--cit-text)">
                            {totalCertificates}
                        </h3>
                    </div>
                </section>

                <section className="rounded-(--cit-radius-xl) border border-(--cit-border) bg-(--cit-surface) p-7">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
                            <h2 className="text-2xl font-extrabold text-(--cit-text)">
                                Your Registered Events
                            </h2>
                            <p className="mt-2 text-sm text-(--cit-text-muted)">
                                Upcoming events you have joined.
                            </p>
                        </div>
                    </div>

                    {studentEvents.length === 0 ? (
                        <div className="mt-6 rounded-(--cit-radius-lg) border border-dashed border-(--cit-border) bg-(--cit-surface-subtle) p-6 text-center text-sm text-(--cit-text-muted)">
                            No registered events yet. Browse events and join
                            your first one.
                        </div>
                    ) : (
                        <div className="mt-6 grid gap-4">
                            {studentEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="flex flex-col gap-4 rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-5 md:flex-row md:items-center md:justify-between"
                                >
                                    <div className="space-y-2">
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--cit-primary)">
                                            {event.category}
                                        </p>
                                        <h3 className="text-xl font-extrabold text-(--cit-text)">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm text-(--cit-text-muted)">
                                            {event.date} • {event.venue}
                                        </p>
                                    </div>
                                    <Link
                                        to={`/events/${event.id}`}
                                        className="inline-flex rounded-[10px] bg-(--cit-primary) px-4 py-2 text-sm font-semibold text-white transition hover:bg-(--cit-primary-hover)"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
