import React, { Component } from 'react'
import './Footer.css'
import './FooterResponsive.css'
import WhatsApp from '@material-ui/icons/WhatsApp'
import Facebook from '@material-ui/icons/Facebook'
import Instagram from '@material-ui/icons/Instagram'
import Youtube from '@material-ui/icons/YouTube'
import LightSpeed from 'react-reveal/LightSpeed'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer" id="footer">
                <div className="footer-list">
                    <LightSpeed cascade>
                        <div className="footer-title">Sri Bannari Amman Silks</div>
                    </LightSpeed>
                    <div className="contact-details-row">
                        <div className="each-contact">
                            <div className="contact-social-container">Quick Links</div>
                            <div className='list-item' ><a className="links" href='/'>Home</a></div>
                            <div className='list-item' ><a className="links" href='/collection'>Collection</a></div>
                            <div className='list-item' ><a className="links" href='/aboutus'>About Us</a></div>
                            <div className='list-item' ><a className="links" href='/contactus'>Contact Us</a></div>
                        </div>
                        <div className="each-contact">
                            <div className="contact-social-container">Visit Us</div>
                            <p className="contact-text">8/14 J, Amma Colony</p>
                            <p className="contact-text">Bagathur,Sirumugai (Post),</p>
                            <p className="contact-text">Coimbatore-641 302</p>
                        </div>
                        <div className="each-contact">
                            <span className="contact-social-container">Reach Us</span>
                            <p className="contact-text"><a style = {{textDecoration: 'none',color: 'white'}} href = "tel:9698993511">Phone number : +91 9698993511</a></p>
                            <p className="contact-text"><a style = {{textDecoration: 'none',color: 'white'}} href = "tel:7904377852">Phone number : +91 7904377852</a></p>
                            <p className="contact-text"><a style = {{textDecoration: 'none',color: 'white'}} href = "mailto: sribannariammansilks@gmail.com">E: sribannariammansilks@gmail.com</a></p>
                        </div>
                        <div className="each-contact">
                            <div className="contact-social-container">Let's Be Social</div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className="social-media_icon">
                                    <Facebook style={{ width: '25px', height: '25px' }} className = "social-icon-footer" />
                                </div>
                                <div className="social-media_icon">
                                <a style={{display: "table-cell",color: 'white'}} target="_blank" href = {'https://www.instagram.com/sribannariammansilks/'}>
                                    <Instagram style={{ width: '25px', height: '25px' }} className = "social-icon-footer"/> </a>
                                </div>
                                <div className="social-media_icon">
                                   <a style={{ display: "table-cell", color: 'black' }} target="_blank" href={'https://wa.me/9698993511'}>
                                        <WhatsApp style={{ width: '25px', height: '25px' }} className="social-icon-footer" />
                                    </a>
                                </div>
                                <div className="social-media_icon">
                                    <Youtube style={{ width: '25px', height: '25px' }} className = "social-icon-footer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
