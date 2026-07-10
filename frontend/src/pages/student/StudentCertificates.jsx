import { useState } from "react";
import MetaData from "../../components/MetaData";
import { CERTIFICATES } from "../../data/certificates";

export default function StudentCertificates() {
    const [activeCertificate, setActiveCertificate] = useState(null);
    const [isPreviewLoading, setIsPreviewLoading] = useState(false);

    return (
        <>
            <MetaData
                title="Achievement Certificates"
                description="Review and download your verified certificates from CIT events."
                canonical="/student/certificates"
            />
            <main className="min-h-screen bg-(--cit-bg) py-4">
                <div className="mx-auto max-w-300 space-y-6">
                    <div className="rounded-(--cit-radius-xl) border border-(--cit-border) bg-(--cit-surface) p-4 lg:p-6 shadow-(--cit-shadow-sm)">
                        <h3 className="text-xl font-extrabold text-(--cit-text)">
                            Your earned certificates
                        </h3>
                        <p className="mt-1 max-w-2xl text-[12px] md:text-sm text-(--cit-text-muted)">
                            Explore certificates you have earned from CIT
                            events, view them instantly in a preview window, and
                            download your verified PDF copy.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        {CERTIFICATES.map((certificate) => (
                            <div
                                key={certificate.id}
                                className="rounded-(--cit-radius-xl) border border-(--cit-border) bg-(--cit-surface) p-6 shadow-(--cit-shadow-sm)"
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="space-y-3">
                                        <div className="inline-flex items-center rounded-(--cit-radius-md) bg-(--cit-primary-soft) px-3 py-1 text-sm font-semibold text-(--cit-primary)">
                                            Certificate {certificate.id}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-(--cit-text)">
                                                {certificate.title}
                                            </h4>
                                            <p className="mt-1 text-sm text-(--cit-text-muted)">
                                                {certificate.event}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <button
                                            onClick={() => {
                                                setIsPreviewLoading(true);
                                                setActiveCertificate(
                                                    certificate,
                                                );
                                            }}
                                            className="rounded-(--cit-radius-md) bg-(--cit-primary) px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-(--cit-primary-hover)"
                                        >
                                            View Certificate
                                        </button>
                                        <a
                                            href={certificate.file}
                                            download={certificate.downloadName}
                                            className="inline-flex items-center justify-center rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface) px-4 py-2.5 text-sm font-semibold text-(--cit-text) transition hover:bg-(--cit-surface-subtle)"
                                        >
                                            Download PDF
                                        </a>
                                    </div>
                                </div>

                                 

                                <div className="mt-6 grid gap-3 text-sm text-(--cit-text-muted)">
                                    <div className="rounded-(--cit-radius-md) bg-(--cit-surface-subtle) px-4 py-3">
                                        <p className="font-semibold text-(--cit-text)">
                                            Issuer
                                        </p>
                                        <p>{certificate.issuer}</p>
                                    </div>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <div className="rounded-(--cit-radius-md) bg-(--cit-surface-subtle) px-4 py-3">
                                            <p className="font-semibold text-(--cit-text)">
                                                Issued
                                            </p>
                                            <p>{certificate.issueDate}</p>
                                        </div>
                                        <div className="rounded-(--cit-radius-md) bg-(--cit-surface-subtle) px-4 py-3">
                                            <p className="font-semibold text-(--cit-text)">
                                                Achievement
                                            </p>
                                            <p>{certificate.achievement}</p>
                                        </div>
                                    </div>
                                    <div className="rounded-(--cit-radius-md) bg-(--cit-surface-subtle) px-4 py-3">
                                        <p className="font-semibold text-(--cit-text)">
                                            Why you earned this
                                        </p>
                                        <p>{certificate.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {activeCertificate && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.55)] p-4"
                        onClick={() => setActiveCertificate(null)}
                    >
                        <div
                            className="relative w-full max-w-6xl overflow-hidden rounded-(--cit-radius-lg) bg-(--cit-surface) shadow-lg"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex flex-col gap-4 border-b border-(--cit-border) px-5 py-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--cit-primary)">
                                        Preview certificate
                                    </p>
                                    <h3 className="mt-2 text-xl font-bold text-(--cit-text)">
                                        {activeCertificate.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-(--cit-text-muted)">
                                        {activeCertificate.event}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={activeCertificate.file}
                                        download={
                                            activeCertificate.downloadName
                                        }
                                        className="rounded-(--cit-radius-md) bg-(--cit-primary) px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-(--cit-primary-hover)"
                                    >
                                        Download
                                    </a>
                                    <button
                                        onClick={() => {
                                            setIsPreviewLoading(false);
                                            setActiveCertificate(null);
                                        }}
                                        className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface) px-4 py-2.5 text-sm font-semibold text-(--cit-text) transition hover:bg-(--cit-surface-subtle)"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>

                            <div className="relative h-[75vh] min-h-120 bg-(--cit-surface)">
                                {isPreviewLoading && (
                                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-(--cit-surface)">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-(--cit-primary-soft) border-t-(--cit-primary)" />
                                            <p className="text-sm font-medium text-(--cit-text-muted)">
                                                Loading certificate...
                                            </p>
                                        </div>
                                    </div>
                                )}
                                <iframe
                                    src={activeCertificate.file}
                                    title={activeCertificate.title}
                                    className="h-full w-full rounded-b-(--cit-radius-lg) border-0"
                                    onLoad={() => setIsPreviewLoading(false)}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}
