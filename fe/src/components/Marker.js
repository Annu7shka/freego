import React, { Component } from 'react';

export class Marker extends Component {

  componentWillReceiveProps(newProps) {
    if ((this.props.map !== newProps.map) ||
      (this.props.position !== newProps.position)) {
        this.renderMarker();
    }
  }

  componentDidMount() {
    this.renderMarker();
  }

  renderMarker() {
    let {
      map, google, position, mapCenter
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
    console.log('markger', pos, markerPos, position, this.props);
  }

  render() {
    return null;
  }
}
