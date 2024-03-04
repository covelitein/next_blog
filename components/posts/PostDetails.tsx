import ReactMarkdown from 'react-markdown'
import { Post } from '@prisma/client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Props {
  post: Post
}

const PostDetails = ({ post }: Props) => {
  return (
    <section>
        <Link href='/' className='flex gap-1 items-center mb-5'>
          <ArrowLeft size={18} />
           Back
        </Link>
        <div className='mb-7'>
            <img src={post.img} alt="" className='w-full sm:h-[30rem] object-cover' loading='lazy'/>
        </div>
      <header>
        <h1 className='mb-2 inline-block font-bold text-2xl md:text-3xl leading-snug lg:text-4xl'>
          {post.title}
        </h1>
      </header>

      <article className='my-8 sm:text-lg prose prose-stone dark:prose-invert'>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </section>
  )
}
export default PostDetails