import React from 'react';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
export default function Error (){
    return(
        <div>
            <Hero >
                <Banner title='404' subTitle='page not found' textOfButton='return home' toOfLink='/' />
            </Hero>
        </div>
    );
}