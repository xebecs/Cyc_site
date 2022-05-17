import React from 'react'
import {
  Categories,
  Layout,
  PostWidget,
  PostDetail,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from '../../../components/blogpage'
import { getPosts, getPostDetails } from '../../../services'
import { useRouter } from 'next/router'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

const PostDetails = ({ post }) => {
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
            <PostDetail post={post} />
            <Author author={post?.author} />
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)

  return {
    props: { post: data },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
