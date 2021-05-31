import { Switch, Route } from "react-router-dom";

import Contact from "./pages/Contact/Contact";
import Main from "./pages/Main/Main";
import DrinksList from "./pages/DrinksList/DrinksList";
import DrinkExhi from "./components/DrinkExhi/DrinkExhi";

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
      <Route path="/:id">
        <DrinkExhi />
      </Route>
    </Switch>
  );
}
