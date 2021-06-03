import { Container, Logo, Wave } from "./Banner.styles";

//components
import TitleBox from "../../components/TitleBox/TitleBox";

//images
import logo from "../../images/logo_visco.png";
import wave from "../../images/wave.svg";

function Banner() {
  return (
    <Container>
      <Logo src={logo} alt={"Logo do site"} />
      <TitleBox
        title={"discover the world by tasting"}
        subtitle={"the flavor is always in the skin"}
      />
      <Wave src={wave} alt={"Onda"} />
    </Container>
  );
}

export default Banner;
