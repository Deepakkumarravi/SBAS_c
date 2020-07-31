import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import '../Aboutus/Aboutus.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import silkImage from '../Images/silkImage.jpg'
import softSilkImage from '../Images/softsilkImage.jpeg'
import handloomPic from '../Images/weaverImage.jpg'
import DesignImage from '../Images/designImage.png'

const aboutSilk = "The elegantly glistening, smooth, luxurious fabric of silk has a special place in the hearts and minds of most people across the world, especially Indians. They are worn by Indian women at almost all stages and ages of life. In India, the most vital occasions of life are incomplete without a saree. It may be worn by the lady of the house, the closest female guests, or may form an important gift – but, saree is always present in Indian festivities in some way or the other! From prominent women leaders to the most successful women of India to the simplest of the women – saree finds favour with everyone."
const aboutSirumugaiSoftSilk = "Around 3000 families at Sirumugai are involved in handloom weaving. Cotton, kora cotton and soft silk are woven here which accounts for a sales of Rs.120 crore, every year. These sarees weigh less and are less expensive than Kancheepuram silk sarees. As our sarees are more durable, they are bought in various states including Kerala, Karnataka, Andhra Pradesh and Maharashtra, say the proud weavers. The unique designs are computer-generated which are later transferred on to the silk sarees through handlooms, which has been a huge draw with young women. "
const aboutHandloom = "Handloom saris are a traditional textile art of India.Completion of a single sari takes two to three days of work. Several regions have their own traditions of handloom saris.Handloom sari weaving is generally a family enterprise and one of India's cottage industries. The handloom saris are made from silk or cotton threads. Traditionally the processes of thread dyeing and warping were outsourced and sizing, attaching the warp, weft winding and Weaving were done by the weavers. The process plays a major role in weaving handloom saris and the final product in shops."
export default class Aboutus extends Component {
    render() {
        return (
            <div className="about">
                <Header />
                <div className="aboutus-container">
                    <Slide right >
                        <div className="content-over-image">
                            <span className="saree-over-text-one">Sirumugai</span>
                            <span className="saree-over-text-one">Sri Bannari Amman</span>
                            <span className="saree-over-text-one">Soft Silk Sarees</span>
                            <span className="saree-over-text-one">For your Big Day</span>
                            <span className="saree-over-text-two">Trending Silk sarees for special occassion</span>
                            <button className="contact-us-button"><a style={{ textDecoration: 'none', color: 'white' }} href={'/contactus'}>Contact Us</a></button>
                        </div>
                    </Slide>
                    <div style={{ marginTop: '620px' }}>
                        {this.aboutBannariAmmanSilks()}
                    </div>
                    {this.abouthandloom()}

                </div>
                {/* <Footer /> */}
            </div>
        )
    }

    aboutBannariAmmanSilks = () => {
        return (
            <div className = "bas-con-div">
                <div><img src = {DesignImage} className = "design-image" style = {{marginTop: '20px'}}/></div>
                <div className="about-bas-con">
                    <Fade bottom>
                        <div className="about-bas-sub-title">Welcome to Bannari Amman Silks</div>
                        <div className="about-bas-content" >Step into the ethnic Sri Bannari Amman Silks at Sirumugai.Sri Bannari Amman Silks was started in 2012,We Have 35 year experience and passion in handloom field because we are weavers ourselves. We always remained close to our customers, We sell quality products and we ensure the products we sold are value for money.
                        and the exclusive selections and traditional designs stand apart, understanding the changing aspirations of the old and new, and continue to give a variety fare, in addition to traditional revivals for special occasions.Customer satisfication is our main aim.
                    </div>
                    </Fade>
                </div>
                <div><img src = {DesignImage} className = "design-image" /></div>
                <div className="about-bas-con">
                    <Fade bottom>
                        <div className="about-bas-sub-title">Weaving Units</div>
                        <div className="about-bas-content">Sri Bannari Amman Silks has always been a trendsetter and the strong-hold in traditional patterns is our unique strength. Our own handloom units at Tamilnadu,Have enabled us to manufacture new designs to keep up with the currents tastes, and most importantly market high quality of silk sarees at very competitive prices.</div>
                    </Fade>
                </div>
                <div><img src = {DesignImage} className = "design-image" /></div>
                <div className="about-bas-con">
                    <Fade bottom>
                        <div className="about-bas-sub-title">Online Shopping</div>
                        <div className="about-bas-content">Sri Bannari Amman Silks has always been part of your weddings, festive seasons, and joyous occasions for years. We do not want you to miss this tradition because of constraints in time or distance. You can visit our place or contact by call and you can experience the same shopping experience from your home across the globe!</div>
                    </Fade>
                </div>
                <div><img src = {DesignImage} className = "design-image" /></div>
                <div className="about-bas-con">
                    <Fade bottom>
                        <div className="about-bas-sub-title">GST Number</div>
                        <div className="about-bas-content" style = {{textAlign: 'center',fontSize: '20px',fontStyle: 'italic'}}> 33AKCPC4569L1Z4 </div>
                    </Fade>
                </div>
            </div>
        )
    }


    abouthandloom = () => {
        return (
            <div className="about-saree-container">
                <div className="about-saree-container-title">Let's Know More Silk and Handlooms</div>
                <div className="about-saree-inner-container">
                    <div className="each-about-cell">
                        <div className="each-cell-header">Silk Sarees</div>
                        <Pulse><img className="aboutus-cell-image" src={silkImage} /></Pulse>
                        <div className="aboutus-cell-text">{aboutSilk}</div>
                    </div>
                    <div className="each-about-cell">
                        <div className="each-cell-header">Sirumugai Soft Silk</div>
                        <Pulse><img className="aboutus-cell-image" src={softSilkImage} /></Pulse>
                        <div className="aboutus-cell-text">{aboutSirumugaiSoftSilk}</div>
                    </div>
                    <div className="each-about-cell">
                        <div className="each-cell-header">Handloom</div>
                        <Pulse><img className="aboutus-cell-image" src={handloomPic} /></Pulse>
                        <div className="aboutus-cell-text">{aboutHandloom}</div>
                        
                    </div>
                </div>
            </div>
        )
    }
}