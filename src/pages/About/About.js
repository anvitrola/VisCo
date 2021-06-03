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
          "Vis co. is the result of all the knowledge I have acumulated during my wonderful journey in Resilia Educação, institution where i could start learning web development and, mostly, find myself as an IT profesional. This represents the end of a very meaningful phase and the beginning of a brand new one, which I'm so excited to begin. (Plus I truly hope this website can help people drink less soda with pure vodka and taste better cocktails!)"
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
