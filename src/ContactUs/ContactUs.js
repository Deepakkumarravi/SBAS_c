import React, { Component } from 'react'
import '../ContactUs/ContactUs.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import AddressIcon from '@material-ui/icons/Place'
import PhoneIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import Link from '@material-ui/icons/LinkSharp'
import WhatsApp from '@material-ui/icons/WhatsApp'
import Facebook from '@material-ui/icons/Facebook'
import Instagram from '@material-ui/icons/Instagram'
import Youtube from '@material-ui/icons/YouTube'
import fire from '../FirebaseConfig'
const db = fire.firestore()


export default class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: null,
            emailId: null,
            phoneNumber: null,
            message: null,
            validId: null,
            errorMessage: "",
            blocking: false
        }
    }

    handleSubmit = () => {
        if (this.handleEmptyFormCheck()) {
            if (this.validContactAddress()) {
                this.uploadUserData()
            }
        }
    }

    uploadUserData =  () => {
        this.setState({ errorMessage: '', blocking: true })
        let contactID = ''

        if (this.state.validId === 'phone') {
            contactID = this.state.phoneNumber
        }
        else if (this.state.validId === 'email') {
            contactID = this.state.emailId
        }
        else {
            contactID = `Phone Number: +91${this.state.phoneNumber} and Email Address: ${this.state.emailId}`
        }

        db.collection('Customers').doc(Date.now()).set({
            CustomerName: this.state.userName,
            ContactInformation: contactID,
            Message: this.state.message
        }).then(() => {
            this.setState({ errorMessage: 'We will react you shortly', userName: "", phoneNumber: "", emailId: "", message: "", blocking: false })
            alert('We will react you shortly')
        }).catch((error) => {
            this.setState({ blocking: false })
            alert('Sorry for inconvenience, Please contact given below number or try to register after some time')
        })
    }

    onChangeName = (e) => {
        this.setState({ userName: e.target.value });
    }

    onChangePhone = (e) => {
        this.setState({ phoneNumber: e.target.value });
    }

    onChangeEmailAddress = (e) => {
        this.setState({ emailId: e.target.value });
    }

    onChangeMessage = (e) => {
        this.setState({ message: e.target.value });
    }

    handleEmptyFormCheck = () => {
        let valid = true
        const { userName, phoneNumber, emailId } = this.state
        if (userName === null || userName === "") {
            this.setState({ errorMessage: 'Enter your name' })
            valid = false
        }
        else if (phoneNumber == null && emailId == null) {
            if (emailId == null) {
                this.setState({ errorMessage: "Enter your Mobile number" })
                valid = false
            }
        }

        return valid
    }

    validContactAddress = () => {
        const { phoneNumber, emailId } = this.state
        let valid = false
        if (phoneNumber != null) {
            const isValid = (/^(\+(([0-9]){1,2})[-.])?((((([0-9]){2,3})[-.]){1,2}([0-9]{4,10}))|([0-9]{10}))$/.test(phoneNumber))
            if (isValid) {
                valid = true
            }
            else this.setState({ errorMessage: "Enter valid Mobile number" })
        }
        else {
            const isValid = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailId))
            if (isValid) {
                valid = true
            }
            else this.setState({ errorMessage: "Enter valid Email Address" })
        }

        return valid

    }

    render() {
        return (
            <div id="contact-info">
                <BlockUi tag="div" blocking={this.state.blocking}>
                    <Header />
                    <div className="contactus-container">
                        <div className="contact-headline">Get In Touch With Us Today!</div>
                        <div className="contact-control-row">
                            <form>
                                <div className="form-area">
                                    <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
                                    <input className="text-label" type="text" placeholder="Enter your Name" onChange={this.onChangeName} value={this.state.userName} />
                                    <input className="text-label" type="text" placeholder={"Enter Your Phone Number"} onChange={this.onChangePhone} value={this.state.phoneNumber} />
                                    <div className="or-text">Or</div>
                                    <input className="text-label" type="text" placeholder={"Enter Your email address"} onChange={this.onChangeEmailAddress} value={this.state.emailId} />
                                    <div style={{ marginTop: '25px' }}>
                                        <textarea placeholder={'Enter message here...'} className="message-text-area" onChange={this.onChangeMessage} value={this.state.message} />
                                    </div>
                                    <button type="button" onClick={this.handleSubmit} className="submit-button ">SUBMIT</button>
                                </div>
                            </form>
                            {this.contactInfo()}
                        </div>
                    </div>
                    {/* <GoogleMap /> */}
                    <Footer />
                </BlockUi>
            </div >
        )
    }

    contactInfo = () => {
        const mediaIconStyle = { width: '25px', height: '25px' }
        let mediaIcons = [
            {icon: <Instagram style={mediaIconStyle} />},
            {icon: <WhatsApp style={mediaIconStyle} />},
            {icon: <Facebook style={mediaIconStyle} />},
            {icon: <Youtube style={mediaIconStyle} />}
        ]

        return (
            <div className="contact-details-area">
                <div className="contact-info-header">contact info</div>
                <div className="each-div" >
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <AddressIcon className="img-contact-info" />
                        <div className="contact-sub-header">Address</div>
                    </div>
                    <div className="address-text">8/14 J, Amma Colony, Bagathur,Sirumugai,Coimbatore - 641302</div>
                </div>
                <div className="each-div" >
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <PhoneIcon className="img-contact-info" />
                        <div className="contact-sub-header">Phone</div>
                    </div>
                    <div className="address-text"><a style={{ textDecoration: 'none' }} href="tel:9698993511">+91 9698993511</a></div>
                    <div className="address-text"><a style={{ textDecoration: 'none' }} href="tel:9698993511">+91 7904377852</a></div>
                </div>
                <div className="each-div" >
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <EmailIcon className="img-contact-info" />
                        <div className="contact-sub-header">Email</div>
                    </div>
                    <div className="address-text"><a style={{ textDecoration: 'none' }} href="mailto: sribannariammansilks@gmail.com">sribannariammansilks@gmail.com</a></div>
                </div>
                <div className="social-media" >
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Link className="img-contact-info" />
                        <div className="contact-sub-header">Let's Be Social</div>
                    </div>
                    <div className= {'contactus-icon-container'}>
                        {mediaIcons.map((item) => {
                            return this.constrctSocialMediaIcon(item.icon)
                        })}
                    </div>
                </div>
            </div>
        )
    }

    constrctSocialMediaIcon = (iconView) => {
        return (
            <div className="social-media_icon-contactus">
                {iconView}
            </div>
        )
    }
}
