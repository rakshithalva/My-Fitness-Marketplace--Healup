"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Leaf, ShoppingCart } from 'lucide-react'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Leaf className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Healup
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/blog"
              className={pathname === '/blog' ? 'text-foreground' : 'text-foreground/60 transition-colors hover:text-foreground'}
            >
              Blog
            </Link>
            <Link
              href="/shop"
              className={pathname === '/shop' ? 'text-foreground' : 'text-foreground/60 transition-colors hover:text-foreground'}
            >
              Shop
            </Link>
            <Link
              href="/consultancy"
              className={pathname === '/consultancy' ? 'text-foreground' : 'text-foreground/60 transition-colors hover:text-foreground'}
            >
              Consultancy
            </Link>
            <Link
              href="/marketplace"
              className={pathname === '/marketplace' ? 'text-foreground' : 'text-foreground/60 transition-colors hover:text-foreground'}
            >
              Marketplace
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add search functionality here if needed */}
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" asChild className="mr-2">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="mr-2">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button variant="ghost" className="mr-2">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header