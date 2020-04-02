import React from 'react';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';

export default function Home (){
    return(
        <>
            <Hero>
                <Banner title='luxurious rooms' subTitle='deluxe rooms starting at $299' textOfButton='our rooms' toOfLink='/rooms' />
            </Hero>
            <Services />
            <FeaturedRoom />
        </>
    );
}