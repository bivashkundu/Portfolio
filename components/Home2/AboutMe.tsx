import { PageAboutMe } from "@/styles/StyledComponents/Home2Styled/AboutMeStyled";
// import CallIcon from "@mui/icons-material/Call";
// import MailIcon from "@mui/icons-material/Mail";
import { Box, Typography, useTheme } from "@mui/material";
// import Link from "next/link";
import SectionHeading from "./SectionHeading/SectionHeading";

const AboutMe = () => {
  const theme = useTheme();

  return (
    <PageAboutMe>
      <SectionHeading hedaing="About me" />
      <Box className="about-me">
        <Typography variant="h5" fontWeight={600} className="sm-label">
          Every <span>Great Design</span> Begin with an Even Better story
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.customColors?.white100}
        >
          Hey there! I'm an HTML developer who loves building fast, scalable,
          and maintainable web apps. With a solid grip on HTML5, CSS, and
          JavaScript, I create semantic and accessible markup that really brings
          designs to life. I'm all about writing clean, efficient, and
          standards-compliant code that follows the latest web development best
          practices. I have a keen eye for detail and a passion for
          problem-solving, always looking to improve my skills and stay updated
          with the latest web trends and technologies.
        </Typography>
        {/* <Box className="info-sec">
          <Grid container>
            <Grid item md={6} xs={12}>
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
                className="get-in-stack"
              >
                <i>
                  <MailIcon />
                </i>
                <Box className="my-media-right">
                  <InputLabel sx={{ textTransform: "uppercase" }}>
                    Email
                  </InputLabel>
                  <Link href="mailto:myself.bivash@gmail.com">
                    myself.bivash@gmail.com
                  </Link>
                </Box>
              </Stack>
            </Grid>
            <Grid item md={6} xs={12}>
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
                className="get-in-stack"
              >
                <i>
                  <CallIcon />
                </i>
                <Box className="my-media-right">
                  <InputLabel sx={{ textTransform: "uppercase" }}>
                    Call
                  </InputLabel>
                  <Link href="tel:+8981814014">+91 8981814014</Link>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box> */}
      </Box>
      <SectionHeading hedaing="fun facts" />
    </PageAboutMe>
  );
};

export default AboutMe;
