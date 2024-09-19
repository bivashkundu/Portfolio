/* eslint-disable react/no-unescaped-entities */
import assest from "@/json/assest";
import { ContactSection } from "@/styles/StyledComponents/HomeStyled";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import {
  Box,
  Container,
  Grid,
  InputLabel,
  List,
  ListItem,
  Typography
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact: React.FC = () => {
  return (
    <ContactSection className="cmn-sec-class">
      <Container fixed maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <Box className="about-title">
              <Typography variant="h2">
                <span className="text-secondary">Contact</span>Get In{" "}
                <span className="text-primary">Touch</span>
              </Typography>
              <Typography variant="body1">
                I'm always excited to take on new projects and collaborate with
                innovative minds. If you have a project in mind or just want to
                chat about design, feel free to reach out!
              </Typography>
            </Box>
            <Box className="contact-form">
              <form>
                <Grid container spacing={4}>
                  <Grid item lg={6}>
                    <Box className="form-grp">
                      <InputLabel>
                        Full Name <span>*</span>
                      </InputLabel>
                      <InputFieldCommon placeholder="Enter Full Name" />
                    </Box>
                  </Grid>
                  <Grid item lg={6}>
                    <Box className="form-grp">
                      <InputLabel>
                        Email Address <span>*</span>
                      </InputLabel>
                      <InputFieldCommon
                        placeholder="Enter Email Address"
                        type="email"
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6}>
                    <Box className="form-grp">
                      <InputLabel>
                        Phone Number <span>*</span>
                      </InputLabel>
                      <InputFieldCommon placeholder="Enter Phone Number" />
                    </Box>
                  </Grid>
                  <Grid item lg={6}>
                    <Box className="form-grp">
                      <InputLabel>
                        Subject <span>*</span>
                      </InputLabel>
                      <InputFieldCommon placeholder="I want to contact for..." />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="form-grp">
                      <InputLabel>
                        Message <span>*</span>
                      </InputLabel>
                      <InputFieldCommon
                        placeholder="Your message here..."
                        multiline
                        minRows={5}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <CustomButtonPrimary
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Send Message
                    </CustomButtonPrimary>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box className="contact-right">
              <List>
                <ListItem>
                  <i>
                    <Image
                      src={assest.iconPhone}
                      width={24}
                      height={24}
                      alt="call-icon"
                    />
                  </i>
                  <Link href="tel:+918910120822">
                    <Typography variant="caption" className="label">
                      Phone Number
                    </Typography>
                    <Typography variant="caption" className="label">
                      +91 8910120822
                    </Typography>
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
