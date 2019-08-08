import React from 'react';
import './Menu.css';
import './Order.css';
import pakets from './datas/Paket';
import OrderModal from './OrderModal';

class OrderBack extends React.Component {
    constructor() {
        super()

        const modalStatus = []
        for (var i = 0; i < pakets.length; i++) {
            modalStatus.push(false)
        }

        const myOrder = []
        for (var j = 0; j < pakets.length; j++) {
            const curr = []
            for (var k = 0; k < pakets[j].items.length; k++) {
                curr.push(0)
            }
            myOrder.push(curr)
        }

        this.state = {
            modalStatus: modalStatus,
            myOrder: myOrder,
            subtotal: 0
        }
        
        this.openModal = this.openModal.bind(this)
        this.changeMenuSum = this.changeMenuSum.bind(this)
        this.orderNow = this.orderNow.bind(this)
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

    orderNow(){
        const arr = []
        pakets.map(
            (el, paketidx) => 
            (
                el.items.map(
                    (item, menuidx) =>
                    (this.state.myOrder[paketidx][menuidx] > 0) &&
                    arr.push({
                        qty: this.state.myOrder[paketidx][menuidx],
                        name: item.name,
                        price: item.price*this.state.myOrder[paketidx][menuidx]
                    })
                )
            )
        )

        const endpoint = "http://localhost:3001/order"
        fetch(endpoint,
        {
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({loc: this.props.loc, order: arr, username: this.props.sessionUname, subtotal: this.state.subtotal, done:false}),
            method: "POST"
        })
        this.props.changeOrderStage()
    }

    changeMenuSum(paketidx, itemidx, isAdd) {
        this.setState((prevState) => {
        var currsubtotal = prevState.subtotal
         const curr = prevState.myOrder
            if (isAdd) {
                curr[paketidx][itemidx] += 1
                currsubtotal += pakets[paketidx].items[itemidx].price
            }
            else {
                if (curr[paketidx][itemidx] !== 0) {
                    curr[paketidx][itemidx] -= 1
                    currsubtotal -= pakets[paketidx].items[itemidx].price
                }
            }

            return {
                myOrder: curr,
                subtotal: currsubtotal
            };
        }
        )
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
                        <div className='paket' onClick={() => this.openModal(index, true)} key={index}>
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
                        <OrderModal 
                            show={this.state.modalStatus[index]} 
                            close={() => this.openModal(index, false)}
                            name={el.fullname}
                            items={el.items}
                            key={index}
                            changeMenuSum={(itemidx, isAdd) => this.changeMenuSum(index, itemidx, isAdd)}
                            sums = {this.state.myOrder[index]}
                        />
                    )
            }
            <div className='ringkasan-container'>
                <div className='ringkasan-header'>
                    <p>RINGKASAN PESANAN</p>
                    <div className='hl'></div>
                </div>
                <div className='ringkasan-body'>
                    {
                        pakets.map(
                            (el, paketidx) => 
                            (
                                el.items.map(
                                    (item, menuidx) =>
                                    (this.state.myOrder[paketidx][menuidx] > 0) &&
                                    <div className='ringkasan-order'>
                                        <div className='order-sum'>{this.state.myOrder[paketidx][menuidx]}</div>
                                        <div className='order-name'>{item.name}</div>
                                        <div className='order-price'>{Number(item.price*this.state.myOrder[paketidx][menuidx]).toLocaleString().replace(',', '.')}</div>
                                    </div>
                                )
                            )
                        )
                    }
                    
                </div>

                <div className='ringkasan-footer'>
                    <div className='hl'></div>
                    <div className='footer-container'>
                        <div className='footer-desc'>TOTAL</div>
                        <div className='footer-total'>{Number(this.state.subtotal).toLocaleString().replace(',', '.')}</div>
                    </div>
                </div>
            </div>

            <div className='bottom-container-back'>
                  <div className='orderbtn-order' style={{backgroundColor: '#ff6969'}} onClick={this.orderNow}><p>PESAN SEKARANG!!</p></div>
            </div> 

        </div>
      )
  }
}

export default OrderBack;