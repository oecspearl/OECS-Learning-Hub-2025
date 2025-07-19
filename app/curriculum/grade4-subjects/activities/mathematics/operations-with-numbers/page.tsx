import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Grade 4 Mathematics - Operations with Numbers Activities",
  description: "Activities for Grade 4 Operations with Numbers strand",
}

export default function OperationsActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 4", href: "/curriculum/grade4-subjects" },
          { label: "Mathematics", href: "/curriculum/grade4-subjects/mathematics" },
          {
            label: "Operations Activities",
            href: "/curriculum/grade4-subjects/activities/mathematics/operations-with-numbers",
          },
        ]}
      />

      <div className="mb-8 mt-6 bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-100 shadow-sm">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h1 className="text-3xl font-bold mb-2 text-green-800">Grade 4 Operations with Numbers Activities</h1>
            <p className="text-gray-600">
              Engaging activities to help students develop fluency with addition, subtraction, multiplication, and
              division.
            </p>
          </div>
          <div className="md:w-1/4 flex justify-center mt-4 md:mt-0">
            <img
              src="/placeholder.svg?height=120&width=120&query=math operations symbols"
              alt="Math operations illustration"
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>
        </div>
      </div>

      <Tabs defaultValue="addition-subtraction">
        <TabsList className="grid w-full grid-cols-5 bg-green-50">
          <TabsTrigger
            value="addition-subtraction"
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Addition & Subtraction
          </TabsTrigger>
          <TabsTrigger
            value="multiplication"
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Multiplication
          </TabsTrigger>
          <TabsTrigger value="division" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
            Division
          </TabsTrigger>
          <TabsTrigger
            value="problem-solving"
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Problem Solving
          </TabsTrigger>
          <TabsTrigger
            value="online-resources"
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Online Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="addition-subtraction" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Addition & Subtraction Activities</h2>
          <div className="flex justify-center mb-6">
            <img
              src="/placeholder.svg?height=200&width=400&query=addition subtraction math activities"
              alt="Addition and subtraction activities"
              className="rounded-lg shadow-md"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="mental-math">
              <AccordionTrigger className="text-lg font-medium text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 rounded-t-md px-4">
                Mental Math Strategies
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-green-50 dark:bg-slate-800 rounded-md border border-green-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Number Talk Routines</h3>
                    <p className="mb-2">Students share mental math strategies for addition and subtraction.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Number talk prompts</li>
                      <li>Whiteboard</li>
                      <li>Student whiteboards</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Teacher presents a calculation (e.g., 328 + 167)</li>
                      <li>Students solve it mentally using their preferred strategies</li>
                      <li>They share and explain their thinking</li>
                      <li>Class discusses the efficiency of different strategies</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Strategy Sort</h3>
                    <p className="mb-2">Students identify and categorize addition and subtraction strategies.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Strategy cards</li>
                      <li>Problem cards</li>
                      <li>Sorting mats</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students are given cards showing different strategies</li>
                      <li>They match strategies to appropriate problems</li>
                      <li>Students explain why certain strategies work well for specific problems</li>
                      <li>They create their own strategy examples</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="estimation">
              <AccordionTrigger className="text-lg font-medium text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 rounded-t-md px-4">
                Estimation Activities
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-green-50 dark:bg-slate-800 rounded-md border border-green-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Estimation Jars</h3>
                    <p className="mb-2">Students estimate sums and differences using visual models.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Clear jars or containers</li>
                      <li>Counters or objects</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Teacher prepares jars with known quantities of objects</li>
                      <li>Students estimate how many objects are in each jar</li>
                      <li>They estimate sums or differences between jars</li>
                      <li>Students explain their estimation strategies</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Reasonable or Not?</h3>
                    <p className="mb-2">Students determine if calculation results are reasonable.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Problem cards with calculations and answers</li>
                      <li>"Reasonable" and "Not Reasonable" sorting cards</li>
                      <li>Whiteboards</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students are given problems with answers</li>
                      <li>They use estimation to determine if answers are reasonable</li>
                      <li>Students sort problems into "reasonable" and "not reasonable" categories</li>
                      <li>They explain their reasoning and provide correct answers for unreasonable results</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="multiplication" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Multiplication Activities</h2>
          <div className="flex justify-center mb-6">
            <img
              src="/placeholder.svg?height=200&width=400&query=multiplication arrays math activities"
              alt="Multiplication arrays and activities"
              className="rounded-lg shadow-md"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="multiplication-strategies">
              <AccordionTrigger className="text-lg font-medium text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 rounded-t-md px-4">
                Multiplication Strategies
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-green-50 dark:bg-slate-800 rounded-md border border-green-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Array Exploration</h3>
                    <p className="mb-2">Students use arrays to understand multiplication strategies.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Grid paper</li>
                      <li>Counters</li>
                      <li>Colored pencils</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students create arrays for multiplication problems</li>
                      <li>They use different colors to show breaking arrays into smaller parts</li>
                      <li>Students write number sentences to match their arrays</li>
                      <li>They explain how breaking arrays relates to the distributive property</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Multiplication Strategy Posters</h3>
                    <p className="mb-2">Students create posters explaining multiplication strategies.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Poster paper</li>
                      <li>Markers</li>
                      <li>Example problems</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students work in groups, each assigned a multiplication strategy</li>
                      <li>They create posters explaining their strategy with examples</li>
                      <li>Students include visual models and step-by-step instructions</li>
                      <li>Groups present their strategies to the class</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="multiplication-games">
              <AccordionTrigger className="text-lg font-medium text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 rounded-t-md px-4">
                Multiplication Games
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-green-50 dark:bg-slate-800 rounded-md border border-green-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Multiplication Bingo</h3>
                    <p className="mb-2">Students play bingo with multiplication facts.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Bingo cards with products</li>
                      <li>Calling cards with multiplication expressions</li>
                      <li>Markers or counters</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Each student gets a bingo card with products</li>
                      <li>Teacher calls out multiplication expressions</li>
                      <li>Students mark the corresponding products on their cards</li>
                      <li>First student to complete a row, column, or diagonal wins</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Factor Pairs</h3>
                    <p className="mb-2">Students identify factor pairs in a card game.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Cards with numbers 1-100</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students draw a card and identify all factor pairs for that number</li>
                      <li>They earn points for each correct factor pair</li>
                      <li>Students record factor pairs on their sheets</li>
                      <li>They look for patterns in factor pairs across different numbers</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="division" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Division Activities</h2>
          <div className="flex justify-center mb-6">
            <img
              src="/placeholder.svg?height=200&width=400&query=division math activities"
              alt="Division activities and models"
              className="rounded-lg shadow-md"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="division-concepts">
              <AccordionTrigger className="text-lg font-medium text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 rounded-t-md px-4">
                Division Concepts
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-green-50 dark:bg-slate-800 rounded-md border border-green-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Division Models</h3>
                    <p className="mb-2">Students create visual models for division problems.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Counters or base-10 blocks</li>
                      <li>Division problem cards</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students select a division problem card</li>
                      <li>They model the problem using counters or blocks</li>
                      <li>Students record their work with drawings and equations</li>
                      <li>They explain their models to partners</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Division Stories</h3>
                    <p className="mb-2">Students create and solve division word problems.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Story templates</li>
                      <li>Division expression cards</li>
                      <li>Writing materials</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students draw a division expression card</li>
                      <li>They create a word problem that matches the expression</li>
                      <li>Students exchange problems with partners to solve</li>
                      <li>They discuss different types of division situations (partitive and quotative)</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="division-strategies">
              <AccordionTrigger className="text-lg font-medium text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 rounded-t-md px-4">
                Division Strategies
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-green-50 dark:bg-slate-800 rounded-md border border-green-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Partial Quotients</h3>
                    <p className="mb-2">Students practice the partial quotients division strategy.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Division problem cards</li>
                      <li>Recording sheets with partial quotients format</li>
                      <li>Base-10 blocks (optional)</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students select division problems to solve</li>
                      <li>They use the partial quotients strategy to solve each problem</li>
                      <li>Students record each step of their work</li>
                      <li>They explain their strategy to partners</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Division with Remainders</h3>
                    <p className="mb-2">Students interpret remainders in different contexts.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Word problem cards with division and remainders</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students solve division word problems with remainders</li>
                      <li>They determine how to interpret the remainder based on context</li>
                      <li>Students explain whether to round up, round down, or express as a fraction</li>
                      <li>They create their own word problems with remainders</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="problem-solving" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Problem Solving Activities</h2>
          <div className="flex justify-center mb-6">
            <img
              src="/placeholder.svg?height=200&width=400&query=math problem solving"
              alt="Math problem solving activities"
              className="rounded-lg shadow-md"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="multi-step-problems">
              <AccordionTrigger className="text-lg font-medium text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 rounded-t-md px-4">
                Multi-Step Problems
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-green-50 dark:bg-slate-800 rounded-md border border-green-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Problem Solving Process</h3>
                    <p className="mb-2">Students use a structured approach to solve multi-step problems.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Multi-step word problems</li>
                      <li>Problem solving templates</li>
                      <li>Manipulatives</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students read problems and identify what they need to find</li>
                      <li>They organize information and plan their approach</li>
                      <li>Students solve step-by-step, showing their work</li>
                      <li>They check their answers for reasonableness</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Create Your Own Problems</h3>
                    <p className="mb-2">Students create and solve multi-step problems.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Problem templates</li>
                      <li>Writing materials</li>
                      <li>Real-world contexts (menus, catalogs, etc.)</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students create multi-step word problems using real-world contexts</li>
                      <li>They include at least two different operations in their problems</li>
                      <li>Students exchange problems with partners to solve</li>
                      <li>They provide feedback on clarity and difficulty</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="problem-solving-strategies">
              <AccordionTrigger className="text-lg font-medium text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 rounded-t-md px-4">
                Problem Solving Strategies
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-green-50 dark:bg-slate-800 rounded-md border border-green-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Strategy Toolbox</h3>
                    <p className="mb-2">Students learn and apply different problem-solving strategies.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Strategy cards (draw a picture, make a table, work backward, etc.)</li>
                      <li>Problem cards</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students learn different problem-solving strategies</li>
                      <li>They match strategies to appropriate problems</li>
                      <li>Students solve problems using selected strategies</li>
                      <li>They reflect on which strategies work best for different types of problems</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Math Detective</h3>
                    <p className="mb-2">Students solve mathematical mysteries using clues.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Mystery scenario cards</li>
                      <li>Clue cards</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students are presented with mathematical mysteries</li>
                      <li>They analyze clues and use operations to solve the mysteries</li>
                      <li>Students record their thinking and solutions</li>
                      <li>They create their own mathematical mysteries for others to solve</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="online-resources" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Online Resources for Operations with Numbers</h2>
          <div className="flex justify-center mb-6">
            <img
              src="/placeholder.svg?height=200&width=400&query=digital math operations resources"
              alt="Digital math operations resources"
              className="rounded-lg shadow-md"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="interactive-games">
              <AccordionTrigger className="text-lg font-medium text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 rounded-t-md px-4">
                Interactive Games
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-green-50 dark:bg-slate-800 rounded-md border border-green-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Addition and Subtraction Games</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://www.mathplayground.com/ASB_Index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Math Playground: Addition and Subtraction
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Interactive games for practicing addition and subtraction.
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://www.splashlearn.com/addition-games"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          SplashLearn: Addition Games
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Fun games to practice addition skills.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Multiplication and Division Games</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://www.multiplication.com/games/all-games"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Multiplication.com: Games
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Various games to practice multiplication facts.
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://www.mathplayground.com/index_division.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Math Playground: Division Games
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Interactive games for practicing division.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="video-lessons">
              <AccordionTrigger className="text-lg font-medium text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 rounded-t-md px-4">
                Video Lessons
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-green-50 dark:bg-slate-800 rounded-md border border-green-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Addition and Subtraction Videos</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://www.khanacademy.org/math/cc-fourth-grade-math/cc-4th-add-sub-topic"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Khan Academy: Addition and Subtraction
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Video lessons on addition and subtraction for Grade 4.
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=mAvuom42NyY"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Math Antics: Multi-Digit Addition
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Clear explanation of multi-digit addition.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Multiplication and Division Videos</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://www.khanacademy.org/math/cc-fourth-grade-math/cc-4th-mult-div-topic"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Khan Academy: Multiplication and Division
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Comprehensive video lessons on multiplication and division.
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=FJ5qLWP3Fqo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Math Antics: Long Division
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Step-by-step explanation of long division.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="problem-solving-resources">
              <AccordionTrigger className="text-lg font-medium text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 rounded-t-md px-4">
                Problem Solving Resources
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-green-50 dark:bg-slate-800 rounded-md border border-green-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Word Problem Resources</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://www.mathworksheets4kids.com/word-problems.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Math Worksheets 4 Kids: Word Problems
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Printable word problem worksheets for various operations.
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://www.k5learning.com/free-math-worksheets/fourth-grade-4/word-problems"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          K5 Learning: Word Problems
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Grade 4 word problem worksheets with various operations.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Problem Solving Strategies</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://www.youcubed.org/tasks/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          YouCubed: Math Tasks
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Rich mathematical tasks that promote problem-solving.
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://nrich.maths.org/primary"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          NRICH: Problem Solving
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Rich mathematical problems with multiple solution strategies.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  )
}
