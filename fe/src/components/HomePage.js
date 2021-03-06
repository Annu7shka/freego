import React, { Component } from 'react';
import urlConfig from '../config/urlConfig';
import MapContainer from './MapContainer';


class HomePage extends Component {
  componentDidMount() {
    fetch(urlConfig.slides)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          slides: data
        });
      });
  }
  renderSlides(slides) {
    return slides.map((slide, i) => {
      let slideClass = 'carousel-item';
      if (i === 0) {
        slideClass = 'carousel-item active';
      }
      return (
        <div className={slideClass} key={i}>
          <img className="d-block w-100" src={slide.image_url} alt={slide.title} />
        </div>
      );
    });
  }
  renderDots(slides) {
    return slides.map((slide, i) => {
      let slideClass;
      if (i === 0) {
        slideClass = 'active';
      }
      return (
       <li data-target="#EventsCarousel" data-slide-to={i} className={slideClass} key={'dot' + i}></li>
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
        <div id="EventsCarousel" className="carousel slide" data-ride="carousel"> <ol className="carousel-indicators"> 
            {this.renderDots(this.state.slides)}
          </ol>
          <div className="carousel-inner">
            {this.renderSlides(this.state.slides)}
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
        <div className="row">
          <div className="col-12 col-md-6"></div>
          <div className="col-12 col-md-6">
            <MapContainer events={this.state.events} />
          </div>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      events: props.events,
      slides: []
    };
  }

}

export default HomePage;


