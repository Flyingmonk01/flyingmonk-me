'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Briefcase, Code, User, GraduationCap, Mail, AppWindow } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: <Home className="h-5 w-5" /> },
  { name: 'Experience', path: '/experience', icon: <Briefcase className="h-5 w-5" /> },
  { name: 'Apps', path: '/apps', icon: <Code className="h-5 w-5" /> },
  { name: 'Projects', path: '/projects', icon: <AppWindow className="h-5 w-5" /> },
  { name: 'Skills', path: '/skills', icon: <User className="h-5 w-5" /> },
  { name: 'Education', path: '/education', icon: <GraduationCap className="h-5 w-5" /> },
  { name: 'Contact', path: '/contact', icon: <Mail className="h-5 w-5" /> },
];

export function FloatingNavbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-6 w-full flex justify-center z-50">

      <motion.nav
        className="fixed top-6 z-50 hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg transition-all duration-300"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              pathname === item.path
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
            }`}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.name}</span>
          </Link>
        ))}
      </motion.nav>
      </div>

      {/* Mobile Bottom Tab Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-around bg-background/80 backdrop-blur-sm border border-border py-2 px-1 mx-1 mb-6 rounded-full"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex flex-col items-center justify-center p-2 rounded-lg w-full max-w-[40px] transition-colors ${
              pathname === item.path
                ? 'text-primary'
                : 'text-muted-foreground'
            }`}
          >
            <div className="text-center">
              {item.icon}
            </div>
            <span className="text-[10px] mt-1">{item.name}</span>
          </Link>
        ))}
      </motion.div>
    </>
  );
}