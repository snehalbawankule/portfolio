import { Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import { useState } from "react";
import { Box } from "@mui/material";
import { Input, ContactUsTitle, PostButton } from "./contact-us.styled";
import { TextWrap4 } from "../header/header.styled";
import Img from "../../assets/images/img3.png";
const ContactUs = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (event: any) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  //const dispatch = useAppDispatch();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setContactInfo({ name: "", email: "", contact: "", message: "" });
  };
  const { isDesktop, isTablet } = useMediaQuery();

  return (
    <form>
      <Box
        style={{
          backgroundImage: `url(${Img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Grid item>
          <ContactUsTitle
            style={{
              paddingTop: 100,
              display: "flex",
              justifyContent: "center",
            }}
          >
            Get In Touch
          </ContactUsTitle>
        </Grid>
        <Grid container sx={{ p: isDesktop ? 8 : isTablet ? 5 : 3, mt: 1 }}>
          <Grid item xs={6} sm={6} md={7} lg={7}>
            <Grid container>
              <Grid item xs={6} sm={6} md={12} lg={12}>
                <TextWrap4 style={{ color: "#2AB090" }}>Address</TextWrap4>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <TextWrap4 style={{ color: "white" }}>
                  810, Koramangala Club Rd, 6th Block, Koramangala, Bengaluru,
                  Karnataka 560095
                </TextWrap4>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextWrap4 style={{ color: "#2AB090" }}>Phone</TextWrap4>
              <TextWrap4 style={{ color: "white" }}>
                7028872940, 7020796299
              </TextWrap4>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextWrap4 style={{ color: "#2AB090" }}>Email</TextWrap4>
              <TextWrap4 style={{ color: "white" }}>
                snehalbawankule2000@gmail.com
              </TextWrap4>
            </Grid>
            <TextWrap4> </TextWrap4>
          </Grid>

          <Grid
            item
            xs={6}
            sm={6}
            md={5}
            lg={5}
            style={{
              backgroundColor: "white",
              paddingBottom: 40,
              textAlign: "center",
            }}
          >
            <TextWrap4 style={{ color: "black" }}>Send Message</TextWrap4>
            <Grid item xs={6} sm={6} md={12} lg={12}>
              <Input
                type="text"
                name="name"
                onBlur={handleChange}
                defaultValue={contactInfo.name}
                placeholder="Name"
                minLength={5}
                maxLength={10}
                required
              />
            </Grid>
            <Grid item xs={6} sm={6} md={12} lg={12}>
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                onBlur={handleChange}
                defaultValue={contactInfo.email}
                required
              />
            </Grid>
            <Grid item xs={6} sm={6} md={12} lg={12}>
              <Input
                type="text"
                name="contact"
                onBlur={handleChange}
                defaultValue={contactInfo.contact}
                placeholder="Contact No"
                maxLength={10}
                required
              />
            </Grid>
            <Grid item xs={6} sm={6} md={12} lg={12}>
              <Input
                type="text"
                name="message"
                onBlur={handleChange}
                defaultValue={contactInfo.message}
                placeholder="Enter the message..."
                maxLength={100}
                required
              />
            </Grid>
            <Grid item xs={3} sm={3} md={12} lg={12}>
              <PostButton onClick={handleSubmit}>Send</PostButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
export default ContactUs;
