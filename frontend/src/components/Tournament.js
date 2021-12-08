import React from "react";
import Royaleapi from "./royaleapi";
import "../index.css"
import Input from "../components/Input";
import Navigation from '../components/Navigation';

export default class Tournament extends React.Component
{
    constructor(props){
        super(props);
        this.state={i:0,
                     showTournaments: true,};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /* componentDidMount(){
    this.fetchTournaments();
   }*/
   handleSubmit(e)
   { 
   e.preventDefault();
       let tournament = e.target.elements.tournamentNameSearch.value;
        if ( tournament === "")
            this.fetchTournaments(tournament);
   }

   fetchTournaments()
   {
    let api = new Royaleapi();
    api.fetchTournament()
    .then((response) => {
        this.setState({
            fetched: true,
            tournament: response.data
        });
        
     console.log(this.state.tournament.items);
     
    })
    .catch((error) => {
        console.log(error);
    });
   }
   showTournaments()
    {
        if (this.state.showTournaments)
        {
            this.setState({ showTournaments: false})
        }
        else{
            this.setState({showTournaments: true})
        }
    }
  
    displayTournaments()
    {
        let tournamentTag = this.state.tournament.items["tag"];
        let tournamentTitle = this.state.tournament.items["title"];
        

        let tableStyle = null;
        if (!this.state.showTournaments)
        {
            tableStyle={display: "none"};
        }

        return(
           <table style={tableStyle} className="tab">
               <thead>
                <tr>
                    <th>Tag du tournoi</th>
                    <th>Nom du tournoi</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{tournamentTag}</th>
                        <th>{tournamentTitle}</th>
                    </tr>

                </tbody>
            </table> 
        );
    }

    render() 
    {
        if (!this.state.fetched){
            return (<div>
                <Navigation/> <Input handleSubmit={this.handleSubmit} name="Afficher tournois" inputTextName="tournamentNameSearch"/>
                    </div>)
        }
        return (
            <div>
                 <Navigation/>
                 
                 <Input handleSubmit={this.handleSubmit} name="Cartes" inputTextName="cardNameSearch"/>
               
               <button onClick={() => this.showTournaments()}> Show/Hide</button>
               {this.displayTournaments()}
            </div>
        )

    }



}