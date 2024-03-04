import { Header } from "@/components/blogpage";
import Link from "next/link";

export default async function Home() {
  
  return (
    <div>
      <Header />
      <section className="min-h-[80vh] flex flex-col justify-center items-center gap-4">
        <h4 className="text-4xl text-center max-md:text-2xl">Welcome to Next blogs</h4>
        <Link href={'/posts'} className="bg-[#151515] text-white p-3 rounded-lg ">View Posts</Link>
      </section>
    </div>
  );
}