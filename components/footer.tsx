"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/app/actions/subscribe"
import { toast } from "@/components/ui/use-toast"
import { Loader2, Send } from "lucide-react"

export function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubscribe(formData: FormData) {
    setIsSubmitting(true)
    try {
      const result = await subscribeToNewsletter(formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        })
        // Reset the form
        const form = document.getElementById("subscribe-form") as HTMLFormElement
        if (form) form.reset()
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="border-t bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">OECS Curriculum</h3>
            <p className="text-sm text-gray-300">
              The Organisation of Eastern Caribbean States (OECS) Curriculum Framework is designed to provide a
              comprehensive, student-centered approach to education across member states.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/curriculum" className="text-gray-300 hover:text-green-400">
                  Curriculum Overview
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-green-400">
                  Teacher Resources
                </Link>
              </li>
              <li>
                <Link href="/planner" className="text-gray-300 hover:text-green-400">
                  Lesson Planner
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400">
                  About OECS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <address className="text-sm text-gray-300 not-italic">
              <p>OECS Commission</p>
              <p>Morne Fortune</p>
              <p>P.O. Box 179</p>
              <p>Castries, Saint Lucia</p>
              <p className="mt-2">Email: pearl@oecs.int</p>
              <p>Tel: +1 758-455-6327</p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Subscribe to Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Stay updated with the latest curriculum resources and teaching strategies.
            </p>
            <form id="subscribe-form" action={handleSubscribe} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-green-500"
                  aria-label="Email address"
                />
                <Button type="submit" disabled={isSubmitting} className="bg-green-600 hover:bg-green-700 text-white">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Subscribe
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Organisation of Eastern Caribbean States. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
