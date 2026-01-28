import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface cardType {
    icon: StaticImageData | string;
    title: string;
    description: string;
}

const ManageCard = ({ card }: { card: cardType }) => {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5.57px",
                padding: "16.71px 22.27px",
                textAlign: "center",
                boxShadow: "0px 2.78px 10px 0px rgba(171, 190, 209, 0.2)",
                borderRadius: "5.57px",
                width: "208.12477111816406px"
            }}>
                <Image src={card.icon} alt={card.title} height={45.24452209472656} width={38.979888916015625} />
                <Typography sx={{ fontSize: "19.49px", fontWeight: 700, maxWidth: "200px", lineHeight: "25.06px", color: "#4D4D4D", fontFamily: "Inter" }}>{card.title}</Typography>
                <Typography sx={{ fontSize: "9.74px", color: "#717171", lineHeight: "13.92px", letterSpacing: "0%", fontFamily: "Inter" }}>{card.description}</Typography>
            </Box >
        </>
    )
}

export default ManageCard;