import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  car: string;
  publishedDate: string;
  updatedDate?: string;
};

export type Article = ArticleMeta & {
  content: string;
};

export function getAllSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    description: data.description,
    car: data.car,
    publishedDate: data.publishedDate,
    updatedDate: data.updatedDate,
    content,
  };
}

export function getAllArticles(): ArticleMeta[] {
  return getAllSlugs()
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== null)
    .map(({ slug, title, description, car, publishedDate, updatedDate }) => ({
      slug,
      title,
      description,
      car,
      publishedDate,
      updatedDate,
    }))
    .sort((a, b) => {
      const aDate = a.updatedDate ?? a.publishedDate;
      const bDate = b.updatedDate ?? b.publishedDate;
      return aDate < bDate ? 1 : -1;
    });
}
