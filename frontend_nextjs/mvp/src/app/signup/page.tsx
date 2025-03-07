"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [strength, setStrength] = useState(0); // 0: none, 1: weak, 2: normal, 3: strong, 4: very strong

  const checkPasswordStrength = (password: string) => {
    let score = 0;

    // Length check
    if (password.length >= 8) score++;

    // Complexity checks
    if (/[A-Z]/.test(password)) score++; // Has uppercase
    if (/[0-9]/.test(password)) score++; // Has number
    if (/[^A-Za-z0-9]/.test(password)) score++; // Has special char

    setStrength(score);
  };

  const getStrengthText = () => {
    switch (strength) {
      case 1:
        return "Weak";
      case 2:
        return "Normal";
      case 3:
        return "Strong";
      case 4:
        return "Very Strong";
      default:
        return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      } else {
        setSuccess(true);
      }

      // Redirect to login or dashboard
      // window.location.href = '/login';
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Check password strength when password field changes
    if (id === "password") {
      checkPasswordStrength(value);
    }
  };

  return (
    <AuthLayout
      bgColor="bg-[#0D3D38]"
      image="/assets/images/auth-illustration.png"
    >
      <div className={"flex flex-col gap-2 mb-6"}>
        <h1 className="text-3xl font-bold">Let&apos;s Get Started!</h1>
        <p className="text-gray-500 bg-white">
          Start your journey with our AI companion
        </p>
      </div>
      <form onSubmit={handleSubmit} className={"space-y w-full"}>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className={"flex flex-col gap-1 mb-4"}>
          <label htmlFor="fullName" className="text-sm font-medium">
            Full Name
          </label>
          <div
            className={
              "flex items-center gap-3 px-3 py-2 border border-gray-300 rounded-md"
            }
          >
            <UserIcon className="w-4 h-4" />
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={"w-full focus:outline-none"}
              placeholder="John Doe"
              required
            />
          </div>
        </div>

        <div className={"flex flex-col gap-1 mb-4"}>
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <div
            className={
              "flex items-center gap-3 px-3 py-2 border border-gray-300 rounded-md"
            }
          >
            <MailIcon className="w-4 h-4" />
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={"w-full focus:outline-none"}
              placeholder="john@example.com"
              required
            />
          </div>
        </div>

        <div className={"flex flex-col gap-1"}>
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <div
            className={
              "flex items-center gap-3 px-3 py-2 border border-gray-300 rounded-md"
            }
          >
            <LockIcon className="w-4 h-4" />
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className={"w-full focus:outline-none"}
              placeholder="••••••••"
              required
            />
          </div>
          {formData.password && (
            <div>
              <div className={"h-1 w-full bg-gray-200 rounded-full mt-1"}>
                <div
                  className={
                    "h-full bg-accent rounded-full transition-all duration-300"
                  }
                  style={{ width: `${(strength / 4) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 mt-1">
                Password Strength: {getStrengthText()}
              </span>
            </div>
          )}
        </div>

        <Button
          type="submit"
          className="w-full mt-6 bg-accent hover:bg-accent/90 font-semibold"
          disabled={loading || success}
        >
          {loading ? "Sign Up..." : "Sign Up"}
        </Button>
        {success && (
          <div className="text-green-500 text-sm my-4">
            Account created successfully.
          </div>
        )}

        {/* Divider */}
        <div
          className={"relative flex items-center text-gray-500 text-sm my-6"}
        >
          <div className={"flex-grow border-t border-gray-300"}></div>
          <span className={"mx-4"}>OR</span>
          <div className={"flex-grow border-t border-gray-300"}></div>
        </div>

        {/* Google Sign Up Button */}
        <Button
          variant="secondary"
          className="w-full flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#00000"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#00000"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#00000"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#00000"
            />
          </svg>
          Sign up with Google
        </Button>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-black hover:underline">
            Log in here
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}

export default SignUpPage;
