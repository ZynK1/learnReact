import React, {useState, useEffect, useRef} from 'react'
import {Button, ArrowForward, ArrowRight} from '../reusable-content/ButtonSample'

import {SlideContainer, SlideWrapper, SliderButtons, PrevArrow, NextArrow, SlideShows, SlideShow, SlideImage, SlideContent, ButtonWrapper} from './SlideElements'

const SlideSection = ({slides}) => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    const [current, setCurrent] = useState(0);
    const length = slides.length
    const timeout = useRef(null)

    //Automated Slides
    // useEffect(() => {
    //     const nextSlide =() =>{
    //         setCurrent(current => (current===length-1 ? 0 : current+1))
    //     }

    //     timeout.current = setTimeout(nextSlide, 10000)

    //     return function () {
    //         if(timeout.current){
    //             clearTimeout(timeout.current);
    //         }
    //     };
    // }, [current, length]);

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current);
        }
        setCurrent(current === length-1 ? 0 : current+1);
        //console.log(current);
    }

    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length-1 : current-1);
        //console.log(current);
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <>
        <SlideContainer>
            <SlideWrapper>
                {slides.map((slide, index) =>{
                    return (
                        <SlideShows key={index}>
                            {index === current && (
                                <SlideShow>
                                    <SlideImage src={slide.image} alt={slide.alt} />
                                    <SlideContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                        <ButtonWrapper>
                                          <Button to={slide.path} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                                        {slide.label}{hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                                        </ButtonWrapper>
                                    </SlideContent>
                                </SlideShow>
                            )}
                        </SlideShows>
                    )
                })} 
            <SliderButtons>
                        <PrevArrow onClick={prevSlide} />
                        <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </SlideWrapper>    
        </SlideContainer>  
        </>
    )
}

export default SlideSection
