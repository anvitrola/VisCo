import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

//api fetch service
import { GetFilteredDrinks } from "../../services/drinkServices";

//components
import NavBar from "../../components/NavBar/NavBar";
import TitleBox from "../../components/TitleBox/TitleBox";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import DrinkCard from "../../components/DrinkCard/DrinkCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import BackButton from "../../components/Button/BackButton";

//styles
import { Container } from "./FilteredDrinks.styles";

function FilteredDrinks() {
  const { filter } = useParams();

  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let apiDrinks = await GetFilteredDrinks(filter);
      setDrinks(apiDrinks);
      setLoading(false);
    };

    fetchData();
  }, [drinks, filter]);

  return (
    <Container>
      <NavBar isFilter={true} />

      <BackButton backTo={"menu"} color={"green"} />

      <TitleBox title={filter === "Non_Alcoolic" ? "Non Alcoolic" : filter} />

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

export default FilteredDrinks;
