import React from 'react';
import Royaleapi from "./royaleapi";
import "../index.css"
import Input from './Input';
import Navigation from './Navigation';
export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = { i: 0,
                        showPlayer: true,
                        fetchedPlayer: false,
                        fetchedChest: false,
                    }
        this.handleSubmit = this.handleSubmit.bind(this);
        
        };

    
    /*componentDidMount(){
        this.fetchPlayer();
    }*/
    handleSubmit(e)
    {
        e.preventDefault();

        let playerTag = e.target.elements.playerTagSearch.value;
        if (playerTag !== "")
        {
            this.fetchPlayer(playerTag);
            this.fetchChests(playerTag);
        }
    }




    fetchPlayer(tag) 
    {
        let api = new Royaleapi();
        api.fetchPlayerByTag(tag)
            .then((response) => {
                this.setState({
                    fetchedPlayer: true, 
                    player: response.data
                });
                console.log(this.state.player);
                //document.getElementsByClassName('image')[0].src = this.state.player.currentFavouriteCard.iconUrls.medium;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    fetchChests(tag)
    {
        let api = new Royaleapi();
        api.fetchUpcomingChests(tag)
        .then((response) => {
            this.setState({
                fetchedChest: true,
                chest: response.data
            });
            console.log(this.state.chest.items[0]);
            console.log(this.state.chest.items[1]);
            console.log(this.state.chest.items[2]);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    showPlayer()
    {
        if (this.state.showPlayer)
        {
            this.setState({ showPlayer: false})
        }
        else{
            this.setState({showPlayer: true})
        }
    }
    displayPlayer(){
        let playerTag = this.state.player.name;
        let playerLevel = this.state.player.expLevel;
        let playerTrophies = this.state.player.trophies;
        let playerClan = this.state.player.clan["name"];

        let tableStyle = null;
        if (!this.state.showPlayer)
        {
            tableStyle={display: "none"};
        }

        return(
           <table style={tableStyle} className="tab">
               <thead>
                <tr>
                    <th>Nom du joueur</th>
                    <th>Niveau du joueur</th>
                    <th>Trophées</th>
                    <th>Clan</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{playerTag}</th>
                        <th>{playerLevel}</th>
                        <th>{playerTrophies}</th>
                        <th>{playerClan}</th>
                    </tr>

                </tbody>
            </table> 
        );
    }
    displayChest(){
        /*if(string=="Golden Chest"){
                imgsrc = 
        }*/
        let chests = this.state.chest.items;

    return ( chests.map( (chest) => 
    <div className="chestStyle" >Dans {chest.index} combats, vous aurez un {chest.name}!</div>)
    );
}
    render() 
    {
        if (!this.state.fetchedPlayer || !this.state.fetchedChest ){
            return (<div><Navigation/><Input handleSubmit={this.handleSubmit} name="Tag du joueur" inputTextName="playerTagSearch"/>
            </div>)
        }
        return (
            <div>
                 <Navigation/>
                 <Input handleSubmit={this.handleSubmit} name="Tag du joueur" inputTextName="playerTagSearch"/>
               
               <button onClick={() => this.showPlayer()}> Show/Hide</button>
                {this.displayPlayer()} {this.displayChest()}
            </div>
        )

    }

}