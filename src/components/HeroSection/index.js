import React, { useState } from 'react'
import { Button, ArrowRight, ArrowForward } from '../reusable-content/ButtonSample'
import Video from '../videos/video.mp4'

import {HeroContainer, HeroVideo, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
        <HeroContainer>
            <HeroVideo>
                <VideoBg autoPlay='true' loop muted src={Video} type='video/mp4' />
            </HeroVideo>
            <HeroContent>
                <HeroH1>Start Your Assignment!!</HeroH1>
                <HeroP>Sign up for a new account and receive $50 in credit towards your next payment.</HeroP>
                <HeroBtnWrapper>
                    <Button to='sign-up' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default HeroSection
