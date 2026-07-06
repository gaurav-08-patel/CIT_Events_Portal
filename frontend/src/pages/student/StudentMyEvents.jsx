import { Link } from "react-router-dom";
import { ALL_EVENTS } from "../../data/events";

const registeredEventIds = [1, 5, 8];
const studentEvents = ALL_EVENTS.filter((event) =>
    registeredEventIds.includes(event.id),
);

export default function StudentMyEvents() {
    return (
        <main className="min-h-screen bg-(--cit-bg) px-6 py-10 md:px-8 lg:px-10">
            <div className="mx-auto max-w-6xl rounded-(--cit-radius-xl) border border-(--cit-border) bg-(--cit-surface) p-7">
                <h1 className="text-3xl font-extrabold text-(--cit-text)">
                    My Events
                </h1>
                <p className="mt-2 text-sm text-(--cit-text-muted)">
                    All events you have registered for.
                </p>
                <div className="mt-6 grid gap-4">
                    {studentEvents.map((event) => (
                        <div
                            key={event.id}
                            className="flex flex-col gap-4 rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-5 md:flex-row md:items-center md:justify-between"
                        >
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--cit-primary)">
                                    {event.category}
                                </p>
                                <h3 className="mt-2 text-xl font-extrabold text-(--cit-text)">
                                    {event.title}
                                </h3>
                                <p className="mt-2 text-sm text-(--cit-text-muted)">
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
            </div>
        </main>
    );
}
