"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQ() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const faqs = [
    {
      question: "Can I use it on any Wikipedia article?",
      answer:
        "Yes, our tool works with any Wikipedia article in any language. Simply paste the URL or search for the topic, and our AI will generate a summary for you.",
    },
    {
      question: "How do I switch languages?",
      answer:
        "Pro users can select their preferred output language from the dropdown menu before generating a summary. We currently support over 10 languages including English, Spanish, French, German, Chinese, and Hindi.",
    },
    {
      question: "What happens after my free trial?",
      answer:
        "After your 7-day free trial ends, you'll be automatically subscribed to the Pro plan at the rate you selected (monthly or yearly). You can cancel anytime before the trial ends to avoid being charged.",
    },
    {
      question: "Can I use this for school or research?",
      answer:
        "Our tool is designed to help students and researchers quickly understand complex topics. We even provide proper citations in MLA, APA, and Chicago formats for academic use.",
    },
    {
      question: "How accurate are the summaries?",
      answer:
        "Our AI is trained to extract the most important information from Wikipedia articles while maintaining accuracy. However, we always recommend cross-checking critical information with the original source for academic or professional work.",
    },
    {
      question: "Can I save summaries for offline use?",
      answer:
        "Yes, Pro users can export summaries in PDF, TXT, or Markdown formats for offline use. You can also save summaries to your account to access them later from any device.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about our Wikipedia summarizer
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg text-gray-600 mb-4">Still have questions?</p>
          <Button variant="outline" size="lg" className="font-medium">
            Contact Us →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
