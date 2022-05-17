import React from 'react'
import { useRouter } from 'next/router'
import { getCategories, getCategoryPost } from '../../../services'
import {
  PostCard,
  Categories,
  Layout,
  Loader,
} from '../../../components/blogpage'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

const CategoryPost = ({ posts }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <Layout>
      <div className="container mx-auto px-10 mb-8 text-white/90">
        <button
          onClick={() => {
            router.push('/blog')
          }}
          className="flex gap-x-2 text-FlamePea mb-2 ml-2 transition duration-100 transform hover:-translate-x-1"
        >
          <HiOutlineArrowNarrowLeft className="flex self-center" size={20} />
          <small className="flex self-center md:text-base">Go back</small>
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts?.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default CategoryPost

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug)

  return {
    props: { posts },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
