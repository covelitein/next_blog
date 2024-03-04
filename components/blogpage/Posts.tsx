import { Clock3 } from "lucide-react";
import Container from "../Container";
import { PostCard } from "../posts";


export default function Posts({ posts } : any) {
  return (
    <section className="py-32">
      <Container className="max-w-5xl lg:px-4 sm:px-20 px-5">
        {
            posts.length > 0 ? (
                <>
                <div>
                <h1 className="text-3xl font-bold mb-8 text-gray-500">BLOGS</h1>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-cols-1 gap-8">
                    {
                        posts.map((post:any)=>(
                            <PostCard post={post} key={post.id}/>
                        ))
                    }
                </div>
                </>
            ) : (
                <div className="my-4">
                    No post found
                </div>
            )
        }
      </Container>
    </section>
  );
}