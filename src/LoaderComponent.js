import React from 'react'
import LoaderImage from '../src/Images/loader.svg'

export default function Loader() {
    return (
        <div style = {{width: '100%',height: '80%',alignItems: 'center',justifyContent: 'center'}}>
            <img src = {LoaderImage} style = {{width: '100%',height: '100%',alignItems: 'center',justifyContent: 'center'}} />
        </div>
    )
}

