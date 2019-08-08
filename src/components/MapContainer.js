import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative',
};

const initLoc = {
    lat: -6.894820, 
    lng: 107.610260
}

export class MapContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          markerPos: initLoc
      }
    }

    onMarkerDragEnd = (coord) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        this.setState(
            {markerPos: {
                lat, lng
            }}
        )
        this.props.changeMarkerLoc({lat: lat, lng: lng})
      };
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={initLoc}
          >
              <Marker 
                position={initLoc}
                draggable={true}
                onDragend={(t, map, coord) => this.onMarkerDragEnd(coord)} 
                />
          </Map>
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCnC0rvdNhCtNaE_dQjU4iajXTYJpxLtiI'
})(MapContainer)