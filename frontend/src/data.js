const cards = [
    {
        id: 1,
        name: "Tech Conference 2026 with a Very Long Name That Should Be Clamped awndn maw dijojaw mawdkaw awkljd a wa ed awlka scjke  emk sdf esf efj ",
        date: "2026-02-25",
        time: "22:30",
        venue: "Kathmandu",
        entryType: "Free",
        participantsAllowedInTeam: 10,
        eventDescription:
            "A comprehensive tech conference covering latest industry trends and innovations.",
        conductedBy: "Tech Community",
        bannerUrl: "https://eventhubcc.vit.ac.in/EventHub/image/?id=793",
        policy: "Must be 18 years or older\nRegistration required 24 hours before\nIdentity verification mandatory",
    },
    {
        id: 2,
        name: "Startup Pitch Night",
        date: "2026-03-10",
        time: "6:30",
        venue: "Pokhara",
        entryType: "Paid",
        entryAmount: 1000,
        participantsAllowedInTeam: 4,
        eventDescription:
            "Network with startup founders and pitch your ideas to investors.",
        conductedBy: "Startup Hub",
        bannerUrl:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        policy: "Non-refundable ticket\nTeam lead must register\nBusiness plan submission required",
    },
    {
        id: 3,
        name: "Startup Pitch Night",
        date: "2026-03-10",
        time: "13:00",
        venue: "Pokhara",
        entryType: "Paid",
        entryAmount: 200,
        participantsAllowedInTeam: 4,
        eventDescription:
            "Network with startup founders and pitch your ideas to investors.",
        conductedBy: "Startup Hub",
        bannerUrl:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        policy: "Cancellation allowed 7 days prior\nProof of enrollment required\nAttendance mandatory for 80%",
    },
    {
        id: 4,
        name: "Startup Pitch Night",
        date: "2026-03-10",
        time: "00:00",
        venue: "Pokhara",
        entryType: "Paid",
        entryAmount: 300,
        participantsAllowedInTeam: 1,
        eventDescription:
            "Network with startup founders and pitch your ideas to investors.",
        conductedBy: "Startup Hub",
        bannerUrl:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        policy: "Solo participation only\nNo external assistance allowed\nDecision of judges is final",
    },
    {
        id: 5,
        name: "Tech Confej",
        date: "2026-02-25",
        time: "10:00",
        venue: "Kathmandu",
        entryType: "Free",
        participantsAllowedInTeam: 1,
        eventDescription:
            "Explore the latest advancements in technology and innovation.",
        conductedBy: "Tech Community",
        bannerUrl:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
        policy: "First come first serve\nValid ID required at entry\nNo photography allowed",
    },
    {
        id: 6,
        name: "AI Workshop",
        date: "2026-04-05",
        time: "2:00",
        venue: "Online",
        entryType: "Free",
        participantsAllowedInTeam: 2,
        eventDescription:
            "Learn AI fundamentals and practical applications with hands-on exercises.",
        conductedBy: "AI Institute",
        bannerUrl:
            "https://images.unsplash.com/photo-1620712014215-cd8074df76db?w=600&h=400&fit=crop",
        policy: "Basic programming knowledge required\nStable internet connection needed\nCertificate for completion",
    },
    {
        id: 7,
        name: "Web Development Bootcamp",
        date: "2026-04-15",
        time: "9:00",
        venue: "Kathmandu",
        entryType: "Paid",
        entryAmount: 1500,
        participantsAllowedInTeam: 1,
        eventDescription:
            "Intensive bootcamp covering modern web development technologies and best practices.",
        conductedBy: "Dev Academy",
        bannerUrl:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
        policy: "One payment per participant\nAttendance record maintained\nPlacement assistance provided",
    },
    {
        id: 8,
        name: "Mobile App Development Summit",
        date: "2026-05-01",
        time: "10:00",
        venue: "Pokhara",
        entryType: "Paid",
        entryAmount: 800,
        participantsAllowedInTeam: 3,
        eventDescription:
            "Summit focusing on mobile app development trends and frameworks.",
        conductedBy: "Mobile Dev Community",
        bannerUrl:
            "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=600&h=400&fit=crop",
        policy: "Team registration required\nGroup discount available\nNetworking session included",
    },
    {
        id: 9,
        name: "Cloud Computing Workshop",
        date: "2026-05-20",
        time: "14:00",
        venue: "Online",
        entryType: "Free",
        participantsAllowedInTeam: 5,
        eventDescription:
            "Master cloud computing concepts and deployment strategies.",
        conductedBy: "Cloud Experts",
        bannerUrl:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        policy: "Email confirmation required\nRecording will be available\nQ&A session at the end",
    },
    {
        id: 10,
        name: "Cybersecurity Conference",
        date: "2026-06-10",
        time: "9:30",
        venue: "Kathmandu",
        entryType: "Paid",
        entryAmount: 1200,
        participantsAllowedInTeam: 2,
        eventDescription:
            "Conference on latest cybersecurity threats, defense strategies, and best practices.",
        conductedBy: "Security Institute",
        bannerUrl:
            "https://images.unsplash.com/photo-1555808872-e79b1ef4a8bd?w=600&h=400&fit=crop",
        policy: "Professional attire required\nNDA agreement mandatory\nJOB networking opportunity",
    },
];

export default cards;
