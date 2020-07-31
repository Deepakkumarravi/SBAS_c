import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Header.css'
import './HeaderResponsive.css'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import LightSpeed from 'react-reveal/LightSpeed'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuExpanded: false,
      isMenuClicked: false,
      isMenuItemAnimated: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    var headRow = document.getElementById('headerRow')
    var header = document.getElementById('header')

    const scrollTop = Math.floor(window.pageYOffset)
    const scrollHeight = document.body.scrollHeight
    const scrollPer = Math.floor(scrollTop / scrollHeight * 100) // calculating percentage while scrolling
    if ((scrollPer < 3 && headRow || (scrollPer > 20 && scrollPer < 55))) {
      headRow.classList.add('header-row')
      header.style.transform = 'translateY(0px)'
    }
    else if(scrollPer > 7 && headRow) {
      header.style.transform = 'translateY(-150%)'
    }
  }

  handleMenu() {
      this.setState({ isMenuItemAnimated: !this.state.isMenuItemAnimated })
      this.setState({ isMenuClicked: false })
      var line1 = document.getElementById('line1')
      var line2 = document.getElementById('line2')
      var line3 = document.getElementById('line3')
      var menucontent = this.refs.menuContainer
      if (this.state.isMenuExpanded === false) {
        this.setState({ isMenuExpanded: true })
        line1.style.transform = 'rotate(-45deg) translate(-5px,5px)'
        line3.style.transform = 'rotate(45deg) translate(-7px,-8px)'
        line2.style.visibility = 'hidden'
        line2.style.transition = 'auto'
        menucontent.style.visibility = 'visible'
        menucontent.style.transform = 'translateY(0%)'
        menucontent.style.transition = '1s'
      } else {
        this.setState({ isMenuExpanded: false })
        line1.style.transform = 'rotate(0deg) translate(0px,0px)'
        line2.style.visibility = 'visible'
        line3.style.transform = 'rotate(0deg) translate(0px,0px)'
        menucontent.style.transform = 'translateY(-150%)'
        menucontent.style.visibility = 'hidden'
      }
  }


  render() {
    return (
      <div id='header'>
        <Fade bottom distance='50px'>
          <div className='header-row' id='headerRow'>
            <div className = "header-row-logo">
              <LightSpeed>
                <div className="title">Sri Bannari Amman Silks</div>
              </LightSpeed>
              <div className='head-con'>
                <div className='header-right'>
                  <div className='header-items'>
                    <div className='list-items'><a href='/'>Home</a></div>
                    <div className='list-items' ><a href='/collection'>Collection</a></div>
                    <div className='list-items' ><a href='/aboutus'>About us</a></div>
                    <div className='list-items' ><a href='/contactus'>Contact Us</a></div>
                    {/* <div className='list-items' onClick={this.props.signinOverlay}>{this.props.title}</div> */}
                  </div>
                </div>
              </div>
              <div className='menu-logo' onClick={() => this.handleMenu()}>
                <div>
                  <div id='line1' className='line1' />
                  <div id='line2' className='line2' />
                  <div id='line3' className='line3' />
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </Fade>
        <div className = "menu-container" ref='menuContainer'>
          <div className='menu-content'>
            <div className='menu-item'>
              <Slide top delay='284' when={this.state.isMenuItemAnimated}>
                <div className='menu-title' onClick={() => this.handleMenu()}><a href='/'>Home</a></div>
                <div className='divider' />
              </Slide>
            </div>
            <div className='menu-item'>
              <Slide top delay='710' when={this.state.isMenuItemAnimated}>
                <div className='menu-title' onClick={() => this.handleMenu()}><a href='/collection'>Collection</a></div>
                <div className='divider' />
              </Slide>
            </div>
            <div className='menu-item'>
              <Slide top delay='852' when={this.state.isMenuItemAnimated}>
                <div className='menu-title' onClick={() => this.handleMenu()}><a href='/aboutus'>About us</a></div>
                <div className='divider' />
              </Slide>
            </div>
            <div className='menu-item'>
              <Slide top delay='1000' when={this.state.isMenuItemAnimated}>
                <div className='menu-title' onClick={() => this.handleMenu()}><a href='/contactus'>contact us</a></div>
                <div className='divider' />
              </Slide>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)

