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
export default function PostCard({ post }: any) {
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
            <CardTitle className="text-gray-600 my-3 text-xl">{post.title}</CardTitle>
            <CardDescription className="font-[550] text-gray-500 text-sm">
            {truncate(post.content, 20, 25, 20)}
            </CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
            <Clock3 className="text-blue-500 text-sm" />
            <span className="text-blue-600 font-[550] text-sm">
                July 20, 2023
            </span>
            </div>
        </CardFooter>
        </Card>
    </Link>
  );
}
