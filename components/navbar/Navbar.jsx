// 'use client'

import Link from "next/link"
// import { useMediaQuery } from 'react-responsive'
import { Home, Grid, Phone, Info , User } from 'lucide-react'
// import { useState } from 'react'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignOutButton,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
  import { auth } from '@clerk/nextjs/server'
import Image from "next/image"

export default async function Navbar() {
    const { userId, redirectToSignIn } = await auth()

  // Media query to determine if the screen width is less than 768px (mobile size)
//   const isMobile = useMediaQuery({ maxWidth: 768 })
    
  // Dummy state for logged-in status
//   const [isLoggedIn, setIsLoggedIn] = useState(false) // Set this according to your authentication logic

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-md py-4 text-black sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold">
            <Link href="/" className="flex justify-center items-center">
              <Image src='/logo-transparent.png' height={100} width={50} alt="logo"/>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-800 via-green-800 to-green-700 bg-clip-text text-transparent">
        WikiBay
      </h1>
            </Link>
          </h1>
          
            <div className=" space-x-6 hidden md:block">
              <Link href="/" className="text-lg hover:underline">Home</Link>
              <Link href="/categories" className="text-lg hover:underline">Categories</Link>
              <Link href="/about" className="text-lg hover:underline">About</Link>
              <Link href="/contact" className="text-lg hover:underline">Contact Us</Link>

             
            </div>
         
           {userId ? (
                <UserButton afterSignOutUrl="/"/>
              ) : (
                <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-800 via-green-700 to-green-600 py-1 px-2 rounded-xl text-white">
  <Link href="/sign-in" className="text-lg hover:underline">
    sign-in
  </Link>
  <span>/</span>
  <Link href="/sign-up" className="text-lg hover:underline">
    sign-up
  </Link>
</div>
              )}
        </div>
      </nav>

     
      
        <nav className="bg-white shadow-md py-4 fixed bottom-0 left-0 right-0 border-t text-black block md:hidden  z-50">
          <div className="flex justify-around items-center">
            <Link href="/" className="flex flex-col items-center">
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link href="/categories" className="flex flex-col items-center">
              <Grid className="h-6 w-6" />
              <span className="text-xs mt-1">Categories</span>
            </Link>
            <Link href="/about" className="flex flex-col items-center">
              <Info className="h-6 w-6" />
              <span className="text-xs mt-1">About us</span>
            </Link>

            <Link href="/my-software" className="flex flex-col items-center">
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">My Software</span>
            </Link>
          </div>
        </nav>
   
    </>
  )
}
