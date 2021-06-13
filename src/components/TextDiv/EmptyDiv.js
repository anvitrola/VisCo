import { Container } from "./TextDiv.styles";

export default function TextDiv({ children, isExhibition }) {
  return <Container isExhibition={isExhibition} className="animeLeft">{children}</Container>;
}
