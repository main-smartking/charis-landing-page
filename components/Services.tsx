"use client"

import { motion } from "framer-motion"
import { Book, GraduationCap, Users } from "lucide-react"

const services = [
  {
    title: "Premium Class",
    description: "Exclusive forex mentorship for high-level traders.",
    icon: Users,
  },
  {
    title: "E-Book",
    description: "A downloadable forex trading guide for beginners and experts.",
    icon: Book,
  },
  {
    title: "Forex Course",
    description: "A structured learning program with step-by-step forex strategies.",
    icon: GraduationCap,
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 bg-dark-green-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark-green p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <service.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

