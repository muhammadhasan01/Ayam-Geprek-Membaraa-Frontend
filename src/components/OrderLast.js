import React from 'react';
import './Menu.css';
import './Order.css';

class OrderLast extends React.Component {

  render() {
      return(
        <div className='menu-container'>
            <div className='title-img'>
                <img src='./resources/title.png' alt='title'></img>
            </div>
            <div className='thanks-txt'>TERIMA KASIH!</div>
        </div>
      )
  }
}

export default OrderLast;