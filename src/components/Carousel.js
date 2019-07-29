import React from 'react';
import './Carousel.css';

class Carousel extends React.Component {
    constructor() {
        super()

        this.imgs = ['./resources/carousel-1.jpg', './resources/carousel-2.jpg']

        this.state = {
            all: this.imgs,
            current: 0,
        }
        this.nextImg = this.nextImg.bind(this)
    }

    nextImg() {
        this.setState((prevState, props) => {
            return {
                current : (prevState.current + 1) % (this.state.all.length)
            };
          })
    }

  render() {
      return(
          <div className='carousel-container'>
              <img src={this.state.all[this.state.current]} alt='carousel-img'></img>
              <div className='carousel-left'>
                <img src='./resources/carousel-left.png' onClick={this.nextImg} alt='carousel-left'></img>
              </div>
              <div className='carousel-right'>
                <img src='./resources/carousel-right.png' onClick={this.nextImg}  alt='carousel-right'></img>
              </div>
          </div>
      )
  }
}

export default Carousel;
