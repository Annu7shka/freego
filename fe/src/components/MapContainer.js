import {GoogleApiWrapper} from 'google-maps-react';
import {Map} from './Map';
import {Marker} from './Marker';
import React, { Component } from 'react';


export class MapContainer extends React.Component {
  renderMarkers(events) {
    return events.reduce((acc, event, i) => {

      if (event.latitude && event.longitude) {
        acc.push(
          <Marker key={'Marker' + i} position={{lat: event.latitude, lng: event.longitude}} />
        );
      }
      return acc;
    }, []);
  }
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    console.log(this.props.events);

    return (
      <div className="Map">
        <Map google={this.props.google}>
          {this.renderMarkers(this.props.events)}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCpU5xRY-3zhsIzVF58hbGQ-RXMfm-4sCk'
})(MapContainer)