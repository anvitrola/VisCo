import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

//components
import Button from "../../components/Button/Button";
import EmptyDiv from "../../components/TextDiv/EmptyDiv";
import TitleBox from "../../components/TitleBox/TitleBox";

//service
import { GetDrink } from "../../services/drinkServices";

//style
import { Container, Ingredients, Steps } from "./DrinkExhi.styles";

function DrinkExhi() {
  const { id } = useParams();

  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      let apiDrink = await GetDrink(id);
      setDrink(apiDrink);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  console.log(drink.ingredients);
  const recipe = String(drink.recipe).split(".");

  return (
    <Container>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <>
          <Link to="/menu">
            <Button text={"Back"} />
          </Link>

          <TitleBox
            title={drink.name}
            subtitle={`${drink.category} - ${drink.alcoolhic}`}
          />

          <EmptyDiv>
            <h3>ingredients</h3>
            <h5>{drink.glass}</h5>
            <Ingredients>
              {drink.ingredients.map((item, index) => (
                <li key={`Ing${index}`}>{item}</li>
              ))}
            </Ingredients>
            <h4>Recipe</h4>
            <Steps>
              {recipe.map((step, index) => (
                <li key={`Rec${index}`}>{step}</li>
              ))}
            </Steps>
          </EmptyDiv>

          <img src={drink.thumbnail} alt={drink.name} />
        </>
      )}
    </Container>
  );
}

export default DrinkExhi;
