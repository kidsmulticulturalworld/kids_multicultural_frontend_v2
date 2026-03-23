"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const steps = [
  "Personal Information",
  "Physical Attributes",
  "Experience & Preferences",
] as const;

const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];
const eyeColorOptions = ["Brown", "Blue", "Green", "Hazel", "Gray", "Amber"];
const hairColorOptions = [
  "Black",
  "Brown",
  "Blonde",
  "Red",
  "Auburn",
  "Gray",
  "White",
];

const showOptions = [
  "Chicago",
  "Los Angeles",
  "Houston Tx",
  "Las Vegas NV",
  "New York",
];

const inputClass =
  "w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3491E8] focus:border-transparent";

const selectClass =
  "w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3491E8] focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat pr-8";

const labelClass = "block text-xs sm:text-sm text-gray-600 mb-1 sm:mb-1.5";

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1 — Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    parentName: "",
    // Step 2 — Physical Attributes
    gender: "",
    eyeColor: "",
    hairColor: "",
    heightInches: "",
    heightFeet: "",
    weight: "",
    // Step 3 — Experience & Preferences
    runwayExperience: "",
    cityState: "",
  });
  const [selectedShows, setSelectedShows] = useState<string[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleGoBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setUploadedFile(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setUploadedFile(file);
      }
    }
  };

  const validateFile = (file: File): boolean => {
    const validTypes = ["image/jpeg", "image/png"];
    const maxSize = 15 * 1024 * 1024; // 15MB
    if (!validTypes.includes(file.type)) {
      alert("Please upload a JPEG or PNG file.");
      return false;
    }
    if (file.size > maxSize) {
      alert("File size must be under 15MB.");
      return false;
    }
    return true;
  };

  const handleShowToggle = (show: string) => {
    setSelectedShows((prev) =>
      prev.includes(show) ? prev.filter((s) => s !== show) : [...prev, show],
    );
  };

  const handleSubmit = () => {
    // TODO: submit form data to API
    console.log("Submitting:", { ...formData, selectedShows, uploadedFile });
  };

  return (
    <section className="bg-white py-8 sm:py-10 md:py-14 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-6 lg:px-10">
        <h2 className="font-display text-[#3491E8] text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight mb-1">
          Model Registration
        </h2>

        {/* ── Blue divider line under heading ── */}
        <div className="w-24 sm:w-32 md:w-40 h-1 bg-[#3491E8] rounded-full mb-6 md:mb-8" />

        {/* ── Outer gray container ── */}
        <div className="bg-[#F5F5F5] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-8 lg:p-10">
          {/* ── Progress bar — single bar that fills ── */}
          <div className="w-full max-w-[500px] h-1.5 bg-gray-300 rounded-full mb-5 md:mb-6 overflow-hidden">
            <div
              className="h-full bg-[#3491E8] rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          {/* ── White form card(s) ── */}
          <form onSubmit={handleContinue}>
            {/* Steps 1 & 2 use a single card with step heading */}
            {currentStep < 2 && (
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-7 lg:p-8">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                  {steps[currentStep]}
                </h3>

                {/* ══════ Step 1 — Personal Information ══════ */}
                {currentStep === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-5">
                    <div>
                      <label className={labelClass}>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Martha"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Simon"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="l23@gmiL.CO"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="2349088877766"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Date of Birth</label>
                      <input
                        type="text"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        placeholder="02/04/06"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Parent/Guardian Name*
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="marina"
                        required
                        className={inputClass}
                      />
                      <span className="text-xs text-[#9CA3AF] mt-1 sm:mt-1.5 block italic text-right">
                        Required for minors
                      </span>
                    </div>
                  </div>
                )}

                {/* ══════ Step 2 — Physical Attributes ══════ */}
                {currentStep === 1 && (
                  <div className="space-y-5 sm:space-y-6">
                    {/* Row 1 — 4 columns on desktop, 2 on tablet, 1 on mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-4 sm:gap-y-5">
                      <div>
                        <label className={labelClass}>Gender*</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                          className={`${selectClass} ${!formData.gender ? "text-gray-400" : ""}`}
                        >
                          <option value="" disabled>
                            Select gender
                          </option>
                          {genderOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={labelClass}>Eye Color*</label>
                        <select
                          name="eyeColor"
                          value={formData.eyeColor}
                          onChange={handleChange}
                          required
                          className={`${selectClass} ${!formData.eyeColor ? "text-gray-400" : ""}`}
                        >
                          <option value="" disabled>
                            Select eye color
                          </option>
                          {eyeColorOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={labelClass}>Hair Color*</label>
                        <select
                          name="hairColor"
                          value={formData.hairColor}
                          onChange={handleChange}
                          required
                          className={`${selectClass} ${!formData.hairColor ? "text-gray-400" : ""}`}
                        >
                          <option value="" disabled>
                            Select hair color
                          </option>
                          {hairColorOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={labelClass}>Height (inches)*</label>
                        <input
                          type="number"
                          name="heightInches"
                          value={formData.heightInches}
                          onChange={handleChange}
                          placeholder="7"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Row 2 — 2 columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 sm:gap-y-5">
                      <div>
                        <label className={labelClass}>height (feet)*</label>
                        <input
                          type="number"
                          name="heightFeet"
                          value={formData.heightFeet}
                          onChange={handleChange}
                          placeholder="8"
                          required
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>Weight (lbs)*</label>
                        <input
                          type="number"
                          name="weight"
                          value={formData.weight}
                          onChange={handleChange}
                          placeholder="0"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Upload zone */}
                    <div>
                      <label className={labelClass}>Upload*</label>
                      <div
                        className={`mt-1 border-2 border-dashed rounded-xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                          dragActive
                            ? "border-[#3491E8] bg-blue-50"
                            : "border-gray-300 bg-white"
                        }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/jpeg,image/png"
                          onChange={handleFileChange}
                          className="hidden"
                        />

                        {uploadedFile ? (
                          <div className="text-center">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                              <svg
                                className="w-5 h-5 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="text-sm text-gray-900 font-medium">
                              {uploadedFile.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {(uploadedFile.size / (1024 * 1024)).toFixed(1)}{" "}
                              MB
                            </p>
                          </div>
                        ) : (
                          <>
                            {/* Plus icon */}
                            <div className="w-10 h-10 rounded-full bg-[#3491E8] flex items-center justify-center mb-3">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </div>
                            <p className="text-sm text-gray-600">
                              <span className="text-[#3491E8] font-medium">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs sm:text-sm font-medium text-gray-900 mt-1.5">
                              Max 15MB. JPEG or PNG.
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ══════ Step 3 — Experience & Preferences (two cards) ══════ */}
            {currentStep === 2 && (
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Card 1 — Experience and Location */}
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-7 lg:p-8">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                    Experience and Location
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-5">
                    <div>
                      <label className={labelClass}>
                        Previous Runway Experience (Years)*
                      </label>
                      <input
                        type="number"
                        name="runwayExperience"
                        value={formData.runwayExperience}
                        onChange={handleChange}
                        placeholder="0"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>City/State*</label>
                      <input
                        type="text"
                        name="cityState"
                        value={formData.cityState}
                        onChange={handleChange}
                        placeholder="New York"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Card 2 — Show Preferences */}
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-7 lg:p-8">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 sm:mb-5">
                    Show Preferences
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                    Select shows you&apos;d like to participate in*
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-5">
                    Please select at least one show
                  </p>

                  <div className="space-y-0">
                    {showOptions.map((show) => (
                      <label
                        key={show}
                        className="flex items-center gap-3 py-2.5 sm:py-3 border-b border-gray-100 last:border-b-0 cursor-pointer max-w-md"
                      >
                        <input
                          type="checkbox"
                          checked={selectedShows.includes(show)}
                          onChange={() => handleShowToggle(show)}
                          className="w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-[#3491E8] focus:ring-[#3491E8] cursor-pointer accent-[#3491E8]"
                        />
                        <span className="text-sm text-gray-900">{show}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* ── Footer — outside the gray container ── */}
        {currentStep === 2 && (
          <p className="text-xs sm:text-sm text-gray-500 text-center mt-5 md:mt-6 px-2">
            Registration fee required. Click Submit Application to proceed to
            payment window. Kids Multicultural World LLC maintains a strict
            no-refund policy on registration fees
          </p>
        )}

        <div className="flex items-center justify-between mt-4 sm:mt-5 md:mt-6 px-1">
          {currentStep === 0 ? (
            <span className="text-xs sm:text-sm text-gray-400">
              Required Fields*
            </span>
          ) : (
            <button
              type="button"
              onClick={handleGoBack}
              className="inline-flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Go back
            </button>
          )}

          {currentStep < 2 ? (
            <button
              type="button"
              onClick={handleContinue}
              className="inline-flex items-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] text-white text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors cursor-pointer"
            >
              Continue
              <Image
                src="/dashboard/icons/arrow.svg"
                alt=""
                width={20}
                height={20}
                className="w-4 h-4 sm:w-5 sm:h-5"
                aria-hidden="true"
              />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] text-white text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors cursor-pointer"
            >
              Submit Application
              <Image
                src="/dashboard/icons/arrow.svg"
                alt=""
                width={20}
                height={20}
                className="w-4 h-4 sm:w-5 sm:h-5"
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
