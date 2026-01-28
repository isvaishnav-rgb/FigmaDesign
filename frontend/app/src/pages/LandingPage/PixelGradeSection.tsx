import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ButtonComponent from "../../components/ButtonComponent";
import PixelGradeImage from "../../assets/images/PixelGrade.png"

const PixelGradeSection = () => {
    return (
        <section id="pixelgrade">
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", gap: "22.27px",margin: "30px 0px", padding: {xs:"0 20px", md:"0px 100.23px"}}}>
                <Image src={PixelGradeImage} alt="" width={307.6627197265625} height={301.3980712890625} />
                <Box sx={{ display: "flex", flexDirection: "column", gap: "22.27px", width: {md:"460.1019287109375px"}, paddingRight: "42px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "11.14px",  paddingRight: "42px" }}>
                        <Typography sx={{ fontSize: "25.06px", fontWeight: 600, color: "#4D4D4D", lineHeight: "30.63px", letterSpacing: "0%", fontFamily: "Inter" }}>
                            The unseen of spending three years at Pixelgrade
                        </Typography>
                        <Typography sx={{ fontSize: "9.74px", letterSpacing: "0%", lineHeight: "13.92px", fontFamily: "Inter", color: "#717171" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
                            Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem.
                            Donec elementum pulvinar odio.
                        </Typography>
                    </Box>
                    <Box><ButtonComponent text="Learn More" isEndIcon={false} /></Box>
                </Box>
            </Box>
        </section>
    )
}

export default PixelGradeSection;