import React, { Component } from 'react';
import MapContainer from './MapContainer';

class EventPage extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      events: nextProps.events
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

  render() {
    let eventTitle = decodeURI(this.props.eventName);

    let foundEvents = this.state.events.filter(event => event.title === eventTitle);

    if (!foundEvents.length) {
      return '404';
    }

    return(
      <div>
        <div className="row">
          <div className="col-12 col-md-6">
            <img className="card-img-top" src={foundEvents[0].image_url} alt={foundEvents[0].title} />
          </div>
          <div className="col-12 col-md-6">
            <MapContainer events={[foundEvents[0]]} />
          </div>
        </div>

        <h1>{foundEvents[0].title}</h1>
        <p>{foundEvents[0].description}</p>
        <div>{this.renderTags(foundEvents[0].ageGroups) }</div>
        <div>From: {foundEvents[0].start.format('dddd, MMMM Do, h:mma')}</div>
        <div>To: {foundEvents[0].end.format('dddd, MMMM Do, h:mma')}</div>
      </div>)
  }

  constructor(props) {
    super(props);
    this.state = {
      event: undefined,
      events: props.events
    };
  }
}
export default EventPage;