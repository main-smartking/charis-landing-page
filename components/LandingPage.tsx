"use client"
import { motion } from "framer-motion"
import { ChevronRight, Star, BookOpen, GraduationCap, ArrowRight } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const services = [
  {
    icon: <Star className="w-12 h-12" />,
    title: "Premium Class",
    description:
      "Exclusive forex mentorship program designed for serious traders who want to achieve exceptional results.",
    features: ["1-on-1 Mentoring", "Live Trading Sessions", "Advanced Strategies"],
  },
  {
    icon: <BookOpen className="w-12 h-12" />,
    title: "E-Book",
    description: "Comprehensive forex trading guide covering everything from basics to advanced trading strategies.",
    features: ["Step-by-Step Guide", "Technical Analysis", "Risk Management"],
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Forex Course",
    description:
      "Structured learning program that takes you from beginner to professional trader with proven strategies.",
    features: ["Video Lessons", "Practice Exercises", "Community Access"],
  },
]

const testimonials = [
  {
    name: "James Wilson",
    role: "Professional Trader",
    content: "The Premium Class transformed my trading career. The mentorship was invaluable.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Portfolio Manager",
    content: "Best forex education investment I've made. The course structure is excellent.",
    rating: 5,
  },
]

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark-green overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-hero-pattern mix-blend-overlay" />
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-dark-green-light/30 rounded-full blur-[100px] -top-48 -left-24" />
          <div className="absolute w-[500px] h-[500px] bg-dark-green-light/30 rounded-full blur-[100px] -bottom-48 -right-24" />
        </div>

        <div className="container mx-auto px-2 py-16 relative z-10">
          {/* Logo */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <img
              src="../public/charis-logo.png"
              alt="Forex Trading Logo"
              className="h-40 w-auto drop-shadow-lg"
            />
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
              Trade With Charis FX Tranding Institute
            </span> */}

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Master Forex Trading
              <br />
              <span className="text-gold">With Bala Fransic</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl mx-auto">
              Join our premium trading community and learn from experienced professionals 
              who have mastered the forex market
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="https://wa.me/2347011299203"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold/90 text-dark-green px-8 py-4 rounded-lg font-semibold flex items-center text-lg transition-colors"
              >
                Chat With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <motion.section
        className="py-24 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ delay: 0.4 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex justify-center"> {/* Added flex justify-center */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative w-full max-w-lg mx-auto" /* Added max-w-lg and mx-auto */
              >
                <div className="absolute inset-0 bg-gradient-to-r from-dark-green to-dark-green-light rounded-lg opacity-10 blur-lg transform -rotate-6" />
                <img
                  src="../public/mentor-image.png"
                  alt="Founder"
                  width={500}
                  height={600}
                  className="rounded-lg relative w-full h-auto object-cover" /* Added object-cover and shadow */
                />
                <div className="absolute bottom-6 left-4 right-4 bg-white/90">
                  <h3 className="font-bold text-dark-green">Mr Bala Fransic</h3>
                  <p className="text-sm text-gray-600">Founder & Head Trader</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-dark-green font-semibold mb-2 block">Meet Your Mentor</span>
              <h2 className="text-4xl font-bold mb-6 text-dark-green">15+ Years of Trading Excellence</h2>
              <p className="text-gray-600 mb-6">
                With a proven track record in forex trading and over $100M in managed assets, David has helped thousands
                of traders achieve their financial goals through his structured mentorship programs.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-dark-green">5000+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-dark-green">$100M+</div>
                  <div className="text-gray-600">Assets Managed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-dark-green">Our Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect program to accelerate your trading journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-dark-green mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-dark-green">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <ChevronRight className="w-5 h-5 text-dark-green mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-dark-green">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-dark-green">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 bg-dark-green text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Trading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of successful traders and take your first step towards financial freedom.
          </p>
          <button className="bg-gold hover:bg-gold/90 text-dark-green px-8 py-4 rounded-lg font-semibold flex items-center text-lg mx-auto transition-colors">
            Start Your Journey Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </motion.section>
    </main>
  )
}

