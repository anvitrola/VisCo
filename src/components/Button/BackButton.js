import { IconContext } from "react-icons";
import { BiArrowBack } from "react-icons/bi";

import { BackBtn } from "./Button.styles";

function BackButton({ backTo, color }) {
  return (
    <BackBtn to={`/${backTo}`}>
      <IconContext.Provider
        value={{ color: `var(--${color})`, size: "2.5rem" }}
      >
        <BiArrowBack>Back</BiArrowBack>
      </IconContext.Provider>
    </BackBtn>
  );
}

export default BackButton;
