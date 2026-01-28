import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from "next/image";
import CutomerImage from "../../assets/images/customerImage.png"
import CustomerIcon1 from "../../assets/images/customericon1.png"
import CustomerIcon2 from "../../assets/images/customericon2.png"
import CustomerIcon3 from "../../assets/images/customericon3.png"
import CustomerIcon4 from "../../assets/images/customericon4.png"
import CustomerIcon5 from "../../assets/images/customericon5.png"
import CustomerIcon6 from "../../assets/images/customericon6.png"

const CustomerSection = () => {
    const customerIcons = [
        {
            icon: CustomerIcon1
        },
        {
            icon: CustomerIcon2
        },
        {
            icon: CustomerIcon3
        },
        {
            icon: CustomerIcon4
        },
        {
            icon: CustomerIcon6
        },
        {
            icon: CustomerIcon5
        }
    ]
    return (
        <section id="customer">
            <Box sx={{ backgroundColor: "#F5F7FA", display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, alignItems: "center", justifyContent: "space-between", padding: {xs: "20px", md:"22.54px 100.23px"}, gap: "54.29px", margin: "30px 0" }}>
                <Image src={CutomerImage}
                    alt="customer image"
                    style={{ width: "226.92px", height: "226.92px", borderRadius: "5.57px" }} />
                <Box sx={{ width: {md:"520.6599731445312px"}, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", }}>
                        <Typography sx={{ fontSize: "11.14px", fontWeight: 500, color: "#717171" }}>
                            Maecenas dignissim justo eget nulla rutrum molestie.
                            Maecenas lobortis sem dui, vel rutrum risus tincidunt
                            ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
                            tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                            Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
                            ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium.
                            Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque
                            vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim
                            finibus ac sit amet magna.
                        </Typography>
                        <Typography sx={{ fontSize: "13.92px", color: "#4CAF4F", fontWeight: 600, margin: "11.14px 0px" }}>
                            Tim Smith
                        </Typography>
                        <Typography sx={{ color: "#89939E", fontSize: "11.14px" }}>
                            British Dragon Boat Racing Association
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: {md: "row", xs: "column"}, alignItems: "center", gap: "5.57px", marginTop: "22.27px", overflowX: "auto", scrollbarWidth: "none",}}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "28.54px", overflowX: "auto", scrollbarWidth: "none", }}>
                            {
                                customerIcons.map((item, index) => (
                                    <Image src={item.icon} key={index} alt="customer icons" width={33.41133499145508} height={33.41133499145508} />
                                ))
                            }
                        </Box>
                        <Button
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                color: "#4CAF4F",
                                textTransform: "none",
                                fontSize: "13.92px",
                                fontWeight: 600,
                                padding: "5.57px",
                                lineHeight: "19.49px",
                                letterSpacing: "0%",
                                fontFamily: "Inter",
                            }}>
                            Meet all customers
                        </Button>
                    </Box>

                </Box>
            </Box>
        </section>
    )
}

export default CustomerSection;