import React, {Component} from 'react';
import $ from 'jquery';

import PokerHand from './PokerHand.js';

import Deck from '../utilityClasses/Deck.js';
import Buttons from './Buttons.js';
import ThePot from './ThePot.js';

var cards = new Deck();

class PokerTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            computersHand: ['deck','deck'],
            communityCards: ['deck','deck','deck','deck','deck'],
            playersHand: ['deck','deck'],
            wager: 0
        }
        this.prepDeck = this.prepDeck.bind(this);
        this.playerBet = this.playerBet.bind(this);
    }

    prepDeck(){
        cards.createDeck();
        cards.shuffleDeck();
        // the deck is now ready for a new hand
        // set up the players hand and the dealers hand
        var card1 = cards.deck.shift();
        var card2 = cards.deck.shift();
        var card3 = cards.deck.shift();
        var card4 = cards.deck.shift();
        // cards.deck is now 4 items fewer == we mutated it
        var playersStartingHand = [card1,card3];
        var computersStartingHand = [card2,card4];

        this.setState({
            playersHand: playersStartingHand,
            computersHand: computersStartingHand
        });
    }

    playerBet(amount){
        var newWager = this.state.wager + amount;
        this.setState({
            wager:newWager
        })
        this.draw();
        this.checkHands(this.state.playersHand)
    }

    draw(){
        var communityNewHand = this.state.communityCards;
        communityNewHand.push(cards.deck.shift());
        this.setState({
            communityCards: communityNewHand
        })
        if(this.state.gameOver){
            //find out who won
        }
    }

    checkHands(hand){
        $.ajax({
            method: "POST",
            url: "http://localhost:5000/hand-checker",
            data: {hand:hand},
            success: (response)=>{console.log(response)}
        })
        $.ajax({
            method: "POST",
            url: "http://localhost:3000/hand-checker",
            data: {hand:hand},
            success: (response)=>{console.log(response)}
        })
    }

    render(){
        return(
            <div className="col-sm-12 the-table">
                <ThePot wager={this.state.wager} />
                <PokerHand cards={this.state.computersHand}/>   {/* computers hand */}
                <PokerHand cards={this.state.communityCards}/>   {/* community cards */}
                <PokerHand className="cards" cards={this.state.playersHand}/>   {/* players hand */}
                <Buttons deal={this.prepDeck} bet={this.playerBet} />
            </div>
        )
    }
}

export default PokerTable;
