import React, { Component } from 'react'
import '../OurProcess/OurProcess.css'
import Order from '@material-ui/icons/ContactPhone'
import Packing from '@material-ui/icons/AddShoppingCartTwoTone'
import Transport from '@material-ui/icons/LocalShippingTwoTone'
import Delivary from '@material-ui/icons/Place'
import Slide from 'react-reveal/Slide';
import Flash from 'react-reveal/Flash';

export default class Ourprocess extends Component {
    constructor(props) {
        super(props)
        const width = window.innerWidth
        let right = true

        if(width < 550) {
            right = false
        }

        this.state = {
          right: right
        }
       
    }

    render() {
        return (
            <div class="our-process-container-with-text">
                <div class="our-work-process-title">Our Work Process </div>
                <ul class="our-process-list-container">
                    {this.eachProcessSteps(1,0,'Book Your Bulk Order')}
                    {this.eachProcessSteps(2,100,'Pack Your Items')}
                    {this.eachProcessSteps(3,200,'Move Your Items')}
                    {this.eachProcessSteps(4,300,'Deliver Your Items')}
                </ul>
            </div>
        )
    }

    eachProcessSteps = (step,delay,title) => {
        return (
            <li >
                <Slide right={this.state.right} delay = {delay}>
                    <div className="each-process-item">
                        <div className="icon-container">
                            <div class="process-number">{step}</div>
                            <Flash>
                                {this.getStepImage(step)}
                            </Flash>
                            {this.gotocontactus()}
                        </div>
                        <div className="sub-process-title">{title}</div>
                    </div>
                </Slide>
            </li>
        )
    }

    getStepImage = (step) => {
        const style = { width: '90px', height: '90px' }
        switch (step) {
            case 1:
                return <Order style={style} className="our-process-icon-style" />
            case 2:
                return <Packing style={style} className="our-process-icon-style" />
            case 3:
                return <Transport style={style} className="our-process-icon-style" />
            case 4:
                return <Delivary style={style} className="our-process-icon-style" />
            default:
                return null
        }
    }

    gotocontactus = () => {
        return (
            <div class="goto-contact-from-our-process"><a style={{ textDecoration: 'none', color: 'white' }} href="/contactus">{'>>'}</a></div>
        )
    }
}

