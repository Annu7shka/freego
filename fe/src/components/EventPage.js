import React, { Component } from 'react';

class EventPage extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      events: nextProps.events
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
        <h1>{foundEvents[0].title}</h1>
        <p>{foundEvents[0].description}</p>
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