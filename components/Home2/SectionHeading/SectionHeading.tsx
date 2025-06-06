import { SectionHeadingBox } from "@/styles/StyledComponents/Home2Styled/SectionHeadingStyled";
import { Typography } from "@mui/material";

interface ISectionHeadingProps {
  hedaing: string;
}

const SectionHeading = ({ hedaing }: ISectionHeadingProps) => {
  return (
    <SectionHeadingBox>
      <Typography variant="h2" textTransform={"capitalize"}>
        {hedaing}
      </Typography>
    </SectionHeadingBox>
  );
};

export default SectionHeading;
