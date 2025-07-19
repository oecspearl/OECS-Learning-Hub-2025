import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, History, Clock, Users, ImageIcon, Map, Music, BookOpen, Camera, Palette } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function HistoricalCulturalActivitiesPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Historical and Cultural Thinking
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-amber-700 flex items-center">
            <History className="mr-2 h-7 w-7 text-amber-600" />
            Historical and Cultural Thinking Activities
          </h1>
          <p className="text-gray-700">
            Engaging hands-on activities that help students explore slavery and emancipation, East Indian Caribbean
            cultures, and the role of arts and sports in fostering regional unity and identity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Slavery in the Caribbean Activities */}
        <div className="col-span-full mb-6">
          <h2 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-200 pb-2">
            Slavery in the Caribbean
          </h2>
        </div>

        <Card className="border-t-4 border-red-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-red-700 flex items-center">
              <ImageIcon className="mr-2 h-5 w-5" />
              Picture/Video Inferencing
            </CardTitle>
            <CardDescription className="flex items-center text-sm">
              <Clock className="mr-1 h-4 w-4" />
              45 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students analyze images of Emancipation Day celebrations through guided observation and discussion,
              building understanding of freedom and its meaning to different people.
            </p>
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities/picture-video-inferencing">
              <Button className="w-full bg-red-600 hover:bg-red-700">View Activity Details</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-red-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-red-700 flex items-center">
              <Map className="mr-2 h-5 w-5" />
              Story Mapping
            </CardTitle>
            <CardDescription className="flex items-center text-sm">
              <Clock className="mr-1 h-4 w-4" />
              60 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Teams research and create story maps showing how European abolitionists and enslaved Africans contributed
              to emancipation, then combine findings into a classroom timeline.
            </p>
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities/story-mapping">
              <Button className="w-full bg-red-600 hover:bg-red-700">View Activity Details</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-red-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-red-700 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Timeline Gaming
            </CardTitle>
            <CardDescription className="flex items-center text-sm">
              <Clock className="mr-1 h-4 w-4" />
              50 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Interactive gaming experience using milestone cards and digital tools to sequence major events in the
              struggle for emancipation, culminating in a physical classroom timeline.
            </p>
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities/timeline-gaming">
              <Button className="w-full bg-red-600 hover:bg-red-700">View Activity Details</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-red-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-red-700 flex items-center">
              <Palette className="mr-2 h-5 w-5" />
              Creative Expression
            </CardTitle>
            <CardDescription className="flex items-center text-sm">
              <Clock className="mr-1 h-4 w-4" />
              90 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students create songs, dances, dramas, or art pieces celebrating Emancipation Day and honoring the
              contributions of enslaved Africans to their own freedom.
            </p>
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities/creative-expression">
              <Button className="w-full bg-red-600 hover:bg-red-700">View Activity Details</Button>
            </Link>
          </CardContent>
        </Card>

        {/* East Indian Caribbean Cultures Activities */}
        <div className="col-span-full mb-6 mt-8">
          <h2 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-200 pb-2">
            East Indian Caribbean Cultures
          </h2>
        </div>

        <Card className="border-t-4 border-orange-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-orange-50">
            <CardTitle className="text-orange-700 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Interactive Press Conference
            </CardTitle>
            <CardDescription className="flex items-center text-sm">
              <Clock className="mr-1 h-4 w-4" />
              45 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Teacher role-plays as an elderly Indian indentured servant while students conduct a press conference,
              learning about the indentureship experience through authentic dialogue.
            </p>
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities/press-conference">
              <Button className="w-full bg-orange-600 hover:bg-orange-700">View Activity Details</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-orange-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-orange-50">
            <CardTitle className="text-orange-700 flex items-center">
              <Map className="mr-2 h-5 w-5" />
              Route Mapping
            </CardTitle>
            <CardDescription className="flex items-center text-sm">
              <Clock className="mr-1 h-4 w-4" />
              50 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students chart sea routes from India to the Caribbean using physical and digital maps, understanding
              geographical challenges and journey hardships faced by indentured servants.
            </p>
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities/route-mapping">
              <Button className="w-full bg-orange-600 hover:bg-orange-700">View Activity Details</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-orange-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-orange-50">
            <CardTitle className="text-orange-700 flex items-center">
              <Palette className="mr-2 h-5 w-5" />
              Cultural Influence Collage
            </CardTitle>
            <CardDescription className="flex items-center text-sm">
              <Clock className="mr-1 h-4 w-4" />
              75 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students research and create visual collages showcasing East Indian cultural influences in Caribbean
              clothing, food, music, and religious practices, fostering cultural appreciation.
            </p>
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities/cultural-collage">
              <Button className="w-full bg-orange-600 hover:bg-orange-700">View Activity Details</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Arts and Sports Activities */}
        <div className="col-span-full mb-6 mt-8">
          <h2 className="text-2xl font-bold text-amber-700 mb-4 border-b-2 border-amber-200 pb-2">
            Arts and Sports in the Caribbean
          </h2>
        </div>

        <Card className="border-t-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700 flex items-center">
              <Music className="mr-2 h-5 w-5" />
              Unity Music Analysis
            </CardTitle>
            <CardDescription className="flex items-center text-sm">
              <Clock className="mr-1 h-4 w-4" />
              40 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students analyze "One Caribbean Nation" by Grantley Ipa Constance, exploring themes of unity and
              cooperation while discussing the importance of regional collaboration.
            </p>
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities/music-analysis">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View Activity Details</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700 flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Regional Activities Organizer
            </CardTitle>
            <CardDescription className="flex items-center text-sm">
              <Clock className="mr-1 h-4 w-4" />
              60 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Groups research regional activities like Cricket, Carnival, and CARIFTA Games using the 5 W's + 1 H
              framework, then present findings to demonstrate regional cooperation.
            </p>
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities/regional-organizer">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View Activity Details</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Biography Research Project
            </CardTitle>
            <CardDescription className="flex items-center text-sm">
              <Clock className="mr-1 h-4 w-4" />
              120 minutes (multiple sessions)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Multi-session project where students research influential Caribbean figures across music, sports, and
              politics, creating presentations that highlight regional and international impact.
            </p>
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities/biography-research">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View Activity Details</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700 flex items-center">
              <Camera className="mr-2 h-5 w-5" />
              Community Engagement Showcase
            </CardTitle>
            <CardDescription className="flex items-center text-sm">
              <Clock className="mr-1 h-4 w-4" />
              2-3 hours (extended event)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Culminating community event where students showcase their learning through performances, demonstrations,
              and interactions with community members, celebrating Caribbean cultural icons.
            </p>
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities/community-showcase">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View Activity Details</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
        <h3 className="text-xl font-semibold mb-4 text-amber-700">Activity Implementation Notes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-amber-600">Differentiation Strategies</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Multiple presentation formats (visual, oral, written)</li>
              <li>Sentence starters for struggling writers</li>
              <li>Choice in research topics and creative expression</li>
              <li>Peer support through collaborative grouping</li>
              <li>Technology integration for diverse learning styles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-amber-600">Assessment Focus Areas</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Historical understanding and accuracy</li>
              <li>Cultural appreciation and respect</li>
              <li>Collaboration and communication skills</li>
              <li>Creative expression and presentation</li>
              <li>Critical thinking and analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
