import React, { Component } from 'react';

class EventGrid extends Component {
    renderEventsGrid(events) {
    let eventsRows = [];

    events.forEach((e, i) => {
      if (eventsRows.length && eventsRows[eventsRows.length - 1].length === 1) {
        eventsRows[eventsRows.length - 1].push(e);
      } else {
        eventsRows.push([e]);
      }
    });

    return eventsRows.map((eventsRow, i) => {
      return (
        <div className="row" key={i}>
          {this.renderEventsRow(eventsRow)}
        </div>
      );
    });
  }

  renderEventsRow(eventsRow) {
    return eventsRow.map((event, i) => {
      return (
        <div className="col-12 col-md-6" key={i}>
          <div className="card">
            <img className="card-img-top" src={event.image_url} alt={event.title} />
            <div className="card-body">
              <h5 className="card-title">{event.title}</h5>
              <p className="card-text">{event.description}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      );
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      events: nextProps.events
    });
  }

  render() {
    return (
      <div>
        <h2>EventGrid</h2>
        {this.renderEventsGrid(this.state.events)}
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      events: props.events,
      ageGroup: 'all'
    };
  }

}

export default EventGrid;
