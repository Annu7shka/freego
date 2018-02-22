import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Calendar from './components/Calendar';

let env = 'dev';

if (window.location.host === 'freego-events.herokuapp.com') {
  env = 'prod';
}

let ageGroups = [
  {
    name: 'infant',
    range: [0, 1]
  },
  {
    name: 'toddler',
    range: [1, 4],
  },
  {
    name: 'preschooler',
    range: [4, 6],
  },
  {
    name: 'schoolAged',
    range: [6, 12],
  },
  {
    name: 'adolescent',
    range: [12, 18]
  }
];


const eventsPath = {
  dev: 'http://localhost:3001/events/index.json',
  prod: 'https://freego-events.herokuapp.com/events/index.json'
}[env];

class App extends Component {
  componentDidMount() {
    fetch(eventsPath)
      .then((resp) => resp.json())
      .then((data) => {
        let events = data.map(event => {
          event.ageGroups = [];
          ageGroups.forEach(group => {
            if ((group.range[0] > event.age_start && group.range[0] < event.age_end) || (group.range[1] > event.age_start && group.range[1] < event.age_end)) {
              event.ageGroups.push(group.name);
            }
          });
          return event;
        });
        this.setState({
          events: events
        });
      });
  }

  eventsTable(events) {
    return events.map((ev, i) => {
      return(
        <tr key={i}>
          <td>{ev.event_type}</td>
          <td>{ev.title}</td>
          <td>{ev.description}</td>
        </tr>
      );
    })
  }

  render() {
    return (
      <div className="App">
        <HomePage events={this.state.events} />
        <Calendar />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
}

export default App;
