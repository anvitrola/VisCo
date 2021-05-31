export default function getIngredients(object){
    let ingredients = [];
    const exp = /strIngredient/g;
    
    for(let element in object){
       if(element.match(exp) && object[element])
            ingredients.push(object[element]);
    }

    return ingredients;
}