"use client"
import Container from '../Container'
import Link from 'next/link'
import { Button } from '../ui/button'

const Header = () => {
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
              <Button className="hover:bg-transparent hover:text-[#151515] border-2 border-[#151515]">Sign In</Button>
            {/* sign in button end */}
          </Container>
       </header>
      
    </>
  )
}

export default Header
