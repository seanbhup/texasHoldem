import React, {Component} from 'react';

class Buttons extends Component{
    render(){
        return(
            <div className="col-sm-12 buttons">
                <div className="col-sm-2">
                    <button className="btn btn-info">Deal</button>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-info">Bet 10</button>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-info">Bet 100</button>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-info">Check</button>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-info">Fold</button>
                </div>
            </div>
        )
    }
}

export default Buttons;
