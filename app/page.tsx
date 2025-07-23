import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, Users, FileText, Lightbulb, Sparkles, ArrowRight, Globe, Award, BookMarked } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-green-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 p-4">
              The OECS Learning Hub
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              A comprehensive platform for teachers and educators across the Organisation of Eastern Caribbean States
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="text-base px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/curriculum" className="flex items-center gap-2">
                  Explore Curriculum
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 h-auto rounded-full hover:bg-green-50 transition-all duration-300">
                <Link href="/planner">Create Lesson Plans</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-base px-8 py-6 h-auto rounded-full hover:bg-green-100 transition-all duration-300">
                <Link href="/innovative-tools" className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Innovative Tools
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Key Features</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Discover tools and resources designed to enhance your teaching experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-12 w-12" />}
              title="Curriculum Management"
              description="Access and navigate the complete OECS curriculum framework across all subjects and grade levels."
              href="/curriculum"
            />
            <FeatureCard
              icon={<Calendar className="h-12 w-12" />}
              title="Lesson Planning"
              description="Create, save, and share detailed lesson plans aligned with curriculum objectives."
              href="/planner"
            />
            <FeatureCard
              icon={<Sparkles className="h-12 w-12" />}
              title="Innovative Tools"
              description="Access our suite of AI-powered tools designed to enhance teaching and learning."
              href="/innovative-tools"
            />
            <FeatureCard
              icon={<FileText className="h-12 w-12" />}
              title="Teaching Resources"
              description="Access a library of teaching materials, worksheets, and activities."
              href="/resources"
            />
            <FeatureCard
              icon={<Lightbulb className="h-12 w-12" />}
              title="Collaborative Tools"
              description="Share resources and lesson plans with colleagues across OECS member states."
              href="/dashboard"
            />
            <FeatureCard
              icon={<Users className="h-12 w-12" />}
              title="OECS MakerStudio"
              description="Empower Your Teaching Journey. Join OECS MakerStudio: Where Educators Collaborate, Share, and Innovate"
              href="https://makerstudio.oecslearning.org/"
              external={true}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <Globe className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-3xl font-bold mb-2">10+</h3>
              <p className="text-muted-foreground">OECS Member States</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <Award className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-muted-foreground">Active Educators</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <BookMarked className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-3xl font-bold mb-2">5000+</h3>
              <p className="text-muted-foreground">Learning Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-12 text-green-100">
              Join teachers across the OECS who are using our platform to enhance their teaching and student learning
              outcomes.
            </p>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50 px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/dashboard" className="flex items-center gap-2">
                Go to Dashboard
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About OECS Section with Enhanced Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About OECS Curriculum</h2>
              <p className="text-lg mb-6 leading-relaxed">
                The Organisation of Eastern Caribbean States (OECS) Curriculum Framework provides a comprehensive,
                student-centered approach to education across member states.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Our platform helps educators implement this curriculum effectively, ensuring consistent quality education
                throughout the Eastern Caribbean.
              </p>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About OECS
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">OECS Member States</h3>
              <ul className="grid grid-cols-2 gap-4">
                {[
                  "Antigua and Barbuda",
                  "Commonwealth of Dominica",
                  "Grenada",
                  "Montserrat",
                  "Saint Kitts and Nevis",
                  "Saint Lucia",
                  "Saint Vincent and the Grenadines",
                  "Saint Maarten",
                  "Anguilla",
                  "British Virgin Islands",
                  "Martinique",
                ].map((country) => (
                  <li key={country} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    <span className="text-lg">{country}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  href,
  external,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  external?: boolean
}) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200">
      <CardHeader>
        <div className="text-green-600 mb-4">{icon}</div>
        <CardTitle className="text-2xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="ghost" className="w-full group">
          {external ? (
            <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <Link href={href} className="flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
