import React, { Component } from 'react'
import '../SareeCollages/SareeCollage.css'
import GiftIcon from '../Images/gift.svg'
import SupportIcon from '../Images/supporticon.png'
import CartIcon from '../Images/cart.png'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import testImage from '../Images/handloomtext.png'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'


export default class SareeCollage extends Component {
    render() {
        return (
            <div className="collage-con">
                <div className="banner">
                    <section class="section-banner">
                        <div class="banner-overlay"></div>
                        <div class="section-row">
                            <div class="banner-row-item">
                                <div className="banner-image">
                                    <img alt = {"cart-icon"} style={{ width: '30px', height: '30px' }} src={CartIcon} />
                                </div>
                                <div class="service-title">
                                    <div className="each-title">QUALITY</div>
                                    <p class="service-description">Our concern is quality not quantity</p>
                                </div>
                            </div>
                            <div class="banner-row-item">
                                <div className="banner-image">
                                    <img alt = "contact-icon" style={{ width: '30px', height: '30px' }} src={SupportIcon} />
                                </div>
                                <div class="service-title">
                                    <div className="each-title">BEST SUPPORT</div>
                                    <p class="service-description">We provide best services &amp; support</p>
                                </div>
                            </div>
                            <div class="banner-row-item">
                                <div className="banner-image">
                                    <img alt = "Gift-icon" style={{ width: '30px', height: '30px' }} src={GiftIcon} />
                                </div>
                                <div class="service-title">
                                    <div className="each-title">GIFT DISCOUNT</div>
                                    <p class="service-description">Flats,Coupon and exciting sale off</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="collage-container" id="collage">
                    <div className="collage-left-container">
                        <Fade left>
                            <div className="collage-left-top">
                            </div>
                        </Fade>
                    </div>
                    <div className="collage-right-container">
                        <div className="collage-right-top">
                            <Rotate top right>
                                <div className="collage-top-left" />
                            </Rotate>
                            <Rotate top right>
                            <div className="collage-top-right" />
                            </Rotate>
                        </div>
                        <Rotate bottom left>
                        <div className="collage-right-bottom" />
                        </Rotate>
                    </div>
                </div>
                <div className = "handloom-text-image-con">
                    <Zoom cascade >
                    <img alt =  "Handloom" className = "handloom-text-image" src = {testImage}/>
                    </Zoom>
                </div>
            </div>
        )
    }
}
