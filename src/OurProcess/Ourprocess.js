import React, { Component } from 'react'
import '../OurProcess/OurProcess.css'
import Order from '@material-ui/icons/ContactPhone'
import Packing from '@material-ui/icons/AddShoppingCartTwoTone'
import Transport from '@material-ui/icons/LocalShippingTwoTone'
import Delivary from '@material-ui/icons/Place'
import Slide from 'react-reveal/Slide';
import Flash from 'react-reveal/Flash';

export default class Ourprocess extends Component {

    gotocontactus = () => {
        return (
            <div class="goto-contact-from-our-process"><a style={{ textDecoration: 'none', color: 'white' }} href="/contactus">{'>>'}</a></div>
        )
    }

    render() {
        return (
            <div class="our-process-container-with-text">
                <div class="our-work-process-title">Our Work Process </div>
                <ul class="our-process-list-container">
                    <li >
                        <Slide right>
                            <div className="each-process-item">
                                <div className="icon-container">
                                    <div class="process-number">1</div>
                                    <Flash  >
                                        <Order style={{ width: '90px', height: '90px' }} className="our-process-icon-style" />
                                    </Flash>
                                    {this.gotocontactus()}
                                </div>
                                <div className="sub-process-title">Book Your Bulk Order</div>
                            </div>
                        </Slide>
                    </li>
                    <li >
                        <Slide right delay = {200}>
                            <div className="each-process-item">
                                <div className="icon-container">
                                    <div class="process-number">2</div>
                                    <div className="our-process-icon-style" >
                                        <Flash  >
                                            <Packing style={{ width: '90px', height: '90px' }} className="our-process-icon-style" />
                                        </Flash>
                                    </div>
                                    {this.gotocontactus()}
                                </div>
                                <div className="sub-process-title">Pack Your Items</div>
                            </div>
                        </Slide>
                    </li>
                    <li >
                        <Slide right delay = {400}>
                            <div className="each-process-item">
                                <div className="icon-container">
                                    <div class="process-number">3</div>
                                    <Flash  >
                                        <Transport style={{ width: '90px', height: '90px' }} className="our-process-icon-style" />
                                    </Flash>
                                    {this.gotocontactus()}
                                </div>
                                <div className="sub-process-title">Move Your Items</div>
                            </div>
                        </Slide>
                    </li>
                    <li >
                        <Slide right delay = {600}>
                            <div className="each-process-item">
                                <div className="icon-container">
                                    <div class="process-number">4</div>
                                    <Flash  >
                                        <Delivary style={{ width: '90px', height: '90px' }} className="our-process-icon-style" />
                                    </Flash>
                                    {this.gotocontactus()}
                                </div>
                                <div className="sub-process-title">Deliver Your Items</div>
                            </div>
                        </Slide>
                    </li>
                </ul>
            </div>
        )
    }
}

