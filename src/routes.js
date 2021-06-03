import { Switch, Route } from "react-router-dom";

import Contact from "./pages/Contact/Contact";
import Main from "./pages/Main/Main";
import DrinksList from "./pages/DrinksList/DrinksList";
import DrinkExhi from "./pages/DrinkExhi/DrinkExhi";
import SearchDrinks from "./pages/SearchDrinks/SearchDrinks";
import FilteredDrinks from "./pages/FilteredDrinks/FilteredDrinks";
import About from "./pages/About/About";
import Colab from "./pages/Colab/Colab";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/menu">
        <DrinksList />
      </Route>

      <Route path="/drink/:id">
        <DrinkExhi />
      </Route>

      <Route path="/search">
        <SearchDrinks />
      </Route>

      <Route path="/drinks/:filter">
        <FilteredDrinks />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/colab">
        <Colab />
      </Route>
    </Switch>
  );
}
