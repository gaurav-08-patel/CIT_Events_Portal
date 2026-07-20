import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    ArrowRight,
    Eye,
    EyeOff,
    Mail,
    ShieldCheck,
    UserRound,
    Zap,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthCarousel from "../../components/AuthCarousel";
import MetaData from "../../components/MetaData";
import { DecorativeCircles } from "../../components/DecorativeCircles";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            role: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        const payload = {
            firstName: data.firstName.trim(),
            lastName: data.lastName.trim(),
            role: data.role,
            email: data.email.trim().toLowerCase(),
            password: data.password,
        };

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/v1/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                },
            );

            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(
                    result.error || "Registration failed. Please try again.",
                );
            }

            toast.success(
                result.message ||
                    "Account created successfully. Please check your email to verify it.",
            );
            reset({
                firstName: "",
                lastName: "",
                role: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            setTimeout(() => {
                navigate("/login");
            }, 1000);
            // navigate("/login");
        } catch (error) {
            toast.error(error.message || "Registration failed.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-(--cit-primary) via-[#0c5fcc] to-[#1a3a6b] text-white">
            <DecorativeCircles />
            <MetaData
                title="Register"
                description="Create your CIT Events Portal account to register for events and manage your participation."
                canonical="/register"
            />

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-6 sm:px-6 lg:px-8">
                <div className="absolute -left-30 -top-30 h-65 w-65 rounded-full bg-white/6 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 h-55 w-55 rounded-full bg-[#42b72a]/15 blur-3xl" />

                <div className="grid w-full items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                    <AuthCarousel className="hidden lg:block" />

                    <section className="mx-auto w-full max-w-xl lg:max-w-none">
                        <div className="rounded-(--cit-radius-xl) border border-white/15 bg-(--cit-surface) p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8 lg:p-10">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-(--cit-radius-md) bg-(--cit-primary-soft) text-(--cit-primary) shadow-(--cit-shadow-sm)">
                                    <Zap size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--cit-text-muted)">
                                        CIT Events Portal
                                    </p>
                                    <h1 className="text-3xl font-extrabold tracking-[-0.04em] text-(--cit-text)">
                                        Create account
                                    </h1>
                                </div>
                            </div>

                            <div className="mb-6 rounded-(--cit-radius-lg) border border-(--cit-border) bg-(--cit-surface-subtle) p-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--cit-primary-soft) text-(--cit-primary)">
                                        <ShieldCheck size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-(--cit-text)">
                                            Join the portal
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-(--cit-text-muted)">
                                            Register once and use the same
                                            account to explore, save, and join
                                            events across CIT.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <form
                                className="space-y-4"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <label className="block space-y-1">
                                        <span className="text-sm font-semibold text-(--cit-text)">
                                            First name
                                        </span>
                                        <div className="relative">
                                            <UserRound
                                                size={16}
                                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-(--cit-text-muted)"
                                            />
                                            <input
                                                type="text"
                                                placeholder="First name"
                                                aria-invalid={
                                                    errors.firstName
                                                        ? "true"
                                                        : "false"
                                                }
                                                className={`w-full rounded-(--cit-radius-md) border px-11 py-3.5 text-(--cit-text) outline-none transition-colors duration-150 placeholder:text-(--cit-text-muted) focus:ring-2 ${errors.firstName ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-200" : "border-(--cit-border) bg-white focus:border-(--cit-primary) focus:ring-(--cit-primary-soft)"}`}
                                                {...register("firstName", {
                                                    required:
                                                        "First name is required.",
                                                })}
                                            />
                                        </div>
                                        {errors.firstName ? (
                                            <p className="mt-0 text-xs font-medium text-red-600">
                                                {errors.firstName.message}
                                            </p>
                                        ) : null}
                                    </label>

                                    <label className="block space-y-1">
                                        <span className="text-sm font-semibold text-(--cit-text)">
                                            Last name
                                        </span>
                                        <div className="relative">
                                            <UserRound
                                                size={16}
                                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-(--cit-text-muted)"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Last name"
                                                aria-invalid={
                                                    errors.lastName
                                                        ? "true"
                                                        : "false"
                                                }
                                                className={`w-full rounded-(--cit-radius-md) border px-11 py-3.5 text-(--cit-text) outline-none transition-colors duration-150 placeholder:text-(--cit-text-muted) focus:ring-2 ${errors.lastName ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-200" : "border-(--cit-border) bg-white focus:border-(--cit-primary) focus:ring-(--cit-primary-soft)"}`}
                                                {...register("lastName", {
                                                    required:
                                                        "Last name is required.",
                                                })}
                                            />
                                        </div>
                                        {errors.lastName ? (
                                            <p className="mt-0 text-xs font-medium text-red-600">
                                                {errors.lastName.message}
                                            </p>
                                        ) : null}
                                    </label>
                                </div>

                                <label className="block space-y-1">
                                    <span className="text-sm font-semibold text-(--cit-text)">
                                        Email address
                                    </span>
                                    <div className="relative">
                                        <Mail
                                            size={16}
                                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-(--cit-text-muted)"
                                        />
                                        <input
                                            type="email"
                                            placeholder="you@cit.edu.in"
                                            aria-invalid={
                                                errors.email ? "true" : "false"
                                            }
                                            className={`w-full rounded-(--cit-radius-md) border px-11 py-3.5 text-(--cit-text) outline-none transition-colors duration-150 placeholder:text-(--cit-text-muted) focus:ring-2 ${errors.email ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-200" : "border-(--cit-border) bg-white focus:border-(--cit-primary) focus:ring-(--cit-primary-soft)"}`}
                                            {...register("email", {
                                                required: "Email is required.",
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message:
                                                        "Enter a valid email address.",
                                                },
                                            })}
                                        />
                                    </div>
                                    {errors.email ? (
                                        <p className="mt-0 text-xs font-medium text-red-600">
                                            {errors.email.message}
                                        </p>
                                    ) : null}
                                </label>

                                <label className="block space-y-1">
                                    <span className="text-sm font-semibold text-(--cit-text)">
                                        Role
                                    </span>
                                    <div className="relative">
                                        <ShieldCheck
                                            size={16}
                                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-(--cit-text-muted)"
                                        />
                                        <select
                                            aria-invalid={
                                                errors.role ? "true" : "false"
                                            }
                                            className={`cursor-pointer w-full appearance-none rounded-(--cit-radius-md) border bg-white px-11 py-3.5 text-(--cit-text) outline-none transition-colors duration-150 focus:ring-2 ${errors.role ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-200" : "border-(--cit-border) focus:border-(--cit-primary) focus:ring-(--cit-primary-soft)"}`}
                                            {...register("role", {
                                                required:
                                                    "Please select a role.",
                                            })}
                                        >
                                            <option value="">
                                                Select your role
                                            </option>
                                            <option value="student">
                                                Student
                                            </option>
                                            <option value="organizer">
                                                Organizer
                                            </option>
                                        </select>
                                    </div>
                                    {errors.role ? (
                                        <p className="mt-0 text-xs font-medium text-red-600">
                                            {errors.role.message}
                                        </p>
                                    ) : null}
                                </label>

                                <label className="block space-y-1">
                                    <span className="text-sm font-semibold text-(--cit-text)">
                                        Password
                                    </span>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    (value) => !value,
                                                )
                                            }
                                            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-(--cit-text-muted) transition-colors hover:bg-(--cit-primary-soft) hover:text-(--cit-primary) cursor-pointer"
                                            aria-label={
                                                showPassword
                                                    ? "Hide password"
                                                    : "Show password"
                                            }
                                        >
                                            {showPassword ? (
                                                <Eye
                                                    size={16}
                                                    className="pointer-events-none"
                                                />
                                            ) : (
                                                <EyeOff
                                                    size={16}
                                                    className="pointer-events-none"
                                                />
                                            )}
                                        </button>
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Create a password"
                                            aria-invalid={
                                                errors.password
                                                    ? "true"
                                                    : "false"
                                            }
                                            className={`w-full rounded-(--cit-radius-md) border px-4 py-3.5 pr-12 text-(--cit-text) outline-none transition-colors duration-150 placeholder:text-(--cit-text-muted) focus:ring-2 ${errors.password ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-200" : "border-(--cit-border) bg-white focus:border-(--cit-primary) focus:ring-(--cit-primary-soft)"}`}
                                            {...register("password", {
                                                required:
                                                    "Password is required.",
                                                minLength: {
                                                    value: 6,
                                                    message:
                                                        "Password must be at least 6 characters.",
                                                },
                                            })}
                                        />
                                    </div>
                                    {errors.password ? (
                                        <p className="mt-0 text-xs font-medium text-red-600">
                                            {errors.password.message}
                                        </p>
                                    ) : null}
                                </label>

                                <label className="block space-y-1">
                                    <span className="text-sm font-semibold text-(--cit-text)">
                                        Confirm password
                                    </span>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    (value) => !value,
                                                )
                                            }
                                            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-(--cit-text-muted) transition-colors hover:bg-(--cit-primary-soft) hover:text-(--cit-primary) cursor-pointer"
                                            aria-label={
                                                showConfirmPassword
                                                    ? "Hide confirm password"
                                                    : "Show confirm password"
                                            }
                                        >
                                            {showConfirmPassword ? (
                                                <Eye
                                                    size={16}
                                                    className="pointer-events-none"
                                                />
                                            ) : (
                                                <EyeOff
                                                    size={16}
                                                    className="pointer-events-none"
                                                />
                                            )}
                                        </button>
                                        <input
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Repeat your password"
                                            aria-invalid={
                                                errors.confirmPassword
                                                    ? "true"
                                                    : "false"
                                            }
                                            className={`w-full rounded-(--cit-radius-md) border px-4 py-3.5 pr-12 text-(--cit-text) outline-none transition-colors duration-150 placeholder:text-(--cit-text-muted) focus:ring-2 ${errors.confirmPassword ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-200" : "border-(--cit-border) bg-white focus:border-(--cit-primary) focus:ring-(--cit-primary-soft)"}`}
                                            {...register("confirmPassword", {
                                                required:
                                                    "Please confirm your password.",
                                                validate: (value) =>
                                                    value ===
                                                        getValues("password") ||
                                                    "Passwords do not match.",
                                            })}
                                        />
                                    </div>
                                    {errors.confirmPassword ? (
                                        <p className="mt-0 text-xs font-medium text-red-600">
                                            {errors.confirmPassword.message}
                                        </p>
                                    ) : null}
                                </label>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="cursor-pointer group flex w-full items-center justify-center gap-2 rounded-(--cit-radius-md) bg-(--cit-primary) px-4 py-3.5 text-base font-bold text-white shadow-(--cit-shadow-sm) transition-all duration-150 hover:-translate-y-0.5 hover:bg-(--cit-primary-hover) hover:shadow-(--cit-shadow-md) disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isSubmitting
                                        ? "Creating account..."
                                        : "Create account"}
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-150 group-hover:translate-x-0.5"
                                    />
                                </button>
                            </form>

                            <p className="mt-6 text-center text-sm text-(--cit-text-muted)">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-semibold text-(--cit-primary) transition-colors hover:text-(--cit-primary-hover)"
                                >
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
