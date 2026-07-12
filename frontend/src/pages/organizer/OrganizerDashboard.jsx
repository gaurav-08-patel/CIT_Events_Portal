import { Link } from "react-router-dom";
import {
    Calendar,
    MapPin,
    Clock,
    Users,
    Banknote,
    Gift,
    Wifi,
    WifiOff,
    UserRound,
    UsersRound,
    Bookmark,
    Award,
    CalendarDays,
} from "lucide-react";
import { ALL_EVENTS } from "../../data/events";
import { useAuthContext } from "../../context/AuthContext";
import MetaData from "../../components/MetaData";

const categoryColors = {
    Hackathon: { color: "#1877F2", bg: "#E7F3FF" },
    Workshop: { color: "#9B51E0", bg: "#F3E8FF" },
    "Coding Challenge": { color: "#F7B928", bg: "#FEF9E7" },
    "AI/ML": { color: "#42B72A", bg: "#E6F9E3" },
    Technical: { color: "#FA3E3E", bg: "#FDE8E8" },
    Cultural: { color: "#E91E8C", bg: "#FFE4F5" },
    Sports: { color: "#0288D1", bg: "#E0F4FF" },
};

function getBadge(cat) {
    return categoryColors[cat] ?? { color: "#65676B", bg: "#F0F2F5" };
}

function EventCard({ event }) {
    const badge = getBadge(event.category);
    const fillPct = Math.round(
        (event.participants / event.maxParticipants) * 100,
    );

    return (
        <Link
            to={`/events/${event.id}`}
            className="group flex flex-col overflow-hidden rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) shadow-(--cit-shadow-sm) transition-all duration-200 hover:-translate-y-1.5 hover:shadow-(--cit-shadow-lg)"
        >
            <div className="relative h-40 shrink-0 bg-(--cit-bg)">
                <img
                    src={event.image}
                    alt={event.title}
                    className="block h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />

                <div className="absolute left-3 top-3 flex gap-1.5">
                    <span
                        className="rounded-(--cit-radius-sm) px-2.5 py-0.5 text-[11px] font-bold"
                        style={{ background: badge.bg, color: badge.color }}
                    >
                        {event.category}
                    </span>
                    {event.featured && (
                        <span className="rounded-(--cit-radius-sm) bg-(--cit-warning) px-2.5 py-0.5 text-[11px] font-bold text-white">
                            ★ Featured
                        </span>
                    )}
                </div>

                <div className="absolute right-3 top-3">
                    <span
                        className="flex items-center gap-1 rounded-(--cit-radius-sm) px-2.5 py-0.5 text-[11px] font-bold"
                        style={{
                            background: event.paid ? "#FDE8E8" : "#E6F9E3",
                            color: event.paid ? "#FA3E3E" : "#42B72A",
                        }}
                    >
                        {event.paid ? (
                            <Banknote size={11} />
                        ) : (
                            <Gift size={11} />
                        )}
                        {event.paid ? "Paid" : "Free"}
                    </span>
                </div>

                <div className="absolute bottom-2.5 left-3">
                    <span className="flex items-center gap-1 rounded-(--cit-radius-sm) bg-black/65 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                        {event.mode === "Online" ? (
                            <Wifi size={11} />
                        ) : (
                            <WifiOff size={11} />
                        )}
                        {event.mode}
                    </span>
                </div>

                <div className="absolute bottom-2.5 right-3">
                    <span className="flex items-center gap-1 rounded-(--cit-radius-sm) bg-black/65 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                        {event.type === "Team" ? (
                            <UsersRound size={11} />
                        ) : (
                            <UserRound size={11} />
                        )}
                        {event.type}
                    </span>
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-2.5 px-4 py-4">
                <h3 className="line-clamp-2 text-sm font-bold text-(--cit-text)">
                    {event.title}
                </h3>

                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                        <Calendar
                            size={13}
                            color="var(--cit-primary)"
                            className="shrink-0"
                        />
                        <span className="text-xs text-(--cit-text-muted)">
                            {event.date}
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MapPin
                            size={13}
                            color="var(--cit-text-muted)"
                            className="shrink-0"
                        />
                        <span className="truncate text-xs text-(--cit-text-muted)">
                            {event.venue}
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock
                            size={13}
                            color="var(--cit-danger)"
                            className="shrink-0"
                        />
                        <span className="text-xs font-semibold text-(--cit-danger)">
                            {event.deadline}
                        </span>
                    </div>
                </div>

                <div>
                    <div className="mb-1.5 flex justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                            <Users size={12} color="#65676B" />
                            <span className="text-xs text-(--cit-text-muted)">
                                {event.participants.toLocaleString()} /{" "}
                                {event.maxParticipants.toLocaleString()}
                            </span>
                        </div>
                        <span
                            className="text-[11px] font-semibold"
                            style={{
                                color:
                                    fillPct > 80
                                        ? "#FA3E3E"
                                        : fillPct > 50
                                          ? "#F7B928"
                                          : "#42B72A",
                            }}
                        >
                            {fillPct}% filled
                        </span>
                    </div>
                    <div
                        style={{
                            height: 5,
                            background: "#F0F2F5",
                            borderRadius: 10,
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                height: "100%",
                                width: `${fillPct}%`,
                                background:
                                    fillPct > 80
                                        ? "#FA3E3E"
                                        : fillPct > 50
                                          ? "#F7B928"
                                          : "#42B72A",
                                borderRadius: 10,
                            }}
                        />
                    </div>
                </div>

                <div className="mt-auto">
                    <button
                        className="cursor-pointer w-full rounded-(--cit-radius-md) bg-(--cit-primary) px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-(--cit-primary-hover)"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default function OrganizerDashboard() {
    const { user } = useAuthContext();
    const displayName = user?.name || user?.email?.split("@")[0] || "Organizer";

    // Events created by this organizer (fall back to a sample set)
    const createdEvents = ALL_EVENTS.filter(
        (e) =>
            e.organizerId && user && String(e.organizerId) === String(user.id),
    );
    const eventsToShow =
        createdEvents.length > 0 ? createdEvents : ALL_EVENTS.slice(0, 6);

    const totalEventsCreated = eventsToShow.length;
    const totalRegistrations = eventsToShow.reduce(
        (sum, ev) => sum + (ev.participants || 0),
        0,
    );
    const totalRevenue = 12500;

    const parseDate = (dateStr) => {
        const parts = dateStr.split(",");
        const year = parseInt(parts[1]?.trim()) || new Date().getFullYear();
        const monthDay = parts[0].trim().split(/\s+/);
        const month = new Date(`${monthDay[0]} 1, ${year}`).getMonth();
        const day = parseInt(monthDay[1]?.replace(/[–-].*/, "")) || 1;
        return new Date(year, month, day);
    };

    const recentEvents = eventsToShow
        .slice()
        .sort((a, b) => parseDate(b.date) - parseDate(a.date));

    return (
        <>
            <MetaData
                title="Organizer Dashboard"
                description="Overview of your created events, registrations, and revenue."
                canonical="/organizer/dashboard"
            />
            <main className="min-h-screen bg-(--cit-bg) py-4 md:px-8 lg:px-10">
                <div className="mx-auto max-w-300 space-y-4 sm:space-y-8">
                    <section>
                        <h1
                            className="font-extrabold text-(--cit-text) leading-tight"
                            style={{
                                fontSize: "clamp(1.495rem, 5vw, 2.25rem)",
                            }}
                        >
                            Welcome Back,
                            <br /> {displayName}
                        </h1>
                        <p className="text-sm text-(--cit-text-muted)">
                            Manage your events and monitor performance.
                        </p>
                    </section>

                    <section className="grid gap-1 md:gap-4 md:grid-cols-3">
                        <div className="flex items-center gap-4 rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-2 sm:p-4 lg:p-6 shadow-(--cit-shadow-sm)">
                            <Bookmark
                                size={40}
                                color="var(--cit-primary)"
                                className="shrink-0"
                            />
                            <div>
                                <p
                                    className="font-semibold text-(--cit-text-muted)"
                                    style={{
                                        fontSize:
                                            "clamp(0.75rem, 1.5vw, 1.3rem)",
                                    }}
                                >
                                    Total Events Created
                                </p>
                                <h3
                                    className="font-extrabold text-(--cit-text)"
                                    style={{
                                        fontSize:
                                            "clamp(1.875rem, 3vw, 2.8rem)",
                                    }}
                                >
                                    {totalEventsCreated}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-2 sm:p-4 lg:p-6 shadow-(--cit-shadow-sm)">
                            <Users
                                size={40}
                                color="var(--cit-primary)"
                                className="shrink-0"
                            />
                            <div>
                                <p
                                    className="font-semibold text-(--cit-text-muted)"
                                    style={{
                                        fontSize:
                                            "clamp(0.75rem, 1.5vw, 1.3rem)",
                                    }}
                                >
                                    Total Registrations
                                </p>
                                <h3
                                    className="font-extrabold text-(--cit-text)"
                                    style={{
                                        fontSize:
                                            "clamp(1.875rem, 3vw, 2.8rem)",
                                    }}
                                >
                                    {totalRegistrations}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-2 sm:p-4 lg:p-6 shadow-(--cit-shadow-sm)">
                            <Banknote
                                size={40}
                                color="var(--cit-primary)"
                                className="shrink-0"
                            />
                            <div>
                                <p
                                    className="font-semibold text-(--cit-text-muted)"
                                    style={{
                                        fontSize:
                                            "clamp(0.75rem, 1.5vw, 1.3rem)",
                                    }}
                                >
                                    Total Revenue
                                </p>
                                <h3
                                    className="font-extrabold text-(--cit-text)"
                                    style={{
                                        fontSize:
                                            "clamp(1.875rem, 3vw, 2.8rem)",
                                    }}
                                >
                                    ₹{totalRevenue.toLocaleString()}
                                </h3>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <div>
                            <h2 className="text-2xl font-extrabold text-(--cit-text)">
                                Recent Events
                            </h2>
                            <p className="mt-1 text-sm text-(--cit-text-muted)">
                                Events you've created or managed recently
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {recentEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
