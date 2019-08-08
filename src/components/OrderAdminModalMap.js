import React from 'react';
import './Modal.css'
import MapContainerFreeze from './MapContainerFreeze'

class OrderAdminModalMap extends React.Component {
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
                <div className='mapcont' ref={node => this.node = node}>
                    <MapContainerFreeze loc={this.props.loc}/>
                </div>
            </div>
      )
  }
}

export default OrderAdminModalMap;