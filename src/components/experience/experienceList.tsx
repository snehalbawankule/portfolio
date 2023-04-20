import React from "react";
import { Grid, Box } from "@mui/material";
import Img from "../../assets/images/123.jpg";
import { TextWrap4 } from "../about/about.styled";
import useMediaQuery from "../../hooks/use-media-query";
import ExperienceCard from "./experience-card";
const ExperienceList = () => {
  const { isDesktop, isTablet } = useMediaQuery();

  const items = JSON.parse(localStorage.getItem("experience") || "{}");

  return (
    <Box
      style={{
        backgroundImage: `url(${Img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 900,
      }}
    >
      <Grid container sx={{ p: isDesktop ? 5 : isTablet ? 5 : 3 }} spacing={5}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextWrap4>Experience</TextWrap4>
        </Grid>
        {items.map((post: any) => {
          return (
            <>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                display="flex"
                key={post.id}
              >
                <ExperienceCard post={post} />
              </Grid>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};
export default ExperienceList;
