import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DesignImage from "../../assets/images/pana.png";
import ButtonComponent from "../../components/ButtonComponent";

const DesignSection = () => {
    return (
        <section id="design">
            <Box sx={{ display: "flex",flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", padding: {xs: "0 20px", md:"0px 100.23px"}, margin: "30px 0" }}>
                <Image src={DesignImage} alt="design-image" width={307.3375549316406} height={301.6758117675781} />
                <Box sx={{ width: {md:"460.1019287109375px"}, display: "flex", flexDirection: "column", gap: "22.27px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "11.14px", paddingRight: "42px" }}>
                        <Typography sx={{ fontSize: "25.06px", fontWeight: 600, lineHeight: "30.63px", letterSpacing: "0%", color: "#4D4D4D", fontFamily: "Inter" }}>
                            How to design your site footer like we did
                        </Typography>
                        <Typography sx={{ color: "#717171", fontSize: "9.74px", lineHeight: "13.92px", letterSpacing: "0%", fontFamily: "Inter" }}>
                            Donec a eros justo. Fusce egestas tristique ultrices.
                            Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                            at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                            In hac habitasse platea dictumst. Vivamus vehicula leo dui,
                            at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies,
                            non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
                            efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis
                            libero. Donec consectetur faucibus ipsum id gravida.
                        </Typography>
                    </Box>
                    <Box><ButtonComponent text="Learn More" /></Box>
                </Box>
            </Box>
        </section>
    )
}

export default DesignSection;