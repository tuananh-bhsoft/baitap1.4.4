import styled from "@emotion/styled";
import tw from "twin.macro";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CallToActionButton from "../../../components/buttons/CallToAction";
import PlayButton from "../../../components/buttons/Play";
import aboutusImg from "../../../assets/imgs/about/unsplash_LRXYS0tSyGc.png";

const StyledSectionHeader = styled(Typography)`
  ${tw`text-secondary text-base leading-tight tracking-normal font-semibold`}
`;

const StyledSectionTitle = styled(Typography)`
  ${tw`text-primary-m text-4xl leading-tight tracking-normal font-semibold`}
`;

const StyledSectionDescription = styled(Typography)`
  ${tw`text-tertiary-m text-base font-normal`}
`;

const StyledAboutUs = styled(Typography)`
  ${tw`flex justify-between items-center gap-x-40px mt-200px laptop:py-0 laptop:px-40px`}

  .section-info {
    ${tw`flex flex-col justify-between gap-y-10px flex-1 items-start laptop:items-center laptop:text-center`}

    .actions {
      ${tw`flex justify-between items-center gap-x-40px mt-60px laptop:self-center`}

      .learn-more {
      }

      .watch-video {
        ${tw`flex justify-between items-center gap-x-10px laptop:hidden`}

        p {
          ${tw`text-tertiary-m text-base`}
        }
      }
    }
  }

  .section-content {
    ${tw`flex-1 w-6/12 laptop:hidden`}

    img {
      ${tw`w-full`}
    }
  }
`;

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <Box className="section-info">
        <StyledSectionHeader className="section-header">
          About Us
        </StyledSectionHeader>
        <StyledSectionTitle className="section-title">
          We are the best beauty clinic
        </StyledSectionTitle>
        <StyledSectionDescription className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
          suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
          ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat. Id dui erat sed quam tellus in purus. Pellentesque congue
          fringilla cras tellus enim.
        </StyledSectionDescription>
        <Box className="actions">
          <Box className="learn-more">
            <CallToActionButton>Learn More</CallToActionButton>
          </Box>
          <Box className="watch-video">
            <PlayButton />
            <Typography className="text-tertiary-m text-base font-semibold">
              Watch Video
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="section-content">
        <img src={aboutusImg} alt="About us" />
      </Box>
    </StyledAboutUs>
  );
};

export default AboutUs;
