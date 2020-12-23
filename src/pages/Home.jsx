import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/HeroSection/Hero';
import Info from '../components/InfoSection/Info';
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
            <Info {...HomeObjThree} />
        </>
    );
};

export default Home;
