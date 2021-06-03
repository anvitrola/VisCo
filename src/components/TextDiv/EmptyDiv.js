import { Container } from "./TextDiv.styles";

export default function TextDiv ({ children}) {
  return (
    <Container className="animeLeft">
      {children}
    </Container>
  );
};
