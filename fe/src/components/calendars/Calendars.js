import React, { Component } from 'react';
import './Calendar.css';
import ReactDOM from 'react-dom';
import Today from './Today';
import Week from './Week';
import Weekend from './Weekend';
import Month from './Month';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';



class Calendars extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      events: nextProps.events
    });
  }

  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs row">
            <li className="nav-item col-6 col-sm-3">
              <NavLink to={{ pathname: '/calendars/today' }} activeClassName="active" className="nav-link"><span className="card-body">Today</span></NavLink>
            </li>
            <li className="nav-item col-6 col-sm-3">
              <NavLink to={{ pathname: '/calendars/week' }} activeClassName="active" className="nav-link"><span className="card-body">This Week</span></NavLink>
            </li>
            <li className="nav-item col-6 col-sm-3">
              <NavLink to={{ pathname: '/calendars/weekend' }} activeClassName="active" className="nav-link"><span className="card-body">This Weekend</span></NavLink>
            </li>
            <li className="nav-item col-6 col-sm-3">
              <NavLink to={{ pathname: '/calendars' }} exact activeClassName="active" className="nav-link"><span className="card-body">Month</span></NavLink>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <Switch>
            <Route exact path='/calendars/today' render={() => <Today events={this.state.events}/>}/>
            <Route exact path='/calendars/week' render={() => <Week events={this.state.events}/>}/>
            <Route exact path='/calendars/weekend' render={() => <Weekend events={this.state.events}/>}/>
            <Route exact path='/calendars' render={() => <Month events={this.state.events}/>}/>
          </Switch>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      events: props.events
    };
  }
}

export default Calendars;

