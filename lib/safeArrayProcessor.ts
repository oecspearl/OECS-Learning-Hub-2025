/**
 * Safely processes array fields that might be null, undefined, or in different formats
 * @param field - The field to process (could be string, array, null, or undefined)
 * @param delimiter - The delimiter to split by (default: ',')
 * @returns An array of trimmed strings
 */
export const safeArrayProcessor = (field: any, delimiter: string = ','): string[] => {
  if (!field) return [];
  if (Array.isArray(field)) return field.map(item => String(item).trim());
  if (typeof field === 'string') return field.split(delimiter).map(item => item.trim());
  return [];
};

/**
 * Safely processes content that might be null for line splitting
 * @param content - The content to split into lines
 * @returns An array of lines or empty array if content is null/undefined
 */
export const safeContentSplitter = (content: any): string[] => {
  if (!content) return [];
  if (typeof content === 'string') return content.split('\n');
  return [];
};

/**
 * Safely processes markdown content for parsing
 * @param content - The markdown content to process
 * @returns The content as string or empty string if null/undefined
 */
export const safeMarkdownContent = (content: any): string => {
  if (!content) return '';
  return String(content);
}; 