import { Container, Logo, Wave } from "./Banner.styles";

//components
import TitleBox from "../../components/TitleBox/TitleBox";

//images
import logo from "../../images/logo_visco.png";
import wave from "../../images/wave.svg";

function Banner() {
  return (
    <Container className="animeLeft">
      <Logo src={logo} alt={"Logo do site"} />
      <TitleBox
        title={"discover the world by tasting it"}
        subtitle={"the flavor is always in the skin"}
      />
      <Wave src={wave} alt={"Onda"} />
    </Container>
  );
}

export default Banner;
