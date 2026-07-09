import { Link } from "react-router-dom";
import { REGISTERED_EVENTS } from "../../data/registeredEvents";

// Helper function to get payment status badge color
const getPaymentStatusColor = (status) => {
    switch (status) {
        case "Paid":
            return "bg-green-100 text-green-800";
        case "Pending":
            return "bg-yellow-100 text-yellow-800";
        case "Failed":
            return "bg-red-100 text-red-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
};

// Helper function to get event type badge color
const getEventTypeColor = (type) => {
    return type === "Team"
        ? "bg-blue-100 text-blue-800"
        : "bg-purple-100 text-purple-800";
};

export default function StudentMyEvents() {
    return (
        <main className="min-h-screen bg-(--cit-bg) px-4 py-6 sm:px-6 md:px-8 lg:px-10">
            <div className="mx-auto w-full rounded-(--cit-radius-xl) border border-(--cit-border) bg-(--cit-surface) p-4 sm:p-7">
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-(--cit-text)">
                        My Events
                    </h1>
                    <p className="mt-2 text-xs sm:text-sm text-(--cit-text-muted)">
                        View all events you have registered for and manage your
                        payments.
                    </p>
                </div>

                {REGISTERED_EVENTS.length === 0 ? (
                    <div className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-bg) p-8 text-center">
                        <p className="text-(--cit-text-muted)">
                            You haven't registered for any events yet.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Mobile Card View */}
                        <div className="block md:hidden space-y-4">
                            {REGISTERED_EVENTS.map((event) => (
                                <div
                                    key={event.eventId}
                                    className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-bg) p-4 space-y-3"
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex-1">
                                            <p className="text-xs font-semibold text-(--cit-primary) uppercase tracking-[0.18em]">
                                                #{event.eventId}
                                            </p>
                                            <h3 className="mt-1 text-sm font-semibold text-(--cit-text) line-clamp-2">
                                                {event.eventName}
                                            </h3>
                                        </div>
                                        <span
                                            className={`whitespace-nowrap rounded-full px-2 py-1 text-xs font-semibold ${getEventTypeColor(
                                                event.eventType,
                                            )}`}
                                        >
                                            {event.eventType}
                                        </span>
                                    </div>

                                    {event.eventType === "Team" &&
                                    event.teamName ? (
                                        <div>
                                            <p className="text-xs text-(--cit-text-muted)">
                                                Team
                                            </p>
                                            <p className="text-sm font-medium text-(--cit-text)">
                                                {event.teamName}
                                            </p>
                                        </div>
                                    ) : null}

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <p className="text-xs text-(--cit-text-muted)">
                                                Amount
                                            </p>
                                            <p className="text-sm font-semibold text-(--cit-text)">
                                                {event.isPaid
                                                    ? event.totalAmount
                                                    : "Free"}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-(--cit-text-muted)">
                                                Status
                                            </p>
                                            <span
                                                className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${getPaymentStatusColor(
                                                    event.paymentStatus,
                                                )}`}
                                            >
                                                {event.paymentStatus}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-2">
                                        {event.isPaid &&
                                        event.paymentStatus !== "Paid" ? (
                                            <Link
                                                to={`/events/${event.eventId}/payment`}
                                                className="flex-1 rounded-md bg-(--cit-primary) px-3 py-2 text-xs font-semibold text-white text-center transition hover:bg-(--cit-primary-hover)"
                                            >
                                                Pay Now
                                            </Link>
                                        ) : null}
                                        <Link
                                            to={`/events/${event.eventId}`}
                                            className="flex-1 rounded-md bg-(--cit-primary) px-3 py-2 text-xs font-semibold text-white text-center transition hover:bg-(--cit-primary-hover)"
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Table View */}
                        <div className="hidden md:block overflow-x-auto rounded-(--cit-radius-lg) border border-(--cit-border)">
                            <table className="w-full text-sm">
                                <thead className="bg-(--cit-bg) border-b border-(--cit-border)">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                            Event ID
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                            Event Name
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                            Type
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                            Team Name
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                            Payment Status
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                            Total Amount
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                            Payment
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-(--cit-text)">
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-(--cit-border)">
                                    {REGISTERED_EVENTS.map((event) => (
                                        <tr
                                            key={event.eventId}
                                            className="hover:bg-(--cit-bg) transition-colors"
                                        >
                                            {/* Event ID */}
                                            <td className="px-4 py-4 text-xs font-semibold text-(--cit-primary) uppercase tracking-[0.18em]">
                                                #{event.eventId}
                                            </td>

                                            {/* Event Name */}
                                            <td className="px-4 py-4 font-medium text-(--cit-text) max-w-xs truncate">
                                                {event.eventName}
                                            </td>

                                            {/* Event Type */}
                                            <td className="px-4 py-4">
                                                <span
                                                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getEventTypeColor(
                                                        event.eventType,
                                                    )}`}
                                                >
                                                    {event.eventType}
                                                </span>
                                            </td>

                                            {/* Team Name */}
                                            <td className="px-4 py-4 text-(--cit-text-muted)">
                                                {event.eventType === "Team" &&
                                                event.teamName ? (
                                                    <span className="inline-flex rounded-md bg-(--cit-bg) px-2 py-1 font-medium text-(--cit-text)">
                                                        {event.teamName}
                                                    </span>
                                                ) : (
                                                    <span className="text-(--cit-text-muted)">
                                                        —
                                                    </span>
                                                )}
                                            </td>

                                            {/* Payment Status */}
                                            <td className="px-4 py-4">
                                                <span
                                                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getPaymentStatusColor(
                                                        event.paymentStatus,
                                                    )}`}
                                                >
                                                    {event.paymentStatus}
                                                </span>
                                            </td>

                                            {/* Total Amount */}
                                            <td className="px-4 py-4 font-medium text-(--cit-text)">
                                                {event.isPaid
                                                    ? event.totalAmount
                                                    : "Free"}
                                            </td>

                                            {/* Payment Link */}
                                            <td className="px-4 py-4">
                                                {event.isPaid &&
                                                event.paymentStatus !==
                                                    "Paid" ? (
                                                    <Link
                                                        to={`/events/${event.eventId}/payment`}
                                                        className="inline-flex rounded-md bg-(--cit-primary) px-3 py-2 text-xs font-semibold text-white transition hover:bg-(--cit-primary-hover)"
                                                    >
                                                        Pay Now
                                                    </Link>
                                                ) : (
                                                    <span className="text-(--cit-text-muted)">
                                                        —
                                                    </span>
                                                )}
                                            </td>

                                            {/* View Details */}
                                            <td className="px-4 py-4">
                                                <Link
                                                    to={`/events/${event.eventId}`}
                                                    className="inline-flex rounded-md bg-(--cit-primary) px-3 py-2 text-xs font-semibold text-white transition hover:bg-(--cit-primary-hover)"
                                                >
                                                    View
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}

                {/* Stats Section */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <div className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-bg) p-4 sm:p-6">
                        <p className="text-xs sm:text-sm font-medium text-(--cit-text-muted)">
                            Total Registered
                        </p>
                        <p className="mt-2 text-xl sm:text-2xl font-extrabold text-(--cit-primary)">
                            {REGISTERED_EVENTS.length}
                        </p>
                    </div>
                    <div className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-bg) p-4 sm:p-6">
                        <p className="text-xs sm:text-sm font-medium text-(--cit-text-muted)">
                            Team Events
                        </p>
                        <p className="mt-2 text-xl sm:text-2xl font-extrabold text-(--cit-primary)">
                            {
                                REGISTERED_EVENTS.filter(
                                    (e) => e.eventType === "Team",
                                ).length
                            }
                        </p>
                    </div>
                    <div className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-bg) p-4 sm:p-6 sm:col-span-2 md:col-span-1">
                        <p className="text-xs sm:text-sm font-medium text-(--cit-text-muted)">
                            Pending Payments
                        </p>
                        <p className="mt-2 text-xl sm:text-2xl font-extrabold text-red-600">
                            {
                                REGISTERED_EVENTS.filter(
                                    (e) => e.paymentStatus === "Pending",
                                ).length
                            }
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
