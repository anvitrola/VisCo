import { Link } from "react-router-dom";
import { Bar, Filter, Navigation } from "./Navbar.styles";

export default function NavBar({ isFilter }) {
  return (
    <Bar>
      {!isFilter ? (
        <Navigation>
          <li>
            <Link to="/menu">coquetéis</Link>
          </li>
          <li>
            <Link to="/about">sobre</Link>
          </li>
          <li>
            <Link to="/contact">contato</Link>
          </li>
          <li>
            <Link to="/colaborator">colabore</Link>
          </li>
        </Navigation>
      ) : (
        <Filter>
        <li>
          <Link to="/alcoholic">Alcoólicos</Link>
        </li>
        <li>
          <Link to="/non-alcoholic">Não-Alcoólicos</Link>
        </li>
        <li>
          <Link to="/popular">Populares</Link>
        </li>
        <li>
          <Link to="/search">Buscar</Link>
        </li>
      </Filter>
      )}
    </Bar>
  );
}
