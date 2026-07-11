import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ImagePlus, Plus, Sparkles, Trash2 } from "lucide-react";

const CATEGORY_OPTIONS = [
    "All",
    "Hackathon",
    "Workshop",
    "Coding Challenge",
    "AI/ML",
    "Technical",
    "Non-Technical",
    "Cultural",
    "Sports",
];

const DEPARTMENT_OPTIONS = ["All", "CSE", "ECE", "IT", "MECH", "CIVIL", "EEE"];

export default function OrganizerCreateEvent() {
    const [bannerPreview, setBannerPreview] = useState("");
    const [tagInput, setTagInput] = useState("");
    const [tags, setTags] = useState([]);
    const [ruleInput, setRuleInput] = useState("");
    const [rules, setRules] = useState([]);
    const [privacyInput, setPrivacyInput] = useState("");
    const [privacyPolicies, setPrivacyPolicies] = useState([]);
    const [descriptionHtml, setDescriptionHtml] = useState("");
    const [submitMessage, setSubmitMessage] = useState("");
    const editorRef = useRef(null);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: "",
            category: "All",
            venue: "",
            eventDate: "",
            registrationDeadline: "",
            minTeamSize: 1,
            maxTeamSize: 4,
            maxParticipantsAllowed: 50,
            isPaid: "free",
            pricePerHead: 0,
            prizeType: "certificate",
            prizePool: "",
            department: "All",
            tags: [],
            rules: [],
            privacyPolicies: [],
            description: "",
        },
    });

    const isPaid = watch("isPaid");
    const bannerImage = watch("bannerImage");

    useEffect(() => {
        setValue("tags", tags, { shouldValidate: true });
    }, [setValue, tags]);

    useEffect(() => {
        setValue("rules", rules, { shouldValidate: true });
    }, [setValue, rules]);

    useEffect(() => {
        setValue("privacyPolicies", privacyPolicies, { shouldValidate: true });
    }, [setValue, privacyPolicies]);

    useEffect(() => {
        setValue("description", descriptionHtml, { shouldValidate: true });
    }, [setValue, descriptionHtml]);

    useEffect(() => {
        if (!bannerImage || !bannerImage[0]) {
            setBannerPreview("");
            return;
        }

        const file = bannerImage[0];
        const previewUrl = URL.createObjectURL(file);
        setBannerPreview(previewUrl);

        return () => URL.revokeObjectURL(previewUrl);
    }, [bannerImage]);

    const addTag = () => {
        const trimmedTag = tagInput.trim();
        if (!trimmedTag || tags.length >= 3) return;
        setTags((current) => [...current, trimmedTag]);
        setTagInput("");
    };

    const removeTag = (tagToRemove) => {
        setTags((current) => current.filter((tag) => tag !== tagToRemove));
    };

    const addListItem = (type) => {
        if (type === "rule") {
            const trimmed = ruleInput.trim();
            if (!trimmed) return;
            setRules((current) => [...current, trimmed]);
            setRuleInput("");
            return;
        }

        const trimmed = privacyInput.trim();
        if (!trimmed) return;
        setPrivacyPolicies((current) => [...current, trimmed]);
        setPrivacyInput("");
    };

    const removeListItem = (type, valueToRemove) => {
        if (type === "rule") {
            setRules((current) =>
                current.filter((item) => item !== valueToRemove),
            );
            return;
        }

        setPrivacyPolicies((current) =>
            current.filter((item) => item !== valueToRemove),
        );
    };

    const insertEditorFormat = (command, value = null) => {
        if (!editorRef.current) return;
        editorRef.current.focus();
        document.execCommand(command, false, value);
        setDescriptionHtml(editorRef.current.innerHTML);
    };

    const onSubmit = (data) => {
        const payload = {
            ...data,
            tags,
            rules,
            privacyPolicies,
            description: descriptionHtml,
            bannerPreview,
        };

        console.log("New event payload", payload);
        setSubmitMessage("Event draft is ready for review.");
        reset({
            title: "",
            category: "All",
            venue: "",
            eventDate: "",
            registrationDeadline: "",
            minTeamSize: 1,
            maxTeamSize: 4,
            maxParticipantsAllowed: 50,
            isPaid: "free",
            pricePerHead: 0,
            prizeType: "certificate",
            prizePool: "",
            department: "All",
            tags: [],
            rules: [],
            privacyPolicies: [],
            description: "",
        });
        setTagInput("");
        setTags([]);
        setRuleInput("");
        setRules([]);
        setPrivacyInput("");
        setPrivacyPolicies([]);
        setDescriptionHtml("");
        setBannerPreview("");
    };

    return (
        <div className="space-y-6">
            <section className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-6 shadow-(--cit-shadow-sm)">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <h2 className="text-2xl font-extrabold text-(--cit-text)">
                            Create a new event
                        </h2>
                        <p className="mt-2 text-(--cit-text-muted)">
                            Collect all the details needed to publish a polished
                            event listing for organizers.
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-(--cit-primary-soft) bg-(--cit-primary-soft) px-3 py-1 text-sm font-semibold text-(--cit-primary)">
                        <Sparkles size={16} />
                        Rich form setup
                    </div>
                </div>
            </section>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]"
            >
                <section className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-6 shadow-(--cit-shadow-sm)">
                    <div className="grid gap-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Event title
                                </label>
                                <input
                                    {...register("title", {
                                        required: "Event title is required",
                                    })}
                                    className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none ring-0 focus:border-(--cit-primary)"
                                    placeholder="Launch Week 2026"
                                />
                                {errors.title && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.title.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Category
                                </label>
                                <select
                                    {...register("category", {
                                        required: "Choose a category",
                                    })}
                                    className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary)"
                                >
                                    {CATEGORY_OPTIONS.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                {errors.category && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.category.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-(--cit-text)">
                                Banner image
                            </label>
                            <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-(--cit-radius-lg) border border-dashed border-(--cit-border) bg-(--cit-surface-subtle) px-4 py-8 text-center transition hover:border-(--cit-primary)">
                                <ImagePlus
                                    className="text-(--cit-primary)"
                                    size={24}
                                />
                                <span className="text-sm font-medium text-(--cit-text)">
                                    Tap to upload an image
                                </span>
                                <span className="text-xs text-(--cit-text-muted)">
                                    PNG, JPG, or WEBP
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    {...register("bannerImage", {
                                        required: "Select a banner image",
                                    })}
                                    className="hidden"
                                />
                            </label>
                            {errors.bannerImage && (
                                <p className="text-sm text-(--cit-danger)">
                                    {errors.bannerImage.message}
                                </p>
                            )}
                            {bannerPreview ? (
                                <div className="overflow-hidden rounded-(--cit-radius-lg) border border-(--cit-border)">
                                    <img
                                        src={bannerPreview}
                                        alt="Banner preview"
                                        className="h-48 w-full object-cover"
                                    />
                                </div>
                            ) : null}
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Venue
                                </label>
                                <input
                                    {...register("venue", {
                                        required: "Venue is required",
                                    })}
                                    className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary)"
                                    placeholder="CIT Seminar Hall"
                                />
                                {errors.venue && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.venue.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Event date
                                </label>
                                <input
                                    type="datetime-local"
                                    {...register("eventDate", {
                                        required: "Event date is required",
                                    })}
                                    className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary)"
                                />
                                {errors.eventDate && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.eventDate.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Registration deadline
                                </label>
                                <input
                                    type="datetime-local"
                                    {...register("registrationDeadline", {
                                        required:
                                            "Registration deadline is required",
                                    })}
                                    className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary)"
                                />
                                {errors.registrationDeadline && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.registrationDeadline.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Department
                                </label>
                                <select
                                    {...register("department", {
                                        required: "Select a department",
                                    })}
                                    className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary)"
                                >
                                    {DEPARTMENT_OPTIONS.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                {errors.department && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.department.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Min team size
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    {...register("minTeamSize", {
                                        required:
                                            "Minimum team size is required",
                                        min: {
                                            value: 1,
                                            message:
                                                "Minimum team size should be at least 1",
                                        },
                                    })}
                                    className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary)"
                                />
                                {errors.minTeamSize && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.minTeamSize.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Max team size
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    {...register("maxTeamSize", {
                                        required:
                                            "Maximum team size is required",
                                        min: {
                                            value: 1,
                                            message:
                                                "Maximum team size should be at least 1",
                                        },
                                    })}
                                    className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary)"
                                />
                                {errors.maxTeamSize && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.maxTeamSize.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Max participants
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    {...register("maxParticipantsAllowed", {
                                        required:
                                            "Maximum participants is required",
                                        min: {
                                            value: 1,
                                            message:
                                                "Maximum participants should be at least 1",
                                        },
                                    })}
                                    className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary)"
                                />
                                {errors.maxParticipantsAllowed && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.maxParticipantsAllowed.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Registration fee
                                </label>
                                <div className="flex gap-3">
                                    <label className="flex items-center gap-2 rounded-(--cit-radius-md) border border-(--cit-border) px-3 py-2 text-sm">
                                        <input
                                            type="radio"
                                            value="free"
                                            {...register("isPaid", {
                                                required: "Select a fee type",
                                            })}
                                        />
                                        Free
                                    </label>
                                    <label className="flex items-center gap-2 rounded-(--cit-radius-md) border border-(--cit-border) px-3 py-2 text-sm">
                                        <input
                                            type="radio"
                                            value="paid"
                                            {...register("isPaid", {
                                                required: "Select a fee type",
                                            })}
                                        />
                                        Paid
                                    </label>
                                </div>
                                {errors.isPaid && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.isPaid.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Price per head
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    {...register("pricePerHead", {
                                        required:
                                            isPaid === "paid"
                                                ? "Price per head is required for paid events"
                                                : false,
                                        min: {
                                            value: 0,
                                            message: "Price cannot be negative",
                                        },
                                    })}
                                    disabled={isPaid !== "paid"}
                                    className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary) disabled:cursor-not-allowed disabled:opacity-60"
                                    placeholder="0"
                                />
                                {errors.pricePerHead && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.pricePerHead.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Prize type
                                </label>
                                <div className="flex gap-3">
                                    <label className="flex items-center gap-2 rounded-(--cit-radius-md) border border-(--cit-border) px-3 py-2 text-sm">
                                        <input
                                            type="radio"
                                            value="certificate"
                                            {...register("prizeType", {
                                                required: "Choose a prize type",
                                            })}
                                        />
                                        Certificate
                                    </label>
                                    <label className="flex items-center gap-2 rounded-(--cit-radius-md) border border-(--cit-border) px-3 py-2 text-sm">
                                        <input
                                            type="radio"
                                            value="money"
                                            {...register("prizeType", {
                                                required: "Choose a prize type",
                                            })}
                                        />
                                        Cash prize
                                    </label>
                                </div>
                                {errors.prizeType && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.prizeType.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-(--cit-text)">
                                    Prize pool / certificate note
                                </label>
                                <input
                                    {...register("prizePool", {
                                        required:
                                            watch("prizeType") === "money"
                                                ? "Tell us the prize pool"
                                                : false,
                                    })}
                                    className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary)"
                                    placeholder={
                                        watch("prizeType") === "money"
                                            ? "$5000"
                                            : "Certificate for top performers"
                                    }
                                />
                                {errors.prizePool && (
                                    <p className="text-sm text-(--cit-danger)">
                                        {errors.prizePool.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-(--cit-text)">
                                Tags (up to 3)
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center gap-2 rounded-full border border-(--cit-primary-soft) bg-(--cit-primary-soft) px-3 py-1 text-sm font-medium text-(--cit-primary)"
                                    >
                                        {tag}
                                        <button
                                            type="button"
                                            onClick={() => removeTag(tag)}
                                            className="text-(--cit-primary)"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <input
                                    value={tagInput}
                                    onChange={(event) =>
                                        setTagInput(event.target.value)
                                    }
                                    className="flex-1 rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary)"
                                    placeholder="AI, mentorship, startup"
                                />
                                <button
                                    type="button"
                                    onClick={addTag}
                                    className="inline-flex items-center gap-2 rounded-(--cit-radius-md) bg-(--cit-primary) px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-(--cit-primary-hover)"
                                >
                                    <Plus size={16} /> Add
                                </button>
                            </div>
                            {tags.length >= 3 && (
                                <p className="text-sm text-(--cit-text-muted)">
                                    You have reached the limit of 3 tags.
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-(--cit-text)">
                                Description
                            </label>
                            <div className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface-subtle) p-3">
                                <div className="mb-3 flex flex-wrap gap-2">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            insertEditorFormat(
                                                "formatBlock",
                                                "h2",
                                            )
                                        }
                                        className="rounded-(--cit-radius-sm) border border-(--cit-border) bg-(--cit-surface) px-3 py-1.5 text-sm font-semibold text-(--cit-text)"
                                    >
                                        Heading
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            insertEditorFormat(
                                                "formatBlock",
                                                "p",
                                            )
                                        }
                                        className="rounded-(--cit-radius-sm) border border-(--cit-border) bg-(--cit-surface) px-3 py-1.5 text-sm font-semibold text-(--cit-text)"
                                    >
                                        Paragraph
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            insertEditorFormat(
                                                "insertUnorderedList",
                                            )
                                        }
                                        className="rounded-(--cit-radius-sm) border border-(--cit-border) bg-(--cit-surface) px-3 py-1.5 text-sm font-semibold text-(--cit-text)"
                                    >
                                        Bullet list
                                    </button>
                                </div>
                                <div
                                    ref={editorRef}
                                    contentEditable
                                    suppressContentEditableWarning
                                    onInput={(event) =>
                                        setDescriptionHtml(
                                            event.currentTarget.innerHTML,
                                        )
                                    }
                                    className="min-h-40 rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface) px-3 py-3 text-sm leading-6 text-(--cit-text) outline-none"
                                    data-placeholder="Write your event description"
                                />
                            </div>
                            {errors.description && (
                                <p className="text-sm text-(--cit-danger)">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-(--cit-text)">
                                Rules
                            </label>
                            <div className="flex gap-2">
                                <input
                                    value={ruleInput}
                                    onChange={(event) =>
                                        setRuleInput(event.target.value)
                                    }
                                    className="flex-1 rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary)"
                                    placeholder="Add a rule"
                                />
                                <button
                                    type="button"
                                    onClick={() => addListItem("rule")}
                                    className="inline-flex items-center gap-2 rounded-(--cit-radius-md) bg-(--cit-primary) px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-(--cit-primary-hover)"
                                >
                                    <Plus size={16} /> Add
                                </button>
                            </div>
                            <ul className="space-y-2 rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-3">
                                {rules.map((rule) => (
                                    <li
                                        key={rule}
                                        className="flex items-start justify-between gap-3 rounded-(--cit-radius-sm) bg-(--cit-surface) px-3 py-2 text-sm"
                                    >
                                        <span className="text-(--cit-text)">
                                            {rule}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeListItem("rule", rule)
                                            }
                                            className="text-(--cit-danger)"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            {errors.rules && (
                                <p className="text-sm text-(--cit-danger)">
                                    {errors.rules.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-(--cit-text)">
                                Privacy policy
                            </label>
                            <div className="flex gap-2">
                                <input
                                    value={privacyInput}
                                    onChange={(event) =>
                                        setPrivacyInput(event.target.value)
                                    }
                                    className="flex-1 rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) px-3 py-2.5 text-sm outline-none focus:border-(--cit-primary)"
                                    placeholder="Add a privacy note"
                                />
                                <button
                                    type="button"
                                    onClick={() => addListItem("privacy")}
                                    className="inline-flex items-center gap-2 rounded-(--cit-radius-md) bg-(--cit-primary) px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-(--cit-primary-hover)"
                                >
                                    <Plus size={16} /> Add
                                </button>
                            </div>
                            <ul className="space-y-2 rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-3">
                                {privacyPolicies.map((policy) => (
                                    <li
                                        key={policy}
                                        className="flex items-start justify-between gap-3 rounded-(--cit-radius-sm) bg-(--cit-surface) px-3 py-2 text-sm"
                                    >
                                        <span className="text-(--cit-text)">
                                            {policy}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeListItem(
                                                    "privacy",
                                                    policy,
                                                )
                                            }
                                            className="text-(--cit-danger)"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            {errors.privacyPolicies && (
                                <p className="text-sm text-(--cit-danger)">
                                    {errors.privacyPolicies.message}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                <aside className="space-y-6">
                    <section className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-6 shadow-(--cit-shadow-sm)">
                        <h3 className="text-lg font-extrabold text-(--cit-text)">
                            Content preview
                        </h3>
                        <p className="mt-2 text-sm text-(--cit-text-muted)">
                            Your rich text description will appear here as HTML.
                        </p>
                        <div className="mt-4 rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-3">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        descriptionHtml ||
                                        "<p className='text-(--cit-text-muted)'>Add a description to preview the content.</p>",
                                }}
                            />
                        </div>
                    </section>

                    <section className="rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface) p-6 shadow-(--cit-shadow-sm)">
                        <h3 className="text-lg font-extrabold text-(--cit-text)">
                            Submission summary
                        </h3>
                        <div className="mt-4 space-y-3 text-sm text-(--cit-text-muted)">
                            <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-3">
                                <p className="font-semibold text-(--cit-text)">
                                    Tags
                                </p>
                                <p>
                                    {tags.length > 0
                                        ? tags.join(", ")
                                        : "No tags added yet"}
                                </p>
                            </div>
                            <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-3">
                                <p className="font-semibold text-(--cit-text)">
                                    Rules
                                </p>
                                <p>
                                    {rules.length > 0 ? rules.length : 0}{" "}
                                    item(s)
                                </p>
                            </div>
                            <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-3">
                                <p className="font-semibold text-(--cit-text)">
                                    Privacy notes
                                </p>
                                <p>
                                    {privacyPolicies.length > 0
                                        ? privacyPolicies.length
                                        : 0}{" "}
                                    item(s)
                                </p>
                            </div>
                        </div>
                    </section>

                    <button
                        type="submit"
                        className="w-full rounded-(--cit-radius-md) bg-(--cit-primary) px-4 py-3 text-sm font-semibold text-white transition hover:bg-(--cit-primary-hover)"
                    >
                        Create event
                    </button>
                    {submitMessage ? (
                        <p className="text-sm font-medium text-(--cit-success)">
                            {submitMessage}
                        </p>
                    ) : null}
                </aside>
            </form>
        </div>
    );
}
