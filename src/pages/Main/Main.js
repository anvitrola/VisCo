import  TextDiv from "../../components/TextDiv/TextDiv";
import  Banner from "../../components/Banner/Banner";

//images 
import barman from "../../images/barman.png";
import drink from "../../images/honey_cocktail2.png";


import { MainArea, DrinkPicture, AboutPicture } from "./Main.styles";

export default function Main() {
  return (
    <MainArea>
      <Banner/>

      <AboutPicture src={barman} alt="Imagem de um bar florido" />
      <DrinkPicture src={drink} alt="Imagem de um bar florido" />

      <TextDiv
        isLeft={true}
        title={"about"}
        text={
          "From the most tradicional to the boldier, VisCo serves the pourpose to unite in one place amazing cocktails recipes for you to prepare for the happy-hour, for surprising someone or even to have fun all by yourself. The process of preparing a good cocktail is magical in a very charming and enchanting way, because to make a really good cocktail is beyond mixing random alcoholic stuff, it amplifies your senses to capture the flavor, the smell and... the feelings. To make a cocktail is to taste the world itself, have amazing experiences and, mostly, make memories."
        }
        hasLink={true}
        linkTo={"about"}
      />

      <TextDiv
        title={"behind the code"}
        text={
          "You can have the opportunity to make this website better. This is an open-source project, click below to know how!"
        }
        hasLink={true}
        linkTo={"colab"}
      />


    </MainArea>
  );
}
