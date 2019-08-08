import React from 'react';
import './OrderAdmin.css';
import OrderAdminModalMap from './OrderAdminModalMap';
import OrderAdminModalMenu from './OrderAdminModalMenu';


class OrderAdmin extends React.Component {
    constructor() {
        super()

        this.state = {
            orders: [],
            locmodals: [],
            menumodals: []
        }
    }

    componentDidMount(){

        const endpoint = "http://localhost:3001/viewOrder"
        fetch(endpoint,
            {
              headers: {
                'Content-Type': 'application/json'
              },
              method: "GET"
            })
            .then(response => response.json())
            .then(myJson => {
              const locmod = []
              for (var i = 0; i < myJson.length; i++) {
                  locmod.push(false)
              }

              const menmod = []
              for (var j = 0; j < myJson.length; j++) {
                  menmod.push(false)
              }

              this.setState({
                  orders: myJson,
                  locmodals: locmod,
                  menumodals: menmod
              })
            })
         
    }

    openModalLoc(index, status) {
      // alert(index)
      this.setState((prevState) => {
          const current = prevState.locmodals
          current[index] = status;
          return {
            locmodals: current
          };
        })
    }

    openModalMen(index, status) {
      // alert(index)
      this.setState((prevState) => {
          const current = prevState.menumodals
          current[index] = status;
          return {
            menumodals: current
          };
        })
    }

  render() {
      return(
        <div className='order-container'>
            <div className='title-img'>
                <img src='./resources/title.png' alt='title'></img>
            </div>
            <div className = "pesanan">
              <header>Pesanan</header>
              <div className = 'line'></div>
              <div className = 'pesanan-user'>
                <table>
                  <thead>
                    <tr>
                      <th>USERNAME</th>
                      <th>PESANAN</th>
                      <th>LOKASI</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>                  
                  {
                    this.state.orders.map(
                      ({_id, loc, order, username, subtotal}, index) =>
                        <tr key={_id}>
                          <td>{username}</td>
                          <td>
                            <img 
                              src='./resources/menubtn.png' 
                              alt='menu' 
                              height='22px'
                              className='menubtn'
                              onClick={() => this.openModalMen(index, true)}>
                            </img>
                          </td>
                          <td>
                            <img 
                              src='./resources/locbtn.png' 
                              alt='menu' 
                              height='26px'
                              className='locbtn'
                              onClick={() => this.openModalLoc(index, true)}
                              >  
                            </img>
                          </td>
                          <td className = "status-pesanan">SELESAI</td>
                        </tr>     
                    )
                  }
                  </tbody>
                </table>
                
                {
                    this.state.orders.map(
                      (el, index) =>
                        <OrderAdminModalMap 
                          show={this.state.locmodals[index]} 
                          close={() => this.openModalLoc(index, false)}
                          loc={el.loc}/>
                            
                    )
                }
                {
                    this.state.orders.map(
                      (el, index) =>
                        <OrderAdminModalMenu
                          show={this.state.menumodals[index]} 
                          close={() => this.openModalMen(index, false)}
                          orders={el.order}
                          subtotal={el.subtotal}/>
                            
                    )
                }

              </div>
            </div>
        </div>
      )
  }
}

export default OrderAdmin;