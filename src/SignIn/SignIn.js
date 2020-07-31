import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import './SignIn.css'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

class Signin extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: user }, this.handleOverlay)
    })
  }

  handleOverlay = () => {
    if (this.state.isSignedIn && this.state.isSignedIn.emailVerified != null) {
      this.props.setUserValue(this.state.isSignedIn)
    }
  }

  handleAnimation = () => {
    setTimeout(() => {
      this.props.handleOverlay()
    }, 300);
  }

  render() {
    const message = this.props.status ?   "SignIn Your Account" : "Signout Successfully"
    return (
      <Fade when={this.state.show}>
        <div id='overlay'>
            <div className= 'overlay-body'>
              <div class='overlay-header'>
                <div class='title-text' />
                <div className='close-img' onClick={this.handleAnimation} /></div>
              <div className="signin-header">{message}</div>
              {this.props.status  &&
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()} />
              }
              </div>
          </div>
      </Fade>
    )
  }
}

export default Signin

