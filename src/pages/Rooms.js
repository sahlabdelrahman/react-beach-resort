import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
    return(
        <>
            <Hero hero='roomsHero' >
                <Banner title='our rooms' textOfButton='return home' toOfLink='/' />
            </Hero>
            <RoomsContainer />
        </>
    )
}

export default Rooms;