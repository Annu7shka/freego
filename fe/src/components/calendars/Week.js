import React, { Component } from 'react';
import { filterEventDate } from '../../helpers/filter';
import moment from 'moment';
import EventGrid from '../EventGrid'

class Week extends Component {
  componentWillReceiveProps(nextProps) {
    this.setState({
      events: filterEventDate(nextProps.events, [this.startDate, this.endDate])
    });
  }

  render() {
    return (
      <EventGrid events={this.state.events} />
    );
  }

  constructor(props) {
    super(props);
    this.startDate = moment().startOf('day');
    this.endDate = moment().add(7, 'days');
    this.state = {
      events: filterEventDate(props.events, [this.startDate, this.endDate])
    };
  }

}

export default Week;

