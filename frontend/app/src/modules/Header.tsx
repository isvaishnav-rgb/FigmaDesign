"use client"
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "../assets/images/Logo.png"
import ButtonComponent from "../components/ButtonComponent";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const { isAuthenticated, logout } = useAuth()
    const HeaderItems = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Features",
            link: "/#client"
        },
        {
            name: "Community",
            link: "/#marketing"
        },
        {
            name: "Blog",
            link: "/#design"
        },
        {
            name: "Pricing",
            link: "/#business"
        },
    ]

    const [showMenu, setShowMenu] = useState(false)

    const handleLogout = async () => {
        await logout();
    }

    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                padding: { xs: "11.14px 20px", md: "11.14px 100.23px" },
                justifyContent: "space-between",
                position: "fixed",
                zIndex: "99999",
                backgroundColor: "white",
                width: "100%",
            }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Link href="/"><Image src={Logo} alt="Logo" className="me-2" width={107.53605651855469} height={16.70566749572754} /></Link>
                </Box>
                <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, alignItems: "center", justifyContent: "flex-end", gap: "16.71px", }}>
                    <Box sx={{ display: "flex", gap: 4 }}>
                        {
                            HeaderItems.map((item, index) => (
                                <Link key={index} href={item.link} onClick={() => setShowMenu(false)}>
                                    <Typography
                                        key={index}
                                        sx={{
                                            fontSize: "11.14px",
                                            fontWeight: 500,
                                            lineHeight: "16.71px",
                                            letterSpacing: "0%",
                                            fontFamily: "Inter",
                                            color: "#4D4D4D",
                                            cursor: "pointer",
                                            "&: hover": {
                                                color: "#2E7D32",
                                                fontWeight: 700
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </Link>))
                        }
                    </Box>
                    {!isAuthenticated ?
                        <Link href="/signup"><ButtonComponent text="Register Now" isEndIcon={true} /></Link>
                        :
                        <ButtonComponent text="Logout" onSubmit={handleLogout} />
                    }
                </Box>
                {!showMenu ?
                    <Box sx={{ display: { xs: "flex", md: "none" } }} onClick={() => setShowMenu(true)}>
                        <MenuIcon />
                    </Box> :
                    <Box sx={{ display: { xs: "flex", md: "none" } }} onClick={() => setShowMenu(false)}>
                        <ClearIcon />
                    </Box>
                }
                {showMenu && (
                    <>
                        {/* Backdrop */}
                        <Box
                            onClick={() => setShowMenu(false)}
                            sx={{
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(0,0,0,0.4)",
                                zIndex: 1200,
                            }}
                        />

                        {/* Slide Menu */}
                        <Box
                            sx={{
                                position: "fixed",
                                top: 0,
                                right: 0,
                                height: "100vh",
                                width: "80%",
                                maxWidth: "320px",
                                backgroundColor: "#FFFFFF",
                                zIndex: 1300,
                                padding: "24px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "24px",
                                transform: showMenu ? "translateX(0)" : "translateX(100%)",
                                transition: "transform 0.3s ease-in-out",
                            }}
                        >
                            {/* Close Icon */}
                            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <ClearIcon
                                    onClick={() => setShowMenu(false)}
                                    sx={{ cursor: "pointer" }}
                                />
                            </Box>

                            {/* Menu Items */}
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                {HeaderItems.map((item, index) => (
                                    <Link key={index} href={item.link} onClick={() => setShowMenu(false)}>
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: 500,
                                                color: "#4D4D4D",
                                                padding: "12px 0",
                                                borderBottom: "1px solid #E0E0E0",
                                                "&:hover": {
                                                    color: "#2E7D32",
                                                },
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>

                            {/* CTA */}
                            <Box sx={{ marginTop: "auto" }}>
                                {!isAuthenticated ?
                                    <Link href="/signup"><ButtonComponent text="Register Now" isEndIcon={true} /></Link>
                                    :
                                    <ButtonComponent text="Logout" onSubmit={handleLogout} />
                                }
                            </Box>
                        </Box>
                    </>
                )}
            </Box>
        </>
    )
}

export default Header;