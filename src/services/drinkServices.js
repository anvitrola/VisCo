import getIngredients from "../utils/GetIngredients";

export const GetDrinks = async () => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`
    );
    if (!response.ok) throw new Error("Request error!");

    const data = (await response.json()).drinks;

    const apiDrinks = data.map(({ strDrink, strDrinkThumb, idDrink }) => {
      return {
        name: strDrink,
        thumbnail: strDrinkThumb,
        id: idDrink,
      };
    });

    return apiDrinks;
  } catch (err) {
    console.log(err);
  }
};

export const GetDrink = async (id) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    if (!response.ok) throw new Error("Request error!");

    const data = (await response.json()).drinks[0];

    const apiDrink = {
      name: data.strDrink,
      thumbnail: data.strDrinkThumb,
      id: data.idDrink,
      alcoolhic: data.strAlcoholic,
      glass: data.strGlass,
      recipe: data.strInstructions,
      category: data.strCategory,
      ingredients: getIngredients(data),
    };

    return apiDrink;
  } catch (err) {
    console.log(err);
  }
};

export const SearchDrink = async (drinkName) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    );

    if (!response.ok) throw new Error("Request error!");

    const data = (await response.json()).drinks;

    const apiDrinks = data.map(({ strDrink, strDrinkThumb, idDrink }) => {
      return {
        name: strDrink,
        thumbnail: strDrinkThumb,
        id: idDrink,
      };
    });

    return apiDrinks;
  } catch (err) {
    console.log(err);
  }
};

export const GetFilteredDrinks = async (filter) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter}`
    );

    if (!response.ok) throw new Error("Request error!");

    const data = (await response.json()).drinks;

    const apiDrinks = data.map(({ strDrink, strDrinkThumb, idDrink }) => {
      return {
        name: strDrink,
        thumbnail: strDrinkThumb,
        id: idDrink,
      };
    });

    return apiDrinks;
  } catch (err) {
    console.log(err);
  }
};
