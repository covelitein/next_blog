//@ts-nocheck
import Container from "@/components/Container";
import { Header } from "@/components/blogpage";
import PostDetails from "@/components/posts/PostDetails";
import { prisma } from "@/server";
import { cache } from "react";

interface Params {
  params: { id: string };
}

const fetchPost = cache((postId: string) => {
  if (postId.length >= 25) {
    return null;
  }
  try {
    return prisma.post.findFirst({ where: { id: postId } });
  } catch (err) {
    return null;
  }
});

export default async function Post({ params: { id } }: Params) {
  const post = await fetchPost(id);

  const user = await prisma.user.findUnique({
    where: {
      id: post?.userId,
    },
  });

  return (
    <section className="">
      <Header />
      <Container className="max-w-4xl mt-10">
        <PostDetails post={post} user={user} />
      </Container>
    </section>
  );
}

export async function generateMetadata({ params }: Params) {
  const post = await fetchPost(params.id);

  return {
    title: post?.title,
    description: "Details of issue " + post?.id,
  };
}
