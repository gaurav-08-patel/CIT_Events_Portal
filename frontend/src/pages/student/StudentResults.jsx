import MetaData from "../../components/MetaData";

export default function StudentResults() {
    return (
        <>
            <MetaData
                title="Results"
                description="View your competition results and performance summaries."
                canonical="/student/result"
            />
            <div className="grid gap-6">
                <section className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-6">
                    <h2 className="text-2xl font-extrabold text-(--cit-text)">
                        Results
                    </h2>
                    <p className="mt-3 text-(--cit-text-muted)">
                        Your results summary and performance details will appear
                        here soon.
                    </p>
                </section>
            </div>
        </>
    );
}
