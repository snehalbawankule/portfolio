import React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { TextWrap4 } from "../about/about.styled";
import useMediaQuery from "../../hooks/use-media-query";

const Experience = () => {
  let { id } = useParams();
  const existingPost = JSON.parse(localStorage.getItem("experience") || "{}");
  const post = existingPost.find((item: any) => item.id === id);

  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  return (
    <Grid
      container
      display="flex"
      sx={{
        mt: isDesktop ? 15 : isTablet ? 12 : 10,
        px: isDesktop ? 10 : isTablet ? 5 : 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{
          height: isDesktop ? "600px" : isMobile ? "350px" : "600px",
          backgroundImage: `url(${post?.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ mt: 4 }}
        display="flex"
        justifyContent="center"
      >
        <TextWrap4>{post?.projectName}</TextWrap4>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        display="flex"
        justifyContent="center"
      >
        <TextWrap4>{post?.content}</TextWrap4>
      </Grid>
    </Grid>
  );
};
export default Experience;
