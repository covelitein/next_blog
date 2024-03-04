import { PostSkeleton } from "@/components/posts";

export default function Loading() {
  <section className="min-h-[100vh] w-11/12 mx-auto pt-32">
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </div>
  </section>;
}
