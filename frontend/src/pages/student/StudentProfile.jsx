import { useEffect, useRef, useState } from "react";
import { Camera, Save, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";

export default function StudentProfile() {
    const { user, setUser } = useAuthContext();
    const [isEditing, setIsEditing] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState(user?.avatar || null);
    const fileInputRef = useRef(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: user?.name || "",
            email: user?.email || "",
        },
    });

    useEffect(() => {
        reset({
            name: user?.name || "",
            email: user?.email || "",
        });
        setAvatarPreview(user?.avatar || null);
    }, [user, reset]);

    const displayName = user?.name || user?.email?.split("@")[0] || "Student";
    const roleLabel = user?.role?.toUpperCase() || "STUDENT";
    const initials = displayName
        .split(" ")
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();

    const handleAvatarChange = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => setAvatarPreview(reader.result);
        reader.readAsDataURL(file);
    };

    const handleCancel = () => {
        reset({
            name: user?.name || "",
            email: user?.email || "",
        });
        setAvatarPreview(user?.avatar || null);
        setIsEditing(false);
    };

    const onSubmit = (data) => {
        setUser((currentUser) => ({
            ...currentUser,
            ...data,
            avatar: avatarPreview || currentUser?.avatar || null,
        }));
        setIsEditing(false);
    };

    return (
        <main className="min-h-screen bg-(--cit-bg) px-6 py-8 md:px-8 lg:px-10">
            <div className="mx-auto flex max-w-300 flex-col gap-6">
                <section className="overflow-hidden rounded-(--cit-radius-xl) border border-(--cit-border) bg-(--cit-surface) shadow-(--cit-shadow-sm)">
                    <div className="bg-linear-to-r from-(--cit-primary) to-[#0c5fcc] px-6 py-8 text-white md:px-8">
                        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white/80 bg-white/20 text-2xl font-extrabold shadow-(--cit-shadow-md)">
                                    {avatarPreview ? (
                                        <img
                                            src={avatarPreview}
                                            alt={displayName}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        initials
                                    )}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                                        Student Profile
                                    </p>
                                    <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
                                        {displayName}
                                    </h1>
                                    <p className="mt-1 text-sm text-white/80">
                                        {user?.email || "No email provided"}
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsEditing((prev) => !prev)}
                                className="inline-flex items-center justify-center rounded-(--cit-radius-md) border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25"
                            >
                                {isEditing ? "Cancel" : "Edit Profile"}
                            </button>
                        </div>
                    </div>

                    <div className="px-6 py-7 md:px-8">
                        {!isEditing ? (
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--cit-text-muted)">
                                        Full Name
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-(--cit-text)">
                                        {user?.name || "Not provided"}
                                    </p>
                                </div>
                                <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--cit-text-muted)">
                                        Email
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-(--cit-text)">
                                        {user?.email || "Not provided"}
                                    </p>
                                </div>
                                <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--cit-text-muted)">
                                        Role
                                    </p>
                                    <p className="mt-2 text-base font-semibold capitalize text-(--cit-text)">
                                        {user?.role || "student"}
                                    </p>
                                </div>
                                <div className="rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface-subtle) p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--cit-text-muted)">
                                        Avatar
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-(--cit-text)">
                                        {avatarPreview
                                            ? "Custom profile photo"
                                            : "Initials avatar"}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-5"
                            >
                                <div className="flex flex-col gap-4 rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface-subtle) p-5 md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-(--cit-text)">
                                            Profile photo
                                        </p>
                                        <p className="mt-1 text-sm text-(--cit-text-muted)">
                                            Upload a square image for a sharper
                                            profile preview.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                fileInputRef.current?.click()
                                            }
                                            className="inline-flex items-center gap-2 rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface) px-4 py-2 text-sm font-semibold text-(--cit-text) transition hover:bg-(--cit-primary-soft)"
                                        >
                                            <Camera size={16} />
                                            Upload Photo
                                        </button>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleAvatarChange}
                                            className="hidden"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-(--cit-text)">
                                            Full name
                                        </label>
                                        <input
                                            {...register("name", {
                                                required: "Name is required",
                                                minLength: {
                                                    value: 2,
                                                    message:
                                                        "Name must be at least 2 characters",
                                                },
                                            })}
                                            className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface) px-4 py-3 text-sm text-(--cit-text) outline-none transition focus:border-(--cit-primary) focus:ring-2 focus:ring-(--cit-primary-soft)"
                                            placeholder="Enter your name"
                                        />
                                        {errors.name && (
                                            <p className="mt-2 text-sm text-(--cit-danger)">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-(--cit-text)">
                                            Email
                                        </label>
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message:
                                                        "Enter a valid email address",
                                                },
                                            })}
                                            className="w-full rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface) px-4 py-3 text-sm text-(--cit-text) outline-none transition focus:border-(--cit-primary) focus:ring-2 focus:ring-(--cit-primary-soft)"
                                            placeholder="Enter your email"
                                        />
                                        {errors.email && (
                                            <p className="mt-2 text-sm text-(--cit-danger)">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-end gap-3 border-t border-(--cit-border) pt-4">
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        className="inline-flex items-center gap-2 rounded-(--cit-radius-md) border border-(--cit-border) bg-(--cit-surface) px-4 py-2 text-sm font-semibold text-(--cit-text) transition hover:bg-(--cit-surface-subtle)"
                                    >
                                        <X size={16} />
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 rounded-(--cit-radius-md) bg-(--cit-primary) px-4 py-2 text-sm font-semibold text-white transition hover:bg-(--cit-primary-hover)"
                                    >
                                        <Save size={16} />
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}
