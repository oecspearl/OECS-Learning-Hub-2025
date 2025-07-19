import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function WavesLightSoundPage() {
  return (
    <div className="container mx-auto py-6">
      <Link href="/curriculum/grade1-subjects/science">
        <Button variant="outline" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 1 Science
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Grade 1 Science: Waves, Light and Sound</h1>

      <p className="mb-6">
        The study of science encompasses knowledge, process skills, and values. Scientifically literate persons will
        foster an attitude of caring not only for themselves, but as responsible citizens for the world around them.
        Their decision-making will be enhanced by a systematic study of the structure and behavior of the physical and
        natural world through observation and experiment.
      </p>

      <Tabs defaultValue="elo1">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="elo1">ELO 1: Sound & Vibration</TabsTrigger>
          <TabsTrigger value="elo2">ELO 2: Light & Illumination</TabsTrigger>
          <TabsTrigger value="elo3">ELO 3: Light & Materials</TabsTrigger>
          <TabsTrigger value="elo4">ELO 4: Communication Devices</TabsTrigger>
        </TabsList>

        <TabsContent value="elo1">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Essential Learning Outcome 1</h2>
              <p className="mb-4">
                Learners will be able to plan and conduct investigations to provide evidence that vibrating materials
                can make sound and that sound can make materials vibrate.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Specific Curriculum Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-bold">Knowledge</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Define terms: sounds, vibrate, waves, loud, soft, sign language</li>
                      <li>Demonstrate understanding of how to produce sounds</li>
                      <li>Compare and describe sounds as loud, soft, pleasant, unpleasant</li>
                      <li>Discuss and identify effects and uses of sounds in daily lives</li>
                      <li>Show that sound is a wave - like water is a wave</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Skills</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Classify sounds according to loudness</li>
                      <li>Investigate how sounds are produced and its effects on objects</li>
                      <li>Observe the effects of sounds on objects</li>
                      <li>Predict the effects of sounds on objects and sounds made by different materials</li>
                      <li>Communicate effectively the results of sound experiments</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Attitudes/Values</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Work respectfully with others in exploring and investigating sounds</li>
                      <li>Show respect for persons with hearing or speaking impairment</li>
                      <li>Willingly observe, question, and explore the effects of sounds</li>
                      <li>Show interest and curiosity about sounds and their uses</li>
                      <li>Develop awareness that loud sounds affect people and animals</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Assessment Strategies</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Introductory Questions</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>What does the word vibrate mean?</li>
                    <li>Tell me one way that you can make a sound with a vibration</li>
                    <li>Why do we hear sounds?</li>
                    <li>What types of sounds do we hear around us?</li>
                    <li>Why are sounds soft and loud?</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">How to Make Sounds</h4>
                  <p>
                    Provide students with materials (covered and empty cans, rubber bands, bottles with varying water
                    levels) to describe the sounds they make. Include a worksheet to record observations on what they
                    see, hear, or feel.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Distinguishing Loud and Soft Sounds</h4>
                  <p>
                    Play guessing games: "I know a sound that is soft. It is made by..., you would find it in...what is
                    it?" Another game involves identifying recorded sounds (animals, transportation) using sound words
                    to describe volume and pitch.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Sounds Can Be Pleasant to the Ear</h4>
                  <p>
                    Show students pictures or actual musical instruments and ask them how the vibration is made.
                    Students compose with the teacher a song or poem about sounds, vibrations and waves in the
                    environment.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Learning Strategies</h3>
                <div className="bg-blue-50 p-4 rounded-md">
                  <p className="mb-2">
                    A teacher can bring a drum into class. They tap the skin of the drum with their finger and ask the
                    children what happened. They ask the children what will happen if they strike the drum harder.
                  </p>

                  <p className="mb-2">
                    The teacher places some sand on the skin of the drum and asks the children what will happen if they
                    tap the skin of the drum. The teacher then demonstrates this.
                  </p>

                  <p className="mb-2">The teacher can show that sound causes vibration using demonstration videos.</p>

                  <h4 className="font-bold mt-4 mb-2">Useful books:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>"Vibrations Make Sound" by Jennifer Boothroyd</li>
                    <li>"What are Sound Waves" by Robin Johnson</li>
                    <li>"Sound: Loud, Soft, High and Low" by Natalie Rosinsky</li>
                    <li>"Sound All Around" Illustrated by Holly Keller</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">How to Make Sounds With Vibrations</h4>
                  <p>
                    Identifying through small group experiments how we make things vibrate (e.g., sounds can be made by
                    hitting, plucking, blowing etc. on different objects and materials).
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Sound is a wave: We Can See it!</h4>
                  <p>
                    Hold strips of paper or plastic in front of a speaker or a radio with the volume turned up, or rest
                    a container of water or hands close to or on a radio or speaker.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Musical Instruments Based on Different Vibrations</h4>
                  <p>Make a model of a musical instrument and demonstrate its use.</p>

                  <h4 className="font-bold mt-4 mb-2">Identifying the Origin of Sounds</h4>
                  <p>
                    Play a game to identify, name and classify materials as metals, wood, plastic, etc. based on the
                    sound produced.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Sounds Can be Dangerous</h4>
                  <p>
                    Have a classroom discussion to identify the danger of loud sounds in our world and how to protect
                    our hearing.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Teacher Resources</h3>
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Useful Content Knowledge</h4>
                  <p className="mb-2">
                    Sound is defined as vibrations that travel through the air or another medium, as an audible
                    mechanical wave. It is produced from a vibrating body. The vibrating body causes the medium (water,
                    air, etc.) around it to vibrate, thus producing sound.
                  </p>

                  <ul className="list-disc pl-5 space-y-1">
                    <li>Forces cause vibrations</li>
                    <li>Sound is a form of energy - Sound is a wave</li>
                    <li>The ear is the organ used to detect sounds</li>
                    <li>Sounds can reflect (echo) and diffract (spread)</li>
                    <li>Sounds travel in waves and carry energy with it</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Areas for Subject Integration</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Social Studies:</strong> Effects of noise pollution in the community
                    </li>
                    <li>
                      <strong>Mathematics:</strong> Use of block graphs to compare pitch of sounds
                    </li>
                    <li>
                      <strong>HFLE:</strong> Self and Interpersonal relationship, Managing the environment
                    </li>
                    <li>
                      <strong>Literacy:</strong> Vocabulary, reading, listening, speaking and writing
                    </li>
                    <li>
                      <strong>TVET:</strong> Design a model of a stringed or drum musical instrument
                    </li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Resources for a learner who is struggling</h4>
                  <p>eBooks, videos, and interactive worksheets are available to support struggling learners.</p>

                  <h4 className="font-bold mt-4 mb-2">Resources for a learner who needs challenge</h4>
                  <p>Advanced videos and worksheets are available for students who need additional challenges.</p>
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
                Make observations to construct an evidence-based account, that objects can be seen only when
                illuminated.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Specific Curriculum Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-bold">Knowledge</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Define terms: light/darkness, artificial, natural, reflect</li>
                      <li>Give examples of the sources of light</li>
                      <li>Identify different light sources in and out of the classroom</li>
                      <li>Describe why objects can be seen when illuminated</li>
                      <li>Understand that the sun is a natural source of light</li>
                      <li>Understand that the moon reflects the sun's light</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Skills</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Classify light according to their source (natural, artificial)</li>
                      <li>Investigate how objects can be seen</li>
                      <li>Observe the effects of light on objects</li>
                      <li>Predict the effects of turning on and off the lights</li>
                      <li>Communicate ideas about light using new words</li>
                      <li>Safe use of candles as a source of light</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Attitudes/Values</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Willingly participate in, and contribute to classroom discussions</li>
                      <li>Develop an awareness that light must be present for objects to be seen</li>
                      <li>Appreciate the importance of light (warning, safety)</li>
                      <li>Show appreciation for and assist persons with visual impairment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Assessment Strategies</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Introductory Questions</h4>
                  <p>Students, use the word light in a verbal sentence. What are some sources of light?</p>

                  <h4 className="font-bold mt-4 mb-2">Classification Activity</h4>
                  <p>
                    Place two hoops on the floor; one represents artificial light and the other natural light. The
                    teacher supplies pictures on cards that children can place in the correct hoop.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">True or False Game</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>A candle is a form of natural light. (F)</li>
                    <li>The moon has its own light. (F)</li>
                    <li>The sun is a form of natural light. (T)</li>
                    <li>Artificial light is a light that is made by humans. (T)</li>
                    <li>The light that comes from fireflies is natural light. (T)</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">How do we see Objects?</h4>
                  <p>
                    Use a picture in a box to make a peep box. Have students describe how they are able to see the
                    picture using a flashlight.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Appreciation for persons with visual impairment</h4>
                  <p>
                    Pupils are asked to put on a blindfold and walk in the direction towards the teacher's voice while
                    she holds an object in her hand.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Learning Strategies</h3>
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">What Does Light Mean to You?</h4>
                  <p>Students, when you hear the world "light" what comes to your mind?</p>

                  <h4 className="font-bold mt-4 mb-2">Types of Light</h4>
                  <p>
                    Students, where can we find light in nature? What you have just listed is said to be natural light
                    because it is light that is part of nature around us.
                  </p>

                  <p>
                    Do you know that people can create (make) light? Think of other things you get light from that are
                    not the sun, moon or stars. These are called artificial light.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Building on Children's Intuition About Light</h4>
                  <p>
                    Students, let's pretend we have finished school for the day and go home. We have an evening meal and
                    we get ready for bed. It is now getting dark outside. We go into our bedroom and turn off the lights
                    because it is easier to sleep in the dark.
                  </p>

                  <p>
                    In the middle of the night, we hear a loud sound of something hitting against our house. We want to
                    know what this sound is because it is disturbing our rest. It is still very dark. What do we do
                    first to investigate this sound?
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Reflection of Light</h4>
                  <p>
                    When we look in a mirror, what do we see students? We say that the mirror reflects our image back at
                    us. In a similar way, everything we see in the world is because light reflects off the object and
                    enters our eyes.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">The Moon and Reflection</h4>
                  <p>
                    The moon is different from the sun. The sun is a burning sphere of fire. The moon doesn't have its
                    own light, it is not burning, it is a cold sphere of rock! We see our moon because it reflects the
                    sun's light.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Visual Impairment Awareness</h4>
                  <p>
                    Some children have eyes that somehow don't work right. Even with their eyelids wide open they are
                    unable to see. They use their sense of touch and sound to detect objects.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Teacher Resources</h3>
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Materials Needed</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Worksheets</li>
                    <li>Laptops/computers</li>
                    <li>Shoe boxes</li>
                    <li>Charts on illuminating and illuminating objects</li>
                    <li>Flashlight</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Useful Read-aloud Books</h4>
                  <p>"All About Light" by Lisa Trumbauer and "All About Light" by Angela Royston.</p>

                  <h4 className="font-bold mt-4 mb-2">Opportunities for Subject Integration</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Mathematics:</strong> The sun and moon are spheres
                    </li>
                    <li>
                      <strong>Social Studies:</strong> How we make use of the sources of light
                    </li>
                    <li>
                      <strong>Language Arts:</strong> Building vocabulary/reading poems/oral language
                    </li>
                    <li>
                      <strong>TVET:</strong> Inventions that create artificial light/making a peep box
                    </li>
                    <li>
                      <strong>Agriculture:</strong> Importance of light for plant growth
                    </li>
                    <li>
                      <strong>Health and Safety:</strong> Dangers of bright light/safe practices
                    </li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Resources for Different Learning Needs</h4>
                  <p>
                    Various videos, worksheets, and interactive activities are available for both struggling learners
                    and those who need additional challenges.
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
                Plan and conduct an investigation to determine the effect of placing objects made with different
                materials in the path of a beam of light.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Specific Curriculum Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-bold">Knowledge</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Define terms: glass, transparent, translucent, reflective, reflect, opaque</li>
                      <li>Demonstrate understanding that objects can block varying amounts of light</li>
                      <li>Account for the use of different types of glass for different applications</li>
                      <li>Explain that only clear and smooth glass can allow most light to pass through</li>
                      <li>Understand that rough glass is more likely to allow less light to pass through</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Skills</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Observe the amount of light that is blocked by different objects</li>
                      <li>
                        Classify objects placed in the beam of light as transparent, translucent, reflective or opaque
                      </li>
                      <li>Predict which types of glass or objects may be best suited for different applications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Attitudes/Values</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Appreciation that understanding how light interacts with objects may impact our use of objects
                        to control light
                      </li>
                      <li>Interest/Curiosity to investigate light properties with the teacher</li>
                      <li>Inventiveness - how could we use our understanding to design useful products</li>
                      <li>
                        Display sensitivity and offer assistance to peers who may have physical or learning challenges
                      </li>
                      <li>Participate actively in classroom discussions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Assessment Strategies</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Using New Words in Spoken Sentences</h4>
                  <p>Have the students complete sentences using the proper term:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      The window of the car is _________ (transparent or translucent) so that we can see clearly other
                      cars on the road.
                    </li>
                    <li>
                      The bathroom window is _________ (transparent or translucent) so that we have privacy when we
                      visit the bathroom.
                    </li>
                    <li>
                      A dark curtain is sometimes good for blocking the sunlight if we want to go to sleep. This is
                      because the curtain is _________ (transparent or opaque)
                    </li>
                    <li>
                      We use a mirror to look at ourselves because it is ____________. (translucent or reflective)
                    </li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Rough Versus Smooth Surfaces</h4>
                  <p>Which glass surface is more likely to allow the most light through A or B?</p>

                  <h4 className="font-bold mt-4 mb-2">Practicing the Terminology</h4>
                  <p>Two activities to practice the terminology and evaluate understanding:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>
                      The teacher could bring in pictures and ask students to match the object with the new word that
                      describes its properties.
                    </li>
                    <li>
                      The students could do a walk with the teacher around the school and school yard to identify
                      objects that fit each category.
                    </li>
                  </ol>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Learning Strategies</h3>
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Glass is Useful</h4>
                  <p>Students, have you ever heard the word glass? What things around us are made of glass?</p>

                  <p>
                    Did you know that glass is made of sand that is heated to a very high temperature? Because we can
                    find lots of sand, glass can be a very useful material for making things.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Different Properties of Glass</h4>
                  <p>Students did you ever notice that glass windows in a house can look very different?</p>

                  <p>
                    Sometimes we want to look through glass like a window to the outdoors so we can see outside when the
                    weather looks stormy.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Demonstration: Transparent Glass</h4>
                  <p>
                    If I take this small piece of glass and shine a torch (flashlight) through one side we can easily
                    see the light passing through to the other side. We say that this type of glass is transparent.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Translucent Window</h4>
                  <p>
                    This piece of wax paper is not made of glass but it is very similar to the glass in a bathroom
                    window. If I shine my torch (flashlight) through one side, what do you notice on the other side?
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Reflective Surfaces</h4>
                  <p>
                    There is another type of glass in our bathroom. Can you guess what it is? Maybe if I show you this
                    picture you will remember. What is this a picture of?
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Objects Other Than Glass Interact With Light Too</h4>
                  <p>
                    We know that cardboard is not like glass or a mirror. How is it different? If I hold the cardboard
                    in front of the torch (flashlight) how much light do you feel will pass through or be reflected?
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Opaque Objects Make Shadows</h4>
                  <p>
                    If we place our hand in front of a light, we can see the trace of a shadow of our hand on the wall.
                    We can make many types of shadows using our hands, but the sun shining on trees and buildings also
                    can make shadows.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Teacher Resources</h3>
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Useful Content Knowledge</h4>
                  <p>Comparing terminology through videos and resources.</p>

                  <h4 className="font-bold mt-4 mb-2">Materials Needed</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Glass slide or small window pane</li>
                    <li>Wax paper or translucent glass or plastic</li>
                    <li>Cardboard</li>
                    <li>Mirror</li>
                    <li>Torch (flashlight)</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Opportunities for Subject Integration</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Mathematics:</strong> Objects can be placed in order of the amount of light they allow
                      through
                    </li>
                    <li>
                      <strong>Social Studies:</strong> How is glass used to enhance privacy?
                    </li>
                    <li>
                      <strong>Language Arts:</strong> Reading materials about light
                    </li>
                    <li>
                      <strong>TVET:</strong> How can glass be used in different ways to solve human problems
                    </li>
                    <li>
                      <strong>Agriculture:</strong> Greenhouses use transparent and translucent glass and plastic
                    </li>
                    <li>
                      <strong>Health:</strong> Protecting our eyes against reflected light
                    </li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Resources for Different Learning Needs</h4>
                  <p>
                    Read-aloud books and activities about light for struggling learners, and more advanced activities
                    like making sundials for students who need additional challenges.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="elo4">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Essential Learning Outcome 4</h2>
              <p className="mb-4">
                Use tools and materials to design and build a device that uses light or sound to solve the problem of
                communicating over a distance.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Specific Curriculum Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-bold">Knowledge</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Define terms: warning, communicating, siren, emergency vehicle, traffic lights</li>
                      <li>Demonstrate understanding of the concept of warning sounds</li>
                      <li>Give examples of communicating with sound</li>
                      <li>Give examples of communicating with light</li>
                      <li>Recognize that communication in cities and rural areas may be different</li>
                      <li>Recognize that communication technologies have varied over the last century</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Skills</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Observe and identify light and sound communication in video accounts</li>
                      <li>Infer certain messages from the type of sound heard</li>
                      <li>Infer certain messages from the light patterns detected</li>
                      <li>Construct a simple sound communication device (cup phones)</li>
                      <li>Formulate models of communication devices that use sound or light or both</li>
                      <li>Practice new vocabulary in discussions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Attitudes/Values</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Appreciate that different sounds and light have different meanings/significance</li>
                      <li>Show inventiveness in designing a communication device</li>
                      <li>Collaborate to make models of communication devices</li>
                      <li>Recognize that light and sound are used as safety and warning signals</li>
                      <li>
                        Display sensitivity and offer assistance to peers who may have physical or learning challenges
                      </li>
                      <li>Participate actively in classroom discussions</li>
                      <li>Demonstrate interest and curiosity regarding communication devices</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Assessment Strategies</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Introductory Questions</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>What does it mean to communicate?</li>
                    <li>Give me some examples of warning sounds in your community.</li>
                    <li>Where do you see lights in your community that communicate messages?</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Communicating Over a Distance</h4>
                  <p>
                    Students, even though we have telephones to talk today, many years ago there were other ways to
                    communicate using simple sound makers.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Simple Sound Signals Communicate Something</h4>
                  <p>
                    Maybe we could communicate that way too! Let say that striking a bell three times means "school is
                    starting." Maybe striking a bell once means "it is lunch time." And finally striking the bell twice
                    means "school is over, time to go home."
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Making a Simple Telephone</h4>
                  <p>
                    This activity is meant to be done with the teacher's assistance. Students can try different size
                    cups and lengths of string to see what works the best.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Class Debate</h4>
                  <p>
                    How do the light and sound warnings assist the blind and deaf in our community? How can we improve
                    these systems?
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Learning Strategies</h3>
                <div className="bg-blue-50 p-4 rounded-md">
                  <p>
                    Students, have you ever walked by a house with a fence, and a dog inside begins barking? Why do they
                    bark when they hear you go by?
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Animals issue warning sounds</h4>
                  <p>Some animals make sounds to warning us to stay away.</p>

                  <h4 className="font-bold mt-4 mb-2">Other Types of Sound Warnings</h4>
                  <p>
                    The alarm clock rings to tell us to get up and get ready for school! Students, what do we hear when
                    smoke enters a house, or a home catches on fire?
                  </p>

                  <p>
                    When we see a police car or ambulance going down the street, there is often a siren sound. Can you
                    make a siren sound children?
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Using Lights to Send Messages</h4>
                  <p>
                    What else do we see on the fire truck, police car and ambulance? These special cars and trucks are
                    called emergency vehicles. What do the flashing lights mean?
                  </p>

                  <p>
                    In towns and cities we often see lights where roads cross over. These are called traffic lights and
                    they help us to make sure that drivers cross in an organized fashion, avoiding accidents.
                  </p>

                  <h4 className="font-bold mt-4 mb-2">Ship Communication</h4>
                  <p>Ships can also use flashing lights to send messages across the water.</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Teacher Resources</h3>
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">Useful Content Knowledge</h4>
                  <p>Communication Using Light and Sound resources and demonstrations.</p>

                  <h4 className="font-bold mt-4 mb-2">Materials Needed</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>String, cups, scissors, tape</li>
                    <li>Torch (Flashlight)</li>
                    <li>Old telephone</li>
                    <li>Braille book</li>
                    <li>Alarm clock</li>
                    <li>Hearing aid</li>
                    <li>Cell phone</li>
                    <li>Smoke detector</li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Opportunities for Subject Integration</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Mathematics:</strong> Coding & patterns - Morse code and flashlight concerns dots and
                      pauses
                    </li>
                    <li>
                      <strong>Social Studies:</strong> Maintaining order in communities with warning and emergency
                      signals
                    </li>
                    <li>
                      <strong>Language Arts:</strong> Reading books about light and sound communication
                    </li>
                    <li>
                      <strong>TVET:</strong> Appreciation for inventiveness of humans around communication technologies
                    </li>
                    <li>
                      <strong>Health:</strong> How do warning systems protect us against great injury?
                    </li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2">Resources for Different Learning Needs</h4>
                  <p>
                    Interactive Read-Alouds linked to outcomes for struggling learners, and more advanced investigations
                    like Morse code for students who need additional challenges.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
