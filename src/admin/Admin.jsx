import React, { useRef, useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import Lottie from "lottie-react";
import Heartrate from "../assets/animation/admin.json";
import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../redux/slices/adminSlice";

const Admin = () => {
  const otpRefs = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(120);

  const DEMO_EMAIL = "admin@gmail.com";
  const DEMO_OTP = "123456";

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

  const sendOTP = () => {
    if (email !== DEMO_EMAIL) {
      alert("Use demo email: admin@gmail.com");
      return;
    }

    setOtpSent(true);
    setTimer(120);
  };

  const handleLogin = () => {
    const enteredOtp = otpRefs.current.map((input) => input.value).join("");

    if (email === DEMO_EMAIL && enteredOtp === DEMO_OTP) {
      dispatch(loginAdmin());
      navigate("/seller");
    } else {
      alert("Invalid email or OTP (Demo OTP: 123456)");
    }
  };

  useEffect(() => {
    if (otpSent && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [otpSent, timer]);

  return (
    <div
      className="py-10 md:py-16 flex items-center justify-center font-sans px-4"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row rounded-sm overflow-hidden">
        {/* LEFT SIDE */}
        <div
          className="lg:w-2/3 w-full relative hidden md:flex flex-col justify-between py-8 md:py-12 px-6 md:px-12"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="flex flex-1 items-center justify-center">
            <Lottie
              animationData={Heartrate}
              loop
              autoplay
              className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80"
            />
          </div>

          <div className="z-10 px-2 pb-4 text-center lg:text-left">
            <h2
              className="text-2xl md:text-3xl mb-4 font-heading leading-tight"
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
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Manage properties, tenants, and rental agreements efficiently with
              our secure platform built for property managers and landlords.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 w-full p-6 md:p-10 flex flex-col justify-center bg-[var(--bg-secondary)]/50">
          <div className="w-full">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-heading mb-2 text-[var(--accent-primary)]">
                Admin Verification
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">
                Enter your credentials to access the dashboard
              </p>
            </div>

            {/* EMAIL */}
            <div className="mb-6 flex flex-col gap-2 w-full">
              <label
                className="block text-sm font-medium"
                style={{ color: "var(--text-main)" }}
              >
                Email
              </label>

              <div className="flex flex-col sm:flex-row w-full gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-3 py-3 rounded-sm border border-[var(--border-light)] focus:outline-none"
                  />

                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
                </div>

                <button
                  onClick={sendOTP}
                  className="px-6 py-3 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-xs font-medium rounded-sm uppercase tracking-wider"
                >
                  Send
                </button>
              </div>
            </div>

            {/* OTP LABEL */}
            <div className="flex justify-between items-center mb-2">
              <label
                className="text-sm font-medium"
                style={{ color: "var(--text-main)" }}
              >
                Enter OTP
              </label>

              {otpSent && (
                <span className="text-sm text-[var(--text-secondary)]/80">
                  {Math.floor(timer / 60)}:
                  {(timer % 60).toString().padStart(2, "0")}
                </span>
              )}
            </div>

            {/* OTP INPUTS */}
            <div className="flex justify-between gap-2 mb-6 flex-wrap sm:flex-nowrap">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  ref={(el) => (otpRefs.current[index] = el)}
                  onInput={(e) => handleOTPInput(e, index)}
                  onKeyDown={(e) => handleOTPBackspace(e, index)}
                  onPaste={handleOTPPaste}
                  className="w-10 h-10 sm:w-12 sm:h-12 border border-[var(--border-light)] focus:outline-none rounded text-center text-lg"
                />
              ))}
            </div>

            {/* REMEMBER */}
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

            {/* LOGIN BUTTON */}
            <button
              onClick={handleLogin}
              className="uppercase tracking-wider w-full py-3 rounded-sm bg-[var(--accent-primary)] text-white text-sm font-medium"
            >
              Login
            </button>

            {otpSent && (
              <p className="text-sm mt-4 text-center text-[var(--accent-primary)]">
                OTP sent to your email
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
