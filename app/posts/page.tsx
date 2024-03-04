import { PostSkeleton } from "@/components/posts"
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, 
} from "@/components/ui/card"
import { prisma } from "@/server"
import { headers } from "next/headers"

export default async function Posts () {
    headers()

  const posts = (await prisma.post.findMany({})).reverse()

    return(
       <section className="min-h-[100vh] w-11/12 mx-auto pt-32">
        <div className="grid grid-cols-3 gap-5">
        {
          posts.length > 0 ? (
            posts.map((post:any, i)=> (
              <Card key={i} className="shadow-none border-none">
                  <CardHeader className="p-0">
                    <div>
                       <img src={post.img} alt="" className="h-[20rem] object-cover rounded-md" loading="lazy"/>
                    </div>
                  </CardHeader>
                  <CardContent>
                      <h3 className="text-lg font-[600] my-3">
                        {post.title}
                      </h3>
                  </CardContent>
              </Card>
            ))
          ):"No posts found"
        }
        </div>
       </section>
    )
}