import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Home = () => {
  return (
    <div style={{ paddingLeft: 250 }}>
      <h1 style={{ paddingTop: 250 }}>Snehal Bawankule</h1>
      <h3>Full Stack Web Developer</h3>

      <a href="https://snehal-article-review.netlify.app/">
        <TwitterIcon />
      </a>
      <a href="https://github.com/snehalbawankule">
        <GitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/snehal-bawankule-37586019b">
        <LinkedInIcon />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100080038597532&mibextid=ZbWKwL">
        <FacebookIcon />
      </a>
    </div>
  );
};
export default Home;
