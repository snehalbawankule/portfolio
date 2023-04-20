import React, { useState } from "react";
import { Grid, Card, Box } from "@mui/material";
import { TextWrap4 } from "../header/header.styled";
import { TextWrapTitle } from "./experience.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { useNavigate } from "react-router-dom";

const ExperienceCard = (props: any) => {
  const { post } = props;
  const { id } = post;
  let history = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const { isMobile } = useMediaQuery();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex" key={id}>
        <Card
          style={{
            border: "none",
            boxShadow: "none",
            justifyContent: isMobile ? "center" : "flex",
          }}
        >
          <Box onClick={() => history(`/experience/${id}`)}>
            <Box
              style={{
                height: "320px",
                backgroundImage: `url(${post.url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                transform: hovered ? "scale(1.1)" : "scale(1)",
                transition: "all 0.2s ease-in-out",
                borderRadius: "16px",
              }}
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
            />
            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
              <TextWrap4
                style={{
                  height: 80,
                }}
              >
                {post.projectName}
              </TextWrap4>
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
              <TextWrapTitle>{post.description}</TextWrapTitle>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ExperienceCard;
