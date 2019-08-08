import React from 'react';
import './Order.css'
import MapContainer from './MapContainer';

class OrderFront extends React.Component {
  render() {
      return(
        <div className='order-container'>
            <div className='title-img'>
                <img src='./resources/title.png' alt='title'></img>
            </div>
            <div className='map-container'>

              <div className='map-header'>
                <p>Lokasi Anda?</p>
                <div className='hl'></div>
              </div>

              <div className='map'>
                <MapContainer changeMarkerLoc={this.props.changeMarkerLoc}/>
              </div>

              {
                (this.props.dist < 0.75) ?
                <div className='bottom-container'>
                  <div className='orderbtn-order' style={{backgroundColor: '#ff6969'}} onClick={this.props.changeOrderStage}><p>PILIH MENU</p></div>
                  <div className='desc-order'>*Lokasi anda dekat dengan kami, pesanan anda akan kami antarkan tanpa biaya pengiriman!</div>
                </div> 
                :
                <div className='bottom-container'>
                  <div className='orderbtn-container'>
                    <div className='orderbtn-order' style={{backgroundColor: '#00b140'}}><a href='https://www.gojek.com/gofood/'>GO-FOOD</a></div>
                    <div className='orderbtn-order' style={{backgroundColor: '#00b140'}}><a href='https://www.grab.com/id/grabfood/'>GRABFOOD</a></div>
                  </div>
                  <div className='desc-order'>*Lokasi anda jauh dari outlet kami, mohon order dengan mitra kami!</div>
                </div> 
              }

              
            </div>
        </div>
      )
  }
}

export default OrderFront;
