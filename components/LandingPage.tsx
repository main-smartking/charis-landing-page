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
      {/* Hero Section - Simplified animations */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark-green overflow-hidden">
        {/* Simplified background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-green-light to-dark-green opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10" />
        
        {/* Single subtle animated gradient */}
        <motion.div
          animate={{
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-full h-full bg-gradient-to-r from-dark-green-light/20 to-gold/10 blur-3xl"
        />

        <div className="container mx-auto px-4 sm:px-6 py-10 relative z-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <img
              src="/charis-logo.png"
              alt="Forex Trading Logo"
              className="h-32 md:h-40 w-auto"
            />
          </motion.div>

          {/* Hero Content - Improved mobile typography */}
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Master Forex Trading
              <br />
              <span className="text-gold">10X Faster Guidance!</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto">
              Join our premium trading community and learn from experienced professionals 
              who have mastered the forex market
            </p>

            {/* Mobile-optimized CTA button */}
            <div className="flex justify-center">
              <a
                href="https://wa.me/2347011299203"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-dark-green 
                  px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold 
                  flex items-center justify-center gap-2 sm:gap-3
                  text-base sm:text-lg transition-all duration-300
                  hover:shadow-lg hover:-translate-y-0.5"
              >
                Chat With Us
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
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
                  src="/mentor-image.png"
                  alt="Founder"
                  width={500}
                  height={600}
                  className="rounded-lg relative w-full h-auto object-cover" /* Added object-cover and shadow */
                />
                <div className="absolute bottom-20 left-2 right-2 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl">
                  <h3 className="font-bold text-dark-green text-xl">Mr Bala Fransic</h3>
                  <p className="text-gray-600">Founder & Head Trader</p>
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


      {/* Footer Section with improved mobile alignment */}
      <motion.section
        className="py-16 md:py-24 bg-dark-green text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Trading?</h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Join our community of successful traders and take your first step towards financial freedom.
            </p>
            <a
              href="https://wa.me/2347011299203"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-gold hover:bg-gold/90 text-dark-green px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <span>Start Your Journey Today</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  )
}

