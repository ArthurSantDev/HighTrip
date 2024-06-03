import Image from 'next/image';
import React from 'react'

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant:string;
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button 
    className={`flexCenter gap-3 rounded-full border transition-all duration-150 hover:scale-[1.05] ${variant}`}
    type={type}>
        {icon && <Image src={icon} alt={title} width={22} height={22}/>}
        <label className='bold-16 whitespace-nowrap pointer-events-none'>
            {title}
        </label>
    </button>
  )
}

export default Button
