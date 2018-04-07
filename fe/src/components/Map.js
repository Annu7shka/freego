import React, { Component,  } from 'react';
import ReactDOM from 'react-dom';

export class Map extends React.Component {
  componentWillReceiveProps(prevProps, prevState) {
    console.log('new props');
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  renderChildren() {
    const {children} = this.props;

    if (!children) return;
    let lat = 37.774929;
    let lng = -120.419416;
    // if (this.props.google) {
    //   let marker = new this.props.google.maps.Marker({
    //     map: this.map,
    //     position: {lat: 37.759703, lng: -122.428093},
    //     title: 'my marker'
    //   });
    //   marker.setMap(this.map);
    // }

    return React.Children.map(children, c => {
        console.log(c);
        return React.cloneElement(c, {
        map: this.state.map,
        google: this.props.google,
        mapCenter: new this.props.google.maps.LatLng(lat, lng)
      });
    });
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      });
      this.setState({
        map: new maps.Map(node, mapConfig)
      })
    }
  }

  render() {
    return (
      <div ref='map'>
        Loading map...
        {this.renderChildren()}
      </div>
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      map: undefined
    };
  }
}