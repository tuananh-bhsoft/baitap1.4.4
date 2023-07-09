import styled from "@emotion/styled";
import tw from "twin.macro";
import Button from "@mui/material/Button";

const CallToActionButton = styled(Button)`
  ${tw`bg-primary text-white text-base tracking-widest py-[15px] px-40px border-none rounded-full shadow-[0_17px_22px_#eee] transition-all normal-case font-semibold duration-300 ease-in-out hover:cursor-pointer hover:bg-secondary-m hover:shadow-[0_25px_50px_25px_#e6e9fd]`}
`;

export default CallToActionButton;
