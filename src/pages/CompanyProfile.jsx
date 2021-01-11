import React from 'react'
import Footer from '../components/Footer/IndexFooter'
import Navbar from '../components/NavbarCompany/IndexNav'
import Hero from '../components/HeroSectionCompany/IndexHero'
import Companyprofile from '../components/CompanyProfileCard/IndexPro'



const CompanyProfile = () => {
    return (
        <>
           <Navbar />
           <Hero />
           <Companyprofile />
           <Footer />
        </>
    )
}

export default CompanyProfile