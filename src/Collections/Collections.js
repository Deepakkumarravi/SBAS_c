import React, { Component } from 'react'
import '../Collections/Collections.css'
import Header from '../Header/Header'
import RecentCollection from '../RecentCollection/RecentCollection'
import Footer from '../Footer/Footer'

export default class Collections extends Component {
    render() {
        return (
            <div>
                <Header />
                <RecentCollection />
                <Footer />
            </div>

        )
    }
}
