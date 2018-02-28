import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Calendar extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      events: nextProps.events.map((e, i) => {
        e.start = new Date(e.start);
        e.end = new Date(e.end);
        e.id = i;
        return e;
      })
    });
  }

  render() {
    return (
      <BigCalendar
        events={this.state.events}
        views={allViews}
        step={60}
        showMultiDayTimes
        defaultDate={new Date()}
      />
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      events: props.events.map((e, i) => {
        e.start = new Date(e.start);
        e.end = new Date(e.end);
        e.id = i;
        return e;
      })
    };
  }


}

export default Calendar;
