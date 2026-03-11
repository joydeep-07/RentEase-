import React, { useRef } from "react";
import { FaEnvelope, FaExclamationCircle } from "react-icons/fa";
import Lottie from "lottie-react";
import Heartrate from "../assets/animation/admin.json";
import { Checkbox, Button } from "@mui/material";

const Admin = () => {
  const otpRefs = useRef([]);

  const handleOTPInput = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) e.target.value = value.slice(0, 1);

    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleOTPBackspace = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  const handleOTPPaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(data)) {
      otpRefs.current.forEach((input, i) => {
        input.value = data[i] || "";
      });
      otpRefs.current[otpRefs.current.length - 1].focus();
    }
  };

  return (
    <div
      className="py-15 flex items-center justify-center font-sans"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="w-full max-w-6xl flex rounded-2xl overflow-hidden h-[600px]">
        {/* Left Side - Banner */}
        <div
          className="w-2/3 relative flex flex-col justify-between py-12 px-12 overflow-hidden"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="flex flex-1 items-center justify-center">
            <Lottie
              animationData={Heartrate}
              loop
              autoplay
              className="w-80 h-80"
            />
          </div>

          <div className="z-10 px-2 pb-4">
            <h2
              className="text-3xl mb-4 font-heading leading-tight"
              style={{ color: "var(--text-main)" }}
            >
              <span className="text-[var(--accent-primary)]">Secure</span>{" "}
              Rentease
              <br />
              <span className="text-[var(--accent-primary)]">
                Administration
              </span>{" "}
              Portal
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Manage properties, tenants, and rental agreements efficiently with
              our secure platform built for property managers and landlords.
            </p>
          </div>
        </div>

        {/* Right Side (OTP Form) */}
        <div className="w-1/2 p-12 flex flex-col justify-center relative bg-[var(--bg-secondary)]/50">
          <div className="z-10">
            <h2 className="text-3xl font-heading mb-2 text-[var(--accent-primary)]">
              Admin Verification
            </h2>
            <p className="text-sm mb-2 text-[var(--text-secondary)]">
              Enter your credentials to access the dashboard
            </p>
            <p className="text-sm mb-6 text-[var(--text-secondary)]/60">
              The authentication code has been sent to your email
            </p>

            {/* Email Field */}
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--text-main)" }}
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none border border-[var(--border-light)] "
                 
                />
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              </div>
            </div>

            {/* OTP Inputs */}
            <div className="flex justify-between mb-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  ref={(el) => (otpRefs.current[index] = el)}
                  onInput={(e) => handleOTPInput(e, index)}
                  onKeyDown={(e) => handleOTPBackspace(e, index)}
                  onPaste={handleOTPPaste}
                  className="w-12 h-12 border border-[var(--border-light)] focus:outline-none rounded text-center text-lg focus:border-[var(--border-light)] transition"
                />
              ))}
            </div>

            {/* Remember + Submit */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "var(--accent-primary)",
                    "&.Mui-checked": { color: "var(--accent-primary)" },
                  }}
                />
                <span style={{ color: "var(--text-main)" }}>Remember me</span>
              </div>
            </div>


            <button className="uppercase tracking-wider w-full focus:outline-none py-3 rounded-sm bg-[var(--accent-primary)] text-white text-sm font-medium ">
                VErify
            </button>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
