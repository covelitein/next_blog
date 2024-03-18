//@ts-nocheck
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '@/server';


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_APP_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_APP_CLIENT_SECRET as string
    })
  ],
  
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  },

  callbacks : {
    async session({session}) {
      return session
    },

    async signIn({ profile, user }) {
       const userData =  await prisma.user.findUnique({
          where: {
            email: profile?.email
          }
        })

        if(!userData) {
          await prisma.user.create({
            data: {
              name: profile?.name,
              email: profile.email,
              img: user?.image
            }
          })
        } 

        return user
    }
  },
  
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,

}