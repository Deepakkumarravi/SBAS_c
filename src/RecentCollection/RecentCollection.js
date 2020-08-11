import React, { Component } from 'react'
import '../RecentCollection/RecentCollection.css'
import '../RecentCollection/RecentCollectionResponsive.css'
import collection1 from '../Collection_img/collection1.jpg'
import collection2 from '../Collection_img/collection2.jpg'
import collection3 from '../Collection_img/collection3.jpg'
import collection4 from '../Collection_img/collection4.jpg'
import collection5 from '../Collection_img/collection5.jpg'
import collection6 from '../Collection_img/collection6.jpg'
import collection7 from '../Collection_img/collection7.jpg'
import collection8 from '../Collection_img/collection8.jpg'
import collection9 from '../Collection_img/collection9.jpg'
import collection10 from '../Collection_img/collection10.jpg'
import collection11 from '../Collection_img/collection11.jpg'
import collection12 from '../Collection_img/collection12.jpg'
import collection13 from '../Collection_img/collection13.jpg'
import collection14 from '../Collection_img/collection14.jpg'
import collection15 from '../Collection_img/collection15.jpg'
import collection16 from '../Collection_img/collection16.jpg'
import collection20 from '../Collection_img/collection20.jpg'
import collection21 from '../Collection_img/collection21.jpg'
import collection22 from '../Collection_img/collection22.jpg'
import collection23 from '../Collection_img/collection23.jpg'
import collection24 from '../Collection_img/collection24.jpg'
import collection25 from '../Collection_img/collection25.jpg'
import collection26 from '../Collection_img/collection26.jpg'
import collection27 from '../Collection_img/collection27.jpg'
import collection28 from '../Collection_img/collection28.jpg'
import collection29 from '../Collection_img/collection29.jpg'
import collection30 from '../Collection_img/collection30.jpg'
import collection31 from '../Collection_img/collection31.jpg'
import collection32 from '../Collection_img/collection32.jpg'
import collection33 from '../Collection_img/collection33.jpg'
import collection34 from '../Collection_img/collection34.jpg'
import collection35 from '../Collection_img/collection35.jpg'
import collection36 from '../Collection_img/collection36.jpg'
import collection37 from '../Collection_img/collection37.jpg'
import collection38 from '../Collection_img/collection38.jpg'
import collection39 from '../Collection_img/collection39.jpg'
import collection40 from '../Collection_img/collection40.jpg'
import collection41 from '../Collection_img/collection41.jpg'
import collection42 from '../Collection_img/collection42.jpg'
import collection43 from '../Collection_img/collection43.jpg'
import collection44 from '../Collection_img/collection44.jpg'
import collection45 from '../Collection_img/collection45.jpg'
import collection46 from '../Collection_img/collection46.jpg'
import collection47 from '../Collection_img/collection47.jpg'
import collection48 from '../Collection_img/collection48.jpg'
import collection49 from '../Collection_img/collection49.jpg'
import collection50 from '../Collection_img/collection50.jpg'
import collection51 from '../Collection_img/collection51.jpg'
import collection52 from '../Collection_img/collection52.jpg'
import collection53 from '../Collection_img/collection53.jpg'
import collection54 from '../Collection_img/collection54.jpg'
import collection55 from '../Collection_img/collection55.jpg'
import collection56 from '../Collection_img/collection56.jpg'
import collection57 from '../Collection_img/collection57.jpg'
import recentImg1 from '../RecentImage/recent_1.jpg'
import recentImg2 from '../RecentImage/recent_2.jpg'
import recentImg3 from '../RecentImage/recent_3.jpg'
import recentImg4 from '../RecentImage/recent_4.jpg'
import recentImg5 from '../RecentImage/recent_5.jpg'
import recentImg6 from '../RecentImage/recent_6.jpg'
import recentImg7 from '../RecentImage/recent_7.jpg'
import recentImg8 from '../RecentImage/recent_8.jpg'
import recentImg9 from '../RecentImage/recent_9.jpg'
import recentImg10 from '../RecentImage/recent_10.jpg'
import recentImg11 from '../RecentImage/recent_11.jpg'
import recentImg12 from '../RecentImage/recent_12.jpg'
import recentImg13 from '../RecentImage/recent_13.jpg'
import recentImg14 from '../RecentImage/recent_14.jpg'
import recentImg15 from '../RecentImage/recent_15.jpg'
import recentImg16 from '../RecentImage/recent_16.jpg'
import recentImg17 from '../RecentImage/recent_17.jpg'
import recentImg18 from '../RecentImage/recent_18.jpg'
import recentImg19 from '../RecentImage/recent_19.jpg'
import recentImg20 from '../RecentImage/recent_20.jpg'
import recentImg21 from '../RecentImage/recent_21.jpg'
import recentImg22 from '../RecentImage/recent_22.jpg'
import recentImg23 from '../RecentImage/recent_23.jpg'
import recentImg24 from '../RecentImage/recent_24.jpg'
import recentImg25 from '../RecentImage/recent_25.jpg'
import recentImg26 from '../RecentImage/recent_26.jpg'
import recentImg27 from '../RecentImage/recent_27.jpg'
import recentImg28 from '../RecentImage/recent_28.jpg'
import recentImg29 from '../RecentImage/recent_29.jpg'
import recentImg30 from '../RecentImage/recent_30.jpg'
import recentImg31 from '../RecentImage/recent_31.jpg'
import recentImg32 from '../RecentImage/recent_32.jpg'
import recentImg33 from '../RecentImage/recent_33.jpg'
import recentImg34 from '../RecentImage/recent_34.jpg'
import recentImg35 from '../RecentImage/recent_35.jpg'
import recentImg36 from '../RecentImage/recent_36.jpg'
import recentImg37 from '../RecentImage/recent_37.jpg'
import recentImg38 from '../RecentImage/recent_38.jpg'
import recentImg39 from '../RecentImage/recent_39.jpg'
import recentImg40 from '../RecentImage/recent_40.jpg'
import Zoom from 'react-reveal/Zoom'
import Loading from '../Images/loader.svg'
import { Img } from 'react-image'

const names = [
    recentImg1, recentImg2, recentImg3, recentImg4, recentImg5, recentImg6, recentImg7, recentImg8, recentImg9, recentImg10,
    recentImg11, recentImg12, recentImg13, recentImg14, recentImg15, recentImg16, recentImg17, recentImg18, recentImg19, recentImg20,
    recentImg21, recentImg22, recentImg23, recentImg24, recentImg25, recentImg26, recentImg27, recentImg28, recentImg29, recentImg30,
    recentImg31, recentImg32, recentImg33, recentImg34, recentImg35, recentImg36, recentImg37, recentImg38, recentImg39, recentImg40,
    collection24, collection25, collection26, collection27, collection28, collection29, collection30, collection31,
    collection1, collection2, collection3, collection4, collection5, collection6, collection7, collection8, collection9, collection10
    , collection11, collection12, collection13, collection14, collection15, collection16, collection20, collection21, collection22, collection23,
    collection32, collection33, collection34, collection35, collection36, collection37, collection38, collection39, collection40, collection41, collection42, collection43,
    collection44, collection45, collection46, collection47, collection48, collection49, collection50, collection51, collection52, collection53, collection54, collection55, collection56, collection57
]

export default class RecentCollection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1000);
    }

    productDetails = (item, index) => {
        return (
            <Zoom delay={100}>
                <div className="coll-container" id="collection" >
                    <div className="sub-container">
                        <div onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                            {/* <span className="product-offer-percentage">Offer</span> */}
                            <div onClick={() => this.onClickProduct(item)} className="collection-overflow">
                                <img alt={`Saree collection ${index + 1}`} src={item} className="coll-product-image" alt="Recent Collections" />
                            </div>
                        </div>
                        <div>
                            <div className="product-footer">
                                {/* <div className="saree-name">Saree Name</div>
                            <div className="product-price">
                                <span className="product-selling-price">₹ 4,500</span>
                                <span className="actual-price-amout">₹ 8,750</span>
                            </div> */}
                                <a style={{ fontVariant: 'capatalise', textDecoration: 'none', color: 'white' }} href="/contactus">
                                    <span id="add-to-card" className="addto-card">Order Now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        )
    }

    onClickProduct = (item) => {
        this.setState({ zoomImage: item })
    }

    productClick = () => {

    }

    render() {
        let productsList = []
        names.map((item, index) => {
            productsList.push(this.productDetails(item, index))
        })

        return (
            <div className="main-div">
                {this.state.loading &&
                    <div className="loading-collection-con">
                        <div className="loading-text">Loading our recent collections.....</div>
                        <img src={Loading} style={{ width: '100%', height: '600px', margin: 'auto' }} />
                    </div>

                }
                {!this.state.loading &&
                    <div className="grid">
                        {productsList}
                    </div>
                }
            </div>
        )
    }
}
