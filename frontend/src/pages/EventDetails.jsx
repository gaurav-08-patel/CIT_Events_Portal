import { useMemo, useState } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import {
    ArrowLeft,
    Banknote,
    Calendar,
    Clock,
    MapPin,
    Tag,
    Trophy,
    UserRound,
    Wifi,
    WifiOff,
    Users,
} from "lucide-react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { ALL_EVENTS } from "../data/events";
import Layout from "../layout/Layout";
import MetaData from "../components/MetaData";

export default function EventDetails() {
    const { id } = useParams();
    const eventId = Number(id);
    const event = useMemo(
        () => ALL_EVENTS.find((item) => item.id === eventId),
        [eventId],
    );
    const { isLoggedIn } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();
    const [registered, setRegistered] = useState(false);

    if (!event) {
        return (
            <Layout>
                <main className="relative min-h-screen bg-(--cit-bg) text-(--cit-text)">
                    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
                        <div className="rounded-(--cit-radius-xl) border border-(--cit-border) bg-(--cit-surface) p-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--cit-text-muted)">
                                Event not found
                            </p>
                            <h1 className="mt-4 text-3xl font-extrabold text-(--cit-text)">
                                Sorry, we couldn&rsquo;t find that event.
                            </h1>
                            <p className="mt-3 text-sm leading-6 text-(--cit-text-muted)">
                                Please select another event from the listing.
                            </p>
                            <Link
                                to="/events"
                                className="mt-8 inline-flex rounded-(--cit-radius-md) bg-(--cit-primary) px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-(--cit-primary-hover)"
                            >
                                Back to events
                            </Link>
                        </div>
                    </div>
                </main>
            </Layout>
        );
    }

    const handleLogin = () => {
        navigate("/login", {
            state: { from: location.pathname },
        });
    };

    const handleRegister = () => {
        if (!isLoggedIn) {
            handleLogin();
            return;
        }

        if (!registered) {
            setRegistered(true);
            toast.success("You are registered for this event!");
        }
    };

    return (
        <Layout>
            <main className="relative min-h-screen bg-(--cit-bg) text-(--cit-text)">
                <MetaData
                    title={event.title}
                    description={event.description}
                    canonical={`/events/${event.id}`}
                    image={event.image}
                />

                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <Link
                            to="/events"
                            className="inline-flex items-center gap-2 rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface) px-4 py-2 text-sm font-semibold text-(--cit-text) transition-colors hover:border-(--cit-primary) hover:text-(--cit-primary)"
                        >
                            <ArrowLeft size={16} /> Back to events
                        </Link>
                        <span className="rounded-[10px] bg-(--cit-primary-soft) px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-(--cit-primary)">
                            {event.category}
                        </span>
                    </div>

                    <div className="overflow-hidden rounded-(--cit-radius-xl) border border-(--cit-border) bg-(--cit-surface) shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
                        <div className="relative h-90 bg-(--cit-bg)">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/35" />
                            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                                <span className="inline-flex rounded-[10px] bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/90">
                                    {event.type}
                                </span>
                                <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                                    {event.title}
                                </h1>
                                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
                                    {event.description}
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 px-6 py-8 lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
                            <section className="space-y-6">
                                <div className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface-subtle) p-6">
                                    <h2 className="text-xl font-bold text-(--cit-text)">
                                        Event details
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-(--cit-text-muted)">
                                        {event.description}
                                    </p>

                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                        <div className="rounded-(--cit-radius-md) bg-white/80 p-4 text-(--cit-text)">
                                            <div className="flex items-center gap-2 text-sm font-semibold text-(--cit-text)">
                                                <Calendar size={16} /> Date
                                            </div>
                                            <p className="mt-2 text-sm text-(--cit-text-muted)">
                                                {event.date}
                                            </p>
                                        </div>
                                        <div className="rounded-(--cit-radius-md) bg-white/80 p-4 text-(--cit-text)">
                                            <div className="flex items-center gap-2 text-sm font-semibold text-(--cit-text)">
                                                <MapPin size={16} /> Venue
                                            </div>
                                            <p className="mt-2 text-sm text-(--cit-text-muted)">
                                                {event.venue}
                                            </p>
                                        </div>
                                        <div className="rounded-(--cit-radius-md) bg-white/80 p-4 text-(--cit-text)">
                                            <div className="flex items-center gap-2 text-sm font-semibold text-(--cit-text)">
                                                <Clock size={16} /> Deadline
                                            </div>
                                            <p className="mt-2 text-sm text-(--cit-text-muted)">
                                                {event.deadline}
                                            </p>
                                        </div>
                                        <div className="rounded-(--cit-radius-md) bg-white/80 p-4 text-(--cit-text)">
                                            <div className="flex items-center gap-2 text-sm font-semibold text-(--cit-text)">
                                                <Users size={16} /> Participants
                                            </div>
                                            <p className="mt-2 text-sm text-(--cit-text-muted)">
                                                {event.participants} of{" "}
                                                {event.maxParticipants} joined
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface-subtle) p-6">
                                    <h3 className="text-lg font-bold text-(--cit-text)">
                                        Event highlights
                                    </h3>
                                    <div className="mt-4 grid gap-3 text-sm text-(--cit-text-muted)">
                                        <div className="flex items-center gap-3 rounded-(--cit-radius-md) bg-white/80 p-4">
                                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-(--cit-primary-soft) text-(--cit-primary)">
                                                <Wifi size={16} />
                                            </span>
                                            <div>
                                                <p className="font-semibold text-(--cit-text)">
                                                    {event.mode} event
                                                </p>
                                                <p>Location format</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 rounded-(--cit-radius-md) bg-white/80 p-4">
                                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-(--cit-primary-soft) text-(--cit-primary)">
                                                <Tag size={16} />
                                            </span>
                                            <div>
                                                <p className="font-semibold text-(--cit-text)">
                                                    Department
                                                </p>
                                                <p>{event.department}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 rounded-(--cit-radius-md) bg-white/80 p-4">
                                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-(--cit-primary-soft) text-(--cit-primary)">
                                                <Trophy size={16} />
                                            </span>
                                            <div>
                                                <p className="font-semibold text-(--cit-text)">
                                                    Prize
                                                </p>
                                                <p>{event.prize}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <aside className="space-y-5">
                                <div className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface-subtle) p-6">
                                    <div className="mb-5 flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--cit-text-muted)">
                                                Register
                                            </p>
                                            <h2 className="mt-2 text-2xl font-bold text-(--cit-text)">
                                                Join this event
                                            </h2>
                                        </div>
                                        <div className="rounded-[10px] bg-(--cit-primary-soft) px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-(--cit-primary)">
                                            {event.paid ? "Paid" : "Free"}
                                        </div>
                                    </div>
                                    <div className="grid gap-3 text-sm text-(--cit-text-muted)">
                                        <div className="flex items-center justify-between rounded-(--cit-radius-md) bg-white/80 px-4 py-3">
                                            <span>Type</span>
                                            <strong className="text-(--cit-text)">
                                                {event.type}
                                            </strong>
                                        </div>
                                        <div className="flex items-center justify-between rounded-(--cit-radius-md) bg-white/80 px-4 py-3">
                                            <span>Seats</span>
                                            <strong className="text-(--cit-text)">
                                                {event.maxParticipants -
                                                    event.participants}{" "}
                                                left
                                            </strong>
                                        </div>
                                        <div className="flex items-center justify-between rounded-(--cit-radius-md) bg-white/80 px-4 py-3">
                                            <span>Deadline</span>
                                            <strong className="text-(--cit-text)">
                                                {event.deadline}
                                            </strong>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleRegister}
                                        disabled={registered}
                                        className="mt-6 inline-flex w-full items-center justify-center rounded-(--cit-radius-md) bg-(--cit-primary) px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-(--cit-primary-hover) disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {registered
                                            ? "Registered"
                                            : isLoggedIn
                                              ? "Register Now"
                                              : "Login to Register"}
                                    </button>
                                </div>

                                <div className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface-subtle) p-6">
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-(--cit-text-muted)">
                                        Event tags
                                    </h3>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {event.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-lg bg-white/90 px-3 py-2 text-xs font-semibold text-(--cit-text)"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
