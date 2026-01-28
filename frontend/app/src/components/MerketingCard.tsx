import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image, { StaticImageData } from "next/image";

const MarketingCard = ({image, content}: {image: StaticImageData | string, content: string}) => {
    return (
        <>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", position: "relative"}}>
                <Image src={image} alt="Marketing Images" width={256.153564453125} height={199.07586669921875} style={{borderRadius: "5.57px"}}/>
                <Box sx={{ width: "220.65402221679688px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#F5F7FA", padding: "11.14px", position: "absolute", top: "65%", borderRadius: "5.57px", gap: "11.14px", boxShadow: "0px 11.14px 40px 0px #ABBED166",}}>
                    <Typography sx={{fontSize: "13.92px", fontWeight: 600, color: "#717171", lineHeight: "19.49px", letterSpacing: "0%", fontFamily: "Inter"}}>{content}</Typography>
                    <Button endIcon={<ArrowForwardIcon sx={{ width: "16.705667495727603px", height: "16.705667495727603px"}} />} sx={{color: "#4CAF4F", fontSize: "13.92px", fontWeight: 600, padding: "5.57px", fontFamily: "Inter", lineHeight: "19.49px", textTransform: "none"}}>Readmore</Button>
                </Box>
            </Box>
        </>
    )
}

export default MarketingCard;