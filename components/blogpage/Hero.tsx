"use client"
import { Image } from "lucide-react"
import Container from "../Container"


const Hero = () => {
  return (
    <>
      
      <Container className="mt-9 lg:px-3 px-5">
          <section className="min-h-[50vh] bg-gray-200 rounded-lg flex flex-col justify-center">
                <div className="px-10">
                  <h3 className="text-4xl font-[600] bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Welcome to NextBlog</h3>
                  <h5 className="px-2 py-2">View blogs below you can even add yours</h5>
                </div>
          </section>
        </Container>
      
    </>
  )
}

export default Hero
