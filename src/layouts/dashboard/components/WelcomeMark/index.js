import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Step up to src/assets/images/cardBgImage.png
import cardBgImage from "../../../assets/images/cardBgImage.png";

function WelcomeMark() {
  return (
    <Card
      sx={{
        backgroundImage: `url(${cardBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
        minHeight: "290px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: "28px",
      }}
    >
      <VuiBox>
        <VuiTypography color="text" variant="caption" fontWeight="bold" textTransform="uppercase">
          Welcome back,
        </VuiTypography>
        <VuiTypography color="white" variant="h3" fontWeight="bold" mb="10px">
          Fumani Hlangwane
        </VuiTypography>
        <VuiTypography color="text" variant="body2" fontWeight="regular" maxW="400px">
          Glad to see you back. Your custom executive analytics engines are live and scaling smoothly.
        </VuiTypography>
      </VuiBox>
    </Card>
  );
}

export default WelcomeMark;