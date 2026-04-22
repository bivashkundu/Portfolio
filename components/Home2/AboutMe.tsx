import { PageAboutMe } from "@/styles/StyledComponents/Home2Styled/AboutMeStyled";
import CallIcon from "@/ui/Icons/CallIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import {
  Box,
  Button,
  Grid,
  InputLabel,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import Link from "next/link";
import SectionHeading from "./SectionHeading/SectionHeading";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
        <Box className="info-sec">
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
                  <Link
                    href="mailto:myself.bivash@gmail.com"
                    style={{ color: theme.palette.customColors?.white100 }}
                  >
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
                  <Link
                    href="tel:+8981814014"
                    style={{ color: theme.palette.customColors?.white100 }}
                  >
                    +91 8981814014
                  </Link>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <SectionHeading hedaing="My Pricing" />
      <Stack direction='row' flexWrap='wrap' className="pricing-sec">
        <Box className='basic-pricebox single-page'>
          <span className="i-span"><ManageAccountsIcon /></span>
          <Box className="pricing-header">
            <Box className="header-left">
              <Typography variant="h5" className="sm-label">
                Make Your Single Page
              </Typography>
              <Typography variant="caption" color={theme.palette.customColors?.white100}>
                Crafted for Impact & Performance
              </Typography>
            </Box>
            <Box className="header-right">
              <Typography variant="body1">
                $12.00
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" className="plan-subtitle" color={theme.palette.customColors?.white100}>I design and develop modern, responsive single-page websites tailored to your brand. Each page is clean, user-friendly, and optimized for performance, helping you present your content clearly, engage your audience effectively, and create a strong, lasting impression.</Typography>
          <Button className="order-btn" endIcon={<ArrowRightAltIcon />}>Order Now</Button>
        </Box>
        <Box className='basic-pricebox hourly-package'>
          <span className="i-span"><ManageAccountsIcon /></span>
          <Box className="pricing-header">
            <Box className="header-left">
              <Typography variant="h5" className="sm-label">
                Hourly Package
              </Typography>
              <Typography variant="caption" color={theme.palette.customColors?.white100}>
                Precision Work, Hourly Billing
              </Typography>
            </Box>
            <Box className="header-right">
              <Typography variant="body1">
                $7.00
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" className="plan-subtitle" color={theme.palette.customColors?.white100}>I provide flexible, on-demand development support billed hourly. From bug fixes to feature updates and maintenance, I deliver efficient, reliable work with clear communication, helping you manage tasks quickly while staying in control of your time and budget.</Typography>
          <Button className="order-btn" endIcon={<ArrowRightAltIcon />}>Order Now</Button>
        </Box>
      </Stack>
    </PageAboutMe>
  );
};

export default AboutMe;
