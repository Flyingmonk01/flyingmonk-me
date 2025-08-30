'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

type Experience = {
  company: string
  role: string
  period: string
  highlights: string[]
  logo?: string
  skills?: string[]
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}
const experiences: Experience[] = [
  {
    company: '91Wheels | 91Astrology',
    role: 'Software Engineer',
    period: 'Sep 2024 – Present',
    skills: ['React Native', 'TypeScript', 'Node.js', 'Agora', 'In-App Purchases', 'ML', 'AWS'],
    highlights: [
      'Solely responsible for the architecture, design, and maintenance of 91Astrology, 91Astrologer, 91Store, and Aid&Heal, ensuring scalability and high performance.',
      'Scaled 91Astrology app downloads from 24K to over 150K+ through strategic feature rollouts and optimizations.',
      'Successfully published the 91Astrology app for iOS, expanding market reach in a competitive category.',
      'Implemented in-app purchases generating significant revenue, contributing to annual revenue of over 6 Crore INR.',
      'Developed live video/audio session capabilities using Agora, enhancing user engagement.',
      'Built a voice assistant feature enabling natural language interactions within the app.',
      'Created a custom OTA update system for seamless app updates without user disruption.'
    ]
  },
  {
    company: 'BMV Tax Company',
    role: 'Analyst',
    period: 'Jan 2024 – Sep 2024',
    skills: ['Data Analysis', 'Python', 'Machine Learning', 'API Integration', 'Big Data'],
    highlights: [
      'Spearheaded API management workflows to extract and optimize large-scale transportation datasets, improving processing efficiency by 30%.',
      'Deployed an ML-based predictive model for transportation forecasting, increasing prediction accuracy by 83%.',
      'Conducted in-depth analysis of speed differentials and threshold values, enhancing reporting clarity by 25%.'
    ]
  }
]

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  
  const visibleHighlights = isExpanded ? exp.highlights : exp.highlights.slice(0, 3)
  
  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      // variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-blue-200 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300 group-hover:duration-200" />
      <Card className="relative bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-200 to-blue-200" />
        
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                {exp.company}
              </CardTitle>
              <p className="text-muted-foreground mt-1">{exp.role}</p>
            </div>
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-300/10 to-blue-300/10 text-primary rounded-full border border-border/50">
              {exp.period}
            </span>
          </div>
          
          {exp.skills && exp.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.skills.map((skill, i) => (
                <Badge 
                  key={i} 
                  variant="outline"
                  className="text-xs font-mono bg-background/50 border-border/30 hover:bg-primary/5 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>
        
        <CardContent className="pt-0">
          <motion.ul 
            className="space-y-3 overflow-hidden"
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {visibleHighlights.map((highlight, i) => (
              <motion.li 
                key={i} 
                // variants={fadeInUp}
                className="flex items-start group/li"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 mr-3" />
                <span className="text-muted-foreground group-hover/li:text-foreground transition-colors">
                  {highlight}
                </span>
              </motion.li>
            ))}
          </motion.ul>
          
          {exp.highlights.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group/button"
            >
              {isExpanded ? (
                <>
                  Show less
                  <ChevronUp className="ml-1 h-4 w-4 transition-transform group-hover/button:-translate-y-0.5" />
                </>
              ) : (
                <>
                  Show {exp.highlights.length - 3} more achievements
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover/button:translate-y-0.5" />
                </>
              )}
            </button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ExperienceSection() {
  const controls = useAnimation()
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      </div>
      
      <div className="container mx-auto px-4">

          <h2 className="text-4xl font-bold max-w-2xl mx-auto mb-4 ">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the milestones I've achieved along the way
          </p>
        
        <div className="relative max-w-4xl mx-auto space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-border to-transparent -z-10" />
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
