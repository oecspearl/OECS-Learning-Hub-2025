import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function StructureFunctionPage() {
  return (
    <div className="container mx-auto py-6">
      <Link href="/curriculum/grade1-subjects/science">
        <Button variant="outline" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 1 Science
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Grade 1 Science: Structure, Function, and Information Processing</h1>

      <p className="mb-6">
        This strand explores how plants and animals use their external parts to help them survive, grow, and meet their
        needs. Students will also learn about patterns of behavior in parents and offspring that help offspring survive,
        and how young plants and animals are similar to, but not exactly like, their parents.
      </p>

      <Tabs defaultValue="elo1">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="elo1">ELO 1: External Parts & Survival</TabsTrigger>
          <TabsTrigger value="elo2">ELO 2: Parent & Offspring Behaviors</TabsTrigger>
          <TabsTrigger value="elo3">ELO 3: Similarities & Differences</TabsTrigger>
        </TabsList>

        <TabsContent value="elo1">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Essential Learning Outcome 1</h2>
              <p className="mb-4">
                Use materials to design a solution to a human problem by mimicking how plants and/or animals use their
                external parts to help them survive, grow, and meet their needs.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Specific Curriculum Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-bold">Knowledge</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Define terms: mimic/mimicking, protection, living things, non-living things, defence,
                        camouflage, grow, nutrients, predators
                      </li>
                      <li>Name and describe some living and non-living things in the environment</li>
                      <li>Identify and name characteristics of living things</li>
                      <li>Name and describe external parts of local animals and plants and their functions</li>
                      <li>Identify and describe natural defences that local animals use to survive</li>
                      <li>Describe mimicking in their own words</li>
                      <li>Give examples of how humans mimic plants/animals to solve problems</li>
                      <li>Identify human problems solved by mimicking plant/animal external parts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Skills</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Classify common things as living or non-living</li>
                      <li>Observe how plants/animals use external parts for survival, growth, and needs</li>
                      <li>Communicate properties of mimicked plants and animals</li>
                      <li>Use materials to design solutions to human problems</li>
                      <li>Construct and test a simple model of a problem-solving gadget</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Attitudes/Values</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Appreciate that external parts of plants and animals inspire technological designs</li>
                      <li>Demonstrate interest and curiosity in the link between nature and technological design</li>
                      <li>Willingly participate in classroom discussions and group activities</li>
                      <li>Show respect for living things during observations</li>
                      <li>Observe all applicable safety measures</li>
                      <li>Display sensitivity and offer assistance to peers with challenges</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Assessment Strategies</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Mimicking Activity</h4>
                  <p>
                    Have students use the word "mimic" in a sentence and engage in a design challenge to demonstrate
                    mimicking plants/animals to solve problems.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Matching Exercise</h4>
                  <p>Have students match pictures of animals or plants to technologies that mimic their features.</p>

                  <h4 className="font-bold mt-4 mb-2">Classification Activities</h4>
                  <p>
                    Sort pictures into living and non-living things categories. Have students explain their reasoning.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Problem-Solving Design</h4>
                  <p>
                    Ask students to identify a human problem they wish to solve and an animal/plant that can be mimicked
                    to solve it. Have them draw or build a simple model.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Plant Observation</h4>
                  <p>
                    After observing the shameplant (mimosa pudica), have students record their observations through
                    drawings and describe how the plant's movement could inspire human designs.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Learning Strategies</h3>
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Animal and Plant Identification</h4>
                  <p>
                    Ask students to name animals and plants in their environment and discuss their special parts. Guide
                    the discussion to focus on how these parts help the organisms survive.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Body Parts Game</h4>
                  <p>
                    Play a game where students identify how different body parts help humans function. For example: "Our
                    eyes help us to see danger," or "Our legs help us to run away from danger."
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Problem-Solving Discussion</h4>
                  <p>
                    Explore how humans have created devices to help with various tasks. Show examples of technologies
                    inspired by nature, such as Velcro (inspired by burrs) or swimsuits (inspired by shark skin).
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Comparison Analysis</h4>
                  <p>
                    Compare items like helmets and turtle shells, airplanes and birds, cranes and giraffes to identify
                    mimicking. Use pictures or models to make the comparisons clear.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Nature Walk</h4>
                  <p>
                    Observe the shameplant (mimosa pudica) and its response to touch; discuss devices that mimic this
                    plant. If possible, take students outdoors to observe plants and animals in their natural
                    environment.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Design Challenge</h4>
                  <p>
                    Have students design and build a simple model that mimics an animal or plant feature to solve a
                    problem. For example, a grabbing tool inspired by a bird's beak.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Teacher Resources</h3>
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Useful Content Knowledge</h4>
                  <p className="mb-2">
                    Biomimicry is the practice of looking to nature for inspiration to solve human problems. Many
                    technologies we use today were inspired by plants and animals. For example, Velcro was inspired by
                    the way burrs stick to clothing, and the design of bullet trains was inspired by the kingfisher
                    bird.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Materials Needed</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Pictures of animals and plants</li>
                    <li>Pictures of technologies inspired by nature</li>
                    <li>Materials for building models (paper, cardboard, clay, etc.)</li>
                    <li>Access to shameplant (mimosa pudica) if possible</li>
                    <li>Examples of biomimicry (Velcro, etc.)</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Recommended Books</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>"Nature Did It First" by Karen Ansberry</li>
                    <li>"Biomimicry: Inventions Inspired by Nature" by Dora Lee</li>
                    <li>"What Do You Do With a Tail Like This?" by Steve Jenkins</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Opportunities for Subject Integration</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Mathematics:</strong> Counting materials used in designs, measuring parts
                    </li>
                    <li>
                      <strong>Social Studies:</strong> How humans and animals adapt to their environments
                    </li>
                    <li>
                      <strong>Language Arts:</strong> Vocabulary development, reading about biomimicry
                    </li>
                    <li>
                      <strong>TVET:</strong> Designing and building models inspired by nature
                    </li>
                    <li>
                      <strong>Art:</strong> Drawing animals and plants, creating models
                    </li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Resources for Different Learning Needs</h4>
                  <p>
                    For struggling learners, provide simplified matching activities and more structured design
                    challenges. For advanced learners, encourage more complex designs and deeper research into how
                    specific technologies were inspired by nature.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="elo2">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Essential Learning Outcome 2</h2>
              <p className="mb-4">
                Read texts and use media to determine patterns in behavior of parents and offspring that help offspring
                survive.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Specific Curriculum Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-bold">Knowledge</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Define terms: protect, signal, offspring, survive, behaviour, parents, respond</li>
                      <li>Name and identify the offspring of common animals</li>
                      <li>Identify signals offspring make (crying, chirping, whining, vocalizations)</li>
                      <li>Describe how different patterns in behaviour teach survival skills</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Skills</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Observe how parents and offspring behave to help survival</li>
                      <li>Demonstrate through role play the patterns of behaviour</li>
                      <li>Infer from offspring's signal the parent's response</li>
                      <li>Interpret sounds and pictures to make judgements about behaviours</li>
                      <li>Communicate observations of parent-offspring behaviours</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Attitudes/Values</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Appreciate that parents and offspring work together to survive</li>
                      <li>Show respect for parents and offspring during observations</li>
                      <li>Show concern for safety while making observations</li>
                      <li>Appreciate what human parents do for their children</li>
                      <li>Display sensitivity and offer assistance to peers with challenges</li>
                      <li>Participate actively in classroom discussions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Assessment Strategies</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Parent-Offspring Matching</h4>
                  <p>
                    Using a set of cards, have students pair animal parents with their babies. Discuss the names for
                    different baby animals (calf, kitten, puppy, etc.).
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Behavior Categorization</h4>
                  <p>
                    Provide groups with photos of animals caring for their babies in different ways (protecting,
                    feeding, carrying) and have them categorize the pictures. Ask students to explain their
                    categorization.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Sound Identification</h4>
                  <p>
                    Play animal sounds and ask students to identify the baby animal making the sound and how parents
                    might respond. For example, a baby bird chirping might signal hunger to the parent.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Parental Behavior Analysis</h4>
                  <p>
                    Show pictures of parent animals caring for young and ask students to explain the behaviors shown.
                    Have them identify how these behaviors help the offspring survive.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Scenario Response</h4>
                  <p>
                    Provide a story about animals (like a hen protecting chicks from a mongoose) and ask students to
                    predict what would happen next. Discuss why the parent behaves this way.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Learning Strategies</h3>
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Human Care Discussion</h4>
                  <p>
                    Discuss how parents take care of babies and why these actions are necessary. Ask students to share
                    ways their parents or caregivers help them meet their needs.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Signal and Response Analysis</h4>
                  <p>
                    Explore how babies signal their needs (hunger, pain, loneliness) and how parents respond. Extend
                    this to animal behaviors, discussing how animal babies signal their needs.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Field Trip or Virtual Tour</h4>
                  <p>
                    Visit a farm, zoo, or take a nature walk to observe parent-offspring behaviors firsthand. If not
                    possible, use videos or virtual tours to observe these behaviors.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Video Observation</h4>
                  <p>
                    Watch videos of parent animals responding to offspring signals and discuss patterns. Focus on how
                    these behaviors help the offspring survive in their environment.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Role-Playing</h4>
                  <p>
                    Act out scenarios like a baby bird chirping for food and a parent offering food. Have students take
                    turns being the parent and offspring to understand both perspectives.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Shelter Building</h4>
                  <p>
                    Watch videos of animal shelters and draw or build simple models of shelters that protect offspring.
                    Discuss how these shelters help offspring survive.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Teacher Resources</h3>
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Useful Content Knowledge</h4>
                  <p className="mb-2">
                    Parent animals use various behaviors to help their offspring survive, including feeding, protecting,
                    teaching hunting or foraging skills, and providing shelter. These behaviors are often instinctual
                    but can also be learned. Different species have different patterns of parental care, with some
                    species providing extensive care and others providing minimal care.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Materials Needed</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Pictures of parent animals and their offspring</li>
                    <li>Videos of parent-offspring interactions</li>
                    <li>Audio recordings of animal sounds</li>
                    <li>Materials for role-playing activities</li>
                    <li>Books about animal families</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Recommended Books</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>"Are You My Mother?" by P.D. Eastman</li>
                    <li>"Animal Babies" by Jennifer Schofield</li>
                    <li>"Mama Built a Little Nest" by Jennifer Ward</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Opportunities for Subject Integration</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Mathematics:</strong> Counting offspring, measuring growth
                    </li>
                    <li>
                      <strong>Social Studies:</strong> Family structures in different cultures
                    </li>
                    <li>
                      <strong>Language Arts:</strong> Reading stories about animal families
                    </li>
                    <li>
                      <strong>Art:</strong> Drawing parent animals and their offspring
                    </li>
                    <li>
                      <strong>Health:</strong> Discussing human family care and relationships
                    </li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Resources for Different Learning Needs</h4>
                  <p>
                    For struggling learners, focus on familiar animals and simple parent-offspring interactions. For
                    advanced learners, explore more complex behaviors and unusual animal families, such as those where
                    fathers provide primary care.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="elo3">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Essential Learning Outcome 3</h2>
              <p className="mb-4">
                Make observations to construct an evidence-based account that young plants and animals are like, but not
                exactly like, their parents.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Specific Curriculum Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-bold">Knowledge</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Define terms: parent, roots, leaves, stems, fruits, flowers, body coverings</li>
                      <li>Identify properties of plants that distinguish between parents and offspring</li>
                      <li>Identify properties of animals that distinguish between parents and offspring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Skills</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Observe and compare how young animals and plants are like, but not exactly like their parents
                      </li>
                      <li>Collect and record evidence about similarities and differences</li>
                      <li>Compare and contrast parents and offspring who don't have the same features</li>
                      <li>Work collaboratively with peers to observe physical features</li>
                      <li>Communicate ideas with new vocabulary</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Attitudes/Values</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Respect for evidence arising in experiments and demonstrations</li>
                      <li>Care and respect for living things</li>
                      <li>Display sensitivity and offer assistance to peers with challenges</li>
                      <li>Participate actively in classroom discussions</li>
                      <li>Appreciate that young plants and animals are like but not exactly like their parents</li>
                      <li>Work in the classroom with concerns for safety</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Assessment Strategies</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Drawing/Modeling</h4>
                  <p>
                    Ask students to draw or use playdough to make models of their favorite plant/animal as both parent
                    and baby, identifying differences and similarities. Have them label the key features.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Matching Exercise</h4>
                  <p>
                    Have students match parts of young animals/plants to adult plants/animals. Discuss how these parts
                    may change as the organism grows.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Picture Analysis</h4>
                  <p>
                    Show pictures of adult plants/animals and have students circle features that differ from the young
                    plant/animal. Create a class chart of these differences.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Video Observation</h4>
                  <p>
                    Have students watch videos about animals that look different as babies and report on similarities
                    and differences. Examples include frogs, butterflies, and birds.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Comparison Checklist</h4>
                  <p>
                    Provide checklists for students to note similarities and differences between young and adult forms
                    of plants and animals. Include features like size, color, and body parts.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Learning Strategies</h3>
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Favorite Animal Drawing</h4>
                  <p>
                    Have students draw their favorite animal as parent and baby, then discuss similarities and
                    differences. Create a display of these drawings in the classroom.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">KWL Chart</h4>
                  <p>
                    Use KWL charts to document what students know, want to know, and learn about young animals and their
                    parents. Revisit the chart throughout the unit.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Human Comparison</h4>
                  <p>
                    Discuss similarities and differences between human babies and adults. If appropriate, have students
                    bring in baby photos to compare with their current appearance.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Plant Observation</h4>
                  <p>
                    Observe and compare young and adult forms of plants (e.g., mango plant vs. tree), recording
                    similarities and differences in a T-chart. If possible, grow plants from seeds to observe changes
                    over time.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Animal Observation</h4>
                  <p>
                    Compare various animals and their young (cats and kittens, goats and kids, birds and chicks), noting
                    similarities and differences. Use pictures, videos, or live animals if available.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Life Cycle Study</h4>
                  <p>
                    Explore the life cycles of animals that undergo metamorphosis, such as butterflies or frogs. Discuss
                    how these animals change dramatically as they grow.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Teacher Resources</h3>
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Useful Content Knowledge</h4>
                  <p className="mb-2">
                    Young plants and animals share many traits with their parents but are not identical. These
                    similarities are due to inheritance of genetic information. Some animals undergo dramatic changes as
                    they develop (metamorphosis), while others maintain similar appearances throughout their lives.
                    Plants also change as they grow, developing from seeds to seedlings to mature plants.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Materials Needed</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Pictures of young and adult plants and animals</li>
                    <li>Seeds and mature plants for comparison</li>
                    <li>Drawing materials and playdough</li>
                    <li>T-charts for recording observations</li>
                    <li>Videos of animal development</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Recommended Books</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>"From Seed to Plant" by Gail Gibbons</li>
                    <li>"A Butterfly Is Patient" by Dianna Hutts Aston</li>
                    <li>"From Tadpole to Frog" by Wendy Pfeffer</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Opportunities for Subject Integration</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Mathematics:</strong> Measuring growth, comparing sizes
                    </li>
                    <li>
                      <strong>Social Studies:</strong> Family resemblances in human families
                    </li>
                    <li>
                      <strong>Language Arts:</strong> Writing descriptions of similarities and differences
                    </li>
                    <li>
                      <strong>Art:</strong> Drawing life cycles and developmental stages
                    </li>
                    <li>
                      <strong>Health:</strong> Human growth and development
                    </li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Resources for Different Learning Needs</h4>
                  <p>
                    For struggling learners, focus on obvious similarities and differences between parents and
                    offspring. For advanced learners, explore more complex life cycles and the concept of inheritance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Subject Integration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Mathematics</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Counting materials used in designs</li>
              <li>Data collection and comparison</li>
              <li>Finding patterns and analyzing traits</li>
              <li>Gathering numerical data on effectiveness of designs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Social Studies</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>How humans and animals communicate</li>
              <li>The role of families in different societies</li>
              <li>Self-identity and relation to parents and grandparents</li>
              <li>Natural resources and environmental relationships</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Language Arts</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vocabulary development (protection, mimicking, offspring)</li>
              <li>Reading and discussing stories about animal families</li>
              <li>Communication skills through presentations</li>
              <li>Writing observations in journals</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Health & TVET</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tools used for safety and protection</li>
              <li>Family bonding and parental care</li>
              <li>Materials used in construction (cranes, stilts)</li>
              <li>Building models of shelters for protection</li>
              <li>Designing tools inspired by animal features</li>
            </ul>
          </div>
        </div>

        <h3 className="font-semibold mt-4 mb-2">Local Culture Connections</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Mimicking movement and sounds of local animals to send coded messages</li>
          <li>Natural hairstyles which mimic vines</li>
          <li>Carnival costumes that mimic vibrant colors of local plants and animals</li>
          <li>Traditional stilts (used in festivals) that mimic long-legged animals</li>
          <li>Local craft items that mimic natural objects (like coconut shell purses)</li>
        </ul>
      </div>
    </div>
  )
}
