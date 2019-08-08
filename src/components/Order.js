import React from 'react';
import './Order.css';

class Order extends React.Component {

  render() {
      return(
        <div className='order-container'>
            <div className='title-img'>
                <img src='./resources/title.png' alt='title'></img>
            </div>
            <div className = "ringkasan-pesanan">
              <header>RINGKASAN PESANAN</header>
              <div className = 'line'></div>
              <div className = 'pesanan'>
                ANDA BELUM MEMESAN
              </div>
            </div>
        </div>
      )
  }
}

export default Order;