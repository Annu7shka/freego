import React, { Component } from 'react';
import { filterEventDate } from '../../helpers/filter';
import moment from 'moment';

class Weekend extends Component {
  renderEvents(events) {
    return events.map((event, i) => {
      return (
        <div className="card"  key={i}>
          <img className="card-img-top" src={event.image_url} alt={event.title} />
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">{event.description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      );
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      events: filterEventDate(nextProps.events, [this.startDate, this.endDate])
    });
  }

  render() {
    return (
      <span>
        This weekend
        {this.renderEvents(this.state.events)}
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
