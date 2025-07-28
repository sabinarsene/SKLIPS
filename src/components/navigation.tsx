"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Menu, X, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useCallback } from "react"
import { useCart } from "@/contexts/cart-context"
import CartModal from "@/components/cart-modal"

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("acasa")
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Correct destructuring from useCart
  const { state } = useCart()

  // Handle hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Acasă", href: "/", id: "acasa" },
    { name: "Servicii", href: "/servicii", id: "servicii" },
    { name: "Magazin", href: "/magazin", id: "magazin" },
    { name: "Blog", href: "/blog", id: "blog" },
    { name: "Contact", href: "/contact", id: "contact" },
  ]

  // Improved scroll spy with Intersection Observer
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("acasa")
      return
    }

    const sections = [
      { id: "acasa", element: null },
      { id: "despre", navId: "acasa" },
      { id: "servicii-preview", navId: "servicii" },
      { id: "magazin-preview", navId: "magazin" },
      { id: "blog-preview", navId: "blog" },
      { id: "contact-cta", navId: "contact" },
    ]

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const section = sections.find((s) => s.id === sectionId)
          if (section) {
            const navId = section.navId || section.id
            setActiveSection(navId)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section.id)

        if (element) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            const navId = section.navId || section.id
            setActiveSection(navId)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  const handleNavClick = useCallback(
    (e: React.MouseEvent, item: any) => {
      if (pathname === "/" && item.id !== "acasa") {
        e.preventDefault()

        const sectionMap = {
          servicii: "servicii-preview",
          magazin: "magazin-preview",
          blog: "blog-preview",
          contact: "contact-cta",
        }

        const targetId = sectionMap[item.id]
        const targetSection = document.getElementById(targetId)

        if (targetSection) {
          const navbarHeight = 80
          const elementPosition = targetSection.offsetTop - navbarHeight

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          })

          setActiveSection(item.id)
          setIsOpen(false)
        }
      } else if (item.id === "acasa" && pathname === "/") {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
        setActiveSection("acasa")
        setIsOpen(false)
      } else {
        // For other pages, just close mobile menu
        setIsOpen(false)
      }
    },
    [pathname],
  )

  const isActive = (item: any) => {
    if (pathname === "/") {
      return activeSection === item.id
    }
    return pathname === item.href
  }

  // Don't render cart count until mounted to avoid hydration mismatch
  const cartItemCount = mounted ? state.itemCount : 0

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-red-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="relative">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  SkinLips
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg blur opacity-20 animate-pulse"></div>
              </div>
            </Link>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative transition-all duration-300 group ${
                    isActive(item) ? "text-red-600 font-semibold" : "text-gray-700 hover:text-red-600"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 ${
                      isActive(item) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {/* Cart Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative text-gray-700 hover:text-red-600 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                    {cartItemCount}
                  </span>
                )}
              </Button>

              {/* CTA Button */}
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  Programează-te
                </Button>
              </Link>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t border-red-100">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item)
                        ? "text-red-600 bg-red-50 font-semibold"
                        : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Cart Button */}
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsCartOpen(true)
                    setIsOpen(false)
                  }}
                  className="mx-4 border-red-600 text-red-600 hover:bg-red-600 hover:text-white relative"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Coșul Meu
                  {cartItemCount > 0 && (
                    <span className="ml-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Button>

                <Link href="/contact">
                  <Button className="mx-4 bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Programează-te
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Modal */}
      {mounted && <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
    </>
  )
}
