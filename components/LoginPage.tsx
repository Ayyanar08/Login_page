"use client";

import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="wallpaper">
      <div className="container">
        {/* Left side image */}
        <div className="left">
          <Image
            src="/Card.png"
            alt="Documents"
            width={300}
            height={300}
            className="doc-img"
          />
          {/* Logo in corner */}
      <img
        src="sarvia-logo.png"
        alt="Sarvia"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "80px",
          background: "white",
          borderRadius: "6px",
          padding: "4px"
        }}
      />

        </div>

        {/* Right side Login Form */}
        <div className="right">
          <h1 className="title">Login</h1>
          <form className="form">

            {/* Email Field */}
            <label className="label">Email</label>
            <div className="input-container">
              <Image
                src="/mail.png"
                alt="Mail Icon"
                width={20}
                height={20}
                className="input-icon"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input"
              />
            </div>

            {/* Password Field */}
            <label className="label">Password</label>
            <div className="input-container">
              <Image
                src="/password.png"
                alt="Password Icon"
                width={20}
                height={20}
                className="input-icon"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="input"
              />
            </div>

            {/* Terms */}
            <div className="terms">
              <a href="#">Forget password?</a>
            </div>

            <button type="submit" className="btn">
              Sign in
            </button>
          </form>

          {/* Social Login */}
          <div className="social">
            <p>----------or continue with----------</p>
            <div className="icons">
              <Image src="/google.png" alt="Google" width={30} height={30} />
              <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
              <Image src="/LinkedIn.png" alt="LinkedIn" width={30} height={30} />
            </div>
          </div>

          <p className="signup">
            Don't Have an account, <a href="/Login">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}