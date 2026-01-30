import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'dark' | 'form' | 'simple';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  withArrow?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  withArrow = false,
  disabled = false,
}) => {
  const baseClasses = 'font-chakrapetch font-semibold flex gap-2 justify-center items-center tracking-wider transition duration-300';
  
  const variantClasses = {
    primary: 'text-[#004aad] bg-white h-[50px] rounded-full ps-4 pe-2 py-2 w-auto group',
    dark: 'text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full ps-4 pe-2 py-2 group',
    form: 'w-full bg-gray-900 text-white py-4 rounded-xl text-lg font-medium hover:bg-black',
    simple: 'w-full bg-white py-3 rounded-xl text-[#004aad] font-semibold hover:bg-gray-100'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && (
        <Icon 
          icon="tabler:arrow-right" 
          width="24" 
          height="24" 
          className={`rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300 ${
            variant === 'primary' 
              ? 'bg-[#004aad] text-white' 
              : 'bg-prim text-white'
          }`} 
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};

export default Button;