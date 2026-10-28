import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function WelcomeMark() {
  return (
    <Card
      sx={{
        backgroundImage: `url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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