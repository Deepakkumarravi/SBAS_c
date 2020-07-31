import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
  width: '100%',
  height: '500px',
  position: 'relative'
}
export class MapContainer extends Component {


  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={1} style={style}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>'{'this.state.selectedPlace.name'}'</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAoCyh2Ez6xmCTRTmaOJekc4O9cEIvu0DE')
})(MapContainer)