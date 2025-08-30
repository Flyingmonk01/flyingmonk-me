'use client'

import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type Skill = {
  name: string
  level: number
  icon?: string
  color?: string
}

type SkillCategory = {
  title: string
  icon: string
  skills: Skill[]
}

const skills: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'JavaScript/TypeScript', level: 90, color: '#F0DB4F' },
      { name: 'Python', level: 85, color: '#3776AB' },
      { name: 'C++', level: 80, color: '#00599C' },
      { name: 'C', level: 75, color: '#A8B9CC' }
    ]
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React Native', level: 90, color: '#61DAFB' },
      { name: 'React.js', level: 85, color: '#61DAFB' },
      { name: 'Next.js', level: 85, color: '#FFCA28' },
      { name: 'Expo', level: 80, color: '#f54900' },
      { name: 'Tailwind CSS', level: 90, color: '#38B2AC' }
    ]
  },
  {
    title: 'Backend & DB',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85, color: '#68A063' },
      { name: 'Express.js', level: 85, color: '#38B2AC' },
      { name: 'NestJS', level: 80, color: '#E0234E' },
      { name: 'MongoDB', level: 85, color: '#47A248' },
      { name: 'Redis', level: 80, color: '#DC382D' },
      { name: 'Firebase', level: 85, color: '#FFCA28' }
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: '🔧',
    skills: [
      { name: 'Git & GitHub', level: 90, color: '#F05032' },
      { name: 'Docker', level: 75, color: '#2496ED' },
      { name: 'CI/CD', level: 80, color: '#2088FF' },
      { name: 'AWS', level: 70, color: '#FF9900' },
      { name: 'Datadog', level: 75, color: '#632CA6' }
    ]
  }
]

const SkillBar = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="mb-4 last:mb-0"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <motion.span 
          className="text-xs text-muted-foreground"
          animate={{ scale: isHovered ? 1.2 : 1 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + delay * 0.1, type: 'spring' }}
          style={{ backgroundColor: skill.color || '#3b82f6' }}
          animate={{ 
            boxShadow: isHovered 
              ? `0 0 10px ${skill.color || '#3b82f6'}80` 
              : 'none' 
          }}
        />
      </div>
    </motion.div>
  )
}

const SkillCategoryCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isInView ? 1 : 0.2, 
        y: isInView ? 0 : 20 
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className={cn(
          "relative h-full rounded-xl cursor-pointer transition-all duration-500 [transform-style:preserve-3d]",
          isFlipped && "[transform:rotateY(180deg)]"
        )}
      >
        <div className="absolute inset-0 bg-card border rounded-xl p-6 backface-hidden [backface-visibility:hidden]">
          <div className="text-4xl mb-4">{category.icon}</div>
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-xl">{category.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {category.skills.slice(0, 3).map((skill, i) => (
              <SkillBar key={i} skill={skill} delay={i} />
            ))}
          </CardContent>
          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground">
            Click to see more
          </div>
        </div>
        
        <div className="absolute inset-0 bg-card border rounded-xl p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="text-4xl mb-4">{category.icon}</div>
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-xl">More {category.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {category.skills.slice(3).map((skill, i) => (
              <SkillBar key={i} skill={skill} delay={i} />
            ))}
          </CardContent>
          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground">
            Click to go back
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Updated SkillsSection component with better responsiveness
export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Technologies and tools I'm proficient with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="h-full bg-card/50 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <SkillItem key={i} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// New SkillItem component for better organization
const SkillItem = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: { 
          delay: 0.05 * index,
          duration: 0.3
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm md:text-base font-medium text-foreground/90">
          {skill.name}
        </span>
        <motion.span 
          className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            backgroundColor: isHovered ? skill.color + '1a' : 'hsl(var(--primary)/0.1)'
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1, 
            delay: 0.1 + index * 0.05,
            type: 'spring',
            damping: 15,
            stiffness: 100
          }}
          style={{ backgroundColor: skill.color }}
          animate={{
            boxShadow: isHovered 
              ? `0 0 12px ${skill.color}80`
              : 'none',
            opacity: isHovered ? 0.9 : 1
          }}
        />
      </div>
    </motion.div>
  );
};