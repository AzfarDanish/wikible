"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, X, Globe, FileText, BookOpen, Download, Save, Share2, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the plan that works best for your needs
          </motion.p>
        </div>

        <motion.div
          className="flex items-center justify-center mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <span className={`text-lg ${!isYearly ? "font-medium text-blue-600" : "text-gray-500"}`}>Monthly</span>
            <div className="flex items-center">
              <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-blue-600" />
              <Label htmlFor="billing-switch" className="sr-only">
                Toggle billing period
              </Label>
            </div>
            <span className={`text-lg ${isYearly ? "font-medium text-blue-600" : "text-gray-500"}`}>
              Yearly <span className="text-sm text-green-600 font-medium">(Save 33%)</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Free Plan */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            variants={itemVariants}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Free Plan</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500 ml-2">/ forever</span>
              </div>
              <p className="text-gray-600 mb-6">For curious readers who want a quick overview every now and then.</p>
              <Button className="w-full py-6" variant="outline">
                Get Started
              </Button>
            </div>
            <div className="bg-gray-50 p-8">
              <h4 className="font-semibold mb-4 flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Includes:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Summarize any Wikipedia article</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Summary in Intermediate English only</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Covers only first 2 sections</span>
                </li>
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>4 summaries per month</span>
                </li>
              </ul>

              <h4 className="font-semibold mt-8 mb-4 flex items-center">
                <X className="h-5 w-5 text-red-500 mr-2" />
                Locked:
              </h4>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start">
                  <span className="mr-3 mt-0.5">•</span>
                  <span>Full article summaries</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-0.5">•</span>
                  <span>Simplified or expert-level summaries</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-0.5">•</span>
                  <span>Export (PDF, TXT)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-0.5">•</span>
                  <span>Multilingual support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-0.5">•</span>
                  <span>Saving/sharing summaries</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-500 relative"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
              Most Popular
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Pro Plan</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">${isYearly ? "39.99" : "4.99"}</span>
                <span className="text-gray-500 ml-2">/ {isYearly ? "year" : "month"}</span>
              </div>
              <p className="text-gray-600 mb-6">
                For students, researchers, and knowledge seekers who use Wikipedia as a learning tool.
              </p>
              <Button className="w-full py-6 bg-blue-600 hover:bg-blue-700">Start 7-Day Free Trial</Button>
            </div>
            <div className="bg-blue-50 p-8">
              <h4 className="font-semibold mb-4 flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Everything in Free, plus:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Unlimited summaries</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Full article + section-wise breakdown</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Choose reading level: Simple, Intermediate, Expert</span>
                </li>
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multilingual summaries (Spanish, French, Chinese, Hindi, more)</span>
                </li>
                <li className="flex items-start">
                  <Download className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Export summaries (PDF, TXT, Markdown)</span>
                </li>
                <li className="flex items-start">
                  <Save className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Save summaries to your account</span>
                </li>
                <li className="flex items-start">
                  <Share2 className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Shareable summary links</span>
                </li>
                <li className="flex items-start">
                  <FileCode className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Auto citations (MLA / APA / Chicago)</span>
                </li>
              </ul>

              <div className="mt-8 bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold mb-2 text-blue-700">Bonus Incentives:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>7-day free trial of Pro</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Cancel anytime</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
