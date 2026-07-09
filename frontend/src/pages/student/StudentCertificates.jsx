import MetaData from "../../components/MetaData";

export default function StudentCertificates() {
    return (
        <>
            <MetaData
                title="Certificates"
                description="View and download your earned certificates from CIT events."
                canonical="/student/certificates"
            />
            <main className="min-h-screen bg-(--cit-bg) px-6 py-10 md:px-8 lg:px-10">
                <div className="mx-auto max-w-300 rounded-(--cit-radius-xl) border border-(--cit-border) bg-(--cit-surface) p-7">
                    <h1 className="text-3xl font-extrabold text-(--cit-text)">
                        Certificates
                    </h1>
                    <p className="mt-2 text-sm text-(--cit-text-muted)">
                        Certificate history will appear here soon.
                    </p>
                </div>
            </main>
        </>
    );
}
