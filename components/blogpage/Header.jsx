import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/logo/logo.png'
import { getCategories } from '../../services'

const Header = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
      getCategories().then(newcCategories => 
        setCategories(newcCategories))
    }, [])

  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='w-full inline-block border-b border-VividViolet '>
            <div className='md:float-left block'>
                <Link href='/'>
                    <Image
                        src={logo}
                        alt="Crypto Yoyo Club Logo"
                        width={120}
                        height={120}
                        style={{
                        cursor: 'pointer',
                        }}
                    />
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map(category => (
                    <Link key={category.slug} href={`/blog/category/${category.slug}`}>
                        <span className='md:float-right mt-2 md:mt-12  text-white/90 ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header