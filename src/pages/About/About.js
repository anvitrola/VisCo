//components
import TextDiv from "../../components/TextDiv/TextDiv";
import TitleBox from "../../components/TitleBox/TitleBox";

import { Container } from "./About.styles";

function About() {
  return (
    <Container className="animeLeft">
      <TitleBox title={"About"} />
      <TextDiv
        isLeft={true}
        title={"Vis co."}
        subtitle={"The power of tasting"}
        text={
          "Este website é fruto de uma linda trajetória na Resilia Educação, instituição na qual pude iniciar minha formação enquanto desenvolvedora."
        }
      />
      <TextDiv
        title={"Ana Vitória Viana"}
        subtitle={"Front-end developer"}
        text={
          "Vou mostrando como sou e vou sendo como posso, jogando o meu corpo no mundo. Andando por todos os cantos e pela lei natural dos encontros. Eu deixo e recebo um tanto e passo aos olhos nus ou vestidos de lunetas. Passado, presente. Participo sendo o mistério do planeta."
        }
      />
    </Container>
  );
}

export default About;
