"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 bg-dark-green overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Logo */}
      <motion.div
        className="absolute top-8 left-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/placeholder.svg?height=60&width=200"
          alt="Forex Company Logo"
          width={200}
          height={60}
          className="h-16 w-auto"
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Master Forex Trading with Expert Guidance
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Unlock the secrets of successful forex trading and join the elite circle of professional traders.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#cta"
            className="bg-gold text-dark-green font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-90 transition duration-300 inline-block"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gold rounded-full opacity-10"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}

