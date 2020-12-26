import React from 'react'
import {Button, ArrowRight, ArrowForward} from '../reusable-content/ButtonSample'

import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, Column2, ImgWrap, Img} from './InfoElements'

const InfoSection = ({obj}) => {
    return (
        <>
        <InfoContainer lightBg={obj.lightBg} id={obj.id}>
            <InfoWrapper>
                <InfoRow imgStart={obj.imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{obj.topLine}
                                <Heading lightText={obj.lightText}>{obj.headline}
                                    <SubTitle darkText={obj.darkText}>{obj.description}</SubTitle>
                                    <BtnWrap>
                                        <Button to='/'
                                        primary={obj.primary?1:0}
                                        dark={obj.dark? 1:0}
                                        >{obj.buttonLabel}</Button>
                                    </BtnWrap>
                                </Heading>
                            </TopLine>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={obj.img} alt={obj.alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default InfoSection
