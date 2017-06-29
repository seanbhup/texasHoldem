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
            communityCards: [],
            playersHand: ['deck','deck']

        }
        this.prepDeck = this.prepDeck.bind(this);
    }

    prepDeck(){
        cards.createDeck();
        cards.shuffleDeck();
    }

    render(){
        this.prepDeck();
        console.log(cards.deck);

        return(
            <div className="col-sm-12 the-table">
                <PokerHand cards={this.state.computersHand}/>   {/* computers hand */}
                <PokerHand cards={this.state.communityCards}/>   {/* community cards */}
                <PokerHand cards={this.state.playersHand}/>   {/* players hand */}
                <Buttons />
            </div>
        )
    }
}

export default PokerTable;
