import styled from "@emotion/styled";
import tw from "twin.macro";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import animation1 from "../../../assets/imgs/service/Animation1.svg";
import animation2 from "../../../assets/imgs/service/Animation2.svg";
import animation3 from "../../../assets/imgs/service/Animation3.svg";

const StyledSectionHeader = styled(Typography)`
  ${tw`text-secondary text-base leading-tight tracking-normal font-semibold`}
`;

const StyledSectionTitle = styled(Typography)`
  ${tw`text-primary-m text-4xl leading-tight tracking-normal font-semibold`}
`;

const StyledSectionDescription = styled(Typography)`
  ${tw`text-tertiary-m text-base font-normal`}
`;

const StyledCardTitle = styled(Typography)`
  ${tw`text-primary-m text-lg leading-tight tracking-normal mt-20px font-semibold`}
`;

const StyledCardDescription = styled(Typography)`
  ${tw`text-tertiary-m text-sm font-normal mt-20px w-[110%]`}
`;

const StyledMainServices = styled(Typography)`
  ${tw`flex flex-col justify-between items-center mt-200px laptop:py-0 laptop:px-40px`}

  .section-info {
    ${tw`flex flex-col justify-between gap-y-10px items-center text-center`}

    .section-title {
      ${tw`w-2/5 laptop:w-3/5 mobile:w-full`}
    }

    .section-description {
      ${tw`w-4/5 laptop:w-11/12 mobile:w-full`}
    }
  }

  .section-content {
    ${tw`grid grid-cols-3 gap-x-60px mt-100px laptop:grid-cols-2 laptop:gap-y-60px tablet:grid-cols-1`}

    .service-card {
      ${tw`flex flex-col justify-between items-center bg-white p-50px rounded-40px shadow-[0_25px_50px_25px_#f6f7ff] transition-all duration-300 ease-in-out hover:shadow-[0px_25px_50px_25px_#e6e9fd]`}

      .card-info {
        ${tw`flex flex-col justify-between items-center text-center`}
      }

      img {
        ${tw`max-w-[166px] max-h-[166px]`}
      }
    }
  }
`;

const MainServices = () => {
  return (
    <StyledMainServices>
      <Box className="section-info">
        <StyledSectionHeader className="section-header">
          Main Services
        </StyledSectionHeader>
        <StyledSectionTitle className="section-title">
          Learn services to focus on your beauty
        </StyledSectionTitle>
        <StyledSectionDescription className="section-description">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </StyledSectionDescription>
      </Box>
      <Box className="section-content">
        <Box className="service-card">
          <img src={animation1} alt="Card" maxWidth="166px" maxHeight="166px" />
          <Box className="card-info">
            <StyledCardTitle className="card-title">
              Beauty consultation
            </StyledCardTitle>
            <StyledCardDescription>
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </StyledCardDescription>
          </Box>
        </Box>
        <Box className="service-card">
          <img src={animation2} alt="Card" maxWidth="166px" maxHeight="166px" />
          <Box className="card-info">
            <StyledCardTitle className="card-title">
              Skin treatments
            </StyledCardTitle>
            <StyledCardDescription>
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </StyledCardDescription>
          </Box>
        </Box>
        <Box className="service-card">
          <img src={animation3} alt="Card" maxWidth="166px" maxHeight="166px" />
          <Box className="card-info">
            <StyledCardTitle className="card-title">
              Beauty product
            </StyledCardTitle>
            <StyledCardDescription>
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </StyledCardDescription>
          </Box>
        </Box>
      </Box>
    </StyledMainServices>
  );
};

export default MainServices;
