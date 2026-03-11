"use client";

import { useState } from "react";
import Image from "next/image";
import { ChangePasswordForm } from "@/types/api";

export default function SecurityPanel() {
  const [form, setForm] = useState<ChangePasswordForm>({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (field: keyof ChangePasswordForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with API
    console.log("Change password submitted:", form);
  };

  return (
    <div className="bg-[#f5f5f5] rounded-2xl p-6 lg:p-8">
      <h2 className="text-xl font-bold text-text-heading mb-6">
        Security & Privacy
      </h2>

      <form onSubmit={handleSubmit}>
        <p className="text-base font-semibold text-text-heading mb-5">
          Change Password
        </p>

        <div className="space-y-5">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-semibold text-text-heading mb-2">
              Current Password
            </label>
            <input
              type="password"
              value={form.currentPassword}
              onChange={(e) => handleChange("currentPassword", e.target.value)}
              className="w-full lg:w-[280px] h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm text-text-heading placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-semibold text-text-heading mb-2">
              New Password
            </label>
            <input
              type="password"
              value={form.newPassword}
              onChange={(e) => handleChange("newPassword", e.target.value)}
              className="w-full lg:w-[280px] h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm text-text-heading placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="block text-sm font-semibold text-text-heading mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              value={form.confirmNewPassword}
              onChange={(e) => handleChange("confirmNewPassword", e.target.value)}
              className="w-full lg:w-[280px] h-11 px-4 bg-white border border-gray-200 rounded-xl text-sm text-text-heading placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-enroll hover:bg-enroll/90 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          <span className="lg:hidden">Submit</span>
          <span className="hidden lg:inline">Change password</span>
          <Image
            src="/dashboard/icons/arrow.svg"
            alt=""
            width={20}
            height={20}
          />
        </button>
      </form>
    </div>
  );
}
