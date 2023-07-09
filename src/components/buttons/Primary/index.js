import styled from "@emotion/styled";
import tw from "twin.macro";
import Button from "@mui/material/Button";

const PrimaryButton = styled(Button)`
  ${tw`bg-primary text-white text-base tracking-widest py-[15px] px-40px border-none rounded-full normal-case font-semibold transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-secondary-m`}
`;

export default PrimaryButton;
