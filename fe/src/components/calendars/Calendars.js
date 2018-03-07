import React, { Component } from 'react';
import './Calendar.css';
import ReactDOM from 'react-dom';
import Today from './Today';
import Week from './Week';
import Weekend from './Weekend';
import Month from './Month';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



class Calendars extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      events: nextProps.events
    });
  }

  render() {
    return (
      <div className="Calendars">
        <div className="calendar-links row">
          <Link to={{ pathname: '/calendars/today' }} className="card nav-card col-6 col-md-3"><span className="card-body">Today</span></Link>
          <Link to={{ pathname: '/calendars/week' }} className="card nav-card col-6 col-md-3"><span className="card-body">This Week</span></Link>
          <Link to={{ pathname: '/calendars/weekend' }} className="card nav-card col-6 col-md-3"><span className="card-body">This Weekend</span></Link>
          <Link to={{ pathname: '/calendars/month' }} className="card nav-card col-6 col-md-3"><span className="card-body">Month</span></Link>
        </div>
        <Switch>
          <Route exact path='/calendars/today' render={() => <Today events={this.state.events}/>}/>
          <Route exact path='/calendars/week' render={() => <Week events={this.state.events}/>}/>
          <Route exact path='/calendars/weekend' render={() => <Weekend events={this.state.events}/>}/>
          <Route exact path='/calendars/month' render={() => <Month events={this.state.events}/>}/>
        </Switch>
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

