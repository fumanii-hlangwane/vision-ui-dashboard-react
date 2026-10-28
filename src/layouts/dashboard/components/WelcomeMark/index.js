import { useMemo } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Array of professional tech/analytics background images
const techImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
];

function WelcomeMark() {
  const randomBgImage = useMemo(() => {
    return techImages[Math.floor(Math.random() * techImages.length)];
  }, []);

  return (
    <Card
      sx={{
        backgroundImage: `url(${randomBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "290px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: "28px",
        position: "relative",
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