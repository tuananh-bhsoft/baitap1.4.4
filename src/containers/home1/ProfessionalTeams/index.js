import styled from "@emotion/styled";
import tw from "twin.macro";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import professor1 from "../../../assets/imgs/professional/unsplash_pTrhfmj2jDA.png";
import professor2 from "../../../assets/imgs/professional/unsplash_FVh_yqLR9eA.png";
import professor3 from "../../../assets/imgs/professional/unsplash_mEZ3PoFGs_k.png";
import twitter from "../../../assets/icons/socials/Twitter.svg";
import facebook from "../../../assets/icons/socials/Facebook.svg";
import insta from "../../../assets/icons/socials/Instagram.svg";

const StyledSectionHeader = styled(Typography)`
  ${tw`text-secondary text-base leading-tight tracking-normal font-semibold`}
`;

const StyledSectionTitle = styled(Typography)`
  ${tw`text-primary-m text-4xl leading-tight tracking-normal font-semibold`}
`;

const StyledSectionDescription = styled(Typography)`
  ${tw`text-tertiary-m text-base font-normal`}
`;

const StyledCardHeader = styled(Typography)`
  ${tw`text-secondary text-base leading-tight tracking-normal font-semibold`}
`;

const StyledCardTitle = styled(Typography)`
  ${tw`text-primary-m text-lg leading-tight tracking-normal mt-20px font-semibold`}
`;

const StyledCardDescription = styled(Typography)`
  ${tw`text-tertiary-m text-sm font-normal mt-20px`}
`;

const StyledProfessionalTeams = styled(Typography)`
  ${tw`flex flex-col justify-between items-center mt-200px laptop:py-0 laptop:px-40px`}

  .section-info {
    ${tw`flex flex-col justify-between gap-y-10px items-center text-center`}
  }

  .section-content {
    ${tw`flex justify-between items-center w-full mt-100px laptop:flex-col`}

    .expert-card {
      ${tw`flex flex-col justify-between items-center bg-white p-50px rounded-40px shadow-[0_25px_50px_25px_#f6f7ff] first:bg-transparent first:relative first:-right-30px first:shadow-none last:bg-transparent last:relative last:right-30px last:shadow-none laptop:w-full laptop:first:static laptop:last:static`}

      img {
        ${tw`max-w-[146px] max-h-[146px] my-40px mx-0`}
      }

      .card-info {
        ${tw`flex flex-col justify-between items-center text-center`}

        .social-links {
          ${tw`flex justify-between items-center gap-x-40px my-40px mx-0`}

          .social-icon {
            ${tw`flex justify-between items-center bg-white p-3 rounded-full shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0px_25px_50px_25px_#e6e9fd]`}

            img {
              ${tw`w-[24px] h-[24px] m-0`}
            }
          }
        }
      }
    }
  }
`;

const ProfessionalTeams = () => {
  return (
    <StyledProfessionalTeams>
      <Box className="section-info">
        <StyledSectionHeader className="section-header">
          Professional Teams
        </StyledSectionHeader>
        <StyledSectionTitle className="section-title">
          The Professional Expert
        </StyledSectionTitle>
        <StyledSectionDescription className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </StyledSectionDescription>
      </Box>
      <Box className="section-content">
        <Box className="expert-card">
          <img
            src={professor1}
            alt="Card"
            style={{
              maxWidth: "146px",
              maxHeight: "146px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
          <Box className="card-info">
            <StyledCardHeader className="card-header">Surgeon</StyledCardHeader>
            <StyledCardTitle className="card-title">
              Briyan Nevalli
            </StyledCardTitle>
            <StyledCardDescription className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </StyledCardDescription>
            <Box className="social-links">
              <Box className="social-icon">
                <img
                  src={twitter}
                  alt="Twitter"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box className="social-icon">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box className="social-icon">
                <img
                  src={insta}
                  alt="Instagram"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="expert-card">
          <img
            src={professor2}
            alt="Card"
            style={{
              maxWidth: "146px",
              maxHeight: "146px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
          <Box className="card-info">
            <StyledCardHeader className="card-header">
              Dermatologist
            </StyledCardHeader>
            <StyledCardTitle className="card-title">
              Bella Sebastian
            </StyledCardTitle>
            <StyledCardDescription className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </StyledCardDescription>
            <Box className="social-links">
              <Box className="social-icon">
                <img
                  src={twitter}
                  alt="Twitter"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box className="social-icon">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box className="social-icon">
                <img
                  src={insta}
                  alt="Instagram"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="expert-card">
          <img
            src={professor3}
            alt="Card"
            style={{
              maxWidth: "146px",
              maxHeight: "146px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
          <Box className="card-info">
            <StyledCardHeader className="card-header">
              Stylist expert
            </StyledCardHeader>
            <StyledCardTitle className="card-title">
              Lilly Adams
            </StyledCardTitle>
            <StyledCardDescription className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </StyledCardDescription>
            <Box className="social-links">
              <Box className="social-icon">
                <img
                  src={twitter}
                  alt="Twitter"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box className="social-icon">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box className="social-icon">
                <img
                  src={insta}
                  alt="Instagram"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </StyledProfessionalTeams>
  );
};

export default ProfessionalTeams;
