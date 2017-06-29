import React, {Component} from 'react';
import PokerHand from './PokerHand.js';

import Deck from '../utilityClasses/Deck.js';
import Buttons from './Buttons.js';

var cards = new Deck();

class PokerTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            computersHand: ['deck','deck'],
            communityCards: ['deck','deck','deck','deck','deck'],
            playersHand: ['deck','deck']

        }
        this.prepDeck = this.prepDeck.bind(this);
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

    render(){
        return(
            <div className="col-sm-12 the-table">
                <PokerHand cards={this.state.computersHand}/>   {/* computers hand */}
                <PokerHand cards={this.state.communityCards}/>   {/* community cards */}
                <PokerHand cards={this.state.playersHand}/>   {/* players hand */}
                <Buttons deal={this.prepDeck} />
            </div>
        )
    }
}

export default PokerTable;
