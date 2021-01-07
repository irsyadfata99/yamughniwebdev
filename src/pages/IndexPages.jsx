import React, {useState} from 'react'
import HeroSection from '../components/HeroSection/IndexHero';
import AboutUs from '../components/AboutUs/AboutUs';
import Navbar from '../components/Navbar/IndexNav'
import Sidebar from '../components/Sidebar/IndexSide'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/AboutUs/Data';
import Division from '../components/Division/IndexDiv';
import Product from '../components/Product/IndexPro';
import Footer from '../components/Footer/IndexFooter';

const Home = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen)
    };

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>  
          <HeroSection />
          <AboutUs {...homeObjOne}/>
          <Division {...homeObjTwo}/>
          <Product {...homeObjThree}/>
          <AboutUs {...homeObjFour}/>
          <Footer />
        </>
    )
}

export default Home
