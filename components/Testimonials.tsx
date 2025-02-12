"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Professional Trader",
    content:
      "The Premium Class has completely transformed my trading career. The insights and strategies I learned are invaluable.",
  },
  {
    name: "Michael Chen",
    role: "Beginner Trader",
    content:
      "As a beginner, the E-Book provided me with a solid foundation in forex trading. It's comprehensive yet easy to understand.",
  },
  {
    name: "Emily Rodriguez",
    role: "Intermediate Trader",
    content:
      "The Forex Course offered step-by-step guidance that helped me refine my trading skills and boost my confidence in the market.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-green-light p-8 rounded-lg shadow-lg"
          >
            <p className="text-lg mb-4">{testimonials[currentIndex].content}</p>
            <p className="font-bold">{testimonials[currentIndex].name}</p>
            <p className="text-gold">{testimonials[currentIndex].role}</p>
          </motion.div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-gold text-dark-green p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-gold text-dark-green p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

