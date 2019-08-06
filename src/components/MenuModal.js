import React from 'react';
import './Modal.css'

class MenuModal extends React.Component {
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

                    <div className="modal-body-menu">
                        {
                            this.props.items.map(
                                (el) => 
                                <div className="desc">
                                    <p className="name">{el.name}</p>
                                    <p className="price">{Number(el.price).toLocaleString().replace(',', '.')}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
      )
  }
}

export default MenuModal;