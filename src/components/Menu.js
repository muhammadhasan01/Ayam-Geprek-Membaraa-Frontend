import React from 'react';
import './Menu.css'

class Menu extends React.Component {

  render() {
      return(
        <div className='menu-container'>
            <div className='title-img'>
                <img src='./resources/title.png' alt='title'></img>
            </div>
            <h3>this is the Menu page.</h3>
        </div>
      )
  }
}

export default Menu;