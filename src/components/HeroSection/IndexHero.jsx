import React, {useState} from 'react'
import Video from '../../videos/building.mp4'
import {Button} from '../ButtonElement'
import {
    HeroContainer, 
    HeroBg, 
    VideoBg,
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
                <VideoBg autoPlay loop muted src={Video} type='building/mp4' />
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
