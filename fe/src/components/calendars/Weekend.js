import React, { Component } from 'react';
import { filterEventDate } from '../../helpers/filter';
import moment from 'moment';
import EventGrid from '../EventGrid'

class Weekend extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      events: filterEventDate(nextProps.events, [this.startDate, this.endDate])
    });
  }

  render() {
    return (
      <span>
        <EventGrid events={this.state.events} />
      </span>
    );
  }

  constructor(props) {
    super(props);
    this.startDate = moment().endOf('week').add(-2, 'days');
    this.endDate = moment().endOf('week');
    this.state = {
      events: filterEventDate(props.events, [this.startDate, this.endDate])
    };
  }


}

export default Weekend;
