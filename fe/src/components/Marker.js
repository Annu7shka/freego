import React, { Component } from 'react';

export class Marker extends Component {

  componentWillReceiveProps(newProps) {
    if ((newProps.map !== this.props.map) ||
      (this.props.position !== newProps.position)) {
        this.renderMarker(newProps.map);
    }
  }

  componentDidMount() {
    this.renderMarker();
  }

  renderMarker(map) {
    const {
      google, position, mapCenter
    } = this.props;

    if (!map) {
      return false;
    }

    let pos = position || {
      lat: mapCenter.lat(),
      lng: mapCenter.lng()
    };
    let markerPos = new google.maps.LatLng(pos.lat, pos.lng);

    const pref = {
      map: map,
      position: position
    };
    this.marker = new google.maps.Marker(pref);
    this.marker.setMap(map);
  }

  render() {
    return null;
  }
}
