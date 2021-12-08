import React from "react";
import Royaleapi from "./royaleapi";
import "../index.css"
import Input from "../components/Input";
import Navigation from '../components/Navigation';

export default class Card extends React.Component
{
    constructor(props){
        super(props);
        this.state={i:0,
                     showCards: true,};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /* componentDidMount(){
    this.fetchCards();
   }*/
   handleSubmit(e)
   { 
   e.preventDefault();
       let card = e.target.elements.cardNameSearch.value;
        if ( card === "")
            this.fetchCards(card);
   }

   fetchCards()
   {
    let api = new Royaleapi();
    api.fetchCard()
    .then((response) => {
        this.setState({
            fetched: true,
            card: response.data
        });
        
     console.log(this.state.card.items);
     
    })
    .catch((error) => {
        console.log(error);
    });
   }
   showCards()
    {
        if (this.state.showClans)
        {
            this.setState({ showCards: false})
        }
        else{
            this.setState({showCards: true})
        }
    }
    increment(val){
        
        val++;
    }
    displayCards()
    {
        let cards = this.state.card.items
        var x = 0
        for (x=0; x<105; x++){
        return ( cards.map( (card) => 
        <div className="cardStyle" >Carte  : {card.name}  <img src = {this.state.card.items[x].iconUrls.medium} alt ="carte"/></div>
        
        ) 
    
        ); }
    }

    render() 
    {
        if (!this.state.fetched){
            return (<div>
                <Navigation/> <Input handleSubmit={this.handleSubmit} name="Afficher cartes" inputTextName="cardNameSearch"/>
                    </div>)
        }
        return (
            <div>
                 <Navigation/>
                 
                 <Input handleSubmit={this.handleSubmit} name="Cartes" inputTextName="cardNameSearch"/>
               
               <button onClick={() => this.showCards()}> Show/Hide</button>
               {this.displayCards()}
            </div>
        )

    }



}