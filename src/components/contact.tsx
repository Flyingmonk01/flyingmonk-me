'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                I'll get back to you as soon as possible!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:sameerrai350@gmail.com" 
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  sameerrai350@gmail.com
                </a>
                <a 
                  href="tel:+917355442696" 
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  +91 73554 42696
                </a>
                <a 
                  href="https://linkedin.com/in/raisameer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-3" />
                  linkedin.com/in/raisameer
                </a>
                <a 
                  href="https://github.com/Flyingmonk01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5 mr-3" />
                  github.com/Flyingmonk01
                </a>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="How can I help you?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button type="submit" className="w-full md:w-auto">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
