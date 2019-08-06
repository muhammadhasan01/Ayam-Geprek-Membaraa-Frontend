import React from 'react';
import './Menu.css'

class Menu extends React.Component {

  render() {
      return(
        <div className='menu-container'>
            <div className='title-img'>
                <img src='./resources/title.png' alt='title'></img>
            </div>
            <header>Silahkan Pilih Menu!</header>
            <ul className = 'menu-makanan'>
              <li><img src = '../resources/paket-1.jpg' alt = 'paket ayam geprek'></img><figcaption>Paket Ayam Geprek</figcaption></li>
              <li><img src = '../resources/paket-2.jpg' alt = 'paket ayam geprek'></img><figcaption>Paket Hemat</figcaption></li>
              <li><img src = '../resources/paket-3.jpg' alt = 'paket ayam geprek'></img><figcaption>Paket Tambahan</figcaption></li>
            </ul>
            
        </div>
      )
  }
}

export default Menu;