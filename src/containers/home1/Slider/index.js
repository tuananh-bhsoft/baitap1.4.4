import styled from "@emotion/styled";
import tw from "twin.macro";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CallToActionButton from "../../../components/buttons/CallToAction";
import frame1 from "../../../assets/imgs/slide/Frame1.svg";

const StyledSlideTitle = styled(Typography)`
  ${tw`text-primary-m text-5xl leading-tight tracking-normal font-semibold`}
`;

const StyledSlideDescription = styled(Typography)`
  ${tw` text-primary-m text-base font-normal mt-20px`}
`;

const StyledSlider = styled(Typography)`
  ${tw`flex flex-col justify-between items-center laptop:py-0 laptop:px-40px`}

  .slide-container {
    ${tw`py-100px px-0 mt-120px`}

    .slide {
      ${tw`flex justify-between items-center gap-x-40px`}

      .slide-info {
        ${tw`flex flex-col justify-between items-start flex-1 laptop:items-center laptop:text-center`}

        .title {
        }

        .description {
        }

        .more-details {
          ${tw` mt-40px`}
        }
      }

      .slide-img {
        ${tw`flex-1 laptop:hidden`}

        img {
          ${tw`w-full`}
        }
      }
    }
  }

  .slide-marker {
    ${tw`flex justify-between items-center gap-x-10px`}

    .marker {
      ${tw`bg-tertiary h-1 w-4 rounded-full`}

      &.active {
        ${tw`bg-secondary-l h-2 w-6 rounded-full`}
      }
    }
  }
`;

const Slider = () => {
  return (
    <StyledSlider>
      <Box className="slide-container">
        <Box className="slide">
          <Box className="slide-info">
            <StyledSlideTitle className="title">
              Clinic & beauty consultant
            </StyledSlideTitle>
            <StyledSlideDescription className="description">
              It is a long established fact that a reader will be by the
              readable content of a page.
            </StyledSlideDescription>
            <Box className="more-details">
              <CallToActionButton>More Details</CallToActionButton>
            </Box>
          </Box>
          <Box className="slide-img">
            <img src={frame1} alt="Slide" />
          </Box>
        </Box>
      </Box>

      <Box className="slide-marker">
        <Box className="marker"></Box>
        <Box className="marker active"></Box>
        <Box className="marker"></Box>
      </Box>
    </StyledSlider>
  );
};

export default Slider;
