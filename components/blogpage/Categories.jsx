import React, { useState, useEffect} from 'react'
import Link from 'next/link'

import { getCategories } from '../../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(newcCategories => 
      setCategories(newcCategories))
  }, [])

  return (
    <div className='bg-midnight shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b border-VividViolet pb-4'> Categories </h3>
      {categories.map((category) => (
        <Link href={`/blog/category/${category.slug}`} key={category.slug}>
          <span className='cursor-pointer block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories