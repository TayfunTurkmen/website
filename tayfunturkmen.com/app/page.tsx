"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"

const content = {
  en: {
    greeting: "Hello, I'm",
    name: "Tayfun Türkmen",
    description: "Software Developer & Tech Enthusiast",
    cta: "Learn More",
  },
  tr: {
    greeting: "Merhaba, ben",
    name: "Tayfun Türkmen",
    description: "Yazılım Geliştirici & Teknoloji Meraklısı",
    cta: "Daha Fazla",
  },
}

export default function Home() {
  const { language } = useLanguage()
  const { greeting, name, description, cta } = content[language]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-2 text-primary">
        {greeting} <span className="text-foreground">{name}</span>
      </h1>
      <p className="text-xl mb-8 text-muted-foreground">{description}</p>
      <Link href="/about">
        <Button size="lg" className="bg-pastelPurple hover:bg-pastelPurple-dark text-white">
          {cta}
        </Button>
      </Link>
    </div>
  )
}

