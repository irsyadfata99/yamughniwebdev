import React from 'react'
// import {Button} from '../ButtonElement'
import img from '../../images/office.svg'
import {
    AboutContainer, 
    AboutWrapper, 
    AboutRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    // BtnWrap, 
    ImgWrap,
    Img 
    } from './AboutUsElement'

const AboutUs = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    description1,
    description2,
    // buttonLabel,
    alt,

}) => {
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <Subtitle darkText={darkText}>{description1}</Subtitle>
                            <Subtitle darkText={darkText}>{description2}</Subtitle>
                            {/* <BtnWrap>
                                <Button to="/CompanyProfile">{buttonLabel}</Button>
                            </BtnWrap> */}
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutUs
