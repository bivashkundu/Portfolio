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
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(Schema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      subject: ""
    }
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log("Form Data:", data);
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                  <Grid item lg={6}>
                    <Box className="form-grp">
                      <InputLabel>
                        Full Name <span>*</span>
                      </InputLabel>
                      <InputFieldCommon
                        placeholder="Enter Full Name"
                        {...register("name")}
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
                        {...register("email")}
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
                        type="number"
                        {...register("phoneNumber")}
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
                        {...register("subject")}
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
                      />
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
                        alt="call-icon"
                      />
                    </i>
                    <Link
                      rel="noreferrer"
                      aria-label="testlabel"
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
