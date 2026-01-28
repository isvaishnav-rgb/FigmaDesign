import { Box, Typography } from "@mui/material"
import Image from "next/image"
import businessIcon1 from "../../assets/images/businessicon1.png"
import businessIcon2 from "../../assets/images/businessicon2.png"
import businessIcon3 from "../../assets/images/businessicon3.png"
import businessIcon4 from "../../assets/images/businessicon4.png"

const BusinessSection = () => {
    const BusinessData = [
        {
            icon: businessIcon1,
            count: "2,245,341",
            title: "Members",
        },
        {
            icon: businessIcon2,
            count: "46,328",
            title: "Clubs",
        },
        {
            icon: businessIcon3,
            count: "828,867",
            title: "Event Bookings",
        },
        {
            icon: businessIcon4,
            count: "1,926,436",
            title: "Payments",
        },
    ];

    return (
        <section id="business">
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 4, padding: {xs: "20px 20px",md:"59.19px 100.23px"}, backgroundColor: "#F5F7FA", justifyContent: "space-between" }}>
                <Box sx={{ width: {md:"375.87750244140625px"}, display: "flex", flexDirection: "column", gap: "5.57px" }}>
                    <Typography sx={{ fontSize: "25.06px", fontWeight: 600, lineHeight: "30.63px", letterSpacing: "0%", color: "#4D4D4D", fontFamily: "Inter" }}>
                        Helping a local
                        <Typography component="span" sx={{ color: "#4CAF4F", fontSize: "25.06px", fontWeight: 600, lineHeight: "30.63px", letterSpacing: "0%", fontFamily: "Inter" }}>
                            {" "}business reinvent itself
                        </Typography>
                    </Typography>
                    <Typography sx={{ fontSize: "11.14px", color: "#18191F", fontFamily: "Inter", lineHeight: "16.71px", letterSpacing: "0%" }}>
                        We reached here with our hard work and dedication
                    </Typography>
                </Box>
                <Box sx={{ display: "grid", gridTemplateRows: {xs: "43px",md:"43px 43px"}, gridTemplateColumns: {xs: "177.49771118164062px",md:"177.49771118164062px 177.49771118164062px"}, columnGap: "11.14px", rowGap: "27.84px", flexWrap: "wrap", padding: "0 20px" }}>
                    {BusinessData.map((item, index) => (
                        <Box key={index} sx={{ display: "flex", gap: "10px" }}>
                            <Image src={item.icon} alt={item.title} width={33.41133499145508} height={33.41133499145508} />
                            <Box>
                                <Typography sx={{ fontSize: "19.49px", fontWeight: 700, color: "#4D4D4D", fontFamily: "Inter", letterSpacing: "0%", lineHeight: "25.06px" }}>
                                    {item.count}
                                </Typography>
                                <Typography sx={{ fontSize: "11.14px", color: "#717171", lineHeight: "16.71px", letterSpacing: "0%", fontFamily: "Inter" }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </section>
    )
}

export default BusinessSection