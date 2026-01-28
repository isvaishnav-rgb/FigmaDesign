import { Box, Typography } from "@mui/material";
import ButtonComponent from "../../components/ButtonComponent";

const DemoSection = () => {
    return (
        <section id="demo">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#F5F7FA", padding: "22.27px 0px", gap: "22.27px" }}>
                <Typography sx={{
                    fontSize: {xs: "30px",md:"44.55px"},
                    width: {md:"617.4136352539062px"},
                    textAlign: "center",
                    fontWeight: 600,
                    lineHeight: "52.9px",
                    fontFamily: "Inter",
                    color: "#263238"
                }}>
                    Pellentesque suscipit fringilla libero eu.
                </Typography>
                <ButtonComponent text="Get a Demo" isEndIcon={true} />
            </Box>
        </section>
    )
}
export default DemoSection;