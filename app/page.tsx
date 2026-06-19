"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star, Mail, Check, ChevronRight, Sparkles, Eye, Heart } from 'lucide-react';
import {
  APP_NAME,
  APP_TAGLINE,
  APP_DESCRIPTION,
  categories,
  authors,
  posts,
  formatDate,
  getFeaturedPosts,
  getRecentPosts,
} from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

// ─── Inline section data ────────────────────────────────────────────────────

const stats = [
  { value: "12K+", label: "Monthly Readers" },
  { value: "340+", label: "Articles Published" },
  { value: "6", label: "Editorial Categories" },
  { value: "4", label: "Expert Writers" },
];

const valueProps = [
  {
    icon: "✍️",
    title: "Thoughtful Long-form",
    description:
      "Every piece is carefully researched and edited — no clickbait, no filler. Just ideas worth your time.",
  },
  {
    icon: "🎨",
    title: "Design-first Reading",
    description:
      "Beautiful typography, generous whitespace, and a reading experience crafted to help you focus.",
  },
  {
    icon: "🔍",
    title: "Deep Dives",
    description:
      "We go beyond the surface. Our writers spend weeks on a single story so you don't have to.",
  },
  {
    icon: "🌍",
    title: "Global Perspectives",
    description:
      "Voices from across disciplines and continents, united by curiosity and a love of nuanced thinking.",
  },
];

const testimonials = [
  {
    quote:
      "Inkwell is the only newsletter I actually look forward to opening. The writing is consistently excellent.",
    name: "Priya Nair",
    role: "Product Designer at Figma",
    avatar: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-1309092,resizemode-75,msid-122368466/industry/cons-products/fmcg/priya-nairs-playbook-how-hindustan-unilevers-new-ceo-built-global-brands-with-indian-roots.jpg",
  },
  {
    quote:
      "I've discovered more interesting ideas through Inkwell than through any algorithm-driven feed. It's irreplaceable.",
    name: "Marcus Webb",
    role: "Founder, Meridian Labs",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/JMarcus_Webb.JPG/960px-JMarcus_Webb.JPG",
  },
  {
    quote:
      "The culture coverage is unlike anything else online. Sofia Reyes writes with a depth that's genuinely rare.",
    name: "Aiko Tanaka",
    role: "Editor, The Margin Review",
    avatar: "https://static.wikia.nocookie.net/punpun/images/3/3c/Aiko_c1p5.PNG/revision/latest/thumbnail/width/360/height/450?cb=20251015181018",
  },
];

// ─── Sub-components (inline) ─────────────────────────────────────────────────

function CategoryBadge({ category }: { category: string }) {
  const cat = categories.find((c) => c.slug === category);
  return (
    <span
      className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
        cat?.color ?? "bg-slate-100 text-slate-600"
      }`}
    >
      {cat?.label ?? category}
    </span>
  );
}

function PostCard({ post, index }: { post: (typeof posts)[0]; index: number }) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300 flex flex-col"
    >
      <Link href={`/posts/${post.slug}`} className="block overflow-hidden">
        <div className="relative h-52 bg-slate-100 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <CategoryBadge category={post.category} />
          </div>
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readingTime} min read
          </span>
          <span>·</span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>
        <Link href={`/posts/${post.slug}`} className="flex-1">
          <h3 className="font-bold text-slate-900 text-lg leading-snug mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </Link>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <img
              src={
                authors.find((a) => a.name === post.author)?.avatar ??
                "/images/author-placeholder.jpg"
              }
              alt={post.author}
              className="w-7 h-7 rounded-full object-cover bg-slate-200"
            />
            <span className="text-xs font-medium text-slate-600">
              {post.author}
            </span>
          </div>
          <Link
            href={`/posts/${post.slug}`}
            className="text-indigo-600 hover:text-indigo-700 text-xs font-semibold flex items-center gap-1 group/link"
          >
            Read
            <ChevronRight
              size={13}
              className="group-hover/link:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);
  const heroPost = featuredPosts[0];
  const secondaryFeatured = featuredPosts.slice(1, 3);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-4 py-2 rounded-full border border-indigo-100">
              <Sparkles size={13} />
              {APP_TAGLINE}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-slate-900 leading-tight tracking-tight max-w-4xl mx-auto mb-6"
          >
            Writing that makes you{" "}
            <span className="text-indigo-600 italic">think</span>.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {APP_DESCRIPTION}
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="#articles">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition-colors cursor-pointer text-sm"
              >
                Start Reading
                <ArrowRight size={16} />
              </motion.span>
            </Link>
            <Link href="#newsletter">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-pointer text-sm shadow-sm"
              >
                <Mail size={15} />
                Subscribe Free
              </motion.span>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold font-serif text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED ARTICLES ────────────────────────────────────────────── */}
      <section id="articles" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-widest">
                Featured
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mt-1">
                Editor's Picks
              </h2>
            </div>
            <Link
              href="#articles"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              All articles <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Hero post */}
          {heroPost && (
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mb-8"
            >
              <Link href={`/posts/${heroPost.slug}`}>
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 grid md:grid-cols-2"
                >
                  <div className="relative h-72 md:h-auto bg-slate-100 overflow-hidden">
                    <img
                      src={heroPost.image}
                      alt={heroPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        <Star size={11} fill="currentColor" />
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <CategoryBadge category={heroPost.category} />
                    <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mt-4 mb-4 leading-snug group-hover:text-indigo-600 transition-colors">
                      {heroPost.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">
                      {heroPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          authors.find((a) => a.name === heroPost.author)
                            ?.avatar ?? "/images/author-placeholder.jpg"
                        }
                        alt={heroPost.author}
                        className="w-10 h-10 rounded-full object-cover bg-slate-200"
                      />
                      <div>
                        <div className="text-sm font-semibold text-slate-800">
                          {heroPost.author}
                        </div>
                        <div className="text-xs text-slate-400 flex items-center gap-2">
                          <Clock size={11} />
                          {heroPost.readingTime} min ·{" "}
                          {formatDate(heroPost.publishedAt)}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all">
                        Read Article <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          )}

          {/* Secondary featured */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            {secondaryFeatured.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </motion.div>

          {/* Recent posts grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {recentPosts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <span className="text-indigo-600 text-sm font-semibold uppercase tracking-widest">
              Browse
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mt-2 mb-4">
              Explore by Category
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
              From the philosophy of mind to the mechanics of venture capital —
              find the topics that fascinate you.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.slug}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-slate-50 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-200 rounded-2xl p-6 transition-all duration-300 flex items-center justify-between">
                  <div>
                    <span
                      className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${cat.color}`}
                    >
                      {cat.label}
                    </span>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {cat.slug === "design" &&
                        "Visual culture, systems, and the craft of making."}
                      {cat.slug === "technology" &&
                        "AI, software, and the digital frontier."}
                      {cat.slug === "culture" &&
                        "Society, identity, and the stories we tell."}
                      {cat.slug === "science" &&
                        "Discovery, research, and the natural world."}
                      {cat.slug === "business" &&
                        "Startups, strategy, and the economy of ideas."}
                      {cat.slug === "philosophy" &&
                        "Ethics, meaning, and the examined life."}
                    </p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY INKWELL ──────────────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-widest">
                Why {APP_NAME}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mt-2 mb-6 leading-tight">
                Slow down. Read something{" "}
                <span className="text-indigo-600 italic">real</span>.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 text-base">
                We started Inkwell because we were tired of content optimised
                for clicks rather than comprehension. Every article we publish
                is edited for clarity, depth, and lasting value — not for
                virality.
              </p>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="space-y-5"
              >
                {valueProps.map((vp) => (
                  <motion.div
                    key={vp.title}
                    variants={fadeInUp}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-lg flex-shrink-0">
                      {vp.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-sm mb-1">
                        {vp.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {vp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: authors */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-4"
            >
              {authors.map((author, i) => (
                <motion.div
                  key={author.name}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-14 h-14 rounded-full object-cover bg-slate-200 mb-3"
                  />
                  <div className="font-semibold text-slate-900 text-sm">
                    {author.name}
                  </div>
                  <div className="text-indigo-600 text-xs font-medium mb-2">
                    {author.role}
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {author.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <span className="text-indigo-600 text-sm font-semibold uppercase tracking-widest">
              Readers Say
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mt-2">
              Trusted by curious minds
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover bg-slate-200"
                  />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-slate-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
      <section id="newsletter" className="py-24 bg-indigo-600 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-6">
              <Mail size={26} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4 leading-tight">
              Join 12,000+ readers who think deeply.
            </h2>
            <p className="text-indigo-200 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Get our best essays delivered to your inbox every week — no spam,
              no noise. Just ideas worth reading.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl text-base font-semibold"
              >
                <div className="w-7 h-7 bg-emerald-400 rounded-full flex items-center justify-center">
                  <Check size={15} className="text-white" />
                </div>
                You're in! Welcome to Inkwell.
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 bg-white text-indigo-700 font-bold rounded-full text-sm hover:bg-indigo-50 transition-colors shadow-lg flex-shrink-0"
                >
                  Subscribe Free
                </motion.button>
              </form>
            )}

            <p className="text-indigo-300 text-xs mt-5">
              No spam. Unsubscribe anytime. Read by designers, engineers, and
              thinkers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── READING EXPERIENCE CALLOUT ────────────────────────────────────── */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            {[
              {
                icon: <Eye size={28} className="text-indigo-400" />,
                title: "Distraction-free",
                desc: "Clean layouts designed for deep reading, not engagement metrics.",
              },
              {
                icon: <Heart size={28} className="text-rose-400" />,
                title: "Written with care",
                desc: "Every word is chosen deliberately. We edit ruthlessly so you read effortlessly.",
              },
              {
                icon: <Sparkles size={28} className="text-amber-400" />,
                title: "Always free",
                desc: "Great writing shouldn't be locked behind a paywall. Inkwell is free, forever.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}