import { Link } from "react-router-dom";
import { Bar, Filter, Navigation } from "./Navbar.styles";

export default function NavBar({ isFilter }) {
  return (
    <Bar>
      {!isFilter ? (
        <Navigation>
          <li>
            <Link to="/menu">cocktails</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/colaborator">colab</Link>
          </li>
        </Navigation>
      ) : (
        <Filter>
          <li>
            <Link to="/drinks/Alcoholic">Alcoholic</Link>
          </li>
          <li>
            <Link to="/drinks/Non_Alcoholic">Non-Alcoholic</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/search">Buscar</Link>
          </li>
        </Filter>
      )}
    </Bar>
  );
}
