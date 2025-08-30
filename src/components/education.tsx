'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Award } from 'lucide-react'

type Education = {
  degree: string
  institution: string
  period: string
  cgpa: string
  achievements?: string[]
}

const education: Education[] = [
  {
    degree: 'Masters in Mathematics and Computing',
    institution: 'National Institute of Technology, Hamirpur',
    period: 'Sep 2022 – Aug 2024',
    cgpa: 'CGPA: 9.63/10',
    achievements: [
      'Awarded Gold Medal for outstanding academic performance',
      'Specialized in Advanced Algorithms and Data Structures',
      'Thesis on "Optimization Techniques in Machine Learning"'
    ]
  },
  {
    degree: 'Bachelors in Mathematics',
    institution: 'Banaras Hindu University, Varanasi',
    period: 'Aug 2019 – May 2022',
    cgpa: 'CGPA: 8.48/10',
    achievements: [
      'Specialized in Pure and Applied Mathematics',
      'Active member of Mathematics Club',
      'Participated in various inter-university math competitions'
    ]
  }
]

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="font-medium">{edu.period}</p>
                    <p className="text-sm text-muted-foreground">{edu.cgpa}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {edu.achievements && (
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <Award className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
