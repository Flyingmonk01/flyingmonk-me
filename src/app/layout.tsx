import type { Metadata, Viewport } from "next"
import { Nunito } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import { FloatingNavbar } from "@/components/floating-navbar"
import { ThemeToggle } from "@/components/theme-toggle"

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic']
})

export const metadata: Metadata = {
  title: "Flying Monk | Software Engineer",
  description: "Crafting beautiful, responsive, and performant web experiences. Specializing in modern web technologies and user-centered design.",
  keywords: ["web developer", "frontend engineer", "react developer", "next.js", "typescript", "UI/UX design", "portfolio", "web design"],
  authors: [{ name: "Flying Monk" }],
  openGraph: {
    title: "Flying Monk | Software Engineer",
    description: "Crafting beautiful, responsive, and performant web experiences.",
    type: "website",
    locale: "en_US",
    url: "https://flyingmonk.dev",
    siteName: "Flying Monk Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flying Monk | Software Engineer",
    description: "Crafting beautiful, responsive, and performant web experiences.",
    creator: "@flyingmonk"
  },
  metadataBase: new URL('https://flyingmonk.dev'),
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${nunito.variable} font-sans`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col pb-bottom-nav md:pb-0">
          <FloatingNavbar />
          <ThemeToggle />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
