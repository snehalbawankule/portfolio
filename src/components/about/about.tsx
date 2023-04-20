import React from "react";
import { Box, Grid } from "@mui/material";
import Img from "../../assets/images/123.jpg";
import Img1 from "../../assets/images/me.jpg";
import useMediaQuery from "../../hooks/use-media-query";
import { TextWrap4, TextWrapAbout } from "./about.styled";
import { PostButton } from "../header/header.styled";

const About = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  return (
    <Box
      style={{
        backgroundImage: `url(${Img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 800,
      }}
    >
      <Grid container sx={{ p: isDesktop ? 8 : isTablet ? 5 : 3, mt: 1 }}>
        <Grid item xs={6} sm={6} md={7} lg={7}>
          <Box
            style={{
              backgroundImage: `url(${Img1})`,
              backgroundPosition: "center",
              height: 400,
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={5} lg={5}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextWrap4>About Me</TextWrap4>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <TextWrapAbout>
              A skilled Full-Stack Web Developer with 1 & 1/2 years of
              experience in developing end-to-end web solutions using variety of
              programming languages and technologies. Demonstrated proficiency
              in both front-end and back-end web development. Having problem
              solving skills, quick learner and ability to work independently
              and as part of a team.
            </TextWrapAbout>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <PostButton>Download CV</PostButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default About;
