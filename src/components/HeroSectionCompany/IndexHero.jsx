import React, {useState} from 'react'
import {Button} from '../ButtonElement'
import img from '../../images/hero-building.svg'
import {
    HeroContainer, 
    HeroBg,
    Img, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
    } from './HeroElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
            <Img src={img} alt="building"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Yamughni Corporate</HeroH1>
                <HeroP>Berkarya Membangun Ekonomi Bersama Menuju Masyarakat 
                    Sejahtera Berdasarkan Nilai Ilahi.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="about" onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' offset={-80}
                        >
                            About Us {hover ? <ArrowForward /> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
