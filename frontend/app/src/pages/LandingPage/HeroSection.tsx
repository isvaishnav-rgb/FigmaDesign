import { Box, Typography } from "@mui/material";
import ButtonComponent from "../../components/ButtonComponent";
import Image from "next/image";
import HeroSectionImage from "../../assets/images/Illustration.png"

const HeroSection = () => {
    return (
        <section id="hero">
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#F5F7FA",
                paddingTop: "60px"
            }}>
                <Box sx={{ margin: {xs: "20px 20px", md:"112.02px 0 112.02px 100.23px"}, width: {md:"457.32px"} }}>
                    <Typography
                        component="h6"
                        sx={{
                            fontSize: "44.55px",
                            fontWeight: 600,
                            fontFamily: "Inter",
                            lineHeight: "52.9px",
                            letterSpacing: "0%",
                            color: "#4D4D4D"
                        }}
                    >
                        Lessons and insights <br/>
                        <Typography
                            component="span"
                            sx={{
                                fontSize: "44.55px",
                                fontWeight: 600,
                                color: "#4CAF4F",
                                fontFamily: "Inter",
                                lineHeight: "52.9px",
                                letterSpacing: "0%",
                            }}
                        >
                            {" "}from 8 years
                        </Typography>
                    </Typography>

                    <Typography sx={{
                        margin: "10px 0px 20px 0px",
                        color: "#717171",
                        fontSize: "11.14px",
                        lineHeight: "16.71px",
                        letterSpacing: "0%",
                        fontFamily: "Inter",
                    }}>
                        Where to grow your business as a photographer: site or social media?
                    </Typography>
                    <ButtonComponent text="Register" />
                </Box>
                <Box sx={{ margin: {xs: "20px 20px", md:"66.82px 100.23px 66.82px 0px"} }}>
                    <Image src={HeroSectionImage} alt="Hero Section" width={272.1631774902344} height={283.3002624511719} />
                </Box>
            </Box >
        </section>
    )
}

export default HeroSection;