"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      <div className="absolute inset-0 overflow-hidden -z-10">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="rgba(224, 242, 254, 0.5)"
          />
        </svg>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
          Understand Wikipedia in Seconds
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          AI-powered summaries of any article, simplified for learners, researchers, and curious minds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Try It Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-full hover:shadow-md transition-all"
            onClick={() => {
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            How It Works <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-5xl mx-auto mt-8 flex flex-col md:flex-row gap-6 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-4 bg-gray-100 border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto font-medium text-sm text-gray-500">Wikipedia Article</div>
            </div>
          </div>
          <div className="p-4 h-[300px] overflow-y-auto text-sm">
            <h2 className="text-xl font-bold mb-2">Artificial intelligence</h2>
            <p className="mb-2">
              <b>Artificial intelligence (AI)</b> is the intelligence of machines or software, as opposed to the
              intelligence of humans or animals. AI applications include advanced web search engines (e.g., Google
              Search), recommendation systems (used by YouTube, Amazon, and Netflix), understanding human speech (such
              as Siri and Alexa), self-driving cars (e.g., Waymo), generative or creative tools (ChatGPT and AI art),
              automated decision-making, and competing at the highest level in strategic game systems (such as chess and
              Go).
            </p>
            <p className="mb-2">
              Artificial intelligence was founded as an academic discipline in 1956. The field went through multiple
              cycles of optimism followed by disappointment and loss of funding, but after 2012, when deep learning
              surpassed all previous AI techniques, there was a vast increase in funding and interest.
            </p>
            <p>
              The various sub-fields of AI research are centered around particular goals and the use of particular
              tools. The traditional goals of AI research include reasoning, knowledge representation, planning,
              learning, natural language processing, perception, and support for robotics. General intelligence (the
              ability to solve an arbitrary problem) is among the field's long-term goals.
            </p>
            <p className="mt-2">
              To solve these problems, AI researchers have adapted and integrated a wide range of problem-solving
              techniques, including search and mathematical optimization, formal logic, artificial neural networks, and
              methods based on statistics, probability, and economics.
            </p>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-4 bg-blue-50 border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto font-medium text-sm text-blue-600">AI Summary</div>
            </div>
          </div>
          <div className="p-4 h-[300px] overflow-y-auto">
            {isLoading ? (
              <div className="h-full flex flex-col items-center justify-center">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-500">Generating summary...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-blue-700">Artificial Intelligence: Simple Summary</h2>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="font-medium text-blue-800 mb-1">Key Points:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>AI is intelligence shown by machines, not humans or animals</li>
                    <li>Used in search engines, recommendations, voice assistants, and self-driving cars</li>
                    <li>Started as an academic field in 1956</li>
                    <li>Gained massive popularity after 2012 with deep learning breakthroughs</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Artificial Intelligence (AI) makes machines or software smart. Unlike humans or animals, AI learns
                  from data to make decisions or predictions.
                </p>
                <p className="text-gray-700">
                  You use AI every day: when Google finds what you're searching for, when Netflix suggests shows you
                  might like, or when Siri understands your questions.
                </p>
                <p className="text-gray-700">
                  AI researchers want to create systems that can reason, learn, understand language, see things, and
                  eventually develop general intelligence to solve any problem.
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </div>
    </section>
  )
}
