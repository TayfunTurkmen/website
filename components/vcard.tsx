'use client'

import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Vcard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-xl p-8 max-w-md w-full transform transition-all hover:scale-105 duration-300 ease-in-out">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Tayfun Türkmen</h1>
          <p className="text-gray-300 mb-6">Full Stack Developer</p>
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500">
            <img
              src="/placeholder.svg?height=128&width=128"
              alt="Tayfun Türkmen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-gray-300 text-center">
            Passionate about creating innovative web solutions and pushing the boundaries of technology.
          </p>
          <div className="flex justify-center space-x-4">
            <SocialLink href="https://github.com/tayfunturkmen" icon={<Github className="w-6 h-6" />} />
            <SocialLink href="https://linkedin.com/in/tayfunturkmen" icon={<Linkedin className="w-6 h-6" />} />
            <SocialLink href="https://twitter.com/tayfunturkmen" icon={<Twitter className="w-6 h-6" />} />
            <SocialLink href="mailto:tayfun@example.com" icon={<Mail className="w-6 h-6" />} />
          </div>
        </div>
      </div>
    </div>
  )
} 

function SocialLink({ href, icon } : { href: { type: string }, icon: { type: string } } ) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-blue-500 transition-colors duration-200"
    >
      {icon}
    </a>
  )
}
