import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import HeroSection from '../HeroSection'
import SlideSection from '../SlideSection'
import {SliderData} from '../reusable-content/SliderData'
import InfoSection from '../InfoSection'

import {homeObjOne, homeObjTwo, homeObjThree} from '../reusable-content/InfoData'
import Services from '../ServiceSection'
import Footer from '../Footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroSection />
        <SlideSection slides={SliderData} />
        <InfoSection obj={homeObjTwo}/>
        <InfoSection obj={homeObjOne}/>
        <Services />
        <InfoSection obj={homeObjThree}/>
        <Footer />
        </>
    )
}

export default Home
