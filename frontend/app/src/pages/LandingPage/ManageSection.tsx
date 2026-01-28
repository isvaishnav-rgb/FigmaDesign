import { Box, Typography } from "@mui/material";
import manageIcon1 from "../../assets/images/manageicon1.png";
import manageIcon2 from "../../assets/images/manageicon2.png";
import manageIcon3 from "../../assets/images/manageicon3.png"
import ManageCard from "../../components/ManageCard";

const ManageSection = () => {
    const ManageCardData = [
        {
            title: "Membership Organisations",
            description: "Our membership management software provides full automation of membership renewals and payments",
            icon: manageIcon1
        },
        {
            title: "National Associations",
            description: "Our membership management software provides full automation of membership renewals and payments",
            icon: manageIcon2
        },
        {
            title: "Clubs And Groups",
            description: "Our membership management software provides full automation of membership renewals and payments",
            icon: manageIcon3
        }
    ]
    return (
        <section id="manage">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "11.14px", margin: "30px 0", justifyContent: "center", padding: {xs: "0 20px", md: "0px 100.23px" } }}>
                <Typography sx={{ fontSize: "25px", fontWeight: 600, lineHeight: "30.63px", letterSpacing: "0%", width: { md: "377.2696533203125px" }, textAlign: "center", color: "#4D4D4D", fontFamily: "Inter", }}>
                    Manage your entire community in a single system
                </Typography>
                <Typography sx={{ fontSize: "11.14px", color: "#717171", lineHeight: "16.71px", fontFamily: "Inter", letterSpacing: "0%" }}>
                    Who is Nextcent suitable for?
                </Typography>
                <Box sx={{ display: "flex",flexDirection: {xs: "column", md: "row"}, justifyContent: "space-between", alignItems: {xs:"center", md:"stretch"}, marginTop: "10px", width: "100%" }}>
                    {ManageCardData.map((card, index) => {
                        return (
                            <ManageCard key={index} card={card} />
                        )
                    })}
                </Box>
            </Box>
        </section>
    )
}

export default ManageSection;