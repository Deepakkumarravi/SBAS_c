import React, { Component } from 'react'
import '../MoreInfo/MoreInformation.css'
import DesignImage from '../../Images/designImage.png'

export default class MoreInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productDetails: {
                colour: "",
                border: "",
                blouse: "",
                design: ""
            },
            sareeImage: ''
        }
    }

    componentDidMount() {
        const { productData } = this.props
        const description = JSON.parse(productData.data.saree_description) 
        this.setState({ productDetails: description,sareeImage: productData.data.saree_image })
    }

    render() {
        return (
            <div id={'more-info'} >
                <img alt = 'Silk saree' src = {this.state.sareeImage} className = 'product-image' />
                <div className="more-product-details">
                    <div><img alt = "Mugurtha silk " src = {DesignImage} className = "more-design-pic-image" style = {{marginTop: '20px'}}/></div><br></br>
                    <div><strong>Product Details</strong></div><br></br>
                    <div><strong>Color:</strong> {this.state.productDetails.colour}</div><br></br>
                    <div><strong>Border:</strong> {this.state.productDetails.border}</div><br></br>
                    <div><strong>Blouse:</strong> {this.state.productDetails.blouse}</div><br></br>
                    <div><strong>Design:</strong> {this.state.productDetails.design + ' Grand Blouse'}</div><br></br>
                </div>
            </div>
        )
    }
}
