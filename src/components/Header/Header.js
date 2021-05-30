import NavBar from "../NavBar/NavBar";
import { HeaderContainer, Logo } from "./Header.styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo to="/">VIS co.</Logo>
      <NavBar />
    </HeaderContainer>
  );
}
