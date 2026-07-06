export default function OrganizerCreateEvent() {
    return (
        <div className="grid gap-6">
            <section className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-6">
                <h2 className="text-2xl font-extrabold text-(--cit-text)">
                    Create Event
                </h2>
                <p className="mt-3 text-(--cit-text-muted)">
                    Start a new event and publish it to your organizer
                    dashboard.
                </p>
            </section>
        </div>
    );
}
