import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, FileText, Calendar, HelpCircle, Download } from "lucide-react"

export default function UserGuidePage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">OECSLearningHub User Guide</h1>
        <p className="text-muted-foreground text-lg">
          A comprehensive guide to using the OECSLearningHub platform for curriculum management and educational
          delivery.
        </p>
        <div className="flex gap-2 mt-4">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF Guide
          </Button>
          <Button variant="outline" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>

      <Tabs defaultValue="getting-started" className="space-y-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-auto p-1">
          <TabsTrigger value="getting-started" className="py-2">
            Getting Started
          </TabsTrigger>
          <TabsTrigger value="teachers" className="py-2">
            For Teachers
          </TabsTrigger>
          <TabsTrigger value="students" className="py-2">
            For Students
          </TabsTrigger>
          <TabsTrigger value="parents" className="py-2">
            For Parents
          </TabsTrigger>
          <TabsTrigger value="administrators" className="py-2">
            For Administrators
          </TabsTrigger>
          <TabsTrigger value="faq" className="py-2">
            FAQ
          </TabsTrigger>
        </TabsList>

        {/* Getting Started Section */}
        <TabsContent value="getting-started" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to OECSLearningHub</CardTitle>
              <CardDescription>Learn about the platform and how to get started with your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Introduction</h3>
                <p className="mb-4">
                  OECSLearningHub is a comprehensive curriculum management platform designed to organize, deliver, and
                  track educational content across grades and subjects. Our platform serves teachers, students, parents,
                  and administrators with tailored interfaces and features.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Curriculum Management
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Organize curriculum by grade, subject, unit, and lesson with version control and alignment to
                      educational standards.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Role-Based Access
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Tailored interfaces for teachers, students, parents, and administrators with appropriate
                      permissions and features.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Lesson Planning
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Create, manage, and schedule lessons with objectives, activities, resources, and assessments.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Assessment Tools
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Design quizzes, tests, and assignments with automated grading and detailed performance analytics.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Creating Your Account</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Registration:</span> Visit the registration page and fill out the
                    required information, including your name, email, password, and role (teacher, student, parent, or
                    administrator).
                  </li>
                  <li>
                    <span className="font-medium">Email Verification:</span> Check your email for a verification link
                    and click it to confirm your account.
                  </li>
                  <li>
                    <span className="font-medium">Profile Setup:</span> Complete your profile by adding additional
                    information such as grade level, subjects taught (for teachers), or children (for parents).
                  </li>
                  <li>
                    <span className="font-medium">Dashboard Access:</span> Once your account is set up, you'll be
                    directed to your role-specific dashboard.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Navigating the Platform</h3>
                <p className="mb-4">
                  The OECSLearningHub platform has a consistent navigation structure across all user roles, with
                  role-specific features and content.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Main Navigation</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-medium">Dashboard:</span> Your personalized homepage with relevant
                        information and quick access to features.
                      </li>
                      <li>
                        <span className="font-medium">Curriculum:</span> Browse and access curriculum content organized
                        by grade, subject, unit, and lesson.
                      </li>
                      <li>
                        <span className="font-medium">Classes:</span> Manage or view classes, including schedules,
                        participants, and activities.
                      </li>
                      <li>
                        <span className="font-medium">Resources:</span> Access shared resources, materials, and tools.
                      </li>
                      <li>
                        <span className="font-medium">Messages:</span> Communication system for teachers, students, and
                        parents.
                      </li>
                      <li>
                        <span className="font-medium">Settings:</span> Manage your account, preferences, and
                        notifications.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">User Interface Elements</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-medium">Header:</span> Contains the logo, main navigation, search, and
                        user menu.
                      </li>
                      <li>
                        <span className="font-medium">Sidebar:</span> Context-specific navigation and filters.
                      </li>
                      <li>
                        <span className="font-medium">Content Area:</span> The main display area for content and
                        features.
                      </li>
                      <li>
                        <span className="font-medium">Footer:</span> Contains links to help, legal information, and
                        contact details.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Requirements</CardTitle>
              <CardDescription>
                Technical requirements and recommended settings for optimal performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Supported Browsers</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Google Chrome (recommended): Version 90 or higher</li>
                    <li>Mozilla Firefox: Version 88 or higher</li>
                    <li>Microsoft Edge: Version 90 or higher</li>
                    <li>Safari: Version 14 or higher</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Device Requirements</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Desktop/Laptop:</span> Windows 10/11, macOS 10.15 or higher, or
                      Chrome OS
                    </li>
                    <li>
                      <span className="font-medium">Tablets:</span> iPad with iOS 14 or higher, Android tablets with
                      Android 10 or higher
                    </li>
                    <li>
                      <span className="font-medium">Smartphones:</span> iPhone with iOS 14 or higher, Android phones
                      with Android 10 or higher
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Internet Connection</h3>
                  <p>
                    A stable internet connection with a minimum speed of 5 Mbps is recommended for smooth operation of
                    all features, especially video content and interactive elements.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Display Resolution</h3>
                  <p>
                    Minimum recommended resolution: 1280 x 720 pixels. For optimal experience: 1920 x 1080 pixels or
                    higher.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Teachers Section */}
        <TabsContent value="teachers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Teacher's Guide</CardTitle>
              <CardDescription>Learn how to use OECSLearningHub to plan, deliver, and assess lessons.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Teacher Dashboard Overview</h3>
                <p className="mb-4">
                  Your dashboard provides a quick overview of your classes, upcoming lessons, recent assessments, and
                  important notifications.
                </p>
                <div className="border rounded-lg p-4 bg-muted/30 mb-4">
                  <h4 className="font-medium mb-2">Key Dashboard Elements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Class Overview:</span> Total students, attendance statistics, and
                      quick access to class details.
                    </li>
                    <li>
                      <span className="font-medium">Upcoming Lessons:</span> Scheduled lessons for the current and
                      upcoming week.
                    </li>
                    <li>
                      <span className="font-medium">Recent Assessments:</span> Recently created or graded assessments
                      with completion rates.
                    </li>
                    <li>
                      <span className="font-medium">Parent Messages:</span> Recent and unread messages from parents.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Lesson Planning</h3>
                <p className="mb-4">
                  Create comprehensive lesson plans aligned with curriculum standards and tailored to your students'
                  needs.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="creating-lesson">
                    <AccordionTrigger>Creating a New Lesson</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>
                          Navigate to the <strong>Lessons</strong> section from your dashboard and click{" "}
                          <strong>New Lesson</strong>.
                        </li>
                        <li>Fill in the basic lesson details: title, grade level, subject, date, and duration.</li>
                        <li>Add a description that summarizes the lesson's content and goals.</li>
                        <li>
                          Define learning objectives that specify what students will learn or be able to do after the
                          lesson.
                        </li>
                        <li>
                          Structure your lesson content with introduction, main activities, and conclusion sections.
                        </li>
                        <li>Add resources needed for the lesson, including teacher resources and student materials.</li>
                        <li>Define assessment strategies, including formative and summative assessments.</li>
                        <li>
                          Add differentiation strategies for supporting struggling students and extending learning for
                          advanced students.
                        </li>
                        <li>Save your lesson as a draft or publish it to make it available in your schedule.</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="ai-assistance">
                    <AccordionTrigger>Using AI Assistance</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        OECSLearningHub includes AI-powered tools to help you create and enhance your lessons:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Objective Generation:</span> Generate learning objectives
                          aligned with curriculum standards by providing a lesson topic and grade level.
                        </li>
                        <li>
                          <span className="font-medium">Activity Suggestions:</span> Get suggestions for engaging
                          activities based on your lesson objectives and student age group.
                        </li>
                        <li>
                          <span className="font-medium">Differentiation Strategies:</span> Generate ideas for supporting
                          diverse learners with different needs and abilities.
                        </li>
                        <li>
                          <span className="font-medium">Assessment Creation:</span> Generate formative and summative
                          assessment questions aligned with your lesson objectives.
                        </li>
                      </ul>
                      <p className="mt-2 text-sm text-muted-foreground">
                        To use AI assistance, look for the "Generate with AI" button in the relevant sections of the
                        lesson planner.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="managing-lessons">
                    <AccordionTrigger>Managing Your Lessons</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Organizing Lessons:</span> Lessons are automatically organized
                          by subject, unit, and date. You can also use tags to create custom categories.
                        </li>
                        <li>
                          <span className="font-medium">Editing Lessons:</span> You can edit any lesson by clicking on
                          it in your lesson list and making changes. Published lessons can be reverted to drafts if
                          needed.
                        </li>
                        <li>
                          <span className="font-medium">Duplicating Lessons:</span> Save time by duplicating existing
                          lessons and modifying them for new classes or topics.
                        </li>
                        <li>
                          <span className="font-medium">Sharing Lessons:</span> Share lessons with other teachers in
                          your school or district by clicking the "Share" button on any lesson.
                        </li>
                        <li>
                          <span className="font-medium">Archiving Lessons:</span> Keep your lesson list manageable by
                          archiving old or unused lessons. Archived lessons can be restored if needed.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Assessment Tools</h3>
                <p className="mb-4">
                  Create, administer, and grade assessments to measure student understanding and progress.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Types of Assessments</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-medium">Quizzes:</span> Short assessments with automatic grading
                      </li>
                      <li>
                        <span className="font-medium">Tests:</span> Comprehensive assessments with multiple question
                        types
                      </li>
                      <li>
                        <span className="font-medium">Assignments:</span> Project-based assessments with rubrics
                      </li>
                      <li>
                        <span className="font-medium">Exit Tickets:</span> Quick checks for understanding
                      </li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Question Types</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Multiple choice</li>
                      <li>True/False</li>
                      <li>Short answer</li>
                      <li>Essay</li>
                      <li>Matching</li>
                      <li>Fill in the blank</li>
                      <li>Drag and drop</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Grading and Feedback</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Automatic Grading:</span> Multiple choice, true/false, and matching
                      questions are graded automatically.
                    </li>
                    <li>
                      <span className="font-medium">Manual Grading:</span> Short answer, essay, and project-based
                      assessments can be graded manually with rubrics.
                    </li>
                    <li>
                      <span className="font-medium">Feedback Tools:</span> Provide text, audio, or video feedback on
                      student work.
                    </li>
                    <li>
                      <span className="font-medium">Analytics:</span> View detailed performance data by student,
                      question, or standard.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Student Progress Monitoring</h3>
                <p className="mb-4">
                  Track student progress, identify areas for improvement, and adjust instruction accordingly.
                </p>
                <div className="border rounded-lg p-4 bg-muted/30">
                  <h4 className="font-medium mb-2">Progress Tracking Features</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Individual Student Profiles:</span> View comprehensive data for each
                      student, including assessment results, completed assignments, and attendance.
                    </li>
                    <li>
                      <span className="font-medium">Class Performance:</span> Analyze class-wide performance on
                      assessments and standards.
                    </li>
                    <li>
                      <span className="font-medium">Standards Mastery:</span> Track student progress toward curriculum
                      standards and learning objectives.
                    </li>
                    <li>
                      <span className="font-medium">Growth Reports:</span> Monitor student growth over time with
                      comparative data visualizations.
                    </li>
                    <li>
                      <span className="font-medium">Intervention Flags:</span> Automatically identify students who may
                      need additional support based on performance thresholds.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Communication Tools</h3>
                <p className="mb-4">
                  Communicate with students, parents, and colleagues to share information and coordinate efforts.
                </p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium mb-1">Messaging System</h4>
                    <p>
                      Send and receive messages to/from individual students, parents, or entire classes. Messages can
                      include text, attachments, and links to curriculum resources.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Announcements</h4>
                    <p>
                      Post announcements to your class dashboard that will be visible to all students and parents.
                      Announcements can be scheduled in advance and can include attachments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Progress Reports</h4>
                    <p>
                      Generate and share progress reports with students and parents. Reports can be customized to
                      include specific data points and can be scheduled for automatic distribution.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Collaboration Tools</h4>
                    <p>
                      Collaborate with other teachers by sharing lessons, resources, and assessment items. Create or
                      join professional learning communities within the platform.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Students Section */}
        <TabsContent value="students" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Student's Guide</CardTitle>
              <CardDescription>
                Learn how to access lessons, complete assignments, and track your progress.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Student Dashboard Overview</h3>
                <p className="mb-4">
                  Your dashboard provides a quick overview of your classes, upcoming assignments, recent grades, and
                  important announcements.
                </p>
                <div className="border rounded-lg p-4 bg-muted/30 mb-4">
                  <h4 className="font-medium mb-2">Key Dashboard Elements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Class Schedule:</span> Today's and upcoming classes with times and
                      locations.
                    </li>
                    <li>
                      <span className="font-medium">Assignments:</span> Current and upcoming assignments with due dates
                      and status.
                    </li>
                    <li>
                      <span className="font-medium">Progress Trackers:</span> Visual indicators of your progress in each
                      subject.
                    </li>
                    <li>
                      <span className="font-medium">Announcements:</span> Important messages from your teachers and
                      school.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Accessing Learning Materials</h3>
                <p className="mb-4">
                  Find and use the learning materials provided by your teachers, including lessons, resources, and
                  activities.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="finding-lessons">
                    <AccordionTrigger>Finding Your Lessons</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">You can access your lessons in several ways:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>
                          <span className="font-medium">From your dashboard:</span> Click on a class card to see all
                          lessons for that class.
                        </li>
                        <li>
                          <span className="font-medium">From the Classes menu:</span> Select a class, then navigate to
                          the Lessons tab.
                        </li>
                        <li>
                          <span className="font-medium">From the Calendar:</span> Click on a scheduled lesson to open it
                          directly.
                        </li>
                        <li>
                          <span className="font-medium">Using Search:</span> Use the search bar to find specific lessons
                          by title, subject, or content.
                        </li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="using-resources">
                    <AccordionTrigger>Using Learning Resources</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Lessons may include various types of resources to help you learn:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Text Materials:</span> Read articles, instructions, and
                          explanations directly in the platform.
                        </li>
                        <li>
                          <span className="font-medium">Videos:</span> Watch instructional videos with playback controls
                          (pause, rewind, speed adjustment).
                        </li>
                        <li>
                          <span className="font-medium">Interactive Activities:</span> Complete interactive exercises,
                          simulations, and practice problems.
                        </li>
                        <li>
                          <span className="font-medium">Downloadable Files:</span> Access and download PDFs, worksheets,
                          and other materials for offline use.
                        </li>
                        <li>
                          <span className="font-medium">External Links:</span> Visit recommended websites and online
                          resources that open in a new tab.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="taking-notes">
                    <AccordionTrigger>Taking Notes</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">The platform includes a note-taking feature that allows you to:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Create notes directly within lessons</li>
                        <li>Highlight important text in lesson content</li>
                        <li>Add bookmarks to specific sections for quick reference</li>
                        <li>Organize notes by subject, class, or custom categories</li>
                        <li>Search across all your notes to find specific information</li>
                      </ul>
                      <p className="mt-2 text-sm text-muted-foreground">
                        To take notes, click the "Notes" icon in the lesson viewer or use the keyboard shortcut (N).
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Completing Assignments</h3>
                <p className="mb-4">Submit your work, take assessments, and receive feedback on your assignments.</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Types of Assignments</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-medium">Quizzes and Tests:</span> Online assessments with various question
                        types, often timed.
                      </li>
                      <li>
                        <span className="font-medium">Written Assignments:</span> Essays, reports, or short answers that
                        you type directly into the platform or upload as a file.
                      </li>
                      <li>
                        <span className="font-medium">Projects:</span> Larger assignments that may include multiple
                        components and file uploads.
                      </li>
                      <li>
                        <span className="font-medium">Discussion Participation:</span> Contributions to online class
                        discussions or forums.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Submitting Assignments</h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Navigate to the assignment from your dashboard or class page</li>
                      <li>Read all instructions carefully before beginning</li>
                      <li>Complete the required work (answer questions, upload files, etc.)</li>
                      <li>Review your work before submission</li>
                      <li>Click the "Submit" button to turn in your assignment</li>
                      <li>Confirm your submission when prompted</li>
                    </ol>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Note: Some assignments allow multiple attempts, while others only allow one submission. The
                      assignment details will indicate the submission policy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Viewing Feedback and Grades</h4>
                    <p>After your teacher reviews your work, you can access feedback and grades by:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Checking the "Grades" section of your dashboard</li>
                      <li>Opening the original assignment and viewing the feedback tab</li>
                      <li>Reviewing the notification sent when feedback is available</li>
                    </ul>
                    <p className="mt-1">
                      Feedback may include comments, annotations on your work, rubric scores, and suggestions for
                      improvement.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Tracking Your Progress</h3>
                <p className="mb-4">Monitor your academic progress, set goals, and identify areas for improvement.</p>
                <div className="border rounded-lg p-4 bg-muted/30">
                  <h4 className="font-medium mb-2">Progress Tracking Features</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Grade Overview:</span> View your current grades in all subjects and
                      classes.
                    </li>
                    <li>
                      <span className="font-medium">Assignment Completion:</span> Track completed, in-progress, and
                      upcoming assignments.
                    </li>
                    <li>
                      <span className="font-medium">Learning Objectives:</span> See your progress toward mastering
                      specific learning objectives and standards.
                    </li>
                    <li>
                      <span className="font-medium">Growth Over Time:</span> View charts and graphs showing your
                      progress throughout the term.
                    </li>
                    <li>
                      <span className="font-medium">Goal Setting:</span> Set personal academic goals and track your
                      progress toward achieving them.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Getting Help</h3>
                <p className="mb-4">
                  Access support resources and communicate with your teachers when you need assistance.
                </p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium mb-1">Contacting Your Teacher</h4>
                    <p>
                      Use the messaging system to send questions or concerns to your teacher. You can access this from
                      your dashboard or class page. Include specific details about what you need help with for the
                      quickest response.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Help Resources</h4>
                    <p>The platform includes various help resources, including:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Tutorial videos on how to use platform features</li>
                      <li>FAQs addressing common questions and issues</li>
                      <li>Glossary of terms used in the platform</li>
                      <li>Technical support contact information</li>
                    </ul>
                    <p className="mt-1">Access these resources by clicking the Help icon in the navigation menu.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Parents Section */}
        <TabsContent value="parents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Parent's Guide</CardTitle>
              <CardDescription>
                Learn how to monitor your child's progress and communicate with teachers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Parent Dashboard Overview</h3>
                <p className="mb-4">
                  Your dashboard provides a comprehensive view of your child's academic progress, upcoming assignments,
                  and school communications.
                </p>
                <div className="border rounded-lg p-4 bg-muted/30 mb-4">
                  <h4 className="font-medium mb-2">Key Dashboard Elements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Child Profiles:</span> Quick access to each of your children's
                      information.
                    </li>
                    <li>
                      <span className="font-medium">Academic Progress:</span> Current grades, attendance, and progress
                      in each subject.
                    </li>
                    <li>
                      <span className="font-medium">Upcoming Events:</span> School events, parent-teacher conferences,
                      and important dates.
                    </li>
                    <li>
                      <span className="font-medium">Recent Messages:</span> Communications from teachers and school
                      administrators.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Monitoring Your Child's Progress</h3>
                <p className="mb-4">
                  Stay informed about your child's academic performance, assignments, and attendance.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="academic-progress">
                    <AccordionTrigger>Viewing Academic Progress</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        The platform provides detailed information about your child's academic performance:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Grade Overview:</span> Current grades in all subjects, with the
                          ability to drill down to individual assignments.
                        </li>
                        <li>
                          <span className="font-medium">Assignment Details:</span> View all assignments, including due
                          dates, submission status, and grades.
                        </li>
                        <li>
                          <span className="font-medium">Learning Objectives:</span> Track progress toward mastering
                          specific curriculum standards and learning objectives.
                        </li>
                        <li>
                          <span className="font-medium">Assessment Results:</span> Review performance on quizzes, tests,
                          and other assessments.
                        </li>
                        <li>
                          <span className="font-medium">Progress Reports:</span> Access formal progress reports and
                          report cards when published by teachers.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="attendance-tracking">
                    <AccordionTrigger>Attendance Tracking</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Monitor your child's attendance record:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Daily Attendance:</span> View present, absent, and tardy records
                          for each school day.
                        </li>
                        <li>
                          <span className="font-medium">Class Attendance:</span> For secondary students, see attendance
                          for individual classes.
                        </li>
                        <li>
                          <span className="font-medium">Attendance Patterns:</span> Identify patterns in attendance with
                          visual calendar views.
                        </li>
                        <li>
                          <span className="font-medium">Absence Reporting:</span> Submit absence notifications and
                          documentation directly through the platform.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="curriculum-access">
                    <AccordionTrigger>Accessing Curriculum Content</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">View what your child is learning:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Curriculum Overview:</span> See the curriculum for each subject,
                          including units and learning objectives.
                        </li>
                        <li>
                          <span className="font-medium">Current Lessons:</span> View the lessons your child is currently
                          working on in each subject.
                        </li>
                        <li>
                          <span className="font-medium">Learning Resources:</span> Access the same resources your child
                          uses, including readings, videos, and interactive activities.
                        </li>
                        <li>
                          <span className="font-medium">Upcoming Topics:</span> Preview upcoming units and lessons to
                          help support your child's learning at home.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Communicating with Teachers</h3>
                <p className="mb-4">
                  Stay connected with your child's teachers through the platform's communication tools.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Messaging System</h4>
                    <p>The platform includes a secure messaging system that allows you to:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Send and receive messages to/from your child's teachers</li>
                      <li>Attach files or images to messages when needed</li>
                      <li>View message history for each teacher</li>
                      <li>Receive notifications when new messages arrive</li>
                    </ul>
                    <p className="mt-1 text-sm text-muted-foreground">
                      To send a message, navigate to the Messages section of your dashboard or click the message icon on
                      a teacher's profile.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Parent-Teacher Conferences</h4>
                    <p>Schedule and manage parent-teacher conferences:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>View available conference times for each teacher</li>
                      <li>Schedule conferences directly through the platform</li>
                      <li>Receive reminders about upcoming conferences</li>
                      <li>Add notes or topics you want to discuss during the conference</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Notifications and Alerts</h4>
                    <p>Stay informed with customizable notifications:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Grade alerts when new grades are posted</li>
                      <li>Assignment reminders for upcoming or missing work</li>
                      <li>Attendance notifications if your child is marked absent</li>
                      <li>Behavior reports from teachers</li>
                      <li>School announcements and emergency alerts</li>
                    </ul>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Customize your notification preferences in the Settings section of your account.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Supporting Your Child's Learning</h3>
                <p className="mb-4">Access resources and tools to help support your child's education at home.</p>
                <div className="border rounded-lg p-4 bg-muted/30">
                  <h4 className="font-medium mb-2">Parent Resources</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">Learning Guides:</span> Grade-specific guides with tips for
                      supporting learning at home.
                    </li>
                    <li>
                      <span className="font-medium">Homework Help:</span> Resources to help you assist your child with
                      assignments.
                    </li>
                    <li>
                      <span className="font-medium">Educational Activities:</span> Supplemental activities to reinforce
                      classroom learning.
                    </li>
                    <li>
                      <span className="font-medium">Technology Tutorials:</span> Guides for helping your child use
                      educational technology.
                    </li>
                    <li>
                      <span className="font-medium">Parent Community:</span> Forums to connect with other parents and
                      share resources.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Managing Multiple Children</h3>
                <p className="mb-4">
                  If you have multiple children using the platform, you can easily switch between their accounts and
                  manage their information.
                </p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium mb-1">Switching Between Children</h4>
                    <p>
                      Use the child selector in the top navigation bar to switch between your children's accounts. Each
                      child's dashboard will display their specific information, classes, and progress.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Comparing Progress</h4>
                    <p>
                      The Family Overview section allows you to see a summary of all your children's progress in one
                      view, making it easier to keep track of everyone's academic performance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Managing Settings</h4>
                    <p>
                      Each child's account has individual settings that you can manage, including notification
                      preferences, privacy settings, and accessibility options.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Administrators Section */}
        <TabsContent value="administrators" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Administrator's Guide</CardTitle>
              <CardDescription>Learn how to manage users, curriculum, and system settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Administrator Dashboard Overview</h3>
                <p className="mb-4">
                  Your dashboard provides a comprehensive view of the entire system, including user statistics,
                  curriculum status, and system health.
                </p>
                <div className="border rounded-lg p-4 bg-muted/30 mb-4">
                  <h4 className="font-medium mb-2">Key Dashboard Elements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">User Statistics:</span> Total users by role, new users, and active
                      users.
                    </li>
                    <li>
                      <span className="font-medium">Curriculum Status:</span> Curriculum completion rates by grade and
                      subject.
                    </li>
                    <li>
                      <span className="font-medium">System Notifications:</span> Alerts about system updates, issues, or
                      required actions.
                    </li>
                    <li>
                      <span className="font-medium">Recent Activity:</span> Recent uploads, user registrations, and
                      system changes.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">User Management</h3>
                <p className="mb-4">Manage user accounts, roles, and permissions across the platform.</p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="user-accounts">
                    <AccordionTrigger>Managing User Accounts</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">The User Management section allows you to:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Create New Users:</span> Add individual users or bulk import
                          users from CSV files.
                        </li>
                        <li>
                          <span className="font-medium">Edit User Information:</span> Update names, email addresses,
                          roles, and other user details.
                        </li>
                        <li>
                          <span className="font-medium">Reset Passwords:</span> Generate temporary passwords or send
                          password reset links to users.
                        </li>
                        <li>
                          <span className="font-medium">Deactivate Accounts:</span> Temporarily disable accounts without
                          deleting user data.
                        </li>
                        <li>
                          <span className="font-medium">Delete Accounts:</span> Permanently remove user accounts when
                          necessary.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="role-management">
                    <AccordionTrigger>Role and Permission Management</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Manage user roles and their associated permissions:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Default Roles:</span> The system includes predefined roles
                          (Administrator, Teacher, Student, Parent) with appropriate permissions.
                        </li>
                        <li>
                          <span className="font-medium">Custom Roles:</span> Create custom roles with specific
                          permission sets for specialized staff positions.
                        </li>
                        <li>
                          <span className="font-medium">Permission Assignment:</span> Customize which features and data
                          each role can access and modify.
                        </li>
                        <li>
                          <span className="font-medium">Role Hierarchy:</span> Define which roles have oversight of
                          other roles for reporting and management purposes.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="user-groups">
                    <AccordionTrigger>User Groups and Classes</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Organize users into meaningful groups:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Class Creation:</span> Create classes and assign teachers and
                          students.
                        </li>
                        <li>
                          <span className="font-medium">Grade Levels:</span> Organize classes by grade level for
                          curriculum alignment.
                        </li>
                        <li>
                          <span className="font-medium">Departments:</span> Group teachers by subject area or
                          department.
                        </li>
                        <li>
                          <span className="font-medium">Administrative Groups:</span> Create groups for administrative
                          staff with specific responsibilities.
                        </li>
                        <li>
                          <span className="font-medium">Parent-Child Relationships:</span> Manage the connections
                          between parent accounts and their children's accounts.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Curriculum Management</h3>
                <p className="mb-4">Oversee the curriculum content, structure, and alignment across the platform.</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Curriculum Structure</h4>
                    <p>Manage the organizational structure of your curriculum:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Define grade levels and subject areas</li>
                      <li>Create and organize units within subjects</li>
                      <li>Establish learning standards and objectives</li>
                      <li>Link curriculum elements to assessment frameworks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Content Management</h4>
                    <p>Oversee the curriculum content available to teachers and students:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Upload and process curriculum documents</li>
                      <li>Review and approve teacher-created content</li>
                      <li>Manage shared resources and materials</li>
                      <li>Archive outdated content while maintaining access to historical data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Curriculum Analytics</h4>
                    <p>Monitor curriculum implementation and effectiveness:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Track curriculum coverage across classes</li>
                      <li>Analyze student performance against curriculum standards</li>
                      <li>Identify gaps or overlaps in curriculum content</li>
                      <li>Generate reports on curriculum implementation and outcomes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">System Configuration</h3>
                <p className="mb-4">Configure system settings, integrations, and customizations.</p>
                <div className="border rounded-lg p-4 bg-muted/30">
                  <h4 className="font-medium mb-2">Configuration Options</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium">General Settings:</span> School information, academic year
                      configuration, and system-wide defaults.
                    </li>
                    <li>
                      <span className="font-medium">Appearance:</span> Customize logos, colors, and branding elements.
                    </li>
                    <li>
                      <span className="font-medium">Integrations:</span> Connect with other systems such as SIS, LMS, or
                      assessment platforms.
                    </li>
                    <li>
                      <span className="font-medium">Notifications:</span> Configure system-wide notification settings
                      and templates.
                    </li>
                    <li>
                      <span className="font-medium">Security:</span> Set password policies, authentication methods, and
                      data access controls.
                    </li>
                    <li>
                      <span className="font-medium">Backup and Recovery:</span> Configure data backup schedules and
                      recovery options.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Reporting and Analytics</h3>
                <p className="mb-4">
                  Access comprehensive data and insights about system usage, user performance, and curriculum
                  effectiveness.
                </p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium mb-1">Standard Reports</h4>
                    <p>The system includes a variety of pre-built reports:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>User activity and engagement reports</li>
                      <li>Academic performance reports by student, class, grade, or subject</li>
                      <li>Curriculum implementation and coverage reports</li>
                      <li>System usage and resource utilization reports</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Custom Reports</h4>
                    <p>Create customized reports to meet specific needs:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Select specific data points and metrics to include</li>
                      <li>Define filtering and sorting criteria</li>
                      <li>Choose visualization options (tables, charts, graphs)</li>
                      <li>Save report templates for future use</li>
                      <li>Schedule automated report generation and distribution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Data Export</h4>
                    <p>Export data for use in external systems:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Export reports in various formats (PDF, Excel, CSV)</li>
                      <li>Schedule automated data exports</li>
                      <li>Configure secure data transfer to external systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">System Maintenance</h3>
                <p className="mb-4">
                  Perform routine maintenance tasks to ensure system health and optimal performance.
                </p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium mb-1">Database Management</h4>
                    <p>Maintain the system database:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Monitor database size and performance</li>
                      <li>Schedule regular database maintenance tasks</li>
                      <li>Manage database connections and pooling</li>
                      <li>Perform database backups and verify backup integrity</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">File Storage</h4>
                    <p>Manage system file storage:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Monitor storage usage and allocate additional space as needed</li>
                      <li>Configure file retention policies</li>
                      <li>Optimize file storage for performance</li>
                      <li>Ensure proper backup of uploaded files and documents</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">System Updates</h4>
                    <p>Manage system updates and upgrades:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Review and apply system updates</li>
                      <li>Schedule updates during low-usage periods</li>
                      <li>Test updates in a staging environment before applying to production</li>
                      <li>Communicate update schedules and potential impacts to users</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FAQ Section */}
        <TabsContent value="faq" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find answers to common questions about using the OECSLearningHub platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="account-faq">
                  <AccordionTrigger>Account Management</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">How do I reset my password?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Click on the "Forgot Password" link on the login page. Enter your email address, and you'll
                          receive a password reset link. Click the link in the email and follow the instructions to
                          create a new password.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">How do I update my profile information?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Click on your profile picture in the top right corner of the screen, then select "Profile
                          Settings." You can update your name, email, profile picture, and other information from this
                          page.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Can I have multiple roles in the system?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Yes, users can have multiple roles (e.g., a teacher who is also a parent). Contact your system
                          administrator to have additional roles added to your account. You can switch between role
                          views using the role selector in your profile menu.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">What should I do if I can't log in?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          First, ensure you're using the correct email address and password. Try the "Forgot Password"
                          option to reset your password. If you still can't log in, contact your school's system
                          administrator or the support team for assistance.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="curriculum-faq">
                  <AccordionTrigger>Curriculum and Content</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">How is the curriculum organized?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          The curriculum is organized hierarchically by grade level, subject, unit, and lesson. Each
                          lesson includes learning objectives, content, activities, resources, and assessments aligned
                          with educational standards.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Can I download curriculum materials for offline use?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Yes, most curriculum materials can be downloaded for offline use. Look for the download icon
                          next to documents, presentations, and other resources. Downloaded materials can be accessed
                          without an internet connection, but interactive elements may have limited functionality
                          offline.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">How often is the curriculum updated?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Curriculum content is typically updated annually before the start of the school year. However,
                          minor updates and corrections may be made throughout the year. Teachers and administrators
                          will be notified of significant updates to the curriculum.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Can I suggest changes or additions to the curriculum?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Yes, teachers and administrators can submit curriculum feedback and suggestions through the
                          "Feedback" option in the curriculum viewer. Suggestions are reviewed by curriculum
                          coordinators and may be incorporated into future updates.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="technical-faq">
                  <AccordionTrigger>Technical Issues</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">What browsers are supported?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          The platform supports the latest versions of Google Chrome (recommended), Mozilla Firefox,
                          Microsoft Edge, and Safari. For the best experience, we recommend keeping your browser updated
                          to the latest version.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">How do I clear my browser cache?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Clearing your browser cache can resolve many common issues. The process varies by browser:
                          <br />- Chrome: Settings &gt; Privacy and security &gt; Clear browsing data
                          <br />- Firefox: Options &gt; Privacy &amp; Security &gt; Cookies and Site Data &gt; Clear
                          Data
                          <br />- Edge: Settings &gt; Privacy, search, and services &gt; Clear browsing data
                          <br />- Safari: Preferences &gt; Privacy &gt; Manage Website Data &gt; Remove All
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">What should I do if a page isn't loading correctly?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          First, try refreshing the page. If that doesn't work, clear your browser cache and try again.
                          If you're still experiencing issues, try using a different browser or device. If the problem
                          persists, contact technical support with details about the issue, including the page URL and
                          any error messages.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">How can I report a technical issue?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Click on the "Help" icon in the navigation menu, then select "Report an Issue." Fill out the
                          form with as much detail as possible, including what you were trying to do, what happened, and
                          any error messages you received. Screenshots are helpful if available.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mobile-faq">
                  <AccordionTrigger>Mobile Access</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Can I access the platform on mobile devices?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Yes, the platform is fully responsive and can be accessed on smartphones and tablets through
                          the device's web browser. The interface will automatically adjust to fit your screen size.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Is there a mobile app available?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Yes, we offer mobile apps for iOS and Android devices. Search for "OECSLearningHub" in the App
                          Store or Google Play Store to download the app. The mobile app provides additional features
                          like offline access and push notifications.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">How do I log in on the mobile app?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use the same email address and password that you use on the web version. The mobile app will
                          remember your login credentials after the first login, making it faster to access your account
                          in the future.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Can I download content for offline viewing on mobile?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Yes, the mobile app allows you to download lessons, resources, and assignments for offline
                          access. Look for the download icon next to content items. Downloaded content will be available
                          in the "Offline Content" section of the app when you don't have an internet connection.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="privacy-faq">
                  <AccordionTrigger>Privacy and Security</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">How is my data protected?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          We take data security seriously. All data is encrypted in transit and at rest. We use
                          industry-standard security measures to protect user information, and we regularly conduct
                          security audits and updates to maintain a secure environment.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Who can see my child's information?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Access to student information is strictly controlled. Only authorized users (the student,
                          their parents/guardians, their teachers, and authorized administrators) can access a student's
                          personal information and academic records.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Is the platform compliant with educational privacy laws?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Yes, the platform is designed to comply with relevant educational privacy laws and
                          regulations, including FERPA (Family Educational Rights and Privacy Act) in the United States
                          and similar regulations in other countries.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">How long is user data retained?</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Data retention policies vary by data type and local regulations. Generally, academic records
                          are maintained for the duration of a student's enrollment plus a defined period afterward
                          (typically 5-7 years). Users can request information about specific data retention policies
                          from their system administrator.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Need Additional Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our support team is available Monday-Friday, 8am-5pm to assist with any questions or issues.
              </p>
              <Button variant="outline" className="mt-4 w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Video Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Watch step-by-step video tutorials demonstrating how to use platform features.
              </p>
              <Button variant="outline" className="mt-4 w-full">
                View Tutorials
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Training Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Register for live training sessions conducted by our education specialists.
              </p>
              <Button variant="outline" className="mt-4 w-full">
                View Schedule
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
