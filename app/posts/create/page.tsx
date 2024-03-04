import { Header } from "@/components/blogpage";
import { CreatePostForm } from "@/components/posts";

export default async function CreatePost () {
    return(
        <section className="">
            {/* header section start */}
              <Header />
            {/* header section end */}
            {/* create post form start */}
                <CreatePostForm />
            {/* create post form end */}
        </section>
    )
}