import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3001/events/index.json')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          events: data.events
        });

        console.log(data.events);
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <table>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
            {this.eventsTable(this.state.events)}
          </tbody>
        </table>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" className="btn btn-primary">Primary</button>
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
