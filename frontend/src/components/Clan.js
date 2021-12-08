import React from "react";
import Royaleapi from "./royaleapi";
import "../index.css"
import Input from "../components/Input";
//import Player from '../components/Player';
//import Chest from '../components/Chest';
//import Graph from '../components/Graph';
import Navigation from '../components/Navigation';
export default class Clan extends React.Component{
   
   constructor(props){
       super(props);
       this.state={i:0,
                    showClans: true,};
       this.handleSubmit = this.handleSubmit.bind(this);
   }

  /* componentDidMount(){
    this.fetchClans();
   }*/
   handleSubmit(e)
   { 
    e.preventDefault();
       let clanName = e.target.elements.clanNameSearch.value;
        if ( clanName !== "")
            this.fetchClans(clanName);
   }

   fetchClans(name)
   {
       let api = new Royaleapi();
       api.fetchClansByName(name)
       .then((response) => {
           this.setState({
               fetched: true,
               clan: response.data
           });
           
        console.log(this.state.clan.items);
        
       })
       .catch((error) => {
           console.log(error);
       });
   }

    showClans()
    {
        if (this.state.showClans)
        {
            this.setState({ showClans: false})
        }
        else{
            this.setState({showClans: true})
        }
    }
    displayClans(){
        let clans = this.state.clan.items;

        let tableStyle = null;
        if (!this.state.showClans)
        {
            tableStyle={display: "none"};
        }

        console.log(clans);
        return(
           <table style={tableStyle} className="tab">
               <thead>
                <tr>
                    <th>Nom du clan</th>
                    <th>Tag du clan</th>
                    <th>Trophées du clan</th>
                    <th>Pays</th>
                </tr>
                </thead>
                <tbody>
                    {clans.map( (items) => <tr>
                                                <th onClick={() => this.handleClick(items["tag"])}>{items["name"]}</th>
                                                
                                                <th>{items["tag"]}</th>
                                                
                                                <th>{items["clanScore"]}</th>
                                                
                                                <th>{items["location"]["name"]}</th>
                                            
                                            </tr>)} 

                </tbody>
            </table> 
        );
    }

    render(){
        if (!this.state.fetched){
            return (<div><Navigation/><Input handleSubmit={this.handleSubmit} name="Recherche nom du clan" inputTextName="clanNameSearch"/>
            </div>)
        }
        return (
            <div>
                <Navigation/>
                <Input handleSubmit={this.handleSubmit} name="Recherche nom du clan" inputTextName="clanNameSearch"/>
               
               <button onClick={() => this.showClans()}> Show/Hide</button>
            
                {this.displayClans()}
            </div>
            
        )
        
    }
    
}


// https://github.com/arona-k 
// Si besoin