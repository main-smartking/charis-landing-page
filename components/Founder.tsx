"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Founder() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Founder"
            width={400}
            height={400}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 md:pl-8"
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Founder</h2>
          <p className="text-lg mb-4">
            With over 15 years of experience in forex trading, our founder has helped thousands of traders achieve
            financial freedom through expert mentorship and proven strategies.
          </p>
          <p className="text-gold font-bold">
            "My mission is to empower traders with the knowledge and skills they need to succeed in the forex market." -
            John Doe
          </p>
        </motion.div>
      </div>
    </section>
  )
}

