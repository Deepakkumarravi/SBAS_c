import React, { Component } from 'react'
import '../Home/Home.css'
import HeaderPage from '../Header/Header'
import Footer from '../Footer/Footer'
import SlideImage from '../SlideShowImage/SlideImage'
import firebase from 'firebase'
import TrendingSlick from '../TrendingSlick/TrendingSlick'
import Overlay from '../OverlayComponent/Overlay'
import SareeCollage from '../SareeCollages/SareeCollage'
import OurProcess from '../OurProcess/Ourprocess'
import YouTube from '../Youtube/YoutubePlay'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signInOverlay: false,
            user: null,
            loginText: 'Signin',
            isOverlayVisible: false,
            componentName: '',
            productData: ''
        }
    }

    componentDidMount() {
        firebase.analytics();
        firebase.analytics().logEvent('notification_received');
    }

    signinOverlay = () => {
        if (this.state.signInOverlay === false) {
            this.setState({ signInOverlay: !this.state.signInOverlay })
        } else {
            firebase.auth().signOut()
            this.setState({ signInOverlay: !this.state.signInOverlay, loginText: 'Signin', user: null })
        }

    }

    setUserValue = (user) => {
        const isEmailVerified = user.emailVerified
        if (isEmailVerified && this.state.user == null) {
            this.setState({ user: user, signInOverlay: false, loginText: 'Signout' })
        }
    }

    handleOverlay = (name,data) => {
        this.setState({ isOverlayVisible: true,componentName: name,productData: data })
    }

    hideOverlay = () => {
        this.setState({ isOverlayVisible: false })
    }

    render() {
        return (
            <div className="home" id="home">
                {this.state.isOverlayVisible && <Overlay hideOverlay={this.hideOverlay} componentName  = {this.state.componentName} productData = {this.state.productData} />}
                <HeaderPage title={this.state.loginText} signinOverlay={this.signinOverlay} handleOverlay={this.handleOverlay} />
                <SlideImage />
                <TrendingSlick handleOverlay={this.handleOverlay} />
                <SareeCollage />
                <YouTube />
                <OurProcess />
                <Footer />
            </div>
        )
    }
}
