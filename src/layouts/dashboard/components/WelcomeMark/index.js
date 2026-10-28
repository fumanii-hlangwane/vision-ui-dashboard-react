import { useMemo } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Array of clean, dark-themed abstract data flow and tech background images
const techImages = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
];

function WelcomeMark() {
  const randomBgImage = useMemo(() => {
    return techImages[Math.floor(Math.random() * techImages.length)];
  }, []);

  return (
    <Card
      sx={{
        backgroundImage: `linear-gradient(135deg, rgba(6, 11, 38, 0.9) 0%, rgba(26, 31, 55, 0.8) 100%), url(${randomBgImage})`,
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