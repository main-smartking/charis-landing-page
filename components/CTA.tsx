"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTA() {
  return (
    <section id="cta" className="py-20 px-4 bg-gold">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-dark-green"
        >
          Ready to Transform Your Trading Career?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 text-dark-green"
        >
          Join our community of successful traders and take your skills to the next level.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#"
            className="bg-dark-green text-gold font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition duration-300"
          >
            Enroll Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

