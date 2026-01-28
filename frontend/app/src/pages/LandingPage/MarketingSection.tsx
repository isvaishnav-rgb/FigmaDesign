import { Box, Typography } from "@mui/material";
import MarketingCard from "../../components/MerketingCard";
import marketingImage1 from "../../assets/images/marketingImage1.png"
import marketingImage2 from "../../assets/images/marketingImage2.png"
import marketingImage3 from "../../assets/images/marketingImage3.png"

const MarketingSection = () => {
    const marketingCardData = [
        {
            image: marketingImage1,
            content: "Creating Streamlined Safeguarding Processes with OneRen"
        },
        {
            image: marketingImage2,
            content: "What are your safeguarding responsibilities and how can you manage them?"
        },
        {
            image: marketingImage3,
            content: "Revamping the Membership Model with Triathlon Australia"
        }
    ]
    return (
        <section id="marketing">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: { sx: "0 20px", md: "0 100.23px" }, marginBottom: "100px", marginTop: "30px", width: "100%", gap: "11.14px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: { md: "772.6370849609375px" }, gap: "5.57px" }}>
                    <Typography sx={{ fontSize: "25.06px", fontWeight: 600, lineHeight: "30.63px", letterSpacing: "0%", color: "#4D4D4D", fontFamily: "Inter", textAlign: "center" }}>Caring is the new marketing</Typography>
                    <Typography sx={{ padding: "5px 0px", fontSize: "11.14px", color: "#717171", width: {md:"437.1316223144531px"}, textAlign: "center", letterSpacing: "0%", fontFamily: "Inter", lineHeight: "16.71px" }}>
                        The Nextcent blog is the best place to read about
                        the latest membership insights, trends and more. See who joining
                        the community, read about how our community are increasing their membership
                        income and lot more.
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", width: "100%", gap: "100px" }}>
                    {
                        marketingCardData.map((item, index) => (
                            <MarketingCard key={index} image={item.image} content={item.content} />
                        ))
                    }
                </Box>
            </Box>
        </section>
    )
}

export default MarketingSection;