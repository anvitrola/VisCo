//components
import TextDiv from "../../components/TextDiv/TextDiv";
import TitleBox from "../../components/TitleBox/TitleBox";

//images
import logo from "../../images/logo_visco.png";

//styles
import { Container, LinkBox } from "./Colab.styles";

function Colab() {
  return (
    <Container className="animeLeft">
      <TitleBox title={"colab"} />
      <TextDiv
        isLeft={true}
        title={"So you have good ideas..."}
        subtitle={"This is an open source project!"}
        text={
          "If you are familiar with web development and want to make a contribution in this project, feel free to access it's repository by clicking in the image aside and opening a pull request (just tag me as a reviewer). If you're not from the area but still have any good idea you can just get in touch with me via LinkedIn - in this case just click in my nickname in the footer!"
        }
      />

      <LinkBox href={"https://github.com/anvitrola/VisCo"}>
        <img src={logo} alt={"Logo do site"} />
      </LinkBox>
    </Container>
  );
}

export default Colab;
