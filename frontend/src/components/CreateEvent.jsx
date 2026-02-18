import * as React from "react";
import InputBox from "./InputBox";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const CreateEvent = () => {
    const [eventDetails, setEventDetails] = React.useState({ paid: false });
    const [rule, setRule] = React.useState("");
    const [eventRules, setEventRules] = React.useState([]);
    console.log(eventDetails);

    function onRulesSubmit(e) {
        e.preventDefault();
        if (!rule) return;
        setEventRules([...eventRules, rule]);
        setRule("");
    }

    React.useEffect(() => {
        setEventDetails({ ...eventDetails, rules: eventRules.join("\n") });
    }, [eventRules]);

    return (
        <div className="max-w-3xl mx-auto p-2 md:p-8">
            {/* Header */}
            <h1 className="text-4xl max-sm:text-3xl font-bold text-gray-900 mb-8 text-center mt-6">
                Create Event
            </h1>

            {/* Card */}
            <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 space-y-5 border border-gray-200">
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-semibold text-gray-800 max-sm:text-xl">
                        Enter Event Details
                    </h2>
                </div>

                <p className="text-sm text-gray-500 bg-gray-50 rounded-lg border-2 border-gray-100 p-4">
                    Make sure all the details about Event are correct before
                    creating the event.
                </p>

                {/* Event name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Event Name
                    </label>
                    <InputBox
                        type="text"
                        placeholder="Enter Event name"
                        className="mt-1 w-full bg-gray-50 rounded-lg border border-gray-300 max-sm:py-2 max-sm:text-sm"
                        value={eventDetails.eventName}
                        onChange={(e) =>
                            setEventDetails({
                                ...eventDetails,
                                eventName: e.target.value.toUpperCase(),
                            })
                        }
                    />
                </div>

                {/* event descritption */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Event Description
                    </label>
                    <Textarea
                        className="mt-1 border-gray-300 focus-visible:ring-0"
                        value={eventDetails.description}
                        onChange={(e) =>
                            setEventDetails({
                                ...eventDetails,
                                description: e.target.value,
                            })
                        }
                        placeholder="Enter Event description"
                    />
                </div>

                {/* event venue */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Event Venue
                    </label>
                    <InputBox
                        type="text"
                        placeholder="Enter Event Venue"
                        className="mt-1 w-full bg-gray-50 rounded-lg border border-gray-300 max-sm:py-2 max-sm:text-sm font-normal"
                        value={eventDetails.venue}
                        onChange={(e) =>
                            setEventDetails({
                                ...eventDetails,
                                venue: e.target.value,
                            })
                        }
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Rules/Policy for Event
                    </label>

                    {/*  rules in bulletpoint */}
                    {eventRules.length !== 0 && (
                        <div>
                            <ul className="bg-gray-50 p-2 mb-2 border border-gray-300 rounded-lg">
                                {eventRules.map((rule, index) => (
                                    <li
                                        key={index}
                                        className="list-disc list-inside"
                                    >
                                        {rule}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/*  add rules */}
                    <form
                        className="flex gap-2  items-center"
                        onSubmit={onRulesSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Enter Rule"
                            value={rule}
                            onChange={(e) => setRule(e.target.value)}
                            className="focus:outline-none w-1/2 max-sm:w-full bg-gray-50 rounded-lg border border-gray-300 max-sm:py-2 max-sm:text-sm py-1 px-2"
                        />
                        <button className="rounded-lg  bg-yellow-400 px-4 py-2 text-white text-nowrap cursor-pointer font-semibold text-sm hover:bg-yellow-500 transition">
                            Add Rule
                        </button>
                    </form>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Upload Event Banner
                    </label>
                    <Input
                        type="file"
                        className="w-1/2 max-sm:w-full cursor-pointer border border-gray-300 mt-1 "
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Entry Type
                    </label>
                    <div className="flex gap-5">
                        <div className="flex flex-col justify-center">
                            <span className="flex gap-2 items-center">
                                <Checkbox
                                    id="free"
                                    className="rounded-full "
                                    defaultChecked
                                    checked={!eventDetails.paid}
                                    onCheckedChange={(e) =>
                                        setEventDetails({
                                            ...eventDetails,
                                            paid: false,
                                        })
                                    }
                                />
                                <label
                                    htmlFor="free"
                                    className="cursor-pointer text-sm"
                                >
                                    Free
                                </label>
                            </span>
                            <span className="flex gap-2 items-center">
                                <Checkbox
                                    id="paid"
                                    className="rounded-full"
                                    checked={eventDetails.paid}
                                    onCheckedChange={(e) =>
                                        setEventDetails({
                                            ...eventDetails,
                                            paid: true,
                                        })
                                    }
                                />
                                <label
                                    htmlFor="paid"
                                    className="cursor-pointer text-sm"
                                >
                                    Paid
                                </label>
                            </span>
                        </div>
                        {eventDetails.paid && (
                            <div className="pl-2 border-l">
                                <label className="block text-sm font-medium text-gray-700">
                                    Amount per member
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    className="mt-1 focus:outline-none w-fit bg-gray-50 rounded-lg border border-gray-300 max-sm:py-2 max-sm:text-sm py-1 px-2"
                                    onChange={(e) => {
                                        setEventDetails({
                                            ...eventDetails,
                                            amount: Number(e.target.value),
                                        });
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Number of Total Participants Allowed
                    </label>
                    <input
                        required
                        type="number"
                        onChange={(e) => {
                            setEventDetails({
                                ...eventDetails,
                                totalParticipants: Number(e.target.value),
                            });
                        }}
                        placeholder="Number of Participants"
                        className="mt-1 focus:outline-none w-fit bg-gray-50 rounded-lg border border-gray-300 max-sm:py-2 max-sm:text-sm py-1 px-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Registration Period
                    </label>
                    <div className="flex items-center mt-3 max-w-1/2 max-sm:max-w-full justify-between">
                        {/* date-picker for registration start */}
                        <div className="flex flex-col gap-1 ">
                            <label
                                className="text-gray-700 text-[10px]"
                                htmlFor="regStart"
                            >
                                Registration Start Date
                            </label>
                            <input
                                id="regStart"
                                type="date"
                                required
                                onChange={(e) => {
                                    setEventDetails({
                                        ...eventDetails,
                                        registrationStartDate: e.target.value,
                                    });
                                }}
                                className=" focus:outline-none w-fit bg-gray-50 rounded-lg border border-gray-300 max-sm:py-2 max-sm:text-sm py-1 px-2"
                            />
                        </div>

                        {/* date-picker for registration end */}
                        <div className="flex flex-col gap-1">
                            <label
                                className="text-gray-700 text-[10px]"
                                htmlFor="regEnd"
                            >
                                Registration End Date
                            </label>
                            <input
                                id="regEnd"
                                type="date"
                                required
                                onChange={(e) => {
                                    setEventDetails({
                                        ...eventDetails,
                                        registrationEndDate: e.target.value,
                                    });
                                }}
                                className="focus:outline-none w-fit bg-gray-50 rounded-lg border border-gray-300 max-sm:py-2 max-sm:text-sm py-1 px-2"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Event Date and Time
                    </label>
                    <div className="flex items-center  max-w-1/2 max-sm:max-w-full justify-between">
                        <div className="flex flex-col gap">
                            <label
                                className="text-gray-700 text-[10px]"
                                htmlFor="regStart"
                            >
                                Event Date
                            </label>

                            <input
                                type="date"
                                required
                                onChange={(e) => {
                                    setEventDetails({
                                        ...eventDetails,
                                        eventDate: e.target.value,
                                    });
                                }}
                                className="focus:outline-none w-fit bg-gray-50 rounded-lg border border-gray-300 max-sm:py-2 max-sm:text-sm py-1 px-2"
                            />
                        </div>
                        <div className="flex flex-col gap">
                            <label
                                className="text-gray-700 text-[10px]"
                                htmlFor="regStart"
                            >
                                Event Time(HH:MM)
                            </label>

                            <input
                                type="time"
                                placeholder="HH:MM"
                                pattern="[0-9]{2}:[0-9]{2}"
                                required
                                onChange={(e) => {
                                    setEventDetails({
                                        ...eventDetails,
                                        eventTime: e.target.value,
                                    });
                                }}
                                className="focus:outline-none bg-gray-50 rounded-lg border border-gray-300 max-sm:py-2 max-sm:text-sm py-1 px-2"
                            />
                        </div>
                    </div>
                </div>
                <button className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition cursor-pointer">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default CreateEvent;
