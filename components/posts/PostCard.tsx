import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Clock3 } from "lucide-react";
import { truncate } from "@/lib/utils";
import { formatDate } from "@/lib/getDate";
import { prisma } from "@/server";

export default async function PostCard({ post }: any) {
  const user = await prisma.user.findUnique({
    where: {
      id: post?.userId,
    },
  });

  return (
    <Link href={`/posts/${post.id}`}>
      <Card className="shadow-none border-none">
        <CardHeader className="p-0 rounded-lg overflow-hidden">
          <img
            src={post.img}
            alt=""
            className="h-[15rem] object-cover"
            loading="lazy"
          />
        </CardHeader>
        <CardContent className="px-3 py-4">
          <CardTitle className="text-gray-600 my-3 text-xl">
            {post.title}
          </CardTitle>
          <CardDescription className="font-[550] text-gray-500 text-sm">
            {truncate(post.content, 20, 25, 20)}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex-col items-start px-2">
          <div className="flex items-center gap-2">
            <Clock3 className="text-blue-500 text-sm" />
            <span className="text-blue-600 font-[550] text-sm">
              {formatDate(post.date)}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="my-3">
              <img
                src={user?.img}
                alt=""
                className="h-[3rem] w-[3rem] rounded-full object-cover"
              />
            </div>
            <h2 className="text-sm font-[500] text-gray-500">{user?.name}</h2>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
