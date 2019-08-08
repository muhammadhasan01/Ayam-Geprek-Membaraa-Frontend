import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '500px',
    height: '500px',
    position: 'absolute',
};

export class MapContainerFreeze extends React.Component {
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={this.props.loc}
          >
              <Marker 
                position={this.props.loc}
                />
          </Map>
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCnC0rvdNhCtNaE_dQjU4iajXTYJpxLtiI'
})(MapContainerFreeze)