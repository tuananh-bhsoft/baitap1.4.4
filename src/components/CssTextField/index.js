import styled from "@emotion/styled";
import tw from "twin.macro";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)`
  ${tw`w-full`}

  & label {
    ${tw`text-tertiary-l text-base font-normal pl-1`}
  }

  & .MuiInputBase-root.MuiOutlinedInput-root {
    ${tw`rounded-[15px]`}

    & fieldset {
      ${tw`border-[#d9ddfe] bg-white`}
    }
  }
`;

export default CssTextField;
