"use client"
import Container from '../Container'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useSession } from 'next-auth/react'

const Header = () => {
  const { data } = useSession()
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
              <Link href='/api/auth/signin' className="bg-[#151515] text-white px-5 py-2 hover:bg-transparent hover:text-[#151515] border-2 border-[#151515]">Sign In</Link>
            {/* sign in button end */}
          </Container>
       </header>
      
    </>
  )
}

export default Header
