import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Search, BookOpen, BarChart4, Users, LightbulbIcon } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export default function VocabularyDetectivePage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade3-subjects/activities/language-arts">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Language Arts Activities
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
            Vocabulary Detective
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            An engaging approach to vocabulary development that empowers students to discover, investigate, and master
            new words through active exploration.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-pink-600" />
                Activity Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Vocabulary Detective activity transforms students into word investigators who actively search for,
                analyze, and learn new vocabulary through context clues, word parts, and reference materials. Instead of
                passive memorization, students become engaged "detectives" who collect evidence about words' meanings,
                usages, and connections, then apply their discoveries in their own speaking and writing.
              </p>

              <div className="relative w-full h-64 mb-6 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600&query=children+investigating+words+with+magnifying+glasses+classroom+illustration"
                  alt="Vocabulary Detective Activity"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">Learning Outcomes</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Develop strategies for determining word meanings through context clues</li>
                <li>Build word analysis skills using prefixes, suffixes, and root words</li>
                <li>Expand vocabulary knowledge across content areas</li>
                <li>Use reference materials effectively to investigate words</li>
                <li>Recognize relationships between words (synonyms, antonyms, related words)</li>
                <li>Apply new vocabulary appropriately in speaking and writing</li>
                <li>Develop curiosity and positive attitudes toward vocabulary learning</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Curriculum Connections</h3>
              <div className="mb-4">
                <p className="mb-2">
                  <strong>ELO 2:</strong> Learners will demonstrate a variety of ways to use background knowledge and
                  interests to select and engage critically with a range of culturally diverse paper-based, visual, and
                  digital texts for pleasure and personal growth.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    SCO 2.8: Continue to make connections between the vocabulary of Home Language(s) and Standard
                    English
                  </li>
                  <li>
                    SCO 2.10: Continue to develop reading vocabulary through reading a range of genres, authors, and
                    topics
                  </li>
                  <li>
                    SCO 2.11: Extend reading vocabulary through application of antonyms, synonyms, homophones,
                    homographs
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="mb-2">
                  <strong>ELO 3:</strong> Learners will interact meaningfully with a variety of genres using background
                  knowledge, comprehension strategies, vocabulary, and graphophonic cues.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    SCO 3.11: Extend reading vocabulary through application of compound words, adjectives, antonyms,
                    synonyms, homophones, homographs
                  </li>
                  <li>
                    SCO 3.13: Continue to apply common prefixes and suffixes to determine meaning of new vocabulary
                  </li>
                  <li>
                    SCO 3.14: Extend vocabulary by applying technical terms encountered during cross-curricular learning
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-pink-600" />
                Implementation Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-pink-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      1
                    </span>
                    Introduction to Word Detective Concepts (Day 1, 30 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Introduce the concept of being a "word detective" with detective metaphors</li>
                    <li>Explain that detectives look for "clues" to solve word mysteries</li>
                    <li>Demonstrate word-solving strategies using a think-aloud with an unfamiliar word</li>
                    <li>Create an anchor chart of "detective tools" (context clues, word parts, references)</li>
                    <li>Model how to record word investigations in a vocabulary notebook</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-pink-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      2
                    </span>
                    Setting Up Vocabulary Detective Notebooks (Day 1, 15-20 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Provide each student with a notebook or digital template</li>
                    <li>Create sections for different vocabulary sources or categories</li>
                    <li>
                      Design a standard "word investigation" entry format with spaces for:
                      <ul className="list-disc pl-5 mt-1">
                        <li>The word and where it was found</li>
                        <li>Context clues or sentence</li>
                        <li>Prediction of meaning</li>
                        <li>Dictionary definition</li>
                        <li>Word parts (prefixes, roots, suffixes)</li>
                        <li>Related words (synonyms, antonyms, forms)</li>
                        <li>Sample sentence or illustration</li>
                      </ul>
                    </li>
                    <li>Allow students to personalize notebook covers with detective themes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-pink-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      3
                    </span>
                    Context Clues Investigation (Day 2, 30 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Teach specific types of context clues (definition, example, synonym, contrast)</li>
                    <li>Model identifying clues in text using think-aloud process</li>
                    <li>Provide practice sentences with highlighted unfamiliar words</li>
                    <li>Guide students to underline specific context clues</li>
                    <li>Practice making meaning predictions based on context</li>
                    <li>Have students record their first word investigations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-pink-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      4
                    </span>
                    Word Parts Investigation (Day 3, 30 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Introduce common prefixes, suffixes, and root words relevant to grade level</li>
                    <li>Create word part reference charts for classroom display</li>
                    <li>Model breaking down words into meaningful parts</li>
                    <li>Practice combining word parts to determine meanings</li>
                    <li>Play word building games with affixes and root words</li>
                    <li>Have students add word part analysis to their investigations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-pink-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      5
                    </span>
                    Reference Tools Workshop (Day 4, 30 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Teach effective use of dictionaries (print and digital)</li>
                    <li>Introduce thesaurus use for finding related words</li>
                    <li>Practice alphabetical order and guide words for quick lookups</li>
                    <li>Demonstrate how to select the appropriate definition for context</li>
                    <li>Explore digital reference tools and child-friendly websites</li>
                    <li>Have students complete word investigations using references</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-pink-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      6
                    </span>
                    Ongoing Application (Daily, 10-15 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Establish a daily "Word Detective Time" during reading activities</li>
                    <li>Encourage identification of unfamiliar words during content area lessons</li>
                    <li>Set weekly goals for number of word investigations (3-5 per week)</li>
                    <li>Implement "Word of the Day" routine with student investigators</li>
                    <li>Create classroom word walls categorized by subject or word features</li>
                    <li>Hold periodic sharing circles for students to present word discoveries</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-pink-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      7
                    </span>
                    Word Application Activities (Weekly)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Create sentences using newly discovered vocabulary</li>
                    <li>Write short paragraphs incorporating multiple vocabulary words</li>
                    <li>Develop word games using class vocabulary</li>
                    <li>Act out words with gestures and expressions</li>
                    <li>Create word relationship webs showing connections</li>
                    <li>Design word-of-the-week challenges across content areas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LightbulbIcon className="h-5 w-5 text-pink-600" />
                Word Detective Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-pink-50 p-3 rounded-md border border-pink-200">
                  <h3 className="text-md font-semibold mb-1 text-pink-700">Context Clues</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>
                      <strong>Definition:</strong> "The metropolis, or large city, was crowded with people."
                    </li>
                    <li>
                      <strong>Example:</strong> "She was industrious, always working hard on her assignments."
                    </li>
                    <li>
                      <strong>Synonym:</strong> "The mammoth, enormous creature towered over us."
                    </li>
                    <li>
                      <strong>Contrast:</strong> "Unlike his timid brother, Jamal was brave and daring."
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-3 rounded-md border border-pink-200">
                  <h3 className="text-md font-semibold mb-1 text-pink-700">Word Parts Analysis</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>
                      <strong>Prefixes:</strong> un-, re-, pre-, dis-, im-, in-
                    </li>
                    <li>
                      <strong>Suffixes:</strong> -ful, -less, -ly, -ment, -tion
                    </li>
                    <li>
                      <strong>Root Words:</strong> port (carry), dict (say), struct (build)
                    </li>
                    <li>
                      <strong>Compound Words:</strong> classroom, raincoat, sidewalk
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-3 rounded-md border border-pink-200">
                  <h3 className="text-md font-semibold mb-1 text-pink-700">Word Relationships</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>
                      <strong>Synonyms:</strong> Words with similar meanings
                    </li>
                    <li>
                      <strong>Antonyms:</strong> Words with opposite meanings
                    </li>
                    <li>
                      <strong>Homonyms:</strong> Words that sound alike but have different meanings
                    </li>
                    <li>
                      <strong>Word Families:</strong> Groups of related words (happy, happily, happiness)
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-3 rounded-md border border-pink-200">
                  <h3 className="text-md font-semibold mb-1 text-pink-700">Reference Tools</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>
                      <strong>Dictionary:</strong> For definitions, pronunciation, parts of speech
                    </li>
                    <li>
                      <strong>Thesaurus:</strong> For finding synonyms and antonyms
                    </li>
                    <li>
                      <strong>Glossaries:</strong> Subject-specific vocabulary definitions
                    </li>
                    <li>
                      <strong>Digital Tools:</strong> Kid-friendly online dictionaries and reference sites
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-rose-50 p-4 rounded-md border border-rose-200">
                <h3 className="text-lg font-semibold mb-2 text-rose-700">Word Collection Sources</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Reading assignments and independent reading books</li>
                  <li>Content area textbooks (science, social studies, math)</li>
                  <li>Environmental print (signs, labels, announcements)</li>
                  <li>Digital content (appropriate websites, educational videos)</li>
                  <li>Class discussions and oral presentations</li>
                  <li>Writing prompts and assignments</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart4 className="h-5 w-5 text-pink-600" />
                Differentiation Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-md font-semibold mb-1 text-pink-700">For Students Who Excel</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Investigate more complex word origins and etymology</li>
                    <li>Explore figurative language and idiomatic expressions</li>
                    <li>Analyze multiple-meaning words across different contexts</li>
                    <li>Create word investigations for specialized vocabulary in areas of interest</li>
                    <li>Design vocabulary games and activities for classmates</li>
                    <li>Explore Greek and Latin roots at an introductory level</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-md font-semibold mb-1 text-pink-700">For Students Who Need Support</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide simplified investigation templates</li>
                    <li>Focus on high-frequency, high-utility words first</li>
                    <li>Use visual supports and illustrations alongside words</li>
                    <li>Develop personal word banks of frequently encountered words</li>
                    <li>Incorporate physical actions and gestures to reinforce meanings</li>
                    <li>Use audio support for pronunciation and definitions</li>
                    <li>Implement partner investigations for additional support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-md font-semibold mb-1 text-pink-700">Language Considerations</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Incorporate bilingual word investigations that connect Home Language to Standard English</li>
                    <li>Validate Home Language vocabulary as valuable knowledge</li>
                    <li>Create word comparison charts between languages</li>
                    <li>Explore cognates (words that are similar across languages)</li>
                    <li>Celebrate the rich vocabulary unique to Caribbean languages and dialects</li>
                    <li>Discuss how words can have different connotations across cultural contexts</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-pink-600" />
                Engaging Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-md font-semibold mb-1 text-pink-700">Vocabulary Games</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Word Detective Bingo:</strong> Play with recently discovered vocabulary
                    </li>
                    <li>
                      <strong>Prefix-Suffix Match:</strong> Combine parts to create real words
                    </li>
                    <li>
                      <strong>Context Clue Challenge:</strong> Guess words from clue sentences
                    </li>
                    <li>
                      <strong>Synonym Snap:</strong> Card game matching words with similar meanings
                    </li>
                    <li>
                      <strong>Vocabulary Charades:</strong> Act out words for teammates to guess
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-md font-semibold mb-1 text-pink-700">Creative Extensions</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Word Detectives Agency:</strong> Students create detective badges and receive "word cases"
                      to solve
                    </li>
                    <li>
                      <strong>Vocabulary Trading Cards:</strong> Create illustrated cards with word information to
                      collect and trade
                    </li>
                    <li>
                      <strong>Mystery Word Wall:</strong> Add clues about a hidden word throughout the week
                    </li>
                    <li>
                      <strong>Word Journey Maps:</strong> Trace how words have traveled between languages and cultures
                    </li>
                    <li>
                      <strong>Vocabulary Newscast:</strong> Present weekly word discoveries as "breaking news"
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-4 rounded-md border border-pink-200">
                  <h3 className="text-lg font-semibold mb-2 text-pink-700">Assessment Ideas</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Regular review of vocabulary notebooks for completeness and accuracy</li>
                    <li>Observation of strategy application during reading and content lessons</li>
                    <li>Word application in writing samples across subjects</li>
                    <li>Self-assessment of vocabulary growth and strategy effectiveness</li>
                    <li>Informal vocabulary quizzes focusing on meaning and usage</li>
                    <li>Performance tasks requiring application of learned vocabulary</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-pink-50 p-6 rounded-xl shadow-md border border-pink-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-pink-800">Cross-Curricular Connections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-pink-700">Science</h3>
            <p className="text-sm mb-2">
              Focus on scientific terminology related to current units. Investigate specialized vocabulary using word
              parts common in science (bio-, hydro-, -ology, etc.). Create science vocabulary journals with
              illustrations and definitions.
            </p>
            <p className="text-sm">
              <strong>Example words:</strong> habitat, predator, ecosystem, evaporation, temperature, experiment
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-pink-700">Social Studies</h3>
            <p className="text-sm mb-2">
              Explore vocabulary related to communities, geography, and history. Investigate terms with cultural
              significance and words that have changed meaning over time. Create word webs showing concept
              relationships.
            </p>
            <p className="text-sm">
              <strong>Example words:</strong> community, tradition, climate, landmark, citizen, transportation
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-pink-700">Mathematics</h3>
            <p className="text-sm mb-2">
              Focus on precise mathematical terminology and concepts. Investigate relationships between everyday words
              and their specialized mathematical meanings. Create illustrated math dictionaries with examples.
            </p>
            <p className="text-sm">
              <strong>Example words:</strong> product, difference, equivalent, estimate, symmetry, fraction
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link href="/curriculum/grade3-subjects/activities/language-arts/readers-theater">
          <Button variant="outline" className="mr-4">
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous Activity
          </Button>
        </Link>
        <Link href="/curriculum/grade3-subjects/activities/language-arts/cultural-poetry">
          <Button className="bg-pink-600 hover:bg-pink-700">Next Activity: Cultural Poetry Exploration</Button>
        </Link>
      </div>
    </div>
  )
}
