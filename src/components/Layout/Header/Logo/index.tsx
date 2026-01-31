import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Logo: React.FC = () => {
    return (
        <Link href="/" className='font-mona font-bold logo text-2xl md:text-1xl'>
            {/* Note the string path and required width/height */}
            <Image 
                className='w-30' 
                src="/images/logo/seawind-logo-1.png" 
                alt="Seawind Logo" 
                width={120} 
                height={40} 
            />
        </Link> 
    );
};

export default Logo;