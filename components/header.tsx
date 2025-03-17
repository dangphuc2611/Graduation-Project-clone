"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import CategoryDropdown from "./category-dropdown"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b w-100vw">
      <div>
        <div className="flex justify-between items-center h-16 container">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              LOGO
            </Link>
            
          </div>
          <input type="text" className="ml-4 w-64 h-6 bg-gray-200 rounded w-[50vw] h-7"></input>
          {/* Sign In */}
          <div>
            <Button navigateTo="/login-frame/" variant="ghost" className="text-gray-600">
              SIGN IN
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex border-t py-2 ">
          <ul className="container flex space-x-8 justify-around">
            <li>
              <Link href="/" className="text-sm font-medium hover:text-blue-500">
                HOME
              </Link>
            </li>
            <li className="relative">
              <button className="text-sm font-medium hover:text-blue-500" onClick={() => setIsOpen(!isOpen)}>
                CATEGORIES
              </button>
              {isOpen && <CategoryDropdown />}
            </li>
            <li>
              <Link href="/contact" className="text-sm font-medium hover:text-blue-500">
                CONTACT US
              </Link>
            </li>
            <li>
              <Link href="/settings" className="text-sm font-medium hover:text-blue-500">
                SETTING
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

