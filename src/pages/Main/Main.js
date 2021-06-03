import  TextDiv from "../../components/TextDiv/TextDiv";
import TitleBox from "../../components/TitleBox/TitleBox";

//images 
import barman from "../../images/barman.png";
import drink from "../../images/honey_cocktail2.png";
import logo from "../../images/logo_visco.png";

import { MainArea, Banner, DrinkPicture, AboutPicture } from "./Main.styles";

export default function Main() {
  return (
    <MainArea>
      <Banner>
        <img src={logo} alt={"Logo do site"}/>
        <TitleBox title={"discover the world by tasting"} subtitle={"the flavor is always in the skin"}/>
      </Banner>
      <AboutPicture src={barman} alt="Imagem de um bar florido" />
      <DrinkPicture src={drink} alt="Imagem de um bar florido" />

      <TextDiv
        isLeft={true}
        title={"sobre"}
        text={
          "Dos mais tradicionais aos mais ousados, o VisCo tem como objetivo unir em um só lugar receitas de coquetéis diversos. Para o happy-hour, para surpreender alguém ou mesmo para se divertir sozinho, o processo de fazer um coquetel tem o seu lado encantador e charmoso. Preparar um drink está para além de apenas misturar bebidas visando o teor alcoólico, é ampliar todos os sentidos para capturar os aromas, os sabores, as sensações a fim de gerar memórias e experiências incríveis."
        }
        hasLink={true}
        linkTo={"about"}
      />

      <TextDiv
        title={"bastidores"}
        text={
          "Dos mais tradicionais aos mais ousados, o VisCo tem como objetivo unir em um só lugar receitas de coquetéis diversos. Para o happy-hour, para surpreender alguém ou mesmo para se divertir sozinho, o processo de fazer um coquetel tem o seu lado encantador e charmoso. Preparar um drink está para além de apenas misturar bebidas visando o teor alcoólico, é ampliar todos os sentidos para capturar os aromas, os sabores, as sensações a fim de gerar memórias e experiências incríveis."
        }
        hasLink={true}
        linkTo={"contato"}
      />


    </MainArea>
  );
}
