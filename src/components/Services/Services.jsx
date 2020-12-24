import React from 'react'

import {
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from './ServicesStyle';

const Services = (props) => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src='/images/svg-4.svg' />
                    <ServicesH2>Responsive design</ServicesH2>
                    <ServicesP>we adjust your page to all platforms</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='/images/svg-5.svg' />
                    <ServicesH2>Responsive design</ServicesH2>
                    <ServicesP>we adjust your page to all platforms</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='/images/svg-6.svg' />
                    <ServicesH2>Responsive design</ServicesH2>
                    <ServicesP>we adjust your page to all platforms</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
