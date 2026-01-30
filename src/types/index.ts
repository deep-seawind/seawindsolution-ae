export interface MenuItem {
  name: string
  href: string
  children?: MenuItem[]
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  publishedAt: string
  tags: string[]
}

export interface Service {
  id: string
  title: string
  slug: string
  description: string
  image: string
  features: string[]
  price?: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  bio: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  image: string
  gallery: string[]
  technologies: string[]
  client: string
  completedAt: string
  url?: string
}

export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  image: string
  rating: number
}