"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "@/app/globals.css";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isForgotPassword) {
      if (otpSent && formData.otp && formData.password === formData.confirmPassword) {
        alert("OTP Verified! Password Reset Successful.");
      } else if (otpSent) {
        alert("Enter OTP and Confirm Password!");
      } else {
        alert("Sending OTP...");
        setOtpSent(true);
      }
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(isLogin ? "Logging in..." : "Signing up...");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-xl shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-lg">✖</button>

        <h2 className="text-xl font-bold text-center mb-4">
          {isForgotPassword ? "Reset Password" : isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          
          {!isForgotPassword && <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />}
          
          {!isLogin && !isForgotPassword && (
            <Input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          )}

          {otpSent && isForgotPassword && <Input type="text" name="otp" placeholder="Enter OTP" value={formData.otp} onChange={handleChange} required />}
          
          {otpSent && isForgotPassword && <Input type="password" name="password" placeholder="New Password" value={formData.password} onChange={handleChange} required />}
          
          {otpSent && isForgotPassword && <Input type="password" name="confirmPassword" placeholder="Confirm New Password" value={formData.confirmPassword} onChange={handleChange} required />}

          <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            {isForgotPassword ? "Submit" : isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>

        <div className="text-center mt-4">
          {!isForgotPassword ? (
            <>
              {isLogin ? (
                <>
                  <p className="text-sm text-gray-600">Don't have an account?{" "}
                    <button className="text-blue-500 font-bold" onClick={() => setIsLogin(false)}>Sign Up</button>
                  </p>
                  <p className="text-sm text-gray-600">Forgot password?{" "}
                    <button className="text-blue-500 font-bold" onClick={() => setIsForgotPassword(true)}>Reset</button>
                  </p>
                </>
              ) : (
                <p className="text-sm text-gray-600">Already have an account?{" "}
                  <button className="text-blue-500 font-bold" onClick={() => setIsLogin(true)}>Login</button>
                </p>
              )}
            </>
          ) : (
            <p className="text-sm text-gray-600">Remembered your password?{" "}
              <button className="text-blue-500 font-bold" onClick={() => setIsForgotPassword(false)}>Login</button>
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AuthModal;
