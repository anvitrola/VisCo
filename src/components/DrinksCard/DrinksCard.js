import  { Component } from 'react';

export default class DrinksCard extends Component {
    constructor(props){
        super(props);

        this.componentDidMount.bind(this);

        this.state = {
            drinks: []
        }
    }
    async componentDidMount(){
        const response  = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`);
        if(!response.ok) throw new Error("Request error!");

        const data = (await response.json()).drinks;

        const apiDrinks = data.map(({strDrink, strDrinkThumb, idDrink}) => {
            return {
                name: strDrink,
                thumbnail: strDrinkThumb,
                id: idDrink
            }
        })

        this.setState({drinks: apiDrinks})
    }

    render() {
        return (
            <ul> 
                {this.state.drinks.map(drink => <li key={drink.id}>{drink.name}</li>)}
            </ul>
        )
    }
}
