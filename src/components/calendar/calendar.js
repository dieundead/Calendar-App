import React, { Component } from 'react';
import Calendar from 'react-calendar';


import './calendar.scss';


class CalendarComponent extends Component {

    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }

    onChange = (date) => {
        this.setState({ date });
        this.props.onCalendarChange(date);
    };


    render() {

        return (

            <div>

                <Calendar className="right-calendar"
                          onChange={this.onChange}
                          value={this.state.date}
                />


            </div>
        );
    }

}

export default CalendarComponent;
