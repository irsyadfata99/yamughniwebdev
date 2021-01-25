import React, {useState, useEffect} from 'react'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    // NavBtn,
    // NavBtnLink
    } from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect (() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick= {toggleHome}>Yamughni</NavLogo>
                {/* <NavBtn>
                    <NavBtnLink to="/signin" 
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Sign In</NavBtnLink>
                </NavBtn> */}
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
