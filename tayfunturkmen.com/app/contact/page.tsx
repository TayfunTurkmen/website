"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const content = {
  en: {
    title: "Contact Me",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    success: "Message sent successfully!",
    error: "There was an error sending your message. Please try again.",
  },
  tr: {
    title: "İletişim",
    name: "İsim",
    email: "E-posta",
    message: "Mesaj",
    send: "Mesaj Gönder",
    success: "Mesajınız başarıyla gönderildi!",
    error: "Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
  },
}

export default function ContactPage() {
  const { language } = useLanguage()
  const { title, name, email, message, send, success } = content[language]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: success,
          duration: 3000,
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error()
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: content[language].error,
        variant: "destructive",
        duration: 3000,
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary">{title}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            {name}
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            {email}
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            {message}
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">{send}</Button>
      </form>
    </div>
  )
}

