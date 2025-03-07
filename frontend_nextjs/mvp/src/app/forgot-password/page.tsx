"use client";

import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MailIcon } from "lucide-react";
import { useState } from "react";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(true);
  };

  return (
    <AuthLayout
      bgColor="bg-[#8145B5]"
      image="/assets/images/forgot-password-illustration.png"
    >
      <div className={"flex flex-col gap-2 mb-10"}>
        <h1 className="text-3xl font-bold">Forgot Password?</h1>
        <p className="text-gray-500 bg-white">
          Enter your email so that we can send you password reset link
        </p>
      </div>
      <form onSubmit={handleSubmit} className={"space-y w-full"}>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className={"flex flex-col gap-2"}>
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
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full mt-6 bg-accent hover:bg-accent/90 font-semibold"
          disabled={loading || success}
        >
          {loading ? "Sending email..." : "Send Email"}
        </Button>
        {success && (
          <div className="flex flex-col justify-center items-end">
            <div className="text-sm text-gray-600 my-4">
              Thanks! An email was sent that will ask you to click on a link to
              verify that you own this account. If you don’t get the email,
              please contact support@calcaios.com
            </div>
            <Button
              variant="ghost"
              className="font-semibold text-accent hover:text-accent/90 hover:bg-accent/10"
            >
              Resend email
            </Button>
          </div>
        )}

        {/* Sign In Link */}
        <div className="text-center text-sm text-gray-600 mt-6">
          <a href="/login">
            <div className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Login
            </div>
          </a>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
