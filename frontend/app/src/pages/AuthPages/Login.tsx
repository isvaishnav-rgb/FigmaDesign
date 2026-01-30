"use client";

import { Box, TextField, Typography } from "@mui/material";
import ButtonComponent from "../../components/ButtonComponent";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      await login({ email, password });
      router.push("/"); // redirect after login
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
      <Box sx={{ maxWidth: "400px", width: "100%", p: "32px", bgcolor: "#fff", borderRadius: "12px", boxShadow: "0px 8px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography sx={{ fontSize: "22px", fontWeight: 600, textAlign: "center" }}>
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <ButtonComponent
          text={loading ? "Logging in..." : "Login"}
          onSubmit={handleLogin}
        />

        <Typography sx={{ fontSize: "13px", textAlign: "center", color: "#6B7280" }}>
          Create New Account{" "}
          <Link href="/signup">
            <span style={{ color: "#2E7D32", cursor: "pointer" }}>Sign up</span>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
