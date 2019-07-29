import React from 'react';
import './Order.css'

class Order extends React.Component {

  render() {
      return(
        <div className='order-container'>
            <div className='title-img'>
                <img src='./resources/title.png' alt='title'></img>
            </div>
            <h3>this is the Order page.</h3>
        </div>
      )
  }
}

export default Order;