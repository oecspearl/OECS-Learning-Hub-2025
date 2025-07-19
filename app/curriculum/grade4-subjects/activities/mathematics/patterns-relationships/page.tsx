import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Grade 4 Mathematics - Patterns & Relationships Activities",
  description: "Activities for Grade 4 Patterns and Relationships strand",
}

export default function PatternsActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 4", href: "/curriculum/grade4-subjects" },
          { label: "Mathematics", href: "/curriculum/grade4-subjects/mathematics" },
          {
            label: "Patterns & Relationships Activities",
            href: "/curriculum/grade4-subjects/activities/mathematics/patterns-relationships",
          },
        ]}
      />

      <div className="mb-8 mt-6 bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-100 shadow-sm">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h1 className="text-3xl font-bold mb-2 text-purple-800">Grade 4 Patterns & Relationships Activities</h1>
            <p className="text-gray-600">
              Engaging activities to help students identify, extend, and create patterns, as well as understand
              algebraic relationships.
            </p>
          </div>
          <div className="md:w-1/4 flex justify-center mt-4 md:mt-0">
            <img
              src="/placeholder.svg?height=120&width=120&query=math patterns sequence"
              alt="Math patterns illustration"
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>
        </div>
      </div>

      <Tabs defaultValue="number-patterns">
        <TabsList className="grid w-full grid-cols-4 bg-purple-50">
          <TabsTrigger
            value="number-patterns"
            className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
          >
            Number Patterns
          </TabsTrigger>
          <TabsTrigger
            value="visual-patterns"
            className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
          >
            Visual Patterns
          </TabsTrigger>
          <TabsTrigger
            value="algebraic-thinking"
            className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
          >
            Algebraic Thinking
          </TabsTrigger>
          <TabsTrigger
            value="online-resources"
            className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
          >
            Online Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="number-patterns" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Number Pattern Activities</h2>
          <div className="flex justify-center mb-6">
            <img
              src="/placeholder.svg?height=200&width=400&query=number patterns sequence math"
              alt="Number patterns and sequences"
              className="rounded-lg shadow-md"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="pattern-identification">
              <AccordionTrigger className="text-lg font-medium text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 rounded-t-md px-4">
                Pattern Identification
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-purple-50 dark:bg-slate-800 rounded-md border border-purple-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Pattern Detective</h3>
                    <p className="mb-2">Students identify and describe number patterns.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Number pattern cards</li>
                      <li>Recording sheets</li>
                      <li>Calculators (optional)</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students examine number sequences</li>
                      <li>They identify the pattern rule (e.g., add 3, multiply by 2)</li>
                      <li>Students extend the pattern for several more terms</li>
                      <li>They create a written description of the pattern rule</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Missing Numbers</h3>
                    <p className="mb-2">Students find missing numbers in patterns.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Pattern cards with missing numbers</li>
                      <li>Whiteboards and markers</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students are given patterns with missing numbers</li>
                      <li>They identify the pattern rule</li>
                      <li>Students determine the missing numbers</li>
                      <li>They explain their reasoning and verify their answers</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pattern-creation">
              <AccordionTrigger className="text-lg font-medium text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 rounded-t-md px-4">
                Pattern Creation
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-purple-50 dark:bg-slate-800 rounded-md border border-purple-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Pattern Makers</h3>
                    <p className="mb-2">Students create their own number patterns.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Pattern rule cards</li>
                      <li>Number cards</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students select or create a pattern rule</li>
                      <li>They generate a number sequence using their rule</li>
                      <li>Students exchange patterns with partners to identify the rule</li>
                      <li>They create increasingly complex patterns</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Pattern Challenges</h3>
                    <p className="mb-2">Students create patterns with specific constraints.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Challenge cards</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>
                        Students are given pattern challenges (e.g., "Create a pattern that increases, then decreases")
                      </li>
                      <li>They create patterns that meet the criteria</li>
                      <li>Students write the rules for their patterns</li>
                      <li>They share their patterns and challenge classmates to identify the rules</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="visual-patterns" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Visual Pattern Activities</h2>
          <div className="flex justify-center mb-6">
            <img
              src="/placeholder.svg?height=200&width=400&query=visual patterns math tiles"
              alt="Visual patterns with math tiles"
              className="rounded-lg shadow-md"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="growing-patterns">
              <AccordionTrigger className="text-lg font-medium text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 rounded-t-md px-4">
                Growing Patterns
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-purple-50 dark:bg-slate-800 rounded-md border border-purple-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Building Growing Patterns</h3>
                    <p className="mb-2">Students build and analyze growing patterns.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Pattern blocks or cubes</li>
                      <li>Growing pattern cards</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students examine visual growing patterns</li>
                      <li>They build the next few steps in the pattern</li>
                      <li>Students record the number of objects in each step</li>
                      <li>They identify the relationship between the step number and the number of objects</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Pattern Tables</h3>
                    <p className="mb-2">Students create tables to represent growing patterns.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Visual pattern cards</li>
                      <li>Table templates</li>
                      <li>Graph paper</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students analyze visual patterns</li>
                      <li>They create tables showing the step number and number of objects</li>
                      <li>Students identify the relationship between the columns</li>
                      <li>They use their tables to predict later steps in the pattern</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pattern-rules">
              <AccordionTrigger className="text-lg font-medium text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 rounded-t-md px-4">
                Pattern Rules
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-purple-50 dark:bg-slate-800 rounded-md border border-purple-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">From Pictures to Rules</h3>
                    <p className="mb-2">Students develop rules for visual patterns.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Visual pattern cards</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students examine visual patterns</li>
                      <li>They identify how the pattern grows from step to step</li>
                      <li>Students develop a rule to describe the pattern</li>
                      <li>They test their rule by predicting later steps</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Pattern Predictions</h3>
                    <p className="mb-2">Students use pattern rules to make predictions.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Visual pattern cards</li>
                      <li>Prediction worksheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students are given the first few steps of a visual pattern</li>
                      <li>They determine the pattern rule</li>
                      <li>Students predict what step 10 or step 20 would look like</li>
                      <li>They explain their reasoning and verify their predictions</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="algebraic-thinking" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Algebraic Thinking Activities</h2>
          <div className="flex justify-center mb-6">
            <img
              src="/placeholder.svg?height=200&width=400&query=algebraic thinking variables math"
              alt="Algebraic thinking and variables"
              className="rounded-lg shadow-md"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="variables">
              <AccordionTrigger className="text-lg font-medium text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 rounded-t-md px-4">
                Variables and Expressions
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-purple-50 dark:bg-slate-800 rounded-md border border-purple-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Variable Exploration</h3>
                    <p className="mb-2">Students explore the concept of variables.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Variable cards (with symbols like n, x, etc.)</li>
                      <li>Number cards</li>
                      <li>Expression cards</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students learn that variables represent unknown values</li>
                      <li>They substitute different values for variables in expressions</li>
                      <li>Students evaluate expressions with different values</li>
                      <li>They discuss how expressions change with different values</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expression Creation</h3>
                    <p className="mb-2">Students create algebraic expressions for situations.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Situation cards</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students are given real-world situations</li>
                      <li>They identify the unknown quantity and represent it with a variable</li>
                      <li>Students create expressions to represent the situations</li>
                      <li>They evaluate their expressions with different values</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="equations">
              <AccordionTrigger className="text-lg font-medium text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 rounded-t-md px-4">
                Equations and Unknowns
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-purple-50 dark:bg-slate-800 rounded-md border border-purple-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Balance Scale Problems</h3>
                    <p className="mb-2">Students solve equations using a balance scale model.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Balance scale (real or pictorial)</li>
                      <li>Weights or counters</li>
                      <li>Equation cards</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students model equations using a balance scale</li>
                      <li>They use the concept of balance to solve for unknowns</li>
                      <li>Students record their solutions and check their work</li>
                      <li>They create their own balance scale problems</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Function Machines</h3>
                    <p className="mb-2">Students explore input-output relationships.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Function machine templates</li>
                      <li>Input-output cards</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students are given function machines with input-output pairs</li>
                      <li>They determine the rule that transforms inputs to outputs</li>
                      <li>Students use their rule to predict outputs for new inputs</li>
                      <li>They create their own function machines for others to solve</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="online-resources" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Online Resources for Patterns & Relationships</h2>
          <div className="flex justify-center mb-6">
            <img
              src="/placeholder.svg?height=200&width=400&query=digital pattern resources math"
              alt="Digital pattern resources and tools"
              className="rounded-lg shadow-md"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="interactive-resources">
              <AccordionTrigger className="text-lg font-medium text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 rounded-t-md px-4">
                Interactive Resources
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-purple-50 dark:bg-slate-800 rounded-md border border-purple-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Pattern Games</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://www.mathplayground.com/pattern-blocks.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Math Playground: Pattern Blocks
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Interactive pattern blocks for creating and exploring patterns.
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://www.abcya.com/games/number_patterns"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          ABCya: Number Patterns
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Interactive game for practicing number patterns.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Algebraic Thinking Resources</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://www.mathplayground.com/thinking_blocks.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Math Playground: Thinking Blocks
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Interactive tool for modeling and solving word problems.
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://www.splashlearn.com/algebra-games"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          SplashLearn: Algebra Games
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Games that introduce algebraic concepts.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pattern-websites">
              <AccordionTrigger className="text-lg font-medium text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 rounded-t-md px-4">
                Pattern Websites
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-purple-50 dark:bg-slate-800 rounded-md border border-purple-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Visual Pattern Resources</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://www.visualpatterns.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          VisualPatterns.org
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Library of visual patterns for mathematical reasoning.
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://www.shodor.org/interactivate/activities/PatternGenerator/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Shodor: Pattern Generator
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Interactive tool for generating and exploring patterns.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Number Pattern Resources</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://www.mathsisfun.com/numbers/sequences-series.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Math is Fun: Sequences
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Explanation and examples of number sequences and patterns.
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://www.khanacademy.org/math/cc-fourth-grade-math/cc-4th-patterns"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Khan Academy: Patterns
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Video lessons and practice on number patterns.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="printable-resources">
              <AccordionTrigger className="text-lg font-medium text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 rounded-t-md px-4">
                Printable Resources
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-purple-50 dark:bg-slate-800 rounded-md border border-purple-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Pattern Worksheets</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://www.mathworksheets4kids.com/patterns.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Math Worksheets 4 Kids: Patterns
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Printable worksheets for number and shape patterns.
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://www.k5learning.com/free-math-worksheets/fourth-grade-4/patterns"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          K5 Learning: Pattern Worksheets
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Grade 4 worksheets focused on patterns.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Function Tables</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <a
                          href="https://www.mathworksheets4kids.com/function-tables.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Math Worksheets 4 Kids: Function Tables
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Worksheets for practicing input-output relationships.
                        </p>
                      </li>
                      <li>
                        <a
                          href="https://www.commoncoresheets.com/SortedByGrade.php?Sorted=4th#sort=4.oa.5"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Common Core Sheets: Patterns
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Standards-aligned worksheets for pattern recognition.
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
