import { Box, TextField, Typography } from "@mui/material";
import ButtonComponent from "../../components/ButtonComponent";
import Link from "next/link";

const Signup = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F7FA",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "#FFFFFF",
          padding: "32px",
          borderRadius: "12px",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 600,
              marginBottom: "4px",
            }}
          >
            Create Account
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#6B7280",
            }}
          >
            Join us and start your journey
          </Typography>
        </Box>

        {/* Inputs */}
        <TextField label="Full Name" fullWidth />
        <TextField label="Email Address" fullWidth />
        <TextField label="Phone Number" fullWidth />
        <TextField label="Password" type="password" fullWidth />

        {/* CTA */}
        <ButtonComponent text="Sign Up" />

        {/* Footer */}
        <Typography
          sx={{
            fontSize: "13px",
            textAlign: "center",
            color: "#6B7280",
          }}
        >
          Already have an account?{" "}
          <Link href="/login"><span style={{ color: "#2E7D32", cursor: "pointer" }}>
            Sign in
          </span>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
