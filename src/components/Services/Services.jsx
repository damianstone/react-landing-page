import React from 'react'
import Img1 from '../../images/svg-4.svg';
import Img2 from '../../images/svg-5.svg';
import Img3 from '../../images/svg-6.svg';

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
                    <ServicesIcon src={Img1}/>
                    <ServicesH2>Responsive design</ServicesH2>
                    <ServicesP>we adjust your page to all platforms</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Img2} />
                    <ServicesH2>Responsive design</ServicesH2>
                    <ServicesP>we adjust your page to all platforms</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Img3} />
                    <ServicesH2>Responsive design</ServicesH2>
                    <ServicesP>we adjust your page to all platforms</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
