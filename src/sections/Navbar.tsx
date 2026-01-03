import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import logoFull from '@/assets/logo-full.png'
import { navLinks } from '@/config/navigation'
import { scrollToSection } from '@/lib/scroll'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    scrollToSection(href)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-dark/95 backdrop-blur-lg border-b ${
        isScrolled
          ? 'border-neon/30 shadow-[0_2px_20px_rgba(57,255,20,0.15)]'
          : 'border-neon/20'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 relative">
          {/* Logo */}
          <a href="#" className="flex items-center z-10">
            <img
              src={logoFull}
              alt="Spiners"
              className="h-10 md:h-12 w-auto transition-all"
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-neon transition-colors duration-200 text-base md:text-lg font-medium px-2"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Spacer for layout balance on desktop */}
          <div className="hidden lg:block w-[100px]" />

          {/* Mobile Menu */}
          <div className="lg:hidden z-10">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="p-2">
                    <Menu className="h-6 w-6 md:h-7 md:w-7" />
                  </Button>
                </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-dark-100">
                <SheetTitle className="text-white">Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  <AnimatePresence>
                    {navLinks.map((link, index) => (
                      <motion.button
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleNavClick(link.href)}
                        className="text-left text-lg text-gray-300 hover:text-neon transition-colors py-2 border-b border-white/10"
                      >
                        {link.label}
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
