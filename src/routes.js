import { Switch, Route } from "react-router-dom";

import Contact from "./pages/Contact/Contact";
import Main from "./pages/Main/Main";
import DrinksList from "./pages/DrinksList/DrinksList";
import DrinkExhi from "./pages/DrinkExhi/DrinkExhi";
import SearchDrinks from "./pages/SearchDrinks/SearchDrinks";
import FilteredDrinks from "./pages/FilteredDrinks/FilteredDrinks";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Main/>
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
        <SearchDrinks/>
      </Route>

      <Route path="/drinks/:filter">
        <FilteredDrinks/>
      </Route>
    </Switch>
  );
}
