import { useState } from "react";
import { AlertCircle, CalendarDays, Clock3, Users } from "lucide-react";
import MetaData from "../../components/MetaData";
import { ALL_EVENTS } from "../../data/events";

const organizerEvents = ALL_EVENTS.slice(0, 6).map((event, index) => {
    const isTeamEvent = event.type === "Team";

    return {
        ...event,
        registrations: isTeamEvent
            ? [
                  {
                      id: `TM-${index + 1}01`,
                      teamName: "Pixel Pioneers",
                      teamSize: 4,
                      registrationDate: "Jun 10, 2025",
                      paymentStatus: "Paid",
                      leader: "Aarav Menon",
                      leaderEmail: "aarav@cit.edu",
                      members: [
                          { name: "Aarav Menon", email: "aarav@cit.edu" },
                          { name: "Meera S", email: "meera@cit.edu" },
                          { name: "Rohan K", email: "rohan@cit.edu" },
                          { name: "Nivitha P", email: "nivitha@cit.edu" },
                      ],
                  },
                  {
                      id: `TM-${index + 1}02`,
                      teamName: "Byte Builders",
                      teamSize: 3,
                      registrationDate: "Jun 12, 2025",
                      paymentStatus: "Pending",
                      leader: "Nisha Rao",
                      leaderEmail: "nisha@cit.edu",
                      members: [
                          { name: "Nisha Rao", email: "nisha@cit.edu" },
                          { name: "Karthik V", email: "karthik@cit.edu" },
                          { name: "Sanjana M", email: "sanjana@cit.edu" },
                      ],
                  },
              ]
            : [
                  {
                      id: `IND-${index + 1}01`,
                      name: "Sneha Nair",
                      email: "sneha@cit.edu",
                      registrationDate: "Jun 11, 2025",
                      paymentStatus: "Paid",
                  },
                  {
                      id: `IND-${index + 1}02`,
                      name: "Vikram D",
                      email: "vikram@cit.edu",
                      registrationDate: "Jun 13, 2025",
                      paymentStatus: "Pending",
                  },
              ],
    };
});

export default function OrganizerManageEvents() {
    const [selectedEventId, setSelectedEventId] = useState(
        organizerEvents[0]?.id ?? null,
    );
    const [activeTab, setActiveTab] = useState("all");
    const [expandedTeamId, setExpandedTeamId] = useState(null);

    const selectedEvent =
        organizerEvents.find((event) => event.id === selectedEventId) ?? null;

    const toggleExpandedTeam = (teamId) => {
        setExpandedTeamId((current) => (current === teamId ? null : teamId));
    };

    return (
        <>
            <MetaData
                title="Manage Events"
                description="Review event registrations, inspect participants, and manage approvals from one place."
                canonical="/organizer/manage-events"
            />
            <main className="min-h-screen bg-(--cit-bg) px-4 py-6 md:px-6 lg:px-8">
                <div className="mx-auto flex max-w-7xl flex-col gap-6">
                    <section className="rounded-(--cit-radius-xl) border border-(--cit-border) bg-linear-to-r from-(--cit-primary-soft) to-(--cit-surface) p-6 shadow-(--cit-shadow-sm)">
                        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--cit-primary)">
                                    Organizer workspace
                                </p>
                                <h1 className="mt-2 text-3xl font-extrabold text-(--cit-text)">
                                    Manage your events
                                </h1>
                                <p className="mt-3 max-w-2xl text-sm text-(--cit-text-muted)">
                                    Review every event you created, inspect
                                    registrations, and keep approvals moving
                                    without switching screens.
                                </p>
                            </div>
                            <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface) px-4 py-3">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--cit-text-muted)">
                                    Active events
                                </p>
                                <p className="mt-1 text-2xl font-bold text-(--cit-text)">
                                    {organizerEvents.length}
                                </p>
                            </div>
                        </div>
                    </section>

                    {organizerEvents.length === 0 ? (
                        <section className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-8 text-center shadow-(--cit-shadow-sm)">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-(--cit-primary-soft) text-(--cit-primary)">
                                <AlertCircle size={24} />
                            </div>
                            <h2 className="mt-4 text-xl font-bold text-(--cit-text)">
                                No events created yet
                            </h2>
                            <p className="mx-auto mt-2 max-w-md text-sm text-(--cit-text-muted)">
                                Create your first event to start reviewing
                                registrations and approvals from this page.
                            </p>
                        </section>
                    ) : (
                        <>
                            <section className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-5 shadow-(--cit-shadow-sm)">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <h2 className="text-lg font-bold text-(--cit-text)">
                                            Your events
                                        </h2>
                                        <p className="mt-1 text-sm text-(--cit-text-muted)">
                                            Choose one event to inspect
                                            participants and registration
                                            activity.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
                                    {organizerEvents.map((event) => {
                                        const isSelected =
                                            event.id === selectedEventId;

                                        return (
                                            <button
                                                key={event.id}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedEventId(
                                                        event.id,
                                                    );
                                                    setActiveTab("all");
                                                    setExpandedTeamId(null);
                                                }}
                                                className={`min-w-62.5 flex-1 rounded-(--cit-radius-md) border p-4 text-left transition-all duration-200 ${
                                                    isSelected
                                                        ? "border-(--cit-primary) bg-(--cit-primary-soft) shadow-(--cit-shadow-sm)"
                                                        : "border-(--cit-border) bg-(--cit-surface-subtle) hover:border-(--cit-primary) hover:bg-(--cit-surface)"
                                                }`}
                                            >
                                                <div className="flex items-start justify-between gap-3">
                                                    <div>
                                                        <p className="text-sm font-semibold text-(--cit-primary)">
                                                            {event.category}
                                                        </p>
                                                        <h3 className="mt-1 text-base font-bold text-(--cit-text)">
                                                            {event.title}
                                                        </h3>
                                                    </div>
                                                    <span className="rounded-full border border-(--cit-border) bg-(--cit-surface) px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-(--cit-text-muted)">
                                                        {event.type}
                                                    </span>
                                                </div>

                                                <div className="mt-4 flex flex-wrap gap-2 text-xs text-(--cit-text-muted)">
                                                    <span className="flex items-center gap-1 rounded-full bg-(--cit-surface) px-2.5 py-1">
                                                        <CalendarDays
                                                            size={12}
                                                        />{" "}
                                                        {event.date}
                                                    </span>
                                                    <span className="flex items-center gap-1 rounded-full bg-(--cit-surface) px-2.5 py-1">
                                                        <Users size={12} />{" "}
                                                        {event.participants}{" "}
                                                        regs
                                                    </span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </section>

                            {selectedEvent && (
                                <section className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-5 shadow-(--cit-shadow-sm)">
                                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h2 className="text-xl font-bold text-(--cit-text)">
                                                    {selectedEvent.title}
                                                </h2>
                                                <span className="rounded-full bg-(--cit-primary-soft) px-2.5 py-1 text-xs font-semibold text-(--cit-primary)">
                                                    {selectedEvent.type} event
                                                </span>
                                            </div>
                                            <p className="mt-3 max-w-2xl text-sm text-(--cit-text-muted)">
                                                {selectedEvent.description}
                                            </p>
                                        </div>

                                        <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-4">
                                            <div className="flex items-center gap-2 text-sm font-semibold text-(--cit-text)">
                                                <Clock3 size={16} />
                                                Deadline:{" "}
                                                {selectedEvent.deadline}
                                            </div>
                                            <div className="mt-2 flex items-center gap-2 text-sm text-(--cit-text-muted)">
                                                <Users size={16} />
                                                {
                                                    selectedEvent.participants
                                                }{" "}
                                                participants registered
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex gap-2 border-b border-(--cit-border) pb-2">
                                        <button
                                            type="button"
                                            onClick={() => setActiveTab("all")}
                                            className={`rounded-(--cit-radius-md) px-4 py-2 text-sm font-semibold transition-all ${
                                                activeTab === "all"
                                                    ? "bg-(--cit-primary) text-white"
                                                    : "bg-(--cit-surface-subtle) text-(--cit-text-muted)"
                                            }`}
                                        >
                                            All Participants
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveTab("pending")
                                            }
                                            className={`rounded-(--cit-radius-md) px-4 py-2 text-sm font-semibold transition-all ${
                                                activeTab === "pending"
                                                    ? "bg-(--cit-primary) text-white"
                                                    : "bg-(--cit-surface-subtle) text-(--cit-text-muted)"
                                            }`}
                                        >
                                            Pending Approvals
                                        </button>
                                    </div>

                                    {activeTab === "all" ? (
                                        <div className="mt-5 overflow-hidden rounded-(--cit-radius-md) border border-(--cit-border)">
                                            {selectedEvent.type === "Team" ? (
                                                <table className="min-w-full divide-y divide-(--cit-border) text-sm">
                                                    <thead className="bg-(--cit-surface-subtle)">
                                                        <tr>
                                                            <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                                                Team ID
                                                            </th>
                                                            <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                                                Team Name
                                                            </th>
                                                            <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                                                Team Size
                                                            </th>
                                                            <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                                                Registration
                                                                Date
                                                            </th>
                                                            <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                                                Payment Status
                                                            </th>
                                                            <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                                                Leader
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-(--cit-border) bg-(--cit-surface)">
                                                        {selectedEvent.registrations.map(
                                                            (team) => (
                                                                <>
                                                                    <tr
                                                                        key={
                                                                            team.id
                                                                        }
                                                                        className="cursor-pointer transition-all duration-200 hover:bg-(--cit-surface-subtle)"
                                                                        onClick={() =>
                                                                            toggleExpandedTeam(
                                                                                team.id,
                                                                            )
                                                                        }
                                                                    >
                                                                        <td className="px-4 py-3 font-semibold text-(--cit-text)">
                                                                            {
                                                                                team.id
                                                                            }
                                                                        </td>
                                                                        <td className="px-4 py-3 text-(--cit-text)">
                                                                            {
                                                                                team.teamName
                                                                            }
                                                                        </td>
                                                                        <td className="px-4 py-3 text-(--cit-text)">
                                                                            {
                                                                                team.teamSize
                                                                            }
                                                                        </td>
                                                                        <td className="px-4 py-3 text-(--cit-text-muted)">
                                                                            {
                                                                                team.registrationDate
                                                                            }
                                                                        </td>
                                                                        <td className="px-4 py-3">
                                                                            <span
                                                                                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                                                    team.paymentStatus ===
                                                                                    "Paid"
                                                                                        ? "bg-(--cit-success) bg-opacity-10 text-(--cit-success)"
                                                                                        : "bg-(--cit-warning) bg-opacity-10 text-(--cit-warning)"
                                                                                }`}
                                                                            >
                                                                                {
                                                                                    team.paymentStatus
                                                                                }
                                                                            </span>
                                                                        </td>
                                                                        <td className="px-4 py-3 text-(--cit-text)">
                                                                            {
                                                                                team.leader
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    {expandedTeamId ===
                                                                        team.id && (
                                                                        <tr className="bg-(--cit-surface-subtle) transition-all duration-200">
                                                                            <td
                                                                                colSpan="6"
                                                                                className="px-4 py-3"
                                                                            >
                                                                                <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface) p-3">
                                                                                    <div className="mb-2 flex items-center justify-between">
                                                                                        <h4 className="font-semibold text-(--cit-text)">
                                                                                            Team
                                                                                            members
                                                                                        </h4>
                                                                                        <span className="text-xs text-(--cit-text-muted)">
                                                                                            {
                                                                                                team.leaderEmail
                                                                                            }
                                                                                        </span>
                                                                                    </div>
                                                                                    <ul className="space-y-2">
                                                                                        {team.members.map(
                                                                                            (
                                                                                                member,
                                                                                            ) => (
                                                                                                <li
                                                                                                    key={
                                                                                                        member.email
                                                                                                    }
                                                                                                    className="flex items-center justify-between rounded-(--cit-radius-sm) bg-(--cit-surface-subtle) px-3 py-2 text-sm"
                                                                                                >
                                                                                                    <span className="text-(--cit-text)">
                                                                                                        {
                                                                                                            member.name
                                                                                                        }
                                                                                                    </span>
                                                                                                    <span className="text-(--cit-text-muted)">
                                                                                                        {
                                                                                                            member.email
                                                                                                        }
                                                                                                    </span>
                                                                                                </li>
                                                                                            ),
                                                                                        )}
                                                                                    </ul>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    )}
                                                                </>
                                                            ),
                                                        )}
                                                    </tbody>
                                                </table>
                                            ) : (
                                                <table className="min-w-full divide-y divide-(--cit-border) text-sm">
                                                    <thead className="bg-(--cit-surface-subtle)">
                                                        <tr>
                                                            <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                                                ID
                                                            </th>
                                                            <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                                                Name
                                                            </th>
                                                            <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                                                Email
                                                            </th>
                                                            <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                                                Payment Status
                                                            </th>
                                                            <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                                                Registration
                                                                Date
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-(--cit-border) bg-(--cit-surface)">
                                                        {selectedEvent.registrations.map(
                                                            (participant) => (
                                                                <tr
                                                                    key={
                                                                        participant.id
                                                                    }
                                                                    className="transition-all duration-200 hover:bg-(--cit-surface-subtle)"
                                                                >
                                                                    <td className="px-4 py-3 font-semibold text-(--cit-text)">
                                                                        {
                                                                            participant.id
                                                                        }
                                                                    </td>
                                                                    <td className="px-4 py-3 text-(--cit-text)">
                                                                        {
                                                                            participant.name
                                                                        }
                                                                    </td>
                                                                    <td className="px-4 py-3 text-(--cit-text-muted)">
                                                                        {
                                                                            participant.email
                                                                        }
                                                                    </td>
                                                                    <td className="px-4 py-3">
                                                                        <span
                                                                            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                                                participant.paymentStatus ===
                                                                                "Paid"
                                                                                    ? "bg-(--cit-success) bg-opacity-10 text-(--cit-success)"
                                                                                    : "bg-(--cit-warning) bg-opacity-10 text-(--cit-warning)"
                                                                            }`}
                                                                        >
                                                                            {
                                                                                participant.paymentStatus
                                                                            }
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-(--cit-text-muted)">
                                                                        {
                                                                            participant.registrationDate
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            ),
                                                        )}
                                                    </tbody>
                                                </table>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="mt-5 rounded-(--cit-radius-md) border border-dashed border-(--cit-border) bg-(--cit-surface-subtle) p-8 text-center text-sm text-(--cit-text-muted)">
                                            Pending approvals will be added in
                                            the next step.
                                        </div>
                                    )}
                                </section>
                            )}
                        </>
                    )}
                </div>
            </main>
        </>
    );
}
