export const APP_NAME = "Inkwell";
export const APP_TAGLINE = "Ideas worth reading.";
export const APP_DESCRIPTION =
  "A modern editorial blog covering design, technology, culture, and the ideas shaping our world.";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "#articles" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
  { label: "Newsletter", href: "#newsletter" },
];

export const navCTA = {
  label: "Subscribe",
  href: "#newsletter",
};

export interface Category {
  slug: string;
  label: string;
  color: string;
}

export const categories: Category[] = [
  { slug: "design", label: "Design", color: "bg-violet-100 text-violet-700" },
  { slug: "technology", label: "Technology", color: "bg-blue-100 text-blue-700" },
  { slug: "culture", label: "Culture", color: "bg-amber-100 text-amber-700" },
  { slug: "science", label: "Science", color: "bg-emerald-100 text-emerald-700" },
  { slug: "business", label: "Business", color: "bg-rose-100 text-rose-700" },
  { slug: "philosophy", label: "Philosophy", color: "bg-slate-100 text-slate-700" },
];

export interface Author {
  name: string;
  avatar: string;
  bio: string;
  role: string;
}

export const authors: Author[] = [
  {
    name: "Elena Marsh",
    avatar: "https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fdrupal.nypl.org%2Fsites-drupal%2Fdefault%2Ffiles%2Fstyles%2Fmax_width_960%2Fpublic%2Fblogs%2Fblog1280px-raphael_school_of_athens_0.jpg%3Fitok%3DHPj8InIx&w=3840&q=90",
    bio: "Elena writes about design systems, visual culture, and the intersection of art and technology.",
    role: "Senior Editor",
  },
  {
    name: "James Okafor",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQGFEaWwL5h5YA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1680206997898?e=2147483647&v=beta&t=Can8XuckOfIXV9Hyb9kON5l6kAINwxEPPpQnDbYtaj4",
    bio: "James covers emerging technologies, AI, and the future of human-computer interaction.",
    role: "Tech Correspondent",
  },
  {
    name: "Sofia Reyes",
    avatar: "https://achiya.org/wp-content/uploads/writers/james-okafor-4d4bc7.webp",
    bio: "Sofia explores culture, identity, and the stories that define our era.",
    role: "Culture Writer",
  },
  {
    name: "David Chen",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/7/78/Sof%C3%ADa_Reyes_2016.jpg",
    bio: "David reports on startups, venture capital, and the business of innovation.",
    role: "Business Editor",
  },
];

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    slug: "the-quiet-revolution-in-interface-design",
    title: "The Quiet Revolution in Interface Design",
    excerpt:
      "How a generation of designers is stripping away noise to reveal something more human — and why restraint has become the most radical act in tech.",
    image: "https://media.licdn.com/dms/image/v2/D5612AQHS-N6ONVVipQ/article-cover_image-shrink_720_1280/B56ZWyVE5GHsAY-/0/1742453624786?e=2147483647&v=beta&t=geWM4tKLxOJEc-33QVm_zmBrYz4-3ekY7gzLe7gFec0",
    category: "design",
    tags: ["UI", "minimalism", "UX", "trends"],
    author: "Elena Marsh",
    publishedAt: "2024-05-12",
    readingTime: 7,
    featured: true,
  },
  {
    slug: "ai-and-the-art-of-forgetting",
    title: "AI and the Art of Forgetting",
    excerpt:
      "Large language models remember everything we feed them — but what happens when we ask them to forget? A deep dive into machine memory and its ethical implications.",
    image: "https://www.mile-hi.ai/images/art-of-forgetting-infographic.png",
    category: "technology",
    tags: ["AI", "ethics", "machine learning"],
    author: "James Okafor",
    publishedAt: "2024-05-08",
    readingTime: 9,
    featured: true,
  },
  {
    slug: "the-return-of-slow-media",
    title: "The Return of Slow Media",
    excerpt:
      "In an age of infinite scroll and algorithmic feeds, a growing movement is reclaiming depth, nuance, and the pleasure of reading something that takes time.",
    image: "https://m.media-amazon.com/images/I/51mbpQ9tZXL._AC_UF1000,1000_QL80_.jpg",
    category: "culture",
    tags: ["media", "reading", "attention"],
    author: "Sofia Reyes",
    publishedAt: "2024-05-03",
    readingTime: 6,
  },
  {
    slug: "venture-capital-reckoning",
    title: "The Venture Capital Reckoning",
    excerpt:
      "After years of easy money and sky-high valuations, the startup ecosystem is undergoing a painful but necessary correction. What comes next?",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFaSKAebBt4nA/article-cover_image-shrink_720_1280/B56Z2Ww9e.KQAI-/0/1776350922547?e=2147483647&v=beta&t=cJjNXHoXMud6dfWgV-kP0nY6xj2uHByKPun0l62Knag",
    category: "business",
    tags: ["startups", "VC", "finance"],
    author: "David Chen",
    publishedAt: "2024-04-28",
    readingTime: 8,
  },
  {
    slug: "color-theory-for-the-digital-age",
    title: "Color Theory for the Digital Age",
    excerpt:
      "From OLED screens to HDR displays, the rules of color have changed. Here's how designers are adapting their palettes for a world of infinite contrast.",
    image: "https://picsum.photos/seed/809d8fe8e25b/800/600",
    category: "design",
    tags: ["color", "design", "display technology"],
    author: "Elena Marsh",
    publishedAt: "2024-04-22",
    readingTime: 5,
  },
  {
    slug: "the-philosophy-of-open-source",
    title: "The Philosophy of Open Source",
    excerpt:
      "Open source software is more than a licensing model — it's a philosophy of collective ownership, radical transparency, and shared futures.",
    image: "https://image.slidesharecdn.com/theopensourcephilosophy-110724084342-phpapp01/75/The-open-source-philosophy-6-2048.jpg",
    category: "philosophy",
    tags: ["open source", "community", "software"],
    author: "James Okafor",
    publishedAt: "2024-04-15",
    readingTime: 10,
  },
  {
    slug: "the-science-of-creative-blocks",
    title: "The Science of Creative Blocks",
    excerpt:
      "Neuroscientists are uncovering why creative people get stuck — and the surprisingly simple techniques that can unlock the mind's generative potential.",
    image: "https://public-images.interaction-design.org/tags/Creative%20Block%20Diagram.png",
    category: "science",
    tags: ["creativity", "neuroscience", "psychology"],
    author: "Sofia Reyes",
    publishedAt: "2024-04-10",
    readingTime: 7,
  },
  {
    slug: "building-for-the-next-billion",
    title: "Building for the Next Billion",
    excerpt:
      "The most important design challenge of our time isn't making apps prettier — it's making them work for people with low-end devices and slow connections.",
    image: "https://nextbillion.capital/wp-content/uploads/2025/04/e92cb6_01998d6a4b42445fbd218d6312abb6d9mv2.png",
    category: "design",
    tags: ["accessibility", "global", "mobile"],
    author: "Elena Marsh",
    publishedAt: "2024-04-05",
    readingTime: 6,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return posts.filter((p) => p.category === categorySlug);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((p) => p.featured);
}

export function getRecentPosts(limit = 6): Post[] {
  return [...posts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((a) => a.name === name);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}