import React, { Component } from 'react';
import './App.css';

let env = 'dev';

if (window.location.host === 'freego-events.herokuapp.com') {
  env = 'prod';
}

const eventsPath = {
  dev: 'http://localhost:3001/events/index.json',
  prod: 'https://freego-events.herokuapp.com/events/index.json'
}[env];

class App extends Component {
  componentDidMount() {
    fetch(eventsPath)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          events: data
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

  renderEventsRow(eventsRow) {
    console.log('eventsRow', eventsRow);
    return eventsRow.map((event, i) => {
      return (
        <div className="col-12 col-md-6">
          <div className="card">
            <img className="card-img-top" src={event.image_url} alt="Card image cap" />
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
        <div className="row">
          {this.renderEventsRow(eventsRow)}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light nav-container">
            <a className="navbar-brand" href="#">FreeGo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <form className="form-inline form-stretched my-2 my-lg-0">
              <input className="form-control input-lg" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0 btn-round" type="submit">Search</button>
            </form>
            <button type="button" className="btn btn-outline-dark btn-round">Near me</button>
          </nav>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-container">
          <button type="button" className="btn btn-outline-dark btn-round">Calendar</button>
          <button type="button" className="btn btn-outline-dark btn-round">Events</button>
          <button type="button" className="btn btn-outline-dark btn-round">Things to do</button>
          <button type="button" className="btn btn-outline-dark btn-round">Age range</button>
          <button type="button" className="btn btn-outline-dark btn-round">Attractions</button>
        </nav>
        <div id="EventsCarousel" className="carousel slide" data-ride="carousel"> <ol className="carousel-indicators"> <li data-target="#EventsCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#EventsCarousel" data-slide-to="1"></li>
            <li data-target="#EventsCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="/img/criancas_brincando.jpeg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/img/criancas_brincando.jpeg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/img/criancas_brincando.jpeg" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#EventsCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#EventsCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {this.renderEventsGrid(this.state.events)}
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
