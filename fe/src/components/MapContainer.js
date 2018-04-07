import {GoogleApiWrapper} from 'google-maps-react';
import {Map} from './Map';
import {Marker} from './Marker';
import React, { Component } from 'react';


export class MapContainer extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    const pos = {lat: 37.759703, lng: -122.428093}
    return (
      <div className="Map">
        <Map google={this.props.google}>
          <Marker />
          <Marker position={pos} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCpU5xRY-3zhsIzVF58hbGQ-RXMfm-4sCk'
})(MapContainer)