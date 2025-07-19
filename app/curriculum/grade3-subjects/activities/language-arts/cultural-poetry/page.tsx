import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CulturalPoetryPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade3-subjects/activities/language-arts">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Language Arts Activities
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
            Cultural Poetry Exploration
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            A creative journey through diverse poetic traditions that celebrates cultural heritage, language diversity,
            and personal expression.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Storytelling Circle</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                This activity focuses on listening, speaking, and cultural appreciation (ELO 1). Students sit in a
                circle and take turns sharing stories from their community or culture. They practice active listening
                skills and provide respectful feedback to peers.
              </p>
              <ul className="list-disc pl-6">
                <li>Engage with oral stories for pleasure and personal growth</li>
                <li>Listen attentively and build on others' ideas</li>
                <li>Share relevant ideas, opinions, and feelings on topics of personal interest</li>
                <li>Develop appreciation for various forms of language</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Reading Response Journals</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Students maintain journals where they respond to texts through writing and drawing (ELO 2 & 3). This
                activity helps them develop comprehension strategies and critical thinking skills.
              </p>
              <ul className="list-disc pl-6">
                <li>Demonstrate understanding through written and visual responses</li>
                <li>Apply comprehension strategies (predicting, visualizing, inferring)</li>
                <li>Respond critically to texts by asking and formulating responses to questions</li>
                <li>Make connections between vocabulary of Home Language and Standard English</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Authors' Workshop</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Students engage in the writing process from brainstorming to publishing (ELO 5, 6 & 7). They create
                original stories or informational texts following the writing process.
              </p>
              <ul className="list-disc pl-6">
                <li>Generate and organize ideas for writing</li>
                <li>Create written drafts for various purposes and audiences</li>
                <li>Revise organization and language use in drafted writing</li>
                <li>Apply writing conventions to enhance meaning and clarity</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Readers' Theater</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Students perform dramatic readings of texts, focusing on expression, fluency, and comprehension (ELO 1 &
                4). This activity helps them understand how an author's style influences meaning.
              </p>
              <ul className="list-disc pl-6">
                <li>Participate in shared reading opportunities to enhance fluency</li>
                <li>Develop understanding of how author's purpose and style influence meaning</li>
                <li>Recognize how word choice and phrasing may be used in positive or negative ways</li>
                <li>Respond to oral/aural language through drama</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Vocabulary Detective</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Students explore new vocabulary through context clues, word patterns, and reference materials (ELO 3).
                They create personal dictionaries with illustrations and example sentences.
              </p>
              <ul className="list-disc pl-6">
                <li>Extend reading vocabulary through application of word patterns</li>
                <li>Use paper-based or digital dictionaries to clarify meaning</li>
                <li>Apply knowledge of roots and affixes to decode unknown words</li>
                <li>Connect cross-curricular vocabulary to enhance understanding</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Cultural Poetry Exploration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Students read, analyze, and create poems that reflect their cultural heritage (ELO 1, 2 & 4). They
                explore how language, rhythm, and imagery convey meaning and emotion.
              </p>
              <ul className="list-disc pl-6">
                <li>Participate in sharing culturally relevant poetry with fluency and rhythm</li>
                <li>Recognize how illustrations, fonts, and language structures engage the reader</li>
                <li>Develop appreciation for various forms of language</li>
                <li>Experiment with figurative language to enhance understanding</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Paragraph Building Blocks</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Students learn to construct well-organized paragraphs with topic sentences, supporting details, and
                concluding sentences (ELO 5 & 6). They practice revising for clarity and coherence.
              </p>
              <ul className="list-disc pl-6">
                <li>Organize ideas to write for an intended purpose and audience</li>
                <li>Apply understanding of Ideas, Organization, and Language Use in draft writing</li>
                <li>Revise with a focus on complete and well-formed sentences</li>
                <li>Use transition words to develop a logical progression of ideas</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Editing Station</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Students practice editing skills through collaborative activities (ELO 7). They work in pairs or small
                groups to identify and correct errors in spelling, punctuation, and grammar.
              </p>
              <ul className="list-disc pl-6">
                <li>Develop spelling accuracy and automaticity</li>
                <li>Demonstrate understanding of punctuation conventions</li>
                <li>Engage in the editing process through close reading of drafts</li>
                <li>Use reference materials to monitor and correct spellings</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
