import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Footer() {
  return (
    <VuiBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <VuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="white"
        fontSize="sm"
        px={1.5}
      >
        <VuiTypography variant="button" color="white" fontWeight="regular">
          Executive Analytics Engine &bull; Architected by Fumani Hlangwane
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

export default Footer;