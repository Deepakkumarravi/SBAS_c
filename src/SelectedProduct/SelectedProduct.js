import React, { Component } from 'react'
import Swing from 'react-reveal/Swing'
import '../SelectedProduct/SelectedProduct.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Zoom from 'react-img-zoom'

export default class SelectedProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productDetails: {
                Type: "Kanchi Bridal Silk Saree",
                Color: "Sky  Blue With Peach Orange Color",
                Design: "Square Silver Checks Brocade with Korvai Floral Border",
                Material: "Pure Silk With 1G Silver Zari",
                Blouse: "Contrast Grand Blouse"
            },
            index: 0
        }
    }

    getDetails = () => {
        const product = this.state.productDetails
        for (var key in product) {
            return (
                <div>{product[key]}</div>
            )
        }
    }

    // showOtherColors = () => {
    //     const value = similarProduct.map(item =>
    //         <div className="color-container">
    //             <span className="color-hint">Click to view details</span>
    //             <div className="similar-product-image-con">
    //                 <img alt = {'similar product'} src={item} className="similar-product-image" />
    //             </div>
    //         </div>
    //     )
    //     return value
    // }

    onItemClick = (index) => {
        this.setState({ index: index })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="product-and-details">
                    {/* <div id='image' style={{ marginLeft: '100px', marginTop: '100px', display: 'flex', flexDirection: 'row' }}>
                        <div className="row-image" >
                            {listOfImage.map((item, index) => {
                                return (
                                    <div className={(this.state.index === index) ? "additional-image-bordered" : "additional-image-non-bordered"} onClick={() => this.onItemClick(index)}>
                                        <img alt = "next-image" className="additional-image" src={item} />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="zoom-container" >
                            {this.state.index === 0 &&
                                <Zoom
                                    img={listOfImage[this.state.index]}
                                    zoomScale={3}
                                    width={450}
                                    height={450}
                                />
                            }
                            {this.state.index === 1 &&
                                <Zoom
                                    img={listOfImage[this.state.index]}
                                    zoomScale={3}
                                    width={450}
                                    height={450}
                                />
                            }
                            {this.state.index === 2 &&
                                <Zoom
                                    img={listOfImage[this.state.index]}
                                    zoomScale={3}
                                    width={450}
                                    height={450}
                                />
                            }
                            {this.state.index === 3 &&
                                <Zoom
                                    img={listOfImage[this.state.index]}
                                    zoomScale={3}
                                    width={450}
                                    height={450}
                                />
                            }
                        </div>
                    </div> */}
                    <div className="product-details-list">
                        <div className="product-name">Embellished Semi Stitched Lehenga </div>
                        <div className="price">
                            <div className="selling-price">₹ 4500</div>
                            <div className="actual-price">₹ 9000</div>
                            <div className="offer-percent">50 % off</div>
                        </div>
                        <div className="add-cart-container">
                            <div className="add-to-cart-con">
                            <Swing>
                            <div className="add-to-cart-text"><a style = {{textDecoration: 'none',color: 'white'}} href = {'/contactus'}>ADD TO CART</a></div>
                            </Swing>
                            </div>
                            <span className="hint-add-card">*Click to contact us</span>
                        </div>
                        <div className="product-details">
                            <div><strong>Product Details</strong></div><br></br>
                            <div><strong>Type:</strong> {this.state.productDetails.Type}</div><br></br>
                            <div><strong>Color:</strong> {this.state.productDetails.Color}</div><br></br>
                            <div><strong>Material:</strong> {this.state.productDetails.Material}</div><br></br>
                            <div><strong>Design:</strong> {this.state.productDetails.Design}</div><br></br>
                            <div><strong>Blouse:</strong> {this.state.productDetails.Blouse}</div><br></br>
                        </div>
                        <div className="color-varient">
                            <div className="colors-title">Color's</div>
                            <div className="similar-product-container">
                                {/* {this.showOtherColors()} */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}