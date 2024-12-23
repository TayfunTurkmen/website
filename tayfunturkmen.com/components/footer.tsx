"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { Github, Linkedin, Twitter } from 'lucide-react'

const content = {
  en: {
    copyright: "© 2024 Tayfun Türkmen. All rights reserved.",
  },
  tr: {
    copyright: "© 2024 Tayfun Türkmen. Tüm hakları saklıdır.",
  },
}

export function Footer() {
  const { language } = useLanguage()
  const { copyright } = content[language]

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-4 py-6 md:h-16 md:flex-row md:py-0">
        <div className="flex flex-1 items-center gap-4 px-8 text-sm leading-loose text-muted-foreground md:gap-2 md:px-0">
          {copyright}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tayfunturkmen"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com/tayfunturkmen"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://linkedin.com/in/tayfunturkmen"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

