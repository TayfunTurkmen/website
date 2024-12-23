"use client"

import { useLanguage } from "@/contexts/LanguageContext"

const content = {
  en: {
    title: "About Me",
    description: "Hi, I'm Tayfun Türkmen. I'm a software developer passionate about creating elegant and efficient solutions.",
    skills: ["JavaScript", "React", "Node.js", "Python", "Machine Learning"],
    skillsTitle: "My Skills",
  },
  tr: {
    title: "Hakkımda",
    description: "Merhaba, ben Tayfun Türkmen. Zarif ve verimli çözümler üretmeye tutkulu bir yazılım geliştiricisiyim.",
    skills: ["JavaScript", "React", "Node.js", "Python", "Makine Öğrenmesi"],
    skillsTitle: "Yeteneklerim",
  },
}

export default function AboutPage() {
  const { language } = useLanguage()
  const { title, description, skills, skillsTitle } = content[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary">{title}</h1>
      <p className="text-lg mb-8">{description}</p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">{skillsTitle}</h2>
      <ul className="list-disc list-inside space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-lg">{skill}</li>
        ))}
      </ul>
    </div>
  )
}

