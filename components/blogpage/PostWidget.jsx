/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
      .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
      .then((result) => setRelatedPosts(result))
    }
  }, [slug, categories])

  return (
    <div className='bg-midnight shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b border-VividViolet pb-4'>{ slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
            <div className='w-16 flex-none'>
              <img src={post.featuredImage.url} height='60px' width='60px' alt={post.title} className='align-middle rounded-full'/>
            </div>
            <div className='flex-grow flex flex-col ml-4'>
              <small className='text-Orchid'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </small>
              <Link href={`/blog/post/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            </div>
        </div>

      ))}
    </div>
  )
}

export default PostWidget