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
  } 
  catch (err) {
    console.log(err);
  }
};

export const GetDrink = (id) => {};
