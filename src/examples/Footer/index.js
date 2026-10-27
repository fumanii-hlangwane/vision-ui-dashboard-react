import VUIBox from "components/VUIBox";
import VUITypography from "components/VUITypography";

function Footer() {
  return (
    <VUIBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <VUIBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="white"
        fontSize="sm"
        px={1.5}
      >
        <VUITypography variant="button" color="white" fontWeight="regular">
          Executive Analytics Engine &bull; Architected by Fumani Hlangwane
        </VUITypography>
      </VUIBox>
    </VUIBox>
  );
}

export default Footer;