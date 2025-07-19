import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import path from 'path'

function getAllFiles(dir: string, fileList: string[] = []): string[] {
  const files = readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    if (statSync(filePath).isDirectory()) {
      fileList = getAllFiles(filePath, fileList)
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath)
    }
  })
  
  return fileList
}

function removeDuplicateBreadcrumbs() {
  try {
    // Find all pages except the header component
    const files = getAllFiles('app').filter(file => !file.includes('header.tsx'))
    
    for (const file of files) {
      const content = readFileSync(file, 'utf-8')
      
      // Remove Breadcrumb import
      const newContent = content.replace(/import\s*{\s*Breadcrumb\s*}\s*from\s*["']@\/components\/breadcrumb["'];\n?/g, '')
      
      // Remove Breadcrumb component usage
      const finalContent = newContent.replace(/<Breadcrumb\s*\/?>\n?/g, '')
      
      if (content !== finalContent) {
        writeFileSync(file, finalContent)
        console.log(`Updated ${file}`)
      }
    }
    
    console.log('Finished removing duplicate breadcrumbs')
  } catch (error) {
    console.error('Error:', error)
  }
}

removeDuplicateBreadcrumbs() 