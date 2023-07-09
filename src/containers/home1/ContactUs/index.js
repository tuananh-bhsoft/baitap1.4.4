import styled from "@emotion/styled";
import tw from "twin.macro";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CallToActionButton from "../../../components/buttons/CallToAction";
import CssTextField from "../../../components/CssTextField";
import contactAnimation from "../../../assets/imgs/contact/ContactAnimations.svg";

const StyledSectionHeader = styled(Typography)`
  ${tw`text-secondary text-base leading-tight tracking-normal font-semibold`}
`;

const StyledSectionTitle = styled(Typography)`
  ${tw`text-primary-m text-4xl leading-tight tracking-normal font-semibold`}
`;

const StyledSectionDescription = styled(Typography)`
  ${tw`text-tertiary-m text-base font-normal`}
`;

const StyledContactUs = styled(Typography)`
  ${tw`flex justify-between items-center gap-x-40px mt-200px laptop:flex-col laptop:gap-y-100px laptop:py-0 laptop:px-40px`}

  .section-content {
    ${tw`flex-1`}

    img {
      ${tw`max-w-full`}
    }
  }

  .section-info {
    ${tw`flex flex-col justify-between gap-y-10px items-start flex-1 laptop:w-full`}

    #form {
      textarea {
        ${tw`resize-none`}
      }

      .name {
        ${tw`flex justify-between items-center gap-x-40px mobile:flex-col`}
      }
    }
  }
`;

const ContactUs = () => {
  return (
    <StyledContactUs>
      <Box className="section-content">
        <img src={contactAnimation} alt="Contact us" maxWidth="100%" />
      </Box>
      <Box className="section-info">
        <StyledSectionHeader className="section-header">
          Contact Us
        </StyledSectionHeader>
        <StyledSectionTitle className="section-title w-4/5">
          Send your inquiry to our expert team
        </StyledSectionTitle>
        <StyledSectionDescription className="section-description">
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </StyledSectionDescription>
        <form action="/" method="POST" id="form">
          <Box className="name">
            <CssTextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              className="mt-40px"
            />
            <CssTextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              className="mt-40px"
            />
          </Box>
          <CssTextField
            id="outlined-basic"
            label="Email address"
            variant="outlined"
            type="email"
            fullWidth
            className="mt-40px"
          />
          <CssTextField
            id="outlined-basic"
            label="Subject message"
            variant="outlined"
            fullWidth
            className="mt-40px"
          />
          <CssTextField
            id="outlined-basic"
            label="Your inquiry here"
            variant="outlined"
            fullWidth
            multiline
            cols={30}
            rows={10}
            className="mt-40px"
          />
          <CallToActionButton className="mt-40px">
            Send Message
          </CallToActionButton>
        </form>
      </Box>
    </StyledContactUs>
  );
};

export default ContactUs;
