import React, { Component } from "react";
import Countdown from './Countdown';

class Countapp extends Component {
    render() {
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 3) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
        return (
            <div className="Countapp">
                <h3 className="Countapp-title">2020 Presidential Election Countdown:</h3>
                <Countdown date={`${year}-11-3T00:00:00`} />
            </div>
        );
    }
}

export default Countapp;