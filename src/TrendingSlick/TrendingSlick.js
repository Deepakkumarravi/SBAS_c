import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../TrendingSlick/TrendingSlick.css'
import '../TrendingSlick/TrendingSlickResponsive.css'
import saree_1 from '../Images/saree_1.jpg'
import saree_3 from '../Images/saree_3.jpg'
import saree_4 from '../Images/saree_4.jpg'
import saree_5 from '../Images/saree_5.jpg'
import saree_6 from '../Images/saree_6.jpg'
import saree_8 from '../Images/saree_8.jpg'
import saree_11 from '../Images/trending1.jpg'
import saree_13 from '../Images/saree_13.jpg'
import saree_14 from '../Images/saree_14.jpg'
import saree_16 from '../Images/saree_16.jpg'
import saree_17 from '../Images/saree_17.jpg'
import saree_18 from '../Images/saree_18.jpg'
import RightArrow from '../Images/rightArrow.png'
import LeftArrow from '../Images/leftArrow.png'
const imageGallery = [saree_1, saree_3, saree_4, saree_5, saree_6, saree_8,saree_14,saree_16, saree_11, saree_13,saree_17,saree_18]

function SampleNextArrow(props) {
  const { style, onClick } = props
  return (
    <div
      className={"custom-arrow-div for-right-arrow"} style={{ ...style }}
      onClick={onClick}>
      <img alt = {"next-arrow"} src={RightArrow} className="custom-arrow-img" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props
  return (
    <div
      style={{ ...style }}
      className={"custom-arrow-div for-left-arrow"}
      onClick={onClick}>
      <img alt = {"prev-arrow"} src={LeftArrow} className="custom-arrow-img" />
    </div>
  );
}

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }
  }

  onClickProduct = () => {
    console.log('Pressed')
  }

  handleClick = () => {
   this.setState({isToggleOn: !this.state.isToggleOn})
  }



  sareeCollection = (item, index) => {
    return (
      <div className="trending-container">
        <div className="image-with-offer">
          {/* <span className="trend-offer-percentage">Offer</span> */}
          <div onClick={() => this.onClickProduct(item)} className="trending-overflow">
            <img alt={'trending sarees'} src={imageGallery[index]} className="trending-product-image" />
          </div>
        </div>
        <div>
          <div className="trending-footer">
            {/* <div className="saree-name">Saree Name</div>
            <div className="trending-product-price">
              <span className="product-selling-price">₹ 4,500</span>
              <span className="actual-price-amout">₹ 8,750</span>
            </div> */}
            <a style={{ fontVariant: 'capatalise', textDecoration: 'none', color: 'white' }} href="/contactus">
              <span id="add-to-card" className="addto-card">Order now</span></a>
          </div>
        </div>
      </div>
    )
  }

  onPressSubmit = () => {
    alert('Hi')
    console.log('this----------.>')
  }

  render() {
    const settings = {
      infinite: true,
      className: 'slides',
      slidesToShow: 5,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true,

          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true,

          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,

          }
        }
      ]
    }

    let trendingProductDetails = []
    imageGallery.map((item, index) => {
      trendingProductDetails.push(this.sareeCollection(item, index))
    })

    return (
      <div id="trending" className="trending">
        <h2 className="title"> LATEST PRODUCTS</h2>
        <Slider {...settings} dots={true} arrows={true}  >
          {trendingProductDetails}
        </Slider>
      </div>
    );
  }
}
