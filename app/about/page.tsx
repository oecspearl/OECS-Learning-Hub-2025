import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About the OECS</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The Organisation of Eastern Caribbean States (OECS) is dedicated to regional integration, cooperation, and
              sustainable development in the Eastern Caribbean.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Education Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The OECS Education Sector Strategy aims to improve educational outcomes across member states through
              harmonized curriculum frameworks and teaching standards.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Curriculum Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our curriculum framework provides a comprehensive, student-centered approach to education that emphasizes
              critical thinking, creativity, and cultural awareness.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">OECS Member States</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            "Antigua and Barbuda",
            "Commonwealth of Dominica",
            "Grenada",
            "Montserrat",
            "Saint Kitts and Nevis",
            "Saint Lucia",
            "Saint Vincent and the Grenadines",
            "Anguilla",
            "British Virgin Islands",
            "Martinique",
          ].map((country) => (
            <Card key={country} className="text-center">
              <CardContent className="pt-6">
                <p className="font-medium">{country}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Educational Initiatives</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Harmonized Curriculum</CardTitle>
              <CardDescription>Standardizing educational content across member states</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The OECS has developed a harmonized curriculum framework that ensures students across all member states
                receive consistent, high-quality education while respecting the unique cultural contexts of each island.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Teacher Development</CardTitle>
              <CardDescription>Enhancing teaching skills and methodologies</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our teacher training programs focus on modern pedagogical approaches, technology integration, and
                assessment strategies to improve educational outcomes throughout the region.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Digital Learning</CardTitle>
              <CardDescription>Embracing technology in education</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The OECS is committed to integrating digital tools and resources into the classroom, preparing students
                for success in an increasingly technology-driven world.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cultural Heritage</CardTitle>
              <CardDescription>Preserving and celebrating Caribbean identity</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our curriculum emphasizes the rich cultural heritage of the Eastern Caribbean, ensuring students develop
                a strong sense of identity and appreciation for their history.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center mb-12 p-8 bg-primary/5 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Contact the OECS Commission</h2>
        <address className="not-italic mb-6">
          <p>OECS Commission</p>
          <p>Morne Fortune</p>
          <p>P.O. Box 179</p>
          <p>Castries, Saint Lucia</p>
          <p className="mt-2">Email: info@oecs.org</p>
          <p>Tel: +1 758-455-6327</p>
        </address>
        <Link
          href="https://www.oecs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Visit the official OECS website
        </Link>
      </div>
    </div>
  )
}
