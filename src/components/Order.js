import React from 'react';
import './Order.css';

class Order extends React.Component {

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
                    <td>APAGITU</td>
                    <td>LOKACION</td>
                    <td className = "status-pesanan">SELESAI</td>
                  </tr>
                </table>
              </div>
            </div>

            <div className = "pesanan">
              <header>Riwayat Pemesanan</header>
              <div className = 'line'></div>
              <div className = 'pesanan-user'>
                <table>
                  <th>USERNAME</th>
                  <th>PESANAN</th>
                  <th>LOKASI</th>
                  <th>HARGA</th>
                  <tr>
                    <td>MHASAN01</td>
                    <td>APAGITU</td>
                    <td>LOKACION</td>
                    <td>15.000</td>
                  </tr>
                </table>
              </div>
            </div>
        </div>
      )
  }
}

export default Order;