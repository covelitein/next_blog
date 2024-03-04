import { CreatePostForm } from "@/components/posts";

export default async function CreatePost () {
    return(
        <div className="h-[100vh] w-2/5 mx-auto flex justify-center items-center">
            <CreatePostForm />
        </div>
    )
}