"use client";

import { Box, TextField, Typography } from "@mui/material";
import ButtonComponent from "../../components/ButtonComponent";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const Signup = () => {
  const { signup } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !phoneNumber || !password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);
      await signup({ name, email, phoneNumber, password });
      router.push("/"); // redirect after signup
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        throw error;
      }
      throw new Error("Something went wrong during signup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F5F7FA" }}>
      <Box sx={{ maxWidth: "420px", width: "100%", p: "32px", bgcolor: "#fff", borderRadius: "12px", boxShadow: "0px 10px 30px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "22px", fontWeight: 600 }}>
            Create Account
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#6B7280" }}>
            Join us and start your journey
          </Typography>
        </Box>

        <TextField label="Full Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Email Address" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Phone Number" fullWidth value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />

        <ButtonComponent
          text={loading ? "Signing up..." : "Sign Up"}
          onSubmit={handleSignup}
        />

        <Typography sx={{ fontSize: "13px", textAlign: "center", color: "#6B7280" }}>
          Already have an account?{" "}
          <Link href="/login">
            <span style={{ color: "#2E7D32", cursor: "pointer" }}>Sign in</span>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
