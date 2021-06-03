import React, { useEffect, useState } from "react";

//components
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import NavBar from "../../components/NavBar/NavBar";
import TitleBox from "../../components/TitleBox/TitleBox";
import DrinkCard from "../../components/DrinkCard/DrinkCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

//fetch data
import { GetDrinks } from "../../services/drinkServices";

//style
import { Container, SectionOne, SectionTwo } from "./DrinksList.styles";

export default function DrinksList() {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      let apiDrinks = await GetDrinks();

      setDrinks(apiDrinks);
      setLoading(false);
    };

    fetchData();
  }, [drinks]);

  const halfOne = drinks.slice(0, 50);
  const halfTwo = drinks.slice(50, 100);

  return (
    <Container >
      {!loading ? (
        <>
          <NavBar isFilter={true} />

          <TitleBox
            title={"Cocktails"}
            subtitle={
              "From the most famous and sofisticated to the most rustic and exotic."
            }
          />

          <SectionOne>
            <CustomCarousel>
              {halfOne.map((drink) => (
                <DrinkCard
                  key={drink.id}
                  id={drink.id}
                  title={drink.name}
                  photo={drink.thumbnail}
                />
              ))}
            </CustomCarousel>
          </SectionOne>

          <SectionTwo>
            <CustomCarousel>
              {halfTwo.map((drink) => (
                <DrinkCard
                  key={drink.id}
                  id={drink.id}
                  title={drink.name}
                  photo={drink.thumbnail}
                />
              ))}
            </CustomCarousel>
          </SectionTwo>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
}
