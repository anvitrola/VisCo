import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import "./styles/global.scss";

class App extends React.Component {
  render(){
    const clienteJoao = {
      nome: "João",
      idade: 37,
      compras: [
        { nome: "Notebook", preco: "2500" },
        { nome: 'Motocicleta"', preco: "10000" },
        { nome: "Smartphone", preco: "1500" },
        { nome: "Conjunto de panelas", preco: "2000" },
      ],
      cidade: "Belém",
    };

    const clienteMaria = {
      nome: "Maria",
      idade: 18,
      compras: [
        { nome: "Computador", preco: "2500" },
        { nome: "Coletânia de livros", preco: "1000" },
        { nome: "Smartphone", preco: "1500" },
      ],
      cidade: "Rio de Janeiro",
    };

    function totalCompras(obj){
      let total = 0;
      const exp = /compras/g;

      for(let element in obj){
        if(element.match(exp)) {
          obj[element].forEach(thing => {
            total += Number(thing.preco)
          })
        }
      }

      return total
    }

    return (
      <>
      <Header/>
      <ul>
        <li style= {totalCompras(clienteJoao) > 10000 ? {color: 'green'} : {color: 'red'}}>
          {clienteJoao.nome}: R${totalCompras(clienteJoao)}
        </li>
        <li style= {totalCompras(clienteMaria) > 10000 ? {color: 'green'} : {color: 'red'}}>
          {clienteMaria.nome}: R${totalCompras(clienteMaria)}
        </li>
      </ul>
      <Footer/>
      </>
    );
  }
}

export default App;
