import { Box, Typography } from "@mui/material";
import Image from "next/image";
import clienticon1 from "../../assets/images/clienticon1.png"
import clienticon2 from "../../assets/images/clienticon2.png"
import clienticon3 from "../../assets/images/clienticon3.png"
import clienticon4 from "../../assets/images/clienticon4.png"
import clienticon5 from "../../assets/images/clienticon5.png"
import clienticon6 from "../../assets/images/clienticon6.png"
import clienticon7 from "../../assets/images/clienticon7.png"

const ClientSection = () => {
    const clientIcons = [
        { item: clienticon1 },
        { item: clienticon2 },
        { item: clienticon3 },
        { item: clienticon4 },
        { item: clienticon5 },
        { item: clienticon6 },
        { item: clienticon7 },
    ]
    return (
        <section id="client">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: "11.14px", margin: "30px 0px", padding: { xs: "0px 20px", md: "0px 100.23px" } }}>
                <Typography sx={{ fontSize: "25.06px", fontWeight: 600, lineHeight: "30.63px", letterSpacing: "0%", color: "#4D4D4D", fontFamily: "Inter", textAlign: "center" }}>
                    Our Clients
                </Typography>
                <Typography sx={{ color: "#717171", fontSize: "11.14px", lineHeight: "16.71px", letterSpacing: "0%", fontFamily: "Inter", textAlign: "center" }}>
                    We have been working with some Fortune 500+ clients
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6, width: "100%", padding: "15px 0px", overflowX: "auto", scrollbarWidth: "none", }}>
                    {
                        clientIcons.map((icon, index) =>
                            <Image key={index} src={icon.item} alt={`Client Icon ${index + 1}`} height={33.41133499145508} width={33.41133499145508} />
                        )
                    }
                </Box>
            </Box>
        </section>
    )
}

export default ClientSection;