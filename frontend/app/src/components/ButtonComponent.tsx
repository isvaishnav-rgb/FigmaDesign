import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ButtonComponent = ({ text, isEndIcon, onSubmit}: { text: string, isEndIcon?: boolean, onSubmit?: () => void }) => {
    return (
        <>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: "#4CAF4F",
                    padding: "9.74px 22.27px",
                    fontSize: "11.14px",
                    fontWeight: 500,
                    lineHeight: "16.71px",
                    letterSpacing: "0%",
                    fontFamily: "Inter",
                    textTransform: "none",
                    borderRadius: "2.78px"
                }}
                endIcon={isEndIcon && <ArrowForwardIcon sx={{ height: "11.137111663818402px", width: "11.137111663818402px"}} />}
                onClick={onSubmit}
            >
                {text}
            </Button>
        </>
    )
}

export default ButtonComponent;