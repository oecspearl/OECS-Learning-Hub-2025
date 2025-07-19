import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Grade 3 Mathematics - Operations with Numbers Activities",
  description: "Activities for Grade 3 Operations with Numbers strand",
}

export default function OperationsWithNumbersActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 3", href: "/curriculum/grade3-subjects" },
          { label: "Mathematics", href: "/curriculum/grade3-subjects/mathematics" },
          {
            label: "Operations with Numbers Activities",
            href: "/curriculum/grade3-subjects/activities/mathematics/operations-with-numbers",
          },
        ]}
      />

      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold mb-2">Grade 3 Operations with Numbers Activities</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Engaging activities to help students develop fluency with addition, subtraction, multiplication, and division.
        </p>
      </div>

      <Tabs defaultValue="additive">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="additive">Additive Thinking</TabsTrigger>
          <TabsTrigger value="multiplicative">Multiplicative Thinking</TabsTrigger>
          <TabsTrigger value="estimation">Estimation</TabsTrigger>
        </TabsList>

        <TabsContent value="additive" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Additive Thinking Activities</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="addition-subtraction-relationship">
              <AccordionTrigger className="text-lg font-medium">
                Understanding Addition and Subtraction Relationship
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Fact Family Houses</h3>
                    <p className="mb-2">
                      Students create fact family houses to show the relationship between addition and subtraction.
                    </p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>House-shaped templates</li>
                      <li>Number cards</li>
                      <li>Markers or pencils</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Give each student a house-shaped template</li>
                      <li>Students choose three numbers to create a fact family</li>
                      <li>They write the four related facts (2 addition, 2 subtraction)</li>
                      <li>Students share their fact family houses with the class</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Number Bond Activities</h3>
                    <p className="mb-2">Students use number bonds to show part-whole relationships.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Number bond templates</li>
                      <li>Counters or manipulatives</li>
                      <li>Number cards</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Provide students with number bond templates</li>
                      <li>Students draw a number card for the "whole"</li>
                      <li>They find different ways to break the number into parts</li>
                      <li>Students write the corresponding addition and subtraction equations</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fluency">
              <AccordionTrigger className="text-lg font-medium">Developing Computational Fluency</AccordionTrigger>
              <AccordionContent className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Addition and Subtraction War</h3>
                    <p className="mb-2">A card game to practice addition and subtraction facts.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Deck of playing cards (face cards removed)</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Divide the deck equally between two players</li>
                      <li>Each player turns over two cards</li>
                      <li>Players add or subtract their cards (predetermined operation)</li>
                      <li>Player with the highest sum or difference wins the round</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Around the World</h3>
                    <p className="mb-2">A fast-paced game to practice addition and subtraction facts.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Flashcards with addition and subtraction facts</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>One student stands behind another student's desk</li>
                      <li>Teacher shows a flashcard</li>
                      <li>First student to answer correctly moves to the next desk</li>
                      <li>Student who goes "around the world" (back to their desk) wins</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="problem-solving">
              <AccordionTrigger className="text-lg font-medium">
                Problem-Solving with Addition and Subtraction
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Word Problem Theater</h3>
                    <p className="mb-2">Students act out word problems involving addition and subtraction.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Word problem cards</li>
                      <li>Props (optional)</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Divide students into small groups</li>
                      <li>Each group draws a word problem card</li>
                      <li>They create a skit to act out the problem</li>
                      <li>The rest of the class solves the problem</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Problem-Solving Stations</h3>
                    <p className="mb-2">Students rotate through stations with different types of word problems.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Word problem cards for each station</li>
                      <li>Manipulatives</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Set up stations with different types of word problems</li>
                      <li>Students rotate through stations in small groups</li>
                      <li>They solve problems using various strategies</li>
                      <li>Students record their solutions and strategies</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="multiplicative" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Multiplicative Thinking Activities</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="multiplication-division-meaning">
              <AccordionTrigger className="text-lg font-medium">
                Understanding Multiplication and Division
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Array City</h3>
                    <p className="mb-2">Students create a city using arrays to represent multiplication.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Grid paper</li>
                      <li>Colored pencils or markers</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students draw buildings on grid paper</li>
                      <li>Each building must be a rectangular array</li>
                      <li>Students label each building with its dimensions and the multiplication equation</li>
                      <li>They create a city map with multiple buildings</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Division Sharing</h3>
                    <p className="mb-2">Students use manipulatives to understand division as sharing.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Counters or other small objects</li>
                      <li>Paper plates or circles</li>
                      <li>Division problem cards</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students draw a division problem card</li>
                      <li>They use counters to represent the dividend</li>
                      <li>Students share the counters equally among the plates (divisor)</li>
                      <li>They record the quotient and any remainder</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="multiplication-fluency">
              <AccordionTrigger className="text-lg font-medium">
                Developing Multiplication and Division Fluency
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Multiplication Wheels</h3>
                    <p className="mb-2">Students create and use multiplication wheels to practice facts.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Paper plates</li>
                      <li>Brad fasteners</li>
                      <li>Markers</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students create a multiplication wheel for a specific number</li>
                      <li>They write the multiplier in the center</li>
                      <li>Around the edge, they write the numbers 1-12</li>
                      <li>On a smaller circle, they write the products</li>
                      <li>Students use the wheel to practice multiplication facts</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Multiplication and Division Bingo</h3>
                    <p className="mb-2">Students play bingo to practice multiplication and division facts.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Bingo cards with products or quotients</li>
                      <li>Calling cards with multiplication or division problems</li>
                      <li>Markers or counters</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Give each student a bingo card with numbers</li>
                      <li>Teacher calls out multiplication or division problems</li>
                      <li>Students mark the answer on their card</li>
                      <li>First student to get a row, column, or diagonal wins</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="multiplication-division-problems">
              <AccordionTrigger className="text-lg font-medium">
                Problem-Solving with Multiplication and Division
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Multiplication and Division Story Problems</h3>
                    <p className="mb-2">
                      Students create and solve story problems involving multiplication and division.
                    </p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Story problem templates</li>
                      <li>Multiplication and division fact cards</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students draw a multiplication or division fact card</li>
                      <li>They create a story problem based on the fact</li>
                      <li>Students exchange problems with a partner</li>
                      <li>They solve each other's problems and check the solutions</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Real-World Multiplication and Division</h3>
                    <p className="mb-2">Students apply multiplication and division to real-world scenarios.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Real-world items (menus, catalogs, schedules)</li>
                      <li>Worksheets with real-world problems</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Provide students with real-world materials</li>
                      <li>They solve problems like finding the cost of multiple items</li>
                      <li>Students calculate how to share items equally</li>
                      <li>They explain their strategies and solutions</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="estimation" className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Estimation Activities</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="estimation-strategies">
              <AccordionTrigger className="text-lg font-medium">Developing Estimation Strategies</AccordionTrigger>
              <AccordionContent className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Estimation Jars</h3>
                    <p className="mb-2">Students estimate the number of objects in jars.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Clear jars or containers</li>
                      <li>Small objects (beans, marbles, etc.)</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Fill jars with different quantities of objects</li>
                      <li>Students estimate the number in each jar</li>
                      <li>They record their estimates and strategies</li>
                      <li>Count the objects together and compare to estimates</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Rounding Rally</h3>
                    <p className="mb-2">Students practice rounding numbers to estimate sums and differences.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Number cards</li>
                      <li>Whiteboards and markers</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Divide students into teams</li>
                      <li>Teacher shows two number cards</li>
                      <li>Students round the numbers and estimate the sum or difference</li>
                      <li>Teams earn points for reasonable estimates</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="estimation-applications">
              <AccordionTrigger className="text-lg font-medium">
                Applying Estimation in Problem-Solving
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Estimation Shopping</h3>
                    <p className="mb-2">
                      Students estimate the total cost of items before calculating the exact amount.
                    </p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Play money</li>
                      <li>Price tags</li>
                      <li>Items or pictures of items</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Set up a classroom store with priced items</li>
                      <li>Students select items to "purchase"</li>
                      <li>They estimate the total cost before calculating</li>
                      <li>Students compare their estimates to the actual total</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Estimation Challenge</h3>
                    <p className="mb-2">Students compete to make the most accurate estimates.</p>
                    <h4 className="font-medium mt-3">Materials:</h4>
                    <ul className="list-disc pl-5 mb-2">
                      <li>Problem cards with addition, subtraction, multiplication, and division</li>
                      <li>Recording sheets</li>
                    </ul>
                    <h4 className="font-medium mt-3">Instructions:</h4>
                    <ol className="list-decimal pl-5">
                      <li>Students draw a problem card</li>
                      <li>They estimate the answer using appropriate strategies</li>
                      <li>Students calculate the exact answer</li>
                      <li>Points are awarded based on the accuracy of estimates</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Online Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Games</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.splashlearn.com/math-skills/third-grade/addition"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    SplashLearn Addition Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.multiplication.com/games/all-games"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Multiplication.com Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.mathplayground.com/grade_3_games.html"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Math Playground Grade 3 Games
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Printable Worksheets</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.k5learning.com/free-math-worksheets/third-grade-3/multiplication"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    K5 Learning Multiplication Worksheets
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.mathworksheets4kids.com/grade3.php"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Math Worksheets 4 Kids
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.math-drills.com/division.php"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Math Drills Division Worksheets
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Video Lessons</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.khanacademy.org/math/cc-third-grade-math/3rd-basic-multiplication"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Khan Academy Multiplication
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/playlist?list=PLQlHzK9o1Hd8MtT7UT8f6EHsFZF4RQfzL"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Math Antics Operations Videos
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.brainpop.com/math/numbersandoperations/"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    BrainPOP Math Videos
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
