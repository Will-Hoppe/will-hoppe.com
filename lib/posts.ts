// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define the posts directory
const postsDirectory = path.join(process.cwd(), 'posts');

// Define an interface for your post data
export interface PostData {
  slug: string;
  title: string;
  date: string;
  content: string;
}

// Get all post slugs (filenames without the .md extension)
export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

// Get the post data for a given slug and cast front matter to the PostData shape
export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Ensure that your Markdown file has front matter with both `title` and `date`
  return {
    slug,
    title: data.title, // This assumes your markdown has a 'title' property
    date: data.date,   // This assumes your markdown has a 'date' property
    content,
  };
}

// Convert Markdown content to HTML
export async function getPostContentHtml(content: string): Promise<string> {
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}

// Get all posts sorted by date (newest first)
export async function getAllPosts(): Promise<PostData[]> {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostData(slug));
  
  // Sort posts by date
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return posts;
}
