import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import InviteNow from '../../ContactUs/ContactUs'
import CloseImage from '../../Images/closeicon.png'
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

  componentName() {
    switch ('InviteNow') {
      case 'InviteNow':
        return <InviteNow hideOverlay={this.props.hideOverlay} />
      default:
        return null
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
    const component = this.componentName()
    console.log('component', component)
    return (
      <Fade when={this.state.show} >
        <div id='overlay'>
          <div>
          <div className={'overlay-body freetrial-sel'}>
            <div class='overlay-header'>
              <div className='close-img' />
              <img  src = {CloseImage} className = "close-img" onClick={this.handleAnimation}/>
              </div>
            {component}
          </div>
          </div>
        </div>
      </Fade>
    )
  }
}

export default Overlay
