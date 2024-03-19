//@ts-nocheck
import { formSchema } from '@/schemaValidations'
import { prisma } from '@/server'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'


export async function POST(request: Request) {
    try {
      const body = await request.json()
      const validation = formSchema.safeParse(body)


      if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
      }

      const session = await getServerSession(authOptions);

      const user = await prisma.user.findUnique({
        where : {
          email : session?.user?.email
        }
      })

      if(!user)  {
        return NextResponse.json("user id doesn't exist", { status: 400 })
      }
  
      const newPost = await prisma.post.create({
        data: {
          title: body.title,
          img: body.img,
          content: body.content,
          author: {
            connect: {id: user.id}
          },
        }
      })
  
      return NextResponse.json(newPost)
    } catch(error) {
      console.log(error)
      return NextResponse.json('error', {
        status: 500
      })
    }
}