import { Link, useNavigate } from "react-router-dom";
import { Calendar, MapPin, Users, IndianRupee } from "lucide-react";
import { BsPersonStanding } from "react-icons/bs";

function Card({ card: event }) {
    function formatTime24to12(time24) {
        const [hourStr, minuteStr] = time24.split(":");
        let hour = Number(hourStr);
        const minutes = minuteStr;

        const ampm = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;

        return `${hour}:${minutes} ${ampm}`;
    }

    return (
        <div className="bg-[#2f4154] text-white shadow-md rounded-lg p-6 flex flex-col justify-between">
            {/* Event Title */}
            <h2 className=" text-3xl font-semibold line-clamp-3 text-yellow-300 text-center mb-3 min-h-23.75">
                {event.name}
            </h2>

            {/* Event Details */}
            <div className="space-y-2 text-sm text-gray-300 mt-auto">
                <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>
                        {formatTime24to12(event.time)} on {event.date}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="line-clamp-1">{event.venue}</span>
                </div>

                <div className="flex items-center gap-2">
                    <IndianRupee size={16} />
                    <span>{event.entryType}</span>
                    {event.entryType === "Paid" &&
                        ` (${event?.entryAmount} per person)`}
                </div>

                <div className="flex items-center gap-2">
                    {event.participantsAllowedInTeam === 1 ? (
                        <BsPersonStanding size={16} />
                    ) : (
                        <Users size={16} />
                    )}

                    <span>
                        {event.participantsAllowedInTeam > 1
                            ? `1 - ${event.participantsAllowedInTeam}`
                            : `1`}
                    </span>
                </div>
            </div>

            {/* Action Button */}
            <Link to={`event/${event.id}`}>
                <button className="cursor-pointer w-full mt-4 px-4 py-2 bg-[rgb(0,188,255)] text-white rounded hover:bg-blue-700 transition transition-duration-300">
                    View
                </button>
            </Link>
        </div>
    );
}

export default Card;
