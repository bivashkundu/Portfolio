/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import { getInList } from "@/json/mock/common.mock";
import { ContactSection } from "@/styles/StyledComponents/HomeStyled";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Schema = yup.object().shape({
  name: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .email("Invalid email address format")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, "Invalid phone number format")
    .required("Phone number is required"),
  subject: yup.string().required("Subject is required")
});

type UserSubmitForm = {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message?: string;
};

const Contact: React.FC = () => {
  const {
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(Schema)
  });

  const onSubmit = async (data: UserSubmitForm) => {
    try {
      const response = await fetch("https://formspree.io/f/xvgkowno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };
  console.log("errors--------", errors);

  const getInTouchFormHandler = (
    _name: "name" | "email" | "message" | "phoneNumber" | "subject",
    value: any
  ) => {
    setValue(_name, value);
  };

  return (
    <ContactSection className="cmn-sec-class">
      <Container fixed maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <Box className="about-title">
              <Typography variant="h2">
                <span className="text-secondary">Contact</span> Get In{" "}
                <span className="text-primary">Touch</span>
              </Typography>
              <Typography variant="body1">
                I'm always excited to take on new projects and collaborate with
                innovative minds. If you have a project in mind or just want to
                chat about design, feel free to reach out!
              </Typography>
            </Box>
            <Box className="contact-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                  <Grid item lg={6}>
                    <Box className="form-grp">
                      <InputLabel>
                        Full Name <span>*</span>
                      </InputLabel>
                      <InputFieldCommon
                        placeholder="Enter Full Name"
                        onChange={(e: any) =>
                          getInTouchFormHandler("name", e.target.value)
                        }
                      />
                      <Typography variant="caption" sx={{ color: "red" }}>
                        {errors?.name?.message}
                      </Typography>
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
                        onChange={(e: any) =>
                          getInTouchFormHandler("email", e.target.value)
                        }
                      />
                      <Typography variant="caption" sx={{ color: "red" }}>
                        {errors?.email?.message}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={6}>
                    <Box className="form-grp">
                      <InputLabel>
                        Phone Number <span>*</span>
                      </InputLabel>
                      <InputFieldCommon
                        placeholder="Enter Phone Number"
                        type="tel"
                        onChange={(e: any) =>
                          getInTouchFormHandler("phoneNumber", e.target.value)
                        }
                      />
                      <Typography variant="caption" sx={{ color: "red" }}>
                        {errors?.phoneNumber?.message}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={6}>
                    <Box className="form-grp">
                      <InputLabel>
                        Subject <span>*</span>
                      </InputLabel>
                      <InputFieldCommon
                        placeholder="I want to contact for..."
                        onChange={(e: any) =>
                          getInTouchFormHandler("subject", e.target.value)
                        }
                      />
                      <Typography variant="caption" sx={{ color: "red" }}>
                        {errors?.subject?.message}
                      </Typography>
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
                        onChange={(e: any) =>
                          getInTouchFormHandler("message", e.target.value)
                        }
                      />
                      <Typography variant="caption" sx={{ color: "red" }}>
                        {errors?.message?.message}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <CustomButtonPrimary
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
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
                {getInList.map((listData, idx) => (
                  <ListItem key={idx}>
                    <i>
                      <Image
                        src={listData.icon}
                        width={24}
                        height={24}
                        alt="icon"
                      />
                    </i>
                    <Link
                      rel="noreferrer"
                      aria-label="contact-link"
                      href={listData.href}
                    >
                      <Typography variant="caption" className="label">
                        {listData.inputLabel}
                      </Typography>
                      <Typography variant="caption" className="label">
                        {listData.caption}
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
