import React, { useEffect, useState } from "react";

//components
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import NavBar from "../../components/NavBar/NavBar";
import TitleBox from "../../components/TitleBox/TitleBox";
import DrinkCard from "../../components/DrinkCard/DrinkCard";

//fetch data
import { GetDrinks } from "../../services/drinkServices";

//style
import { Container, SectionOne, SectionTwo, Iframe } from "./DrinksList.styles";

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
    <Container>
      {!loading ? (
        <>
          <NavBar isFilter={true} />

          <TitleBox
            title={"Coquetéis"}
            subtitle={
              "Dos mais famosos e sofisticados aos mais rústicos e exóticos"
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
        <>
        <h3>Loading...</h3>
          <Iframe
            src="https://giphy.com/embed/XEJ8bHp1N9i4OjgLwT"
            frameBorder="0"
            allowFullScreen
          />
        </>
      )}
    </Container>
  );
}
