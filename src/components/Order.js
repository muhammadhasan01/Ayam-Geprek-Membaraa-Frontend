import React from 'react';
import './Order.css'
import OrderFront from './OrderFront';
import OrderBack from './OrderBack';
import OrderLast from './OrderLast';

const initLoc = {
  lat: -6.894820, 
  lng: 107.610260
}

class Order extends React.Component {

  deg2Rad = (degrees) => ( degrees * Math.PI / 180 )
    
  calculateDistanceinKM = (lat1, lng1, lat2, lng2) => {
      // https://www.geodatasource.com/developers/javascript
      var radlat1 = this.deg2Rad(lat1);
      var radlat2 = this.deg2Rad(lat2);
      var theta = lng1-lng2;
      var radtheta = this.deg2Rad(theta);
          
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      return (dist * 1.609344)
    }

  constructor(props) {
    super(props);
    this.state = {
        markerLoc: {
          lat: -6.894820, 
          lng: 107.610260
        },
        dist: 0,
        order: 0,
    }
    this.changeMarkerLoc = this.changeMarkerLoc.bind(this)
    this.changeOrderStage = this.changeOrderStage.bind(this)
  }

  componentDidMount(){
    this.setState({
      order:0
    })
  }

  changeMarkerLoc(coord) {
    const dist = this.calculateDistanceinKM(initLoc.lat, initLoc.lng, coord.lat, coord.lng)
    this.setState({
      markerLoc: coord,
      dist: dist
    })
  }


  changeOrderStage() {
    this.setState((prevState) => {
      var newOrder = prevState.order+1
      if(newOrder===2){
        newOrder = 0
      }
      return {
        order: prevState.order+1
      };
    })
  }

  render() {
    if(this.state.order===0){
      return(
        <div>
          <OrderFront 
            changeMarkerLoc={this.changeMarkerLoc} 
            dist={this.state.dist} 
            changeOrderStage={this.changeOrderStage} 
          />
        </div>
      )
    }
    else if(this.state.order===1){
      return(
        <div>
          <OrderBack 
            loc={this.state.markerLoc}
            changeOrderStage={this.changeOrderStage}
            sessionUname={this.props.sessionUname}
          />
        </div>
      )
    }
    else{
      return(
        <div>
          <OrderLast/>
        </div>
      )
      
    }
      
  }
}

export default Order;
