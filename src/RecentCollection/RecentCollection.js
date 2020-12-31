import React, { Component } from 'react'
import '../RecentCollection/RecentCollection.css'
import '../RecentCollection/RecentCollectionResponsive.css'
import Zoom from 'react-reveal/Zoom'
import Loading from '../Images/loader.svg'
import Overlay from '../OverlayComponent/Overlay'
import networkManager, { BASE_DB_URL,catchErrorMessage } from '../NetworkManager'


export default class RecentCollection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            apiCollData: [],
            getSareesDetails: [],
            isOverlayVisible: false,
            componentName: '',
            productData: ''
        }
    }

    componentDidMount() {
        this.getUploadCollections()
    }

    getUploadCollections = () => {
        networkManager.amazonS3_getUploadCollections().then(response => {
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
                this.setState({ getSareesDetails: result,selectedOption: result[0].price },this.mapPriceAndSareeCollection)
            }
            else {
                this.setState({ isLoaded: true, apiCollData: [] })
                catchErrorMessage(response.message)
            }
        })
    }

    mapPriceAndSareeCollection = () => {
     const {apiCollData,getSareesDetails} = this.state
     const newCollectionArray = apiCollData
     apiCollData.map((item_1,index_1) => {
        getSareesDetails.map((item_2,index_2) => {
               if(item_1.saree_type == item_2.sareetype) {
                newCollectionArray[index_1].saree_price  = item_2.price
                return
               }
         })
     })
     this.setState({apiCollData: newCollectionArray,isLoaded: true})
    }

    arrayBufferToBase64(buffer) {
        var binary = ''
        var bytes = [].slice.call(new Uint8Array(buffer))
        bytes.forEach((b) => binary += String.fromCharCode(b))
        return window.btoa(binary)
    }

    productDetails = (item, index) => {

        // <---------------------------MoongoDb----------------------------------->
        // var imageString = this.arrayBufferToBase64(item.my_image.data.data);
        // const imageSrc = `data:${item.my_image.contentType};base64,` + imageString

        return (
            <Zoom delay={100}>
                <div className="coll-container" id="collection" >
                    <div className="sub-container">
                        <div onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                            <div onClick={() => this.onClickProduct(item)} className="collection-overflow">
                                <img alt={`Saree collection ${index + 1}`} src={item.saree_image} className="coll-product-image" alt="Recent Collections" />
                            </div>
                        </div>
                        <div>
                            <div className="product-footer">
                                <div className="product-price">
                                    <span className="product-selling-price">{`₹ ${item.saree_price}`}</span>
                                    <div style={{ display: 'flex', flexDirection: 'row' }} onClick={() => this.onClickMoreInfo(item, index)}>
                                        <img style={{ width: 20, height: 20, paddingRight: 5 }} src={require('../Images/info.png')} />
                                        <span style={{ color: 'blue' }}>{'info'}</span>
                                    </div>
                                </div>
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

    onClickMoreInfo = (item,index) => {
        this.setState({ isOverlayVisible: true,componentName: 'MoreInfo',productData: {data: item} })
    }

    hideOverlay = () => {
        this.setState({ isOverlayVisible: false })
    }

    render() {
        return (
            <div className="main-div">
                {this.state.isOverlayVisible && <Overlay hideOverlay={this.hideOverlay} componentName={this.state.componentName} productData={this.state.productData} />}
                {!this.state.isLoaded &&
                    <div className="loading-collection-con">
                        <div className="loading-text">Loading our recent collections.....</div>
                        <img src={Loading} style={{ width: '100%', height: '600px', margin: 'auto' }} />
                    </div>
                }
                {this.state.isLoaded &&
                    <div className="grid">
                        {this.productApiList()}
                    </div>
                }
            </div>
        )
    }
   
    productApiList = () => {
        const apiCollData = this.state.apiCollData
        let productsList = []

        apiCollData.map((item,index) => {
            productsList.push(this.productDetails(item, index))
        })

        return productsList
    }
}
