import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../SlideShowImage/SlideImage.css'
import Office from '../Images/basOffice.jpg'
import Slide_1 from '../Images/slidePic1.jpg'

const slideImages = [Slide_1,Office]

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  let slideImage = []
  slideImages.map(image => {
    slideImage.push(
      <div className="each-slide">
        <div >
          {/* <div className="slide_text">
            <span>Welcome to Sri Bannari Amman Silks</span>
          </div> */}
          <img alt={"slide image"} src={image} className="each-slide-image" style={{ height: '90vh' }} />
        </div>
      </div>
    )
  })

  return (
    <div className="slide-container">
      <div className="welcome-text">Welcome to sri Bannari Amman Silks</div>
      <Slide {...properties} >
        {slideImage}
      </Slide>
    </div>
  )
}

export default Slideshow
