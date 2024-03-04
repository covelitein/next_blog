import { ArrowLeft } from 'lucide-react'

import PostSkeleton from '@/components/posts/PostSkeleton'
import Container from '@/components/Container'

const Loading = () => {
  return (
    <section className='mt-16'>
      <Container className="max-w-4xl">
        <PostSkeleton />
        <div className='py-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 rounded-md'>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      </Container>
    </section>
  )
}
export default Loading
