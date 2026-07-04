import { useEffect, useState } from "react";
import { Sparkles, Zap } from "lucide-react";
import heroImage from "../assets/hero.png";

const carouselSlides = [
    {
        image: heroImage,
        title: "CIT Event Hub",
        description:
            "Discover hackathons, workshops, cultural nights, and student achievements.",
    },
    {
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=900&fit=crop&auto=format",
        title: "Build teams fast",
        description:
            "Find teammates and move from idea to execution without leaving the portal.",
    },
    {
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=900&fit=crop&auto=format",
        title: "Register in minutes",
        description:
            "Keep track of deadlines, categories, and participation details in one place.",
    },
    {
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=900&fit=crop&auto=format",
        title: "Compete for prizes",
        description:
            "Showcase skills, win prizes, and join the most active student events at CIT.",
    },
];

export default function AuthCarousel({
    className = "",
    autoRotateMs = 3500,
    brandLabel = "CIT Event Hub",
}) {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setSlideIndex((current) => (current + 1) % carouselSlides.length);
        }, autoRotateMs);

        return () => window.clearInterval(timer);
    }, [autoRotateMs]);

    if (!carouselSlides.length) return null;

    return (
        <section className={className}>
            <div className="relative overflow-hidden rounded-(--cit-radius-xl) border border-white/15 bg-white/10 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                <div className="relative h-155 overflow-hidden rounded-[calc(var(--cit-radius-xl)-4px)] border border-white/10 bg-black/10">
                    <div
                        className="flex h-full w-full transition-transform duration-700 ease-out"
                        style={{
                            transform: `translateX(-${slideIndex * 100}%)`,
                        }}
                    >
                        {carouselSlides.map((slide) => (
                            <article
                                key={slide.title}
                                className="relative h-full w-full shrink-0"
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-8">
                                    <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
                                        <Sparkles size={13} />
                                        Campus spotlight
                                    </span>
                                    <h2 className="max-w-xl text-4xl font-extrabold tracking-[-0.04em] text-white">
                                        {slide.title}
                                    </h2>
                                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                                        {slide.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                        <Zap size={16} fill="currentColor" />
                        {brandLabel}
                    </div>

                    <div className="absolute bottom-6 left-6 flex gap-2">
                        {carouselSlides.map((slide, index) => (
                            <button
                                key={slide.title}
                                type="button"
                                onClick={() => setSlideIndex(index)}
                                className={`h-2.5 rounded-full transition-all duration-200 ${
                                    index === slideIndex
                                        ? "w-10 bg-white"
                                        : "w-2.5 bg-white/40 hover:bg-white/60"
                                }`}
                                aria-label={`Show slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
