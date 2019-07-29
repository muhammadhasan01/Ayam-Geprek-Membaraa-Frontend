import React from 'react';
import './Homepage.css'
import Carousel from './Carousel'

class Homepage extends React.Component {

  render() {
      return(
        <div className='body-container'>
            
            <div className='title-img-home'>
                <img src='./resources/title.png' alt='title'></img>
            </div>
            <div className='carousel'>
                <Carousel imgs={this.imgs}/>
            </div>
        </div>
      )
  }
}

export default Homepage;
