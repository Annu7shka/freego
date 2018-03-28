import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class EventGrid extends Component {
    renderEventsGrid(events) {
    let eventsRows = [];

    if (events.length === 0) {
      return 'No events';
    }

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
  renderTags(ageGroups) {
    if (!ageGroups || ageGroups.length === 0) {
      return false;
    }
    return ageGroups.map((ageGroup, i) => {
      let groupName;

      switch (ageGroup) {
        case 'infant':
          groupName = 'infant';
          break;
        case 'preschooler':
          groupName = 'preschooler';
          break;
        case 'schoolAge':
          groupName = 'school age';
          break;
        case 'adults':
          groupName = 'adult';
          break;
      }
      return (
        <div className={'tag tag_' + ageGroup} key={i}>
         {groupName}
        </div>
      );
    });
  }

  renderEventsRow(eventsRow) {
    return eventsRow.map((event, i) => {
      return (
        <div className="col-12 col-md-6" key={i}>
          <div className="card">
            <NavLink to={{ pathname: '/events/' + encodeURI(event.title) }} className="card-title">{event.title}
              <img className="card-img-top" src={event.image_url} alt={event.title} /></NavLink>
            <div className="card-body">
              <NavLink to={{ pathname: '/events/' + encodeURI(event.title) }} className="card-title">{event.title}</NavLink>
              <p className="card-text">{event.description}</p>
              <div className="tags">
                {this.renderTags(event.ageGroups)}
              </div>
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
