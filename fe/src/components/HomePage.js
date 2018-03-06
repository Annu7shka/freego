import React, { Component } from 'react';
import urlConfig from '../config/urlConfig';

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

  componentWillReceiveProps(nextProps) {
    this.setState({
      events: nextProps.events
    });
  }
  render() {
    return (
      <div className="HomePage">
        <div id="EventsCarousel" className="carousel slide" data-ride="carousel"> <ol className="carousel-indicators"> <li data-target="#EventsCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#EventsCarousel" data-slide-to="1"></li>
            <li data-target="#EventsCarousel" data-slide-to="2"></li>
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


