import * as React from 'react';
import { FC } from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
    pageName: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ pageName }) => {
    return (
        <div className="flex items-baseline flex-wrap justify-center m-[0.9375rem]">
            <Link href="/" className="no-underline flex items-center text-white font-normal text-xl hover:underline after:relative after:content-[''] after:ml-2.5 after:mr-3 after:my-0 after:inline-block after:top-[0.0625rem] after:w-2 after:h-2 after:border-r-2 after:border-solid after:border-b-2 after:border-white after:-rotate-45 font-chakrapetch"> 
                Home
            </Link>
            <span className="text-white text-xl mx-2.5 font-chakrapetch">{pageName}</span>
        </div>
    );
};

export default Breadcrumb;