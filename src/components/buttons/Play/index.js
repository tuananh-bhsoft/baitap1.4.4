import styled from "@emotion/styled";
import tw from "twin.macro";
import Box from "@mui/material/Box";

import playIcon from "../../../assets/icons/design-elements/PolygonPlay.svg";

const StyledPlayButton = styled(Box)`
  ${tw`bg-secondary-m flex justify-center items-center p-20px rounded-full transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-secondary-l hover:shadow-[0px_25px_50px_25px_#e6e9fd]`}
`;

const PlayButton = () => {
  return (
    <StyledPlayButton className="play-button">
      <img src={playIcon} alt="Play button" />
    </StyledPlayButton>
  );
};

export default PlayButton;
