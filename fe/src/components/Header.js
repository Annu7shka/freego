import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      ageGroup: nextProps.ageGroup
    });
  }


  render() {
    return (
      <div className="appHeader">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light nav-container">
            <Link to={{ pathname: '/' }} className="navbar-brand"><img src="/img/logo.png" alt="FreeGo logo" /></Link>
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
          <p>Take advantage of free things to do, free events in Philadelphia area</p>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-container">
          <Link to={{ pathname: '/calendar' }} className="btn btn-outline-dark btn-round">Calendar</Link>
          <Link to={{ pathname: '/events' }} className="btn btn-outline-dark btn-round">Events</Link>
          <button type="button" className="btn btn-outline-dark btn-round">Things to do</button>
          <div className="dropdown">
            <button className="btn btn-outline-dark btn-round dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Age Range
            </button>
            <div className="dropdown-menu dropdown-menu-buttons" aria-labelledby="dropdownMenu2">
              <input type="radio" id="age-group-all" className="sr-only checkbox-button" value="all" name="age-group" checked={this.state.ageGroup === 'all'} onChange={e => {this.props.setSelectedAgeRange('all')}} />
              <label htmlFor="age-group-all" className="btn btn-outline-dark btn-block btn-round">All</label>
              <input type="radio" id="age-group-infant" className="sr-only checkbox-button" value="infant" name="age-group" checked={this.state.ageGroup === 'infant'} onChange={e => {this.props.setSelectedAgeRange('infant')}} />
              <label htmlFor="age-group-infant" className="btn btn-outline-dark btn-block btn-round">Infant</label>
              <input type="radio" id="age-group-toddler" className="sr-only checkbox-button" value="toddler" name="age-group" checked={this.state.ageGroup === 'toddler'} onChange={e => {this.props.setSelectedAgeRange('toddler')}} />
              <label htmlFor="age-group-toddler" className="btn btn-outline-dark btn-block btn-round">Toddler</label>
              <input type="radio" id="age-group-preschooler" className="sr-only checkbox-button" value="preschooler" name="age-group" checked={this.state.ageGroup === 'preschooler'} onChange={e => {this.props.setSelectedAgeRange('preschooler')}} />
              <label htmlFor="age-group-preschooler" className="btn btn-outline-dark btn-block btn-round">Preschooler</label>
              <input type="radio" id="age-group-schoolAged" className="sr-only checkbox-button" value="schoolAged" name="age-group" checked={this.state.ageGroup === 'schoolAged'} onChange={e => {this.props.setSelectedAgeRange('schoolAged')}} />
              <label htmlFor="age-group-schoolAged" className="btn btn-outline-dark btn-block btn-round">School Aged</label>
              <input type="radio" id="age-group-adolescent" className="sr-only checkbox-button" value="adolescent" name="age-group" checked={this.state.ageGroup === 'adolescent'} onChange={e => {this.props.setSelectedAgeRange('adolescent')}} />
              <label htmlFor="age-group-adolescent" className="btn btn-outline-dark btn-block btn-round">Adolescent</label>
            </div>
          </div>
          <button type="button" className="btn btn-outline-dark btn-round">Attractions</button>
        </nav>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      ageGroup: props.ageGroup
    };
  }
}

export default Header;
