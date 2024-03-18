import ReactMarkdown from "react-markdown";
import { Post } from "@prisma/client";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
import { formatDate } from "@/lib/getDate";
import { headers } from "next/headers";
import { useSession } from "next-auth/react";
import { prisma } from "@/server";

interface Props {
  post: Post;
}

const PostDetails = async ({ post }: Props) => {
  const user = await prisma.user.findUnique({
    where: {
      id: post?.userId,
    },
  });

  return (
    <section>
      <Link href="/" className="flex gap-1 items-center mb-5">
        <ArrowLeft size={18} />
        Back
      </Link>
      <div className="mb-7">
        <img
          src={post.img}
          alt=""
          className="w-full sm:h-[30rem] object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex items-center gap-4 my-5">
        <div className="my-3">
          <img
            src={user?.img}
            alt=""
            className="h-[3rem] w-[3rem] rounded-full object-cover"
          />
        </div>
        <h2 className="text-sm font-[500] text-gray-500">{user?.name}</h2>
      </div>
      <header>
        <h1 className="mb-2 inline-block font-bold text-2xl md:text-3xl leading-snug lg:text-4xl">
          {post.title}
        </h1>
        <div className="flex items-center gap-2">
          <Clock3 className="text-blue-500 text-sm" />
          <span className="text-blue-600 font-[550] text-sm">
            {formatDate(post.date)}
          </span>
        </div>
      </header>
      <article className="my-8 sm:text-lg prose prose-stone dark:prose-invert">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </section>
  );
};
export default PostDetails;
