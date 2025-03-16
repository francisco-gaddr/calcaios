"use client";

import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { LockIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    retypePassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(true);
  };

  return (
    <AuthLayout
      bgColor="bg-[#8145B5]"
      image="/assets/images/reset-password-illustration.png"
    >
      <div className={"flex flex-col gap-2 mb-6"}>
        <h1 className="text-3xl font-bold">Reset Password</h1>
        <p className="text-gray-500 bg-white">Enter your new password</p>
      </div>
      <form onSubmit={handleSubmit} className={"space-y w-full"}>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className={"flex flex-col gap-1 mb-4"}>
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
        </div>

        <div className={"flex flex-col gap-1"}>
          <label htmlFor="retypePassword" className="text-sm font-medium">
            Re-enter Password
          </label>
          <div
            className={
              "flex items-center gap-3 px-3 py-2 border border-gray-300 rounded-md"
            }
          >
            <LockIcon className="w-4 h-4" />
            <input
              type="password"
              id="retypePassword"
              value={formData.retypePassword}
              onChange={handleChange}
              className={"w-full focus:outline-none"}
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full mt-6 bg-accent hover:bg-accent/90 font-semibold"
          disabled={loading || success}
        >
          {loading ? "Resetting..." : "Reset"}
        </Button>
        {success && (
          <div className="text-gray-600 text-sm my-4">
            Password reset successful.
            <Link href="/login" className="ml-1 font-semibold text-accent">
              Login
            </Link>
          </div>
        )}
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
