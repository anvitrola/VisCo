import { Link } from "react-router-dom";

import Button from "../Button/Button";
import { Container } from "./TextDiv.styles";

export default function TextDiv ({ title, subtitle, text, isLeft, hasLink, linkTo }) {
  return (
    <Container isLeft={isLeft} className="animeLeft">
      <h3>{title}</h3>

      {subtitle &&( <h5>{subtitle}</h5>)}

      <p>{text}</p>

      {hasLink && (
        <Link to={`/${linkTo}`}>
          <Button text={"More"}/>
        </Link>
      )}
    </Container>
  );
};
