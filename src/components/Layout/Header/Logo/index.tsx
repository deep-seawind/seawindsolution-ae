import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logo from "/public/images/logo/seawind-logo.png";

const Logo: React.FC = () => {
    return (
        <Link href="/" className='font-mona font-bold logo text-2xl md:text-1xl'>
         <Image className='w-30' src={logo} alt="Seawind Logo" />
        </Link> 
    );
};

export default Logo;