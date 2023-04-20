import React from "react";
import { Box, Grid } from "@mui/material";
import Img from "../../assets/images/123.jpg";
import Img1 from "../../assets/images/Group.png";
import Img2 from "../../assets/images/BG.png";
import { TextWrap4, TextWrapAbout } from "../about/about.styled";
import useMediaQuery from "../../hooks/use-media-query";

const Skills = () => {
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
          <TextWrap4>Skills</TextWrap4>
          <TextWrapAbout>
            Quick learner with the passion for keeping up with the latest web
            development trends and technologies,and Excellent attention to
            detail and ability to work independently and as part of a team.
          </TextWrapAbout>
          <Box
            style={{
              backgroundImage: `url(${Img1})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: 500,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={5} lg={5}>
          <Box
            style={{
              backgroundImage: `url(${Img2})`,
              backgroundPosition: "center",

              backgroundRepeat: "no-repeat",
              height: 350,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Skills;
