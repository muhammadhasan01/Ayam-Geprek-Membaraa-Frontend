import React from 'react';
import './Modal.css'

class OrderModal extends React.Component {
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
                        <p>{this.props.name}</p>
                        <div className="hl"></div>
                    </div>

                    <div className="modal-body-order">
                        {
                            this.props.items.map(
                                (el, index) => 
                                <div className='container' key={index}>
                                    <div className="desc">
                                        <p className="name">{el.name}</p>
                                        <p className="price">{Number(el.price).toLocaleString().replace(',', '.')}</p>
                                    </div>
                                    <div className="buy">
                                        <p className="minus" onClick={() => this.props.changeMenuSum(index, false)}>-</p>
                                        <p className="sum">{this.props.sums[index]}</p>
                                        <p className="plus" onClick={() => this.props.changeMenuSum(index, true)}>+</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
      )
  }
}

export default OrderModal;