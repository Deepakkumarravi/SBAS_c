import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../TrendingSlick/TrendingSlick.css'
import '../TrendingSlick/TrendingSlickResponsive.css'
import networkManager, {catchErrorMessage} from '../NetworkManager'
import RightArrow from '../Images/rightArrow.png'
import LeftArrow from '../Images/leftArrow.png'
import Loader from "../LoaderComponent";

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
      isLoaded: false,
      apiCollData: [],
      getSareesDetails: []
    }
  }

  componentDidMount() {
    this.getUploadCollections()
  }

  getUploadCollections = () => {
    networkManager.getTrendingCollection().then(response => {
      if (response && response.status === 'success') {
        this.setState({ apiCollData: response.responseValue.data.reverse() }, this.getSareeCollectionPrice)
      }
      else {
        this.setState({ isLoaded: true, apiCollData: [] })
        catchErrorMessage(response.message)
      }
    })
  }

  getSareeCollectionPrice = () => {
    networkManager.getSareeType().then(response => {
      const result = response.responseValue.data
      if (response && response.status === 'success' && result.length > 0) {
        this.setState({ getSareesDetails: result, selectedOption: result[0].price }, this.mapPriceAndSareeCollection)
      }
      else {
        this.setState({ isLoaded: true, apiCollData: [] })
        catchErrorMessage(response.message)
      }
    })
  }

  mapPriceAndSareeCollection = () => {
    const { apiCollData, getSareesDetails } = this.state
    const newCollectionArray = apiCollData
    apiCollData.map((item_1, index_1) => {
      getSareesDetails.map((item_2, index_2) => {
        if (item_1.saree_type == item_2.sareetype) {
          newCollectionArray[index_1].saree_price = item_2.price
          return
        }
      })
    })
    this.setState({ apiCollData: newCollectionArray, isLoaded: true })
  }

  onClickProduct = () => {
    console.log('Pressed')
  }

  sareeCollection = (item, index) => {
    return (
      <div className="trending-container">
        <div className="image-with-offer">
          <div onClick={() => this.onClickProduct(item)} className="trending-overflow">
            <img alt={'trending sarees'} src={item.saree_image} className="trending-product-image" />
          </div>
        </div>
        <div>
          <div className="trending-footer">
            <div className="trending-product-price">
              <span className="product-selling-price">₹ {item.saree_price}</span>
              <div style={{ display: 'flex', flexDirection: 'row' }} onClick={() => this.onClickMoreInfo(item, index)}>
                <img style={{ width: 20, height: 20, paddingRight: 5 }} src={require('../Images/info.png')} />
                <span style={{ color: 'blue' }}>{'info'}</span>
              </div>
            </div>
            <a style={{ fontVariant: 'capatalise', textDecoration: 'none', color: 'white' }} href="/contactus">
              <span id="add-to-card" className="addto-card">Order now</span></a>
          </div>
        </div>
      </div>
    )
  }

  onPressSubmit = () => {
    console.log('this----------.>')
  }

  onClickMoreInfo = (item,index) => {
    this.props.handleOverlay('MoreInfo',{data: item})
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

    return (
      <div id="trending" className="trending">
        <h2 className="title"> LATEST PRODUCTS</h2>
        {this.state.isLoaded ?
          <Slider {...settings} dots={true} arrows={true}  >
            {this.productApiList()}
          </Slider>
          :
          <Loader />
        }
      </div>
    );
  }

  productApiList = () => {
    const apiCollData = this.state.apiCollData
    let productsList = []

    apiCollData.map((item, index) => {
      productsList.push(this.sareeCollection(item, index))
    })

    return productsList
  }

}
