import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box } from "@mui/material";
import Img from "../../assets/images/123.jpg";
import About from "../about/about";
import Skills from "../skills/skills";
import Experience from "../experience/experienceList";
import ContactUs from "../contact/contact-us";

const Home = () => {
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${Img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 800,
        }}
      >
        <div style={{ paddingLeft: 350, color: "black" }}>
          <h1 style={{ paddingTop: 250 }}>Snehal Bawankule</h1>
          <h3>Full Stack Web Developer</h3>

          <a href="https://snehal-article-review.netlify.app/">
            <TwitterIcon style={{ color: "black" }} />
          </a>
          <a href="https://github.com/snehalbawankule">
            <GitHubIcon style={{ color: "black" }} />
          </a>
          <a href="https://www.linkedin.com/in/snehal-bawankule-37586019b">
            <LinkedInIcon style={{ color: "black" }} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100080038597532&mibextid=ZbWKwL">
            <FacebookIcon style={{ color: "black" }} />
          </a>
        </div>
      </Box>
      <About />
      <Skills />
      <Experience />
      <ContactUs />
    </>
  );
};
export default Home;
