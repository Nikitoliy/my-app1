import React from 'react';
import './calendar.scss';



import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import calendarImage from "../../assets/calendar.png";

mobiscroll.settings = {
    lang: 'ua',
    theme: 'ios',
    themeVariant: 'light'
};


class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 'month',
            weeks: 6
        };
    }
    changeView = (event) => {
        let weekNr = 0;
        switch (event.target.value) {
            case 'month':
                weekNr = 6;
                break;
            case 'week':
                weekNr = 1;
                break;
        }
        this.setState({
            view: event.target.value,
            weeks: weekNr
        });
    }
    render () {
        return (
            <mobiscroll.Form>
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle>Month view and week view</mobiscroll.FormGroupTitle>
                    <mobiscroll.Segmented name="view" value="month" checked={this.state.view === 'month'} onChange={this.changeView}>
                        Month
                    </mobiscroll.Segmented>
                    <mobiscroll.Segmented name="view" value="week" checked={this.state.view === 'week'} onChange={this.changeView}>
                        Week
                    </mobiscroll.Segmented>
                    <mobiscroll.Calendar display="inline" type="hidden" weeks={this.state.weeks} />
                </mobiscroll.FormGroup>
            </mobiscroll.Form>
        );
    }
}


export default Calendar
