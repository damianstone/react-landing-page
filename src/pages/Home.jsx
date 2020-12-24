import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/HeroSection/Hero';
import Info from '../components/InfoSection/Info';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import { HomeObjOne, HomeObjTwo, HomeObjThree } from '../components/InfoSection/Data';

const Home = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Info {...HomeObjOne} />
            <Info {...HomeObjTwo} />
            <Services />
            <Info {...HomeObjThree} />
            <Footer />
        </>
    );
};

export default Home;
