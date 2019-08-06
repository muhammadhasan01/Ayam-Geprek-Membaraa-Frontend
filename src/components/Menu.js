import React from 'react';
import './Menu.css';
import pakets from './datas/Paket';
import MenuModal from './MenuModal';
import {
    Link,
  } from "react-router-dom";

class Menu extends React.Component {
    constructor() {
        super()

        const modalStatus = []
        for (var i = 0; i < pakets.length; i++) {
            modalStatus.push(false)
        }

        this.state = {
            modalStatus: modalStatus
        }
        
        this.openModal = this.openModal.bind(this)
    }

    openModal(index, status) {

        this.setState((prevState) => {
            const current = prevState.modalStatus
            current[index] = status;
            return {
                modalStatus: current
            };
          })
    }
    
  render() {
      return(
        <div className='menu-container'>
            <div className='title-img'>
                <img src='./resources/title.png' alt='title'></img>
            </div>
            <div className='menu-list'>
                {
                    pakets.map(
                        (el, index) => 
                        <div className='paket' onClick={() => this.openModal(index, true)}>
                            <img src={el.img} alt={el.alt}></img>
                            <div className='text'>
                                <p>{el.name}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            
            {
                pakets.map(
                        (el, index) => 
                        <MenuModal 
                            show={this.state.modalStatus[index]} 
                            close={() => this.openModal(index, false)}
                            name={el.fullname}
                            items={el.items}
                        />
                    )
            }

            <div className="orderbtn-menu">
                <Link to="/order">        
                    PESAN SEKARANG!
                </Link>
            </div>
            
        </div>
      )
  }
}

export default Menu;