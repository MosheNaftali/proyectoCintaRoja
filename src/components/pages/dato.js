import React,{Component} from 'react'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Card from '../Card'

export default class Dato extends Component{
    render(){
        return(
            <div>
                <Header />
                <Card 
                name='Avengers: End Game'
                year="2018"
                genre='Action'
                director="Anthony Russo, Joe Russo"
                actors="Lorem Ipsum"
                sinopsis='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                vid='avengers.mp4'
                />
                <Footer />
            </div>
        )
    }
}