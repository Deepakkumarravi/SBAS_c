import React, { Component } from 'react'
import '../Product/Product.css'
import fire from '../FirebaseConfig'
import TrendingSlide from '../TrendingSlick/TrendingSlick'
// const sourceImg = [{id: 1,price: 4500,actual_price: 6000,image: FaceBook}, {id: 1,price: 4500,actual_price: 6000,image: Instagram}, {id: 1,price: 4500,actual_price: 6000,image: YouTube}, {id: 1,price: 4500,actual_price: 6000,image: WhatsApp}, {id: 1,price: 4500,actual_price: 6000,image: FaceBook}, {id: 1,price: 4500,actual_price: 6000,image: FaceBook}, {id: 1,price: 4500,actual_price: 6000,image: FaceBook}, {id: 1,price: 4500,actual_price: 6000,image: FaceBook}]

const db = fire.firestore()

export default class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: {
                recipient: 'deepakooty456@gmail.com',
                sender: 'deepakooty456@gmail.com',
                subject: 'Hello',
                text: 'Send by sendgrid'
            },
            todos: '',
            student: [{ inviter_name: "Name" }, { inviter_name: "Name" }, { inviter_name: "Name" }, { inviter_name: "Name" }, { inviter_name: "Name" }, { inviter_name: "Name" }],
            userId: ''
        }
    }


    handleSubmit = () => {
        // let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
        // fire.database().ref('messages').push("Hello World");
        // this.setState({
        //   todos : "Hello World"
        // })
        const tempDate = new Date()
        const timestamp = tempDate.getTime().toString()

        db.collection('invite_now').doc(this.state.userId).set({
            inviter_name: this.state.userId,

        }).then(() => {
            alert('document written with ID')
        }).catch((error) => {
            alert('error' + error)
        })

    }


    handleGetdata = () => {
        const tempDate = new Date()
        const timestamp = tempDate.getTime().toString()

        db.collection('invite_now').get().then((response) => {
            var std = []
            response.forEach(res => {
                const data = res.data()
                std.push(data)
            })
            this.setState({ student: std })
            alert(JSON.stringify(std))
        }).catch((error) => {
            alert('error' + error)
        })

    }

    handleChangeText = (e) => {
        this.setState({ userId: e.target.value })
    }

    render() {

        // let images = []
        // sourceImg.forEach(item => {
        //     images.push(
        //         <div className = "item-container">
        //             <div>
        //             <img src={item.image} className="saree-image" />
        //             </div>
        //             <div>Soft Silk Sares</div>
        //             <div>Rs 4500</div>
        //         </div>)
        // })
// 
        return (
            <div id="product">
                {/* <div className="product-container">
                    {images}
                </div> */}
                {/* <TrendingSlide /> */}
            </div>
        )
    }
}

