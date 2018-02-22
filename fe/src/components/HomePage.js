import React, { Component } from 'react';
import { filterAgeGroup } from '../helpers/filter';

class HomePage extends Component {
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

  setSelectedAgeRange(ageGroup) {
    let events;
    if (ageGroup === 'all') {
      events = this.props.events;
    } else {
      events = filterAgeGroup(this.props.events, ageGroup);
    }
    this.setState({
      selectedAgeRange: ageGroup,
      events: events
    });
  }

  renderEventsRow(eventsRow) {
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

  componentWillReceiveProps(nextProps) {
    this.setState({
      events: nextProps.events
    });
  }
  render() {
    return (
      <div className="HomePage">
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
        <div className="motto-container">
          <p>Take advantage of free things to do, free events in Philadephia area</p>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-container">
          <button type="button" className="btn btn-outline-dark btn-round">Calendar</button>
          <button type="button" className="btn btn-outline-dark btn-round">Events</button>
          <button type="button" className="btn btn-outline-dark btn-round">Things to do</button>
          <div className="dropdown">
            <button className="btn btn-outline-dark btn-round dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Age Range
            </button>
            <div className="dropdown-menu dropdown-menu-buttons" aria-labelledby="dropdownMenu2">
              <input type="radio" id="age-group-all" className="sr-only checkbox-button" value="all" name="age-group" checked={this.state.selectedAgeRange === 'all'} onChange={e => {this.setSelectedAgeRange('all')}} />
              <label htmlFor="age-group-all" className="btn btn-outline-dark btn-block btn-round">All</label>
              <input type="radio" id="age-group-infant" className="sr-only checkbox-button" value="infant" name="age-group" checked={this.state.selectedAgeRange === 'infant'} onChange={e => {this.setSelectedAgeRange('infant')}} />
              <label htmlFor="age-group-infant" className="btn btn-outline-dark btn-block btn-round">Infant</label>
              <input type="radio" id="age-group-toddler" className="sr-only checkbox-button" value="toddler" name="age-group" checked={this.state.selectedAgeRange === 'toddler'} onChange={e => {this.setSelectedAgeRange('toddler')}} />
              <label htmlFor="age-group-toddler" className="btn btn-outline-dark btn-block btn-round">Toddler</label>
              <input type="radio" id="age-group-preschooler" className="sr-only checkbox-button" value="preschooler" name="age-group" checked={this.state.selectedAgeRange === 'preschooler'} onChange={e => {this.setSelectedAgeRange('preschooler')}} />
              <label htmlFor="age-group-preschooler" className="btn btn-outline-dark btn-block btn-round">Preschooler</label>
              <input type="radio" id="age-group-schoolAged" className="sr-only checkbox-button" value="schoolAged" name="age-group" checked={this.state.selectedAgeRange === 'schoolAged'} onChange={e => {this.setSelectedAgeRange('schoolAged')}} />
              <label htmlFor="age-group-schoolAged" className="btn btn-outline-dark btn-block btn-round">School Aged</label>
              <input type="radio" id="age-group-adolescent" className="sr-only checkbox-button" value="adolescent" name="age-group" checked={this.state.selectedAgeRange === 'adolescent'} onChange={e => {this.setSelectedAgeRange('adolescent')}} />
              <label htmlFor="age-group-adolescent" className="btn btn-outline-dark btn-block btn-round">Adolescent</label>
            </div>
          </div>
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
      events: props.events,
      ageGroup: 'all'
    };
  }

}

export default HomePage;


