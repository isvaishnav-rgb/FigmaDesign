import { Box, TextField, Typography } from "@mui/material";
import ButtonComponent from "../../components/ButtonComponent";
import Link from "next/link";

const Login = () => {
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
          maxWidth: "400px",
          backgroundColor: "#FFFFFF",
          padding: "32px",
          borderRadius: "12px",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Login
        </Typography>

        {/* Inputs */}
        <TextField
          label="Email"
          type="email"
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
        />

        {/* Button */}
        <ButtonComponent text="Login" />
         <Typography
          sx={{
            fontSize: "13px",
            textAlign: "center",
            color: "#6B7280",
          }}
        >
          Create New Account{" "}
          <Link href="/signup"><Typography component="span" sx={{ color: "#2E7D32", cursor: "pointer", fontSize: "13px" }}>
            Sign up
          </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
