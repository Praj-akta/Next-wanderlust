import React, { useState} from 'react';
import AboutBody from './components/AboutUsBody';

const About = () => {
    const [toggleId, setToggleId] = useState({
        title1: false, title2: false, title3: false, title4: false
    });
    const [isToggleOpen, setToggleState] = useState(false);
    
    return (
        <AboutBody 
            toggleId={toggleId}
            setToggleId={setToggleId}
            isToggleOpen={isToggleOpen} 
            setToggleState={setToggleState}
        />
    );
}

export default About;