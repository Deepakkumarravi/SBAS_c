import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import InviteNow from '../ContactUs/ContactUs'
import MoreInformation from '../components/MoreInfo/MoreInformation'
import CloseImage from '../Images/closeicon.png'
import './Overlay.css'
import './OverlayResponsive.css'

class Overlay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleAnimation = this.handleAnimation.bind(this)
    this.delayHandle = this.delayHandle.bind(this)
  }

  componentName(name) {
    switch (name) {
      case 'InviteNow':
        return <InviteNow hideOverlay={this.props.hideOverlay} />
      case 'MoreInfo':
        return <MoreInformation productData = {this.props.productData} />
      default:
        return <MoreInformation  productData = {this.props.productData} />
    }
  }

  // hide background scroll
  componentDidMount() {
    const targetElement = document.querySelector('body')
    targetElement.style.overflow = 'hidden'
    this.setState({ show: !this.state.show })
  }

  // reset background scroll
  componentWillUnmount() {
    // clearAllBodyScrollLocks()
    const targetElement = document.querySelector('body')
    targetElement.style.overflow = 'auto'
    this.setState({ show: !this.state.show })
  }

  delayHandle() {
    setTimeout(() => {
      this.setState({ show: !this.state.show })
      this.props.hideOverlay()
    }, 1000)
  }

  handleAnimation() {
    setTimeout(() => { this.props.hideOverlay() }, 300)
  }

  render() {
    const component = this.componentName(this.props.componentName)

    return (
      <Fade when={this.state.show} >
        <div id='overlay'>
          <div className={'overlay-body'}>
            <div class='overlay-header' onClick = {this.handleAnimation} >
              <img src={CloseImage} className={'close-image'} />
            </div>
            <div className = {'overflow-main-component'} >
              {component}
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}

export default Overlay
