import React, { useState } from 'react'
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonStyle';
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
} from './HeroStyle';

const Hero = (props) => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>We turn your ideas into code</HeroH1>
                <HeroP>
                we have the most productive method to work together
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='sigup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Lets work {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
