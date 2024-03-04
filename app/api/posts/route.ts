import { formSchema } from '@/schemaValidations'
import { prisma } from '@/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
      const body = await request.json()
      const validation = formSchema.safeParse(body)
      if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
      }
  
      const newPost = await prisma.post.create({
        data: body
      })
  
      return NextResponse.json(newPost)
    } catch {
      return NextResponse.json('error', {
        status: 500
      })
    }
  }