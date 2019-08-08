import React from 'react';
import './OrderAdmin.css';

class OrderAdmin extends React.Component {
    constructor() {
        super()

        this.state = {
            orders: []
        }
    }

    componentDidMount(){
        const endpoint = "http://localhost:3001"
        fetch(endpoint,
            {
              headers: {
                'Content-Type': 'application/json'
              },
              method: "GET"
            })
            .then(response => response.json())
            .then(myJson => {
              this.setState({
                  orders: myJson
              })
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
                  <th>USERNAME</th>
                  <th>PESANAN</th>
                  <th>LOKASI</th>
                  <th>STATUS</th>
                  <tr>
                    <td>MHASAN01</td>
                    <td><img src='./resources/menubtn.png' alt='menu' height='22px'></img></td>
                    <td><img src='./resources/locbtn.png' alt='menu' height='26px'></img></td>
                    <td className = "status-pesanan">SELESAI</td>
                  </tr>
                </table>
              </div>
            </div>
        </div>
      )
  }
}

export default OrderAdmin;