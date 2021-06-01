import React, { useEffect, useState } from "react";

//api fetch service
import { SearchDrink } from "../../services/drinkServices";

//page components
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import BackButton from "../../components/Button/BackButton";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import DrinkCard from "../../components/DrinkCard/DrinkCard";

//style
import { Container, SearchForm } from "./SearchDrinks.styles";

function SearchDrinks() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let apiDrinks = await SearchDrink(search);
      setDrinks(apiDrinks);
      setLoading(false);
    };

    fetchData();
  }, [search, drinks]);

  return (
    <Container>
      <NavBar isFilter={true} />

      <BackButton backTo={"menu"} color={"green"} />

      <SearchForm method="GET">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder={"Type a cocktail name"}
        />
        <Button text={"search"} type={"submit"} secondary={true} />
      </SearchForm>

      <section>
        {!loading ? (
          <CustomCarousel>
            {drinks.map((drink) => (
              <DrinkCard
                key={drink.id}
                id={drink.id}
                title={drink.name}
                photo={drink.thumbnail}
              />
            ))}
          </CustomCarousel>
        ) : (
          <LoadingSpinner />
        )}
      </section>
    </Container>
  );
}

export default SearchDrinks;
