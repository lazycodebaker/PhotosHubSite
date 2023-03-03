

import React from 'react'

type HeroProps = {
    image: string;
    title: string;
    subtitle: string;
    imageId : string;
};

export const Hero : React.FC<HeroProps> = ({image, title, subtitle}) => {
    return (
        <>
            <img 
                className='absolute top-0 left-0 -z-10 w-screen h-screen object-fill'
                src={image}
                alt="random" 
            />
            <div className="absolute top-0 left-0 w-screen h-screen bg-gray-900 opacity-40"></div>

            <div className="z-10 absolute">
                <h1 className="text-4xl font-bold text-gray-50">{title}</h1>
                <h2 className="text-2xl font-bold text-gray-50">{subtitle}</h2>
            </div>

        </>
    );
};