'use client'; // Add this directive at the top

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Component() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Edmond Doan
        </motion.h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20">
        <section id="about" className="mb-20">
          <motion.h2 
            className="text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Software Engineer
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I specialize in <span className="text-orange-400">Blockchain Development</span>  and <span className="text-blue-400">Generative AI</span> focusing on building 
            decentralized applications and exploring AI-driven solutions. 
          </motion.p>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="text-gray-200 border-gray-200 hover:bg-blue-400 hover:text-white">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="text-gray-200 border-gray-200 hover:bg-blue-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="mailto:jane@example.com">
              <Button variant="outline" size="icon" className="text-gray-200 border-gray-200 hover:bg-blue-400 hover:text-white">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </motion.div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: 1, title: "MEV Arbitrage", description: "A decentralized application built on Ethereum." },
              { id: 2, title: "Social AI", description: "An interactive AI Avatar that can be used for building and developing social skills for every day scenarios." },
              { id: 3, title: "NFT Coin Pusher", description: "A platform for buying and selling unique digital assets." },
              { id: 4, title: "LORAs", description: "An automated tool for auditing smart contracts." }
            ].map((project) => (
              <motion.div 
                key={project.id}
                className="bg-gray-900 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">View Project</Button>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

  
    </div>
  )
}