import Container from "@/components/Container";
import { AddBlogButton, Header, Hero, Posts } from "@/components/blogpage";
import { prisma } from "@/server";
import { headers } from "next/headers";

export default async function Home() {
  headers()
  const posts = (await prisma.post.findMany({})).reverse()
  return (
    <section className="">
      {/* header section start */}
        <Header />
      {/* header section end */}

      {/* hero section start */}
        <Hero />
      {/* hero section end */}

      {/* posts section start */}
        <Posts posts={posts}/>
      {/* posts section end */}

      {/* add blog icon */}
        <AddBlogButton />
      {/* add blog icon */}

    </section>
  );
}