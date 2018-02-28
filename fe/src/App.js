import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Calendar from './components/Calendar';
import EventGrid from './components/EventGrid';
import urlConfig from './config/urlConfig';
import { Switch, Route } from 'react-router-dom';
import { filterAgeGroup } from './helpers/filter';


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


class App extends Component {
  componentDidMount() {
    fetch(urlConfig.events)
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
          events: events,
          allEvents: events
        });
      });
  }

  setSelectedAgeRange(ageGroup) {
    const allEvents = this.state.allEvents;
    let events;
    if (ageGroup === 'all') {
      events = allEvents;
    } else {
      events = filterAgeGroup(allEvents, ageGroup);
    }
    this.setState({
      ageGroup: ageGroup,
      events: events
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
        <Header setSelectedAgeRange={this.setSelectedAgeRange.bind(this)} ageGroup={this.state.ageGroup} />
        <Switch>
          <Route exact path='/' render={() => <HomePage events={this.state.events} />}/>
          <Route path='/calendar' render={() => <Calendar events={this.state.events}/>}/>
          <Route path='/events' render={() => <EventGrid events={this.state.events}/>}/>
        </Switch>    
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      allEvents: [],
      ageGroup: 'all'
    };
  }
}

export default App;
