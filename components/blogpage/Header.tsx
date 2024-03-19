"use client"
//@ts-nocheck
import Container from '../Container'
import Link from 'next/link'
import { Button } from '../ui/button'
import { signOut, signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || '/'

  return (
    <>
      <header className="py-3">
          <Container className="flex items-center justify-between">
            {/* logo section start */}
              <Link href={'/'} className="font-bold text-2xl text-gray-500">
                 NextBlogs
              </Link>
            {/* logo section end */}

            {/* sign in button start */}
            {
              status == 'authenticated' ? (
                    <Button onClick={() => signOut()} className="bg-[#151515] text-white px-5 py-2 hover:bg-transparent hover:text-[#151515] border-2 border-[#151515] rounded-md">Sign Out</Button>
                ) : (
                  <Button onClick={() => signIn('google', { callbackUrl })} className="bg-[#151515] text-white px-5 py-2 hover:bg-transparent hover:text-[#151515] border-2 border-[#151515] rounded-md">Sign In</Button>
                )
            }
            {/* sign in button end */}
          </Container>
       </header>
      
    </>
  )
}

export default Header