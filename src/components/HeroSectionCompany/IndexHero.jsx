import React from 'react'
import img from '../../images/hero-building.svg'
import {
    HeroContainer, 
    HeroBg,
    Img, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    } from './HeroElement'

const HeroSection = () => {

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
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
