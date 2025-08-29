'use client'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'

export const HeroHeader = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  
  return (
    <header>
      <nav className="fixed z-20 w-full px-2">
        <div className={cn(
          'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', 
          isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
        )}>
          <div className="flex items-center justify-between py-3 lg:py-4">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2">
              <MistKitLogo />
            </Link>
            <div className="flex items-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const MistKitLogo = ({ className }: { className?: string }) => (
  <div
    aria-hidden
    className={cn('border-background bg-linear-to-b rounded-(--radius) relative flex size-9 translate-y-0.5 items-center justify-center border from-yellow-300 to-orange-600 shadow-lg shadow-black/20 ring-1 ring-black/10', className)}>
    <BookOpen className="mask-b-from-25% size-6 fill-white stroke-white drop-shadow-sm" />
    <BookOpen className="absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
    <div className="z-1 h-4.5 absolute inset-2 m-auto w-px translate-y-px rounded-full bg-black/10"></div>
  </div>
)
