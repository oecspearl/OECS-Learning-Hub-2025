// Types for our search index
export type SearchIndexItem = {
    title: string
    description: string
    url: string
    tags: string[]
    grade?: string
    subject?: string
    category?: string
  }
  
  // Our search index - in a real application, this would be generated automatically
  // This is a simplified version with some of your curriculum content
  export const searchIndex: SearchIndexItem[] = [
    {
      title: "Grade 1 Mathematics",
      description: "Mathematics curriculum for Grade 1 students",
      url: "/curriculum/grade1-subjects/mathematics",
      tags: ["mathematics", "grade 1", "curriculum"],
      grade: "1",
      subject: "Mathematics",
      category: "Curriculum",
    },
    {
      title: "Grade 1 Science",
      description: "Science curriculum for Grade 1 students",
      url: "/curriculum/grade1-subjects/science",
      tags: ["science", "grade 1", "curriculum"],
      grade: "1",
      subject: "Science",
      category: "Curriculum",
    },
    {
      title: "Grade 1 Language Arts",
      description: "Language Arts curriculum for Grade 1 students",
      url: "/curriculum/grade1-subjects/language-arts",
      tags: ["language arts", "grade 1", "curriculum", "reading", "writing"],
      grade: "1",
      subject: "Language Arts",
      category: "Curriculum",
    },
    {
      title: "Grade 1 Social Studies",
      description: "Social Studies curriculum for Grade 1 students",
      url: "/curriculum/grade1-subjects/social-studies",
      tags: ["social studies", "grade 1", "curriculum", "history", "geography"],
      grade: "1",
      subject: "Social Studies",
      category: "Curriculum",
    },
    {
      title: "Grade 2 Mathematics",
      description: "Mathematics curriculum for Grade 2 students",
      url: "/curriculum/grade2-subjects/mathematics",
      tags: ["mathematics", "grade 2", "curriculum"],
      grade: "2",
      subject: "Mathematics",
      category: "Curriculum",
    },
    {
      title: "Grade 2 Science",
      description: "Science curriculum for Grade 2 students",
      url: "/curriculum/grade2-subjects/science",
      tags: ["science", "grade 2", "curriculum"],
      grade: "2",
      subject: "Science",
      category: "Curriculum",
    },
    {
      title: "Grade 2 Language Arts",
      description: "Language Arts curriculum for Grade 2 students",
      url: "/curriculum/grade2-subjects/language-arts",
      tags: ["language arts", "grade 2", "curriculum", "reading", "writing"],
      grade: "2",
      subject: "Language Arts",
      category: "Curriculum",
    },
    {
      title: "Grade 2 Social Studies",
      description: "Social Studies curriculum for Grade 2 students",
      url: "/curriculum/grade2-subjects/social-studies",
      tags: ["social studies", "grade 2", "curriculum", "history", "geography"],
      grade: "2",
      subject: "Social Studies",
      category: "Curriculum",
    },
    // Mathematics Activities
    {
      title: "Place Value Partners",
      description: "Activity for understanding place value in numbers",
      url: "/curriculum/grade2-subjects/activities/mathematics/place-value-partners",
      tags: ["mathematics", "grade 2", "activity", "place value", "numbers"],
      grade: "2",
      subject: "Mathematics",
      category: "Activity",
    },
    {
      title: "Growing Patterns",
      description: "Activity for recognizing and creating patterns",
      url: "/curriculum/grade2-subjects/activities/mathematics/growing-patterns",
      tags: ["mathematics", "grade 2", "activity", "patterns", "sequence"],
      grade: "2",
      subject: "Mathematics",
      category: "Activity",
    },
    // Language Arts Activities
    {
      title: "Storytelling Circle",
      description: "Activity for developing oral storytelling skills",
      url: "/curriculum/grade2-subjects/activities/language-arts/storytelling-circle",
      tags: ["language arts", "grade 2", "activity", "storytelling", "speaking"],
      grade: "2",
      subject: "Language Arts",
      category: "Activity",
    },
    {
      title: "Picture Books",
      description: "Activity for reading and analyzing picture books",
      url: "/curriculum/grade2-subjects/activities/language-arts/picture-books",
      tags: ["language arts", "grade 2", "activity", "reading", "books"],
      grade: "2",
      subject: "Language Arts",
      category: "Activity",
    },
    // Science Activities
    {
      title: "Material Explorers",
      description: "Activity for exploring different materials and their properties",
      url: "/curriculum/grade2-subjects/activities/science/material-explorers",
      tags: ["science", "grade 2", "activity", "materials", "properties"],
      grade: "2",
      subject: "Science",
      category: "Activity",
    },
    {
      title: "Plant Investigators",
      description: "Activity for learning about plants and their needs",
      url: "/curriculum/grade2-subjects/activities/science/plant-investigators",
      tags: ["science", "grade 2", "activity", "plants", "biology"],
      grade: "2",
      subject: "Science",
      category: "Activity",
    },
    // Social Studies Activities
    {
      title: "Family Tree Explorer",
      description: "Activity for creating and understanding family trees",
      url: "/curriculum/grade2-subjects/activities/social-studies/family-tree-explorer",
      tags: ["social studies", "grade 2", "activity", "family", "history"],
      grade: "2",
      subject: "Social Studies",
      category: "Activity",
    },
    {
      title: "Community Map Makers",
      description: "Activity for creating maps of the local community",
      url: "/curriculum/grade2-subjects/activities/social-studies/community-map-makers",
      tags: ["social studies", "grade 2", "activity", "maps", "community"],
      grade: "2",
      subject: "Social Studies",
      category: "Activity",
    },
    // Lesson Planning
    {
      title: "Lesson Plan Creator",
      description: "Create customized lesson plans for your classroom",
      url: "/planner/create",
      tags: ["lesson plans", "planning", "teaching", "curriculum"],
      category: "Tool",
    },
    {
      title: "AI Lesson Plan Generator",
      description: "Generate lesson plans using AI assistance",
      url: "/planner/ai",
      tags: ["lesson plans", "AI", "planning", "teaching", "curriculum"],
      category: "Tool",
    },
  ]
  
  // Search function that filters the index based on the query
  export function searchContent(query: string): SearchIndexItem[] {
    if (!query || query.trim() === "") {
      return []
    }
  
    const normalizedQuery = query.toLowerCase().trim()
    const queryTerms = normalizedQuery.split(/\s+/)
  
    return searchIndex.filter((item) => {
      // Check if any query term is in the title, description, or tags
      return queryTerms.some((term) => {
        return (
          item.title.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          item.tags.some((tag) => tag.toLowerCase().includes(term)) ||
          (item.subject && item.subject.toLowerCase().includes(term)) ||
          (item.grade && item.grade.toLowerCase().includes(term)) ||
          (item.category && item.category.toLowerCase().includes(term))
        )
      })
    })
  }
  
  // Function to get search result categories
  export function categorizeSearchResults(results: SearchIndexItem[]): Record<string, SearchIndexItem[]> {
    const categories: Record<string, SearchIndexItem[]> = {}
  
    results.forEach((result) => {
      const category = result.category || "Other"
      if (!categories[category]) {
        categories[category] = []
      }
      categories[category].push(result)
    })
  
    return categories
  }
  