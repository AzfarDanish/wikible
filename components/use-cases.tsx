"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Brain, BookOpen, School, Plane, Smartphone } from "lucide-react"

export default function UseCases() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const useCases = [
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Students",
      description: "Quickly understand complex topics for research papers and exam prep",
      color: "bg-blue-500",
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Lifelong Learners",
      description: "Explore new subjects efficiently and build knowledge in any area",
      color: "bg-purple-500",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Researchers",
      description: "Get quick overviews before diving into detailed academic research",
      color: "bg-green-500",
    },
    {
      icon: <School className="h-10 w-10" />,
      title: "Teachers",
      description: "Create simplified materials for students at different learning levels",
      color: "bg-yellow-500",
    },
    {
      icon: <Plane className="h-10 w-10" />,
      title: "Travelers & Language Learners",
      description: "Learn about destinations and cultures in simplified language",
      color: "bg-red-500",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Content Creators",
      description: "Research topics quickly for social media posts and content",
      color: "bg-indigo-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="use-cases" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Who Is It For?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our tool helps people from all walks of life learn and understand information faster
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <div className={`h-2 ${useCase.color}`}></div>
              <div className="p-6">
                <div
                  className={`w-16 h-16 rounded-full ${useCase.color} bg-opacity-20 flex items-center justify-center mb-4 text-${useCase.color.split("-")[1]}-500 group-hover:scale-110 transition-transform`}
                >
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
