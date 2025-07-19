"use client";

import { useState } from "react";
import styles from "./AddPatientForm.module.css";

const tabList = [
  { label: "Patient Demographics", key: "demographics" },
  { label: "Diagnosis & Clinical History", key: "diagnosis" },
  { label: "Comorbidities & Asthma Mimics", key: "comorbidities" },
];

// PUBLIC_INTERFACE
export default function AddPatientPage() {
  const [activeTab, setActiveTab] = useState(tabList[0].key);
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    sex: "",
    dob: "",
    address: "",
    contactNumber: "",
    email: "",
    occupation: "",
    clinicNumber: "",
    asthmaClinicID: "",
    nic: "",
  });

  // PUBLIC_INTERFACE
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // PUBLIC_INTERFACE
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Implement save action, show validation, etc.
    alert("Patient demographics data submitted (not yet saved to backend)!");
  }

  // Always enforce light background on entire page
  return (
    <div
      className="flex flex-col min-h-screen pt-10 px-4 sm:px-10"
      style={{
        background: "#fff", // enforced light background
        backgroundColor: "#fff",
      }}
    >
      <div
        className="max-w-2xl mx-auto w-full shadow-lg rounded-lg p-6 sm:p-10 mt-6"
        style={{
          background: "#fff", // enforced light background for card content as well
          backgroundColor: "#fff",
        }}
      >
        <h1 className="text-2xl font-semibold mb-6 text-center text-primary">
          Add New Patient
        </h1>
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          {tabList.map((tab) => (
            <button
              key={tab.key}
              className={`py-2 px-4 text-sm sm:text-base border-b-2 transition-all font-medium outline-none
                ${
                  activeTab === tab.key
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-primary"
                }`}
              onClick={() => setActiveTab(tab.key)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <form className="w-full" onSubmit={handleSubmit} autoComplete="off">
          {activeTab === "demographics" && (
            <div className="flex flex-col gap-5">
              {/* Full Name */}
              <div>
                <label
                  className="block text-sm mb-1 font-medium text-gray-700"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className={`w-full border rounded px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-primary transition ${styles.inputLightBg}`}
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  autoFocus
                  placeholder="Enter full name"
                />
              </div>
              {/* Age, Sex, DOB (grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label
                    className="block text-sm mb-1 font-medium text-gray-700"
                    htmlFor="age"
                  >
                    Age
                  </label>
                  <input
                    className={`w-full border rounded px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-primary transition ${styles.inputLightBg}`}
                    type="number"
                    id="age"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    min="0"
                    max="150"
                    pattern="[0-9]+"
                    placeholder="e.g. 32"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-1 font-medium text-gray-700"
                    htmlFor="sex"
                  >
                    Sex
                  </label>
                  <select
                    className={`w-full border rounded px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-primary transition ${styles.inputLightBg}`}
                    id="sex"
                    name="sex"
                    value={form.sex}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm mb-1 font-medium text-gray-700"
                    htmlFor="dob"
                  >
                    Date of Birth
                  </label>
                  <input
                    className={`w-full border rounded px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-primary transition ${styles.inputLightBg}`}
                    type="date"
                    id="dob"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label
                  className="block text-sm mb-1 font-medium text-gray-700"
                  htmlFor="address"
                >
                  Address
                </label>
                <textarea
                  className={`w-full border rounded px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-primary transition resize-none ${styles.inputLightBg}`}
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Enter address"
                />
              </div>

              {/* Contact, Email, Occupation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label
                    className="block text-sm mb-1 font-medium text-gray-700"
                    htmlFor="contactNumber"
                  >
                    Contact Number
                  </label>
                  <input
                    className={`w-full border rounded px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-primary transition ${styles.inputLightBg}`}
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={form.contactNumber}
                    onChange={handleChange}
                    placeholder="e.g. 0771234567"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-1 font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className={`w-full border rounded px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-primary transition ${styles.inputLightBg}`}
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. someone@email.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-1 font-medium text-gray-700"
                    htmlFor="occupation"
                  >
                    Occupation
                  </label>
                  <input
                    className={`w-full border rounded px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-primary transition ${styles.inputLightBg}`}
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={form.occupation}
                    onChange={handleChange}
                    placeholder="e.g. Student"
                  />
                </div>
              </div>

              {/* Clinic Number, Asthma Clinic ID, NIC */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label
                    className="block text-sm mb-1 font-medium text-gray-700"
                    htmlFor="clinicNumber"
                  >
                    Clinic Number
                  </label>
                  <input
                    className={`w-full border rounded px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-primary transition ${styles.inputLightBg}`}
                    type="text"
                    id="clinicNumber"
                    name="clinicNumber"
                    value={form.clinicNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-1 font-medium text-gray-700"
                    htmlFor="asthmaClinicID"
                  >
                    Asthma Clinic ID
                  </label>
                  <input
                    className={`w-full border rounded px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-primary transition ${styles.inputLightBg}`}
                    type="text"
                    id="asthmaClinicID"
                    name="asthmaClinicID"
                    value={form.asthmaClinicID}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-1 font-medium text-gray-700"
                    htmlFor="nic"
                  >
                    NIC
                  </label>
                  <input
                    className={`w-full border rounded px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-primary transition ${styles.inputLightBg}`}
                    type="text"
                    id="nic"
                    name="nic"
                    value={form.nic}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-7 bg-primary text-white rounded py-2 font-semibold hover:bg-primary/90 transition text-base"
              >
                Save & Continue
              </button>
            </div>
          )}
          {activeTab !== "demographics" && (
            <div className="text-gray-500 flex flex-col justify-center items-center h-32">
              <span className="text-base mb-2">Tab content not implemented yet.</span>
              <span className="text-xs">
                Please complete Patient Demographics to enable other tabs.
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
