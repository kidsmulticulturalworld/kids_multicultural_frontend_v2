"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const profileTabs = [
  { id: "personal-info", label: "Personal Info" },
  { id: "appearance", label: "Appearance" },
  { id: "social-media", label: "Social Media" },
  { id: "talent", label: "Talent" },
  { id: "photos", label: "Photos" },
  { id: "videos", label: "Videos" },
];

const allTalentOptions = [
  "Singing", "Dancing", "Skating", "Skipping", "Movie", "Surfing",
  "Swimming", "Running", "Jumping", "Clapping", "Poetry", "Reading",
  "Drawing", "Typing", "Chatting", "Eating", "Skinding", "Skinning",
];

const initialProfileData = {
  firstName: "Martha",
  lastName: "Simon",
  email: "Martha.Simon12@yahoo.com",
  avatar: "/dashboard/profile-image.jpg",
  appearance: {
    gender: "Female",
    eyeColor: "Blue",
    hairColor: "Brown",
    height: "52",
    weight: "75",
    age: "12",
    ethnicity: "Caucasian",
  },
  socialMedia: {
    instagram: "https://",
    tiktok: "https://",
    facebook: "https://",
    youtube: "https://",
  },
  talents: ["Singing", "Dancing", "Skating", "Skipping"],
  videoUrl: "https://",
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal-info");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialProfileData);

  const updateField = (section: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section as keyof typeof prev] as Record<string, string>),
        [field]: value,
      },
    }));
  };

  const updateTopLevel = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="px-1 pt-6 pb-6 lg:px-8 lg:pt-8 lg:pb-8">
      {/* ── Header Row ── */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-heading">Profile</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center gap-2 text-white text-sm font-semibold py-2.5 ${
            isEditing
              ? "bg-[#6B8AE8] px-6 rounded-xl hidden lg:flex"
              : "bg-primary px-5 rounded-full"
          }`}
        >
          {isEditing ? "Save Changes" : "Edit profile"}
          <Image
            src={isEditing ? "/dashboard/icons/save-icon.svg" : "/dashboard/icons/pencil-icon.svg"}
            alt=""
            width={16}
            height={16}
          />
        </button>
      </div>

      {/* ── Two-Column Layout (Desktop) / Stacked (Mobile) ── */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* ── Profile Card ── */}
        <ProfileCard />

        {/* ── Tabbed Content Area ── */}
        <div className="flex-1 min-w-0 relative z-10 bg-gray-50 rounded-2xl p-5 lg:p-6">
          {/* ── Tabs Navigation ── */}
          <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-6 bg-gray-200/70 rounded-full p-1.5 max-w-full lg:w-fit">
            <div className="flex items-center gap-1 w-max">
              {profileTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    document
                      .getElementById(tab.id)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "bg-white text-text-heading font-semibold border border-gray-300"
                      : "text-text-muted font-medium border border-transparent hover:text-text-heading hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Sections (all visible, scrollable) ── */}
          <div className="space-y-5">
            {/* ── Personal Information ── */}
            <div id="personal-info" className="bg-white rounded-2xl p-5 lg:p-6">
              <h3 className="text-base font-bold text-text-heading mb-5">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <ProfileField
                  label="First Name"
                  value={formData.firstName}
                  isEditing={isEditing}
                  onChange={(v) => updateTopLevel("firstName", v)}
                />
                <ProfileField
                  label="Last Name"
                  value={formData.lastName}
                  isEditing={isEditing}
                  onChange={(v) => updateTopLevel("lastName", v)}
                />
              </div>
            </div>

            {/* ── Appearance ── */}
            <div id="appearance" className="bg-white rounded-2xl p-5 lg:p-6">
              <h3 className="text-base font-bold text-text-heading mb-5">Appearance</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <ProfileField label="Gender" value={formData.appearance.gender} isEditing={isEditing} onChange={(v) => updateField("appearance", "gender", v)} />
                <ProfileField label="Eye Color" value={formData.appearance.eyeColor} isEditing={isEditing} onChange={(v) => updateField("appearance", "eyeColor", v)} />
                <ProfileField label="Hair Color" value={formData.appearance.hairColor} isEditing={isEditing} onChange={(v) => updateField("appearance", "hairColor", v)} />
                <ProfileField label="Height (inchs)" value={formData.appearance.height} isEditing={isEditing} onChange={(v) => updateField("appearance", "height", v)} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <ProfileField label="Weight (lbs)" value={formData.appearance.weight} isEditing={isEditing} onChange={(v) => updateField("appearance", "weight", v)} />
                <ProfileField label="Age" value={formData.appearance.age} isEditing={isEditing} onChange={(v) => updateField("appearance", "age", v)} />
                <ProfileField label="Ethnicity" value={formData.appearance.ethnicity} isEditing={isEditing} onChange={(v) => updateField("appearance", "ethnicity", v)} />
              </div>
            </div>

            {/* ── Social Media ── */}
            <div id="social-media" className="bg-white rounded-2xl p-5 lg:p-6">
              <h3 className="text-base font-bold text-text-heading mb-5">Social Media</h3>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <ProfileField label="Instagram" value={formData.socialMedia.instagram} isEditing={isEditing} onChange={(v) => updateField("socialMedia", "instagram", v)} />
                <ProfileField label="TikTok" value={formData.socialMedia.tiktok} isEditing={isEditing} onChange={(v) => updateField("socialMedia", "tiktok", v)} />
                <ProfileField label="Facebook" value={formData.socialMedia.facebook} isEditing={isEditing} onChange={(v) => updateField("socialMedia", "facebook", v)} />
                <ProfileField label="Youtube" value={formData.socialMedia.youtube} isEditing={isEditing} onChange={(v) => updateField("socialMedia", "youtube", v)} />
              </div>
            </div>

            {/* ── Talent ── */}
            <div id="talent" className="bg-white rounded-2xl p-5 lg:p-6">
              <h3 className="text-base font-bold text-text-heading mb-4">Talent</h3>
              {isEditing ? (
                <TalentEditor
                  selectedTalents={formData.talents}
                  onChange={(talents) => setFormData((prev) => ({ ...prev, talents }))}
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {formData.talents.map((talent) => (
                    <span
                      key={talent}
                      className="px-3.5 py-1.5 text-sm text-text-heading bg-white border border-gray-200 rounded-lg"
                    >
                      {talent}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* ── Photos ── */}
            <div id="photos" className="bg-white rounded-2xl p-5 lg:p-6">
              <h3 className="text-base font-bold text-text-heading mb-4">Photos</h3>
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-2/3 bg-gray-200 rounded-lg"
                  />
                ))}
              </div>
              {isEditing && (
                <div className="flex justify-center lg:justify-end mt-4">
                  <button className="w-full lg:w-auto flex items-center justify-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-primary text-primary bg-white lg:border-0 lg:bg-primary lg:text-white">
                    Upload photos
                    <Image
                      src="/dashboard/icons/camera-icon.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="[filter:brightness(0)_saturate(100%)_invert(42%)_sepia(93%)_saturate(1350%)_hue-rotate(206deg)_brightness(101%)_contrast(92%)] lg:[filter:none]"
                    />
                  </button>
                </div>
              )}
            </div>

            {/* ── Videos ── */}
            <div id="videos" className="bg-white rounded-2xl p-5 lg:p-6">
              <h3 className="text-base font-bold text-text-heading mb-4">Videos</h3>
              <div className="grid grid-cols-2 gap-4 lg:max-w-[65%]">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-4/3 bg-gray-200 rounded-lg"
                  />
                ))}
              </div>
              {isEditing && (
                <div className="mt-4">
                  <label className="block text-sm text-text-muted mb-1.5">
                    Add Video (Enter your Youtube link below)
                  </label>
                  <input
                    type="text"
                    value={formData.videoUrl}
                    onChange={(e) => updateTopLevel("videoUrl", e.target.value)}
                    className="w-full lg:max-w-[500px] px-3.5 py-2.5 text-sm text-text-heading bg-white border border-gray-200 rounded-lg outline-none focus:border-primary"
                  />
                </div>
              )}
            </div>
          </div>

          {/* ── Mobile Save Changes Button ── */}
          {isEditing && (
            <button
              onClick={() => setIsEditing(false)}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-[#6B8AE8] text-white text-sm font-semibold py-3.5 rounded-xl lg:hidden"
            >
              Save Changes
              <Image
                src="/dashboard/icons/save-icon.svg"
                alt=""
                width={16}
                height={16}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Talent Editor Component
   ───────────────────────────────────────────── */
function TalentEditor({
  selectedTalents,
  onChange,
}: {
  selectedTalents: string[];
  onChange: (talents: string[]) => void;
}) {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const availableTalents = allTalentOptions.filter(
    (t) => !selectedTalents.includes(t)
  );

  const filteredSuggestions = search.length > 0
    ? availableTalents.filter((t) =>
        t.toLowerCase().startsWith(search.toLowerCase())
      )
    : [];

  const addTalent = (talent: string) => {
    if (!selectedTalents.includes(talent)) {
      onChange([...selectedTalents, talent]);
    }
    setSearch("");
    setShowDropdown(false);
    inputRef.current?.focus();
  };

  const removeTalent = (talent: string) => {
    onChange(selectedTalents.filter((t) => t !== talent));
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div>
      {/* Tag input */}
      <div ref={containerRef} className="relative mb-4">
        <div
          className="flex flex-wrap items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg min-h-[44px] cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {selectedTalents.map((talent) => (
            <span
              key={talent}
              className="flex items-center gap-1.5 px-3 py-1 text-sm text-text-heading bg-gray-50 border border-gray-200 rounded-lg"
            >
              {talent}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeTalent(talent);
                }}
                className="text-text-muted hover:text-text-heading text-base leading-none"
              >
                &times;
              </button>
            </span>
          ))}
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => search.length > 0 && setShowDropdown(true)}
            placeholder={selectedTalents.length === 0 ? "Search talents..." : ""}
            className="flex-1 min-w-[80px] text-sm outline-none bg-transparent"
          />
        </div>

        {/* Autocomplete dropdown */}
        {showDropdown && filteredSuggestions.length > 0 && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-md z-20 py-1 max-h-[160px] overflow-y-auto">
            {filteredSuggestions.map((talent) => (
              <button
                key={talent}
                onClick={() => addTalent(talent)}
                className="block w-full text-left px-4 py-2 text-sm text-text-heading hover:bg-gray-50"
              >
                {talent}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Available talents grid */}
      <div className="flex flex-wrap gap-2">
        {availableTalents.map((talent) => (
          <button
            key={talent}
            onClick={() => addTalent(talent)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-sm text-text-heading bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {talent}
            <span className="text-text-muted">+</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Profile Card Component
   ───────────────────────────────────────────── */
function ProfileCard() {
  return (
    <div className="w-full lg:w-[320px] shrink-0">
      <div
        className="relative bg-[#EBFBFF] rounded-2xl overflow-hidden px-6 pt-10 pb-12 flex flex-col items-center"
        style={{ boxShadow: "0 4px 24px 0 rgba(150, 200, 240, 0.35)" }}
      >
        {/* ── Decorative Elements ── */}

        {/* Yellow star — top-left */}
        <Image
          src="/profile/yellow-star.svg"
          alt=""
          width={38}
          height={38}
          className="absolute top-5 left-5"
          aria-hidden="true"
        />

        {/* Blue star — top-right */}
        <Image
          src="/profile/blue-star.svg"
          alt=""
          width={34}
          height={33}
          className="absolute top-4 right-5"
          aria-hidden="true"
        />

        {/* Pink circle — left, below avatar */}
        <Image
          src="/profile/pink-circle.svg"
          alt=""
          width={12}
          height={12}
          className="absolute top-[58%] left-7"
          aria-hidden="true"
        />

        {/* Blue dot — left of avatar, lower side (slightly bigger) */}
        <div
          className="absolute top-[52%] left-[18%] w-2 h-2 rounded-full bg-[#96DDFE]"
          aria-hidden="true"
        />

        {/* Blue dot — right of avatar, upper side (smaller) */}
        <div
          className="absolute top-[28%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#96DDFE]"
          aria-hidden="true"
        />

        {/* Blue ellipse — right side, touching bottom */}
        <Image
          src="/profile/blue-ellipse.svg"
          alt=""
          width={140}
          height={190}
          className="absolute -bottom-8 -right-8"
          aria-hidden="true"
        />

        {/* Blue dot on ellipse — lighter, higher up */}
        <div
          className="absolute bottom-[32%] right-[8%] w-1.5 h-1.5 rounded-full bg-[#96DDFE]"
          aria-hidden="true"
        />

        {/* Blue dot on ellipse — deeper blue, lower */}
        <div
          className="absolute bottom-[18%] right-[16%] w-2 h-2 rounded-full bg-[#5BB8E8]"
          aria-hidden="true"
        />

        {/* Green ellipse — bottom-left */}
        <Image
          src="/profile/green-ellipse.svg"
          alt=""
          width={84}
          height={86}
          className="absolute -bottom-4 -left-2 opacity-70"
          aria-hidden="true"
        />

        {/* ── Scalloped Avatar ── */}
        <div className="relative w-40 h-[166px] mb-4 z-1">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 57 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="profile-avatar-gradient"
                x1="28.2429"
                y1="-0.773438"
                x2="28.2429"
                y2="59.2266"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0EC1B8" />
                <stop offset="0.485577" stopColor="#BF12BF" />
                <stop offset="1" stopColor="#15BC3C" />
              </linearGradient>
              <clipPath id="profile-scallop-clip">
                <path d="M22.6208 3.27441C25.7555 0.241889 30.7302 0.24189 33.8649 3.27441C35.2141 4.57954 37.0903 5.18868 38.9489 4.92578C43.2674 4.31497 47.292 7.23929 48.0456 11.5352C48.3699 13.3841 49.5299 14.9795 51.1882 15.8594C55.0408 17.9036 56.578 22.6354 54.6628 26.5537C53.8384 28.2402 53.8384 30.2129 54.6628 31.8994C56.578 35.8177 55.0408 40.5496 51.1882 42.5938C49.5299 43.4736 48.3699 45.069 48.0456 46.918C47.292 51.2138 43.2674 54.1382 38.9489 53.5273C37.0903 53.2644 35.2141 53.8736 33.8649 55.1787C30.7302 58.2112 25.7555 58.2112 22.6208 55.1787C21.2716 53.8736 19.3955 53.2645 17.5368 53.5273C13.2183 54.1382 9.19371 51.2138 8.44012 46.918C8.11579 45.069 6.9558 43.4736 5.29755 42.5938C1.44491 40.5496 -0.0923247 35.8177 1.82294 31.8994C2.64734 30.2129 2.64734 28.2402 1.82294 26.5537C-0.0923258 22.6354 1.44491 17.9036 5.29755 15.8594C6.9558 14.9795 8.11579 13.3841 8.44012 11.5352C9.19371 7.23929 13.2183 4.31497 17.5368 4.92578C19.3955 5.18868 21.2716 4.57954 22.6208 3.27441Z" />
              </clipPath>
            </defs>
            {/* Profile image clipped to scallop shape */}
            <image
              href={initialProfileData.avatar}
              x="3"
              y="3"
              width="51"
              height="53"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#profile-scallop-clip)"
            />
            {/* Gradient border stroke */}
            <path
              d="M22.6208 3.27441C25.7555 0.241889 30.7302 0.24189 33.8649 3.27441C35.2141 4.57954 37.0903 5.18868 38.9489 4.92578C43.2674 4.31497 47.292 7.23929 48.0456 11.5352C48.3699 13.3841 49.5299 14.9795 51.1882 15.8594C55.0408 17.9036 56.578 22.6354 54.6628 26.5537C53.8384 28.2402 53.8384 30.2129 54.6628 31.8994C56.578 35.8177 55.0408 40.5496 51.1882 42.5938C49.5299 43.4736 48.3699 45.069 48.0456 46.918C47.292 51.2138 43.2674 54.1382 38.9489 53.5273C37.0903 53.2644 35.2141 53.8736 33.8649 55.1787C30.7302 58.2112 25.7555 58.2112 22.6208 55.1787C21.2716 53.8736 19.3955 53.2645 17.5368 53.5273C13.2183 54.1382 9.19371 51.2138 8.44012 46.918C8.11579 45.069 6.9558 43.4736 5.29755 42.5938C1.44491 40.5496 -0.0923247 35.8177 1.82294 31.8994C2.64734 30.2129 2.64734 28.2402 1.82294 26.5537C-0.0923258 22.6354 1.44491 17.9036 5.29755 15.8594C6.9558 14.9795 8.11579 13.3841 8.44012 11.5352C9.19371 7.23929 13.2183 4.31497 17.5368 4.92578C19.3955 5.18868 21.2716 4.57954 22.6208 3.27441Z"
              stroke="url(#profile-avatar-gradient)"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>

        {/* ── Name & Email ── */}
        <h2 className="text-xl font-bold text-text-heading mb-1.5 z-1">
          {initialProfileData.firstName} {initialProfileData.lastName}
        </h2>
        <p className="text-sm text-primary mb-6 z-1">
          {initialProfileData.email}
        </p>

        {/* ── Change Profile Photo Button ── */}
        <button className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full z-1">
          Change profile photo
          <Image
            src="/dashboard/icons/camera-icon.svg"
            alt=""
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Profile Field (read-only or editable input)
   ───────────────────────────────────────────── */
function ProfileField({
  label,
  value,
  isEditing,
  onChange,
}: {
  label: string;
  value: string;
  isEditing: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm text-text-muted mb-1.5">{label}</label>
      <input
        type="text"
        readOnly={!isEditing}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3.5 py-2.5 text-sm text-text-heading bg-white border border-gray-200 rounded-lg outline-none ${
          isEditing ? "focus:border-primary cursor-text" : "cursor-default"
        }`}
      />
    </div>
  );
}
