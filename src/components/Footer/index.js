import styled from "@emotion/styled";
import tw from "twin.macro";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import footerLogo from "../../assets/imgs/logos/FooterLogo.svg";
import facebookLight from "../../assets/icons/socials/FacebookLight.svg";
import twitterLight from "../../assets/icons/socials/TwitterLight.svg";
import linkedinLight from "../../assets/icons/socials/LinkedinLight.svg";
import youtubeLight from "../../assets/icons/socials/YoutubeLight.svg";
import instaLight from "../../assets/icons/socials/InstagramLight.svg";
import bullet from "../../assets/icons/design-elements/Bullet.svg";

const StyledText = styled(Typography)`
  ${tw`text-primary-sl text-base font-normal`}
`;

const StyledListHeader = styled(Typography)`
  ${tw`text-white text-lg font-semibold`}
`;

const StyledListItem = styled(Box)`
  ${tw`text-primary-sl text-base font-normal mt-10px`}
`;

const StyledFooter = styled(Box)`
  ${tw`pt-200px mt-200px laptop:pt-200px laptop:pr-40px laptop:pb-0 laptop:pl-40px`}

  .content-wrapper {
    ${tw`flex flex-col justify-between items-center max-w-main my-0 mx-auto`}

    .footer-info {
      ${tw`flex justify-between items-start w-full laptop:flex-col laptop:gap-y-60px`}

      .authorship {
        ${tw`flex flex-col justify-between items-start gap-y-20px flex-1 laptop:w-full`}

        p {
          span {
            ${tw`font-bold`}
          }
        }

        .info {
          ${tw`italic text-sm flex flex-col justify-between items-start`}

          .contact-info {
            ${tw`flex justify-between items-center gap-x-40px`}
          }
        }
      }

      .site-doc {
        ${tw`flex-1 flex justify-between items-start laptop:flex-col gap-y-60px w-full`}

        .sitemap,
      .documents {
          ${tw`flex-1`}

          .list-header {
          }

          .list {
            list-style-image: url(${bullet});
            padding-left: 12px;
            padding-top: 15px;
            margin: 0;

            .list-item {
            }
          }
        }
      }
    }

    .footer-socials {
      ${tw`flex justify-between items-center gap-x-40px w-full my-100px mx-0 tablet:flex-col tablet:gap-y-40px`}

      .social-links {
        ${tw`flex justify-between items-center gap-x-40px`}

        img {
          ${tw`w-[24px] h-[24px]`}
        }
      }

      .copyright {
        ${tw`text-primary-sl text-base font-normal`}
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <Box className="content-wrapper">
        <Box className="footer-info">
          <Box className="authorship">
            <img src={footerLogo} alt="Footer logo" />
            <StyledText>
              <Typography className="inline font-bold">Beautice</Typography> is
              a Beauty Clinic WordPress Theme.
            </StyledText>
            <Box className="info">
              <StyledText>Baker Steet 101, NY, United States.</StyledText>
              <Box className="contact-info">
                <StyledText>+521 569 8966.</StyledText>
                <StyledText>mail@company.com.</StyledText>
              </Box>
            </Box>
          </Box>
          <Box className="site-doc">
            <Box className="sitemap">
              <StyledListHeader className="list-header">Pages</StyledListHeader>
              <Box component="ul" className="list">
                <StyledListItem component="li" className="list-item">
                  Home
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  About
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  Services
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  Gallery
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  Team
                </StyledListItem>
              </Box>
            </Box>
            <Box className="documents">
              <StyledListHeader className="list-header">
                Informations
              </StyledListHeader>
              <Box component="ul" className="list">
                <StyledListItem component="li" className="list-item">
                  Terms & Conditions
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  Privacy policy
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  Blog
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  Contact
                </StyledListItem>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="footer-socials">
          <Box className="social-links">
            <img
              src={facebookLight}
              alt="Facebook"
              width="24px"
              height="24px"
            />
            <img src={twitterLight} alt="Twitter" width="24px" height="24px" />
            <img
              src={linkedinLight}
              alt="Linkedin"
              width="24px"
              height="24px"
            />
            <img src={youtubeLight} alt="Youtube" width="24px" height="24px" />
            <img src={instaLight} alt="Instagram" width="24px" height="24px" />
          </Box>
          <Typography className="copyright text-primary-slight text-base font-normal">
            © AltDesain Studio 2021 - All right reserved.
          </Typography>
        </Box>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
