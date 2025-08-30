'use client'

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, ArrowDown } from "lucide-react"
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {/* Floating Navbar */}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background 
          bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] 
          bg-[size:6rem_4rem] dark:bg-[size:4rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 
            bg-[radial-gradient(circle_500px_at_50%_200px,#d5c4ff,transparent)] 
            dark:bg-[radial-gradient(circle_500px_at_50%_200px,rgba(126,34,206,0.2),transparent)]"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
            >
              Software Engineer & Full Stack Developer
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, I'm <span className="text-primary">Sameer Rai</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build exceptional digital experiences that solve real-world problems. 
              Currently scaling mobile applications at <span className="font-semibold">91Wheels</span> and 
              <span className="font-semibold"> 91Astrology</span>.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild className="gap-2">
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href="https://github.com/Flyingmonk01" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href="https://linkedin.com/in/raisameer" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
            
          
          </div>
        </div>
      </section>
      
     
    </div>
  )
}
