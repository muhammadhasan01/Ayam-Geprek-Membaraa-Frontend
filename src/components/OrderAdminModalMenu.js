import React from 'react';
import './Modal.css'
import './Order.css'

class OrderAdminModalMenu extends React.Component {
    constructor() {
        super()
        
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
        if(this.node.contains(e.target)) {
            // inside node
            return;
        }
        
        // outside
        this.props.close()

    }

  render() {
      return(
            <div className="modal" 
                style={this.props.show ? {display: 'block'} : {display: 'none'}} >

                <div className="modal-content" ref={node => this.node = node}>
                    <div className="modal-header">
                        <p>PESANAN</p>
                        <div className="hl"></div>
                    </div>

                    <div className='ringkasan-body'>
                    {
                        this.props.orders.map(
                            (el, index) => 
                            (
                                <div className='ringkasan-order'>
                                    <div className='order-sum'>{el.qty}</div>
                                    <div className='order-name'>{el.name}</div>
                                    <div className='order-price'>{Number(el.price).toLocaleString().replace(',', '.')}</div>
                                </div>
                            )
                        )
                    }
                    
                    </div>

                    <div className='ringkasan-footer'>
                    <div className='hl'></div>
                    <div className='footer-container'>
                        <div className='footer-desc'>TOTAL</div>
                        <div className='footer-total'>{Number(this.props.subtotal).toLocaleString().replace(',', '.')}</div>
                    </div>
                </div>
                </div>
            </div>
      )
  }
}

export default OrderAdminModalMenu;