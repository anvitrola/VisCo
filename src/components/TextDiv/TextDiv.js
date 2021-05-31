import Button from "../Button/Button";
import { Container } from "./TextDiv.styles";

export default function TextDiv ({ title, text, isLeft }) {
  return (
    <Container isLeft={isLeft}>
      <h3>{title}</h3>
      <p>{text}</p>
      <Button text={"Saiba mais"}/>
    </Container>
  );
};
