import banner from "../../images/banner1.png";
import { BannerArea } from "./MainBanner.styles";

export default function MainBanner() {
  return (
    <BannerArea>
      <img src={banner} alt="Imagem de um bar florido"/>
    </BannerArea>
  );
}
