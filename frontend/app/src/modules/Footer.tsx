"use client"
import { Box, Typography, TextField } from "@mui/material";
import Image from "next/image";
import Logo from "../assets/images/Logo.png"
import SendIcon from '@mui/icons-material/Send';
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const socialMediaIcons = [
        {
            image: <InstagramIcon sx={{ height: "22.27422332763672px", width: "22.27422332763672px" }} />
        },
        {
            image: <LinkedInIcon sx={{ height: "22.27422332763672px", width: "22.27422332763672px" }} />
        },
        {
            image: <TwitterIcon sx={{ height: "22.27422332763672px", width: "22.27422332763672px" }} />
        },
        {
            image: <FacebookIcon sx={{ height: "22.27422332763672px", width: "22.27422332763672px" }} />
        }
    ]
    return (
        <>
            <Box sx={{ backgroundColor: "#263238", color: "#FFFFFF", display: "flex", flexDirection: { xs: "column", md: "row" }, padding: {xs:"20px 20px",md:"44.5px 114.85px 44.5px 114.85px"}, gap: "27.84px", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4, width: {md:"243.6243133544922px"} }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Image src={Logo} alt="Logo" className="me-2" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5.57px" }}>
                        <Typography sx={{ color: "#F5F7FA", fontSize: "9.74px" }}>
                            Copyright © 2020 Landify UI Kit.
                        </Typography>
                        <Typography sx={{ color: "#F5F7FA", fontSize: "9.74px" }}>
                            All rights reserved
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "11.14px" }}>
                        {
                            socialMediaIcons.map((item, index) => (
                                // <Image src={item.image} alt="Social Media Image" key={index} height={22.27422332763672} width={22.27422332763672}/>
                                <Box key={index} sx={{ padding: "3px", backgroundColor: "#4D4D4D", borderRadius: "50%" }}>{item.image}</Box>
                            ))
                        }
                    </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "20.88px", flexWrap: "wrap" }}>
                    <Box sx={{ width: {md:"111.3711166381836px"}, display: "flex", flexDirection: "column", gap: "8.35px" }}>
                        <Typography sx={{ fontSize: "13.92px", fontWeight: 600, fontFamily: "Inter", lineHeight: "19.49px", letterSpacing: "0%" }}>
                            Company
                        </Typography>
                        <Box> {["About us", "Blog", "Contact us", "Pricing", "Testimonials"].map((item, index) => (
                            <Typography sx={{ fontSize: "9.74px", fontFamily: "Inter", padding: "5px 0px" }} key={index}>{item}</Typography>
                        ))}
                        </Box>
                    </Box>
                    <Box sx={{ width: {md:"111.3711166381836px"}, display: "flex", flexDirection: "column", gap: "8.35px" }}>
                        <Typography sx={{ fontSize: "13.92px", fontWeight: 600, fontFamily: "Inter", lineHeight: "19.49px", letterSpacing: "0%" }}> Support </Typography>
                        <Box>
                            {["Help center", "Terms of service", "Legal", "Privacy policy", "Status"].map((item, index) => (
                                <Typography sx={{ fontSize: "9.74px", fontFamily: "Inter", padding: "5px 0px" }} key={index}>{item}</Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16.71px" }}>
                        <Typography sx={{ fontSize: "13.92px", fontWeight: 600, fontFamily: "Inter", lineHeight: "19.49px", letterSpacing: "0%" }}> Stay up to date</Typography>
                        <TextField
                            label="Your email address"
                            variant="outlined"
                            sx={{
                                width: {md:"177.5px"},

                                "& .MuiOutlinedInput-root": {
                                    height: "27.84px",
                                    borderRadius: "5.57px",
                                    backgroundColor: "#717171",
                                    display: "flex",
                                    alignItems: "center", // ✅ vertical center
                                },

                                "& .MuiOutlinedInput-input": {
                                    color: "#D9DBE1",
                                    padding: "0 10px",   // ❌ remove vertical padding
                                    fontSize: "11.14px",
                                    height: "100%",      // ✅ fill parent
                                    boxSizing: "border-box",
                                },

                                "& .MuiInputLabel-root": {
                                    color: "#D9DBE1",
                                    fontSize: "11.14px",
                                    top: "-40%",         // 🔧 label adjustment for small height
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton size="small" sx={{ padding: "4px" }}>
                                            <SendIcon sx={{ fontSize: "16px", color: "#D9DBE1" }} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Footer;