import React, { Component } from 'react';
import { filterEventDate } from '../../helpers/filter';
import moment from 'moment';

class Week extends Component {
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
        This week
        {this.renderEvents(this.state.events)}
      </span>
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

