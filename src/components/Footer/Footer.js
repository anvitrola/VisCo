import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterContainer } from "./Footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>
          2021 &copy; all rights reserved by{" "}
          <a href="https://www.linkedin.com/in/anvitrola/">anvitrola</a>
        </p>
      </div>

      <div>
        <a href="linkedin.com/in/anvitrola/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/anvitrola">
          <FaGithub />
        </a>
      </div>
    </FooterContainer>
  );
}
