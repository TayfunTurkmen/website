"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = {
  en: [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  tr: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "Hakkımda" },
    { href: "/contact", label: "İletişim" },
  ],
}

export function MainNav() {
  const { language, setLanguage } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Tayfun Türkmen</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems[language].map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  {language === 'en' ? 'EN' : 'TR'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('tr')}>
                  Türkçe
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

