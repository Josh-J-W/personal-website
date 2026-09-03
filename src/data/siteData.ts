export type ThemeMode = 'light' | 'dark'

export interface NavItem {
  label: string
  path: string
}

export interface Placeholders {
  label: string
  palette: [string, string]
}

export interface Project {
  id: string
  title: string
  description: string
  image: Placeholders
  category: 'Web' | 'Data' | 'Research' | 'Personal' | 'Creative' | 'Other'
  technologies: string[]
  date: string
  status: 'Active' | 'In progress' | 'Archived' | 'Exploring'
  featured: boolean
  links: {
    live?: string
    source?: string
  }
}

export interface Photo {
  id: string
  title: string
  category: 'Travel' | 'Landscape' | 'Architecture' | 'Street' | 'Food' | 'People' | 'Miscellaneous'
  location: string
  date: string
  caption: string
  image: Placeholders
}

export interface BlogPost {
  id: string
  title: string
  date: string
  category: string
  tags: string[]
  excerpt: string
  cover: Placeholders
  body: string[]
}

export const siteConfig = {
  name: 'Josh Winkel',
  title: 'Curious about languages, places, images, ideas, and everything in between.',
  intro:
    'I am a multidisciplinary learner who likes to collect experiences, make things, and spend time in the spaces between disciplines.',
  email: 'hello@example.com',
  github: 'https://github.com/Josh-J-W/personal-website',
  linkedin: 'https://www.linkedin.com/in/yourname',
  instagram: 'https://www.instagram.com/yourname',
  location: 'Based between London and wherever the next train takes me.',
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Photography', path: '/photography' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const currentInterests = [
  'Travel notebooks and slow itineraries',
  'Language learning and etymology',
  'Street photography and city rhythms',
  'Food culture and wine stories',
  'Building small tools for everyday curiosity',
  'Collecting ideas, objects, and good references',
]

export const aboutSections = {
  intro:
    'I am interested in the overlap between culture, technology, and lived experience. I like building things, learning new frameworks of thought, and paying attention to the details that make a place feel alive.',
  education: [
    {
      institution: 'University of the Arts',
      degree: 'Interdisciplinary Studies',
      period: '2013 – 2017',
      notes: 'A broad-based education across design, language, and communication.',
    },
    {
      institution: 'Independent study',
      degree: 'Linguistics and cultural studies',
      period: 'Ongoing',
      notes: 'Focused on language structure, translation, and the cultural textures behind it.',
    },
  ],
  skills: ['Web development', 'Design systems', 'Research', 'Writing', 'Photography', 'Project planning'],
  learning: [
    'Advanced Mandarin listening and speaking',
    'Digital storytelling and editorial design',
    'Understanding wine regions and food culture',
    'Improving my process for building personal tools',
  ],
  travel: [
    'A habit of collecting notes, sketches, and photographs while moving between cities.',
    'Interested in regional food, architecture, language variation, and everyday rituals.',
    'More interested in depth than speed: slower trips, long conversations, and local corners.',
  ],
  languages: ['English', 'French', 'Mandarin', 'Spanish (learning)'],
  personalInterests: ['Collecting old maps', 'Finding hidden cafés', 'Listening to jazz and ambient records', 'Trying new recipes'],
}

export const projects: Project[] = [
  {
    id: 'atlas-archive',
    title: 'Atlas Archive',
    description: 'A personal research archive for maps, trips, and notes that turns wandering into an organized collection of references.',
    image: { label: 'Map archive', palette: ['#d8b693', '#4d4f66'] },
    category: 'Web',
    technologies: ['React', 'TypeScript', 'Map data'],
    date: '2025',
    status: 'Active',
    featured: true,
    links: { live: '#', source: '#' },
  },
  {
    id: 'language-archive',
    title: 'Language Drift',
    description: 'An exploratory project documenting pronunciation, vocabulary, and cultural context through a structured learning journal.',
    image: { label: 'Language study', palette: ['#c7d5b7', '#586c5e'] },
    category: 'Research',
    technologies: ['JavaScript', 'Data viz', 'Research'],
    date: '2024',
    status: 'In progress',
    featured: true,
    links: { live: '#', source: '#' },
  },
  {
    id: 'street-diary',
    title: 'Street Diary',
    description: 'A lightweight photo and note journal for documenting city wandering, neighborhoods, and passing observations.',
    image: { label: 'Street diary', palette: ['#d4a67d', '#3d4a5b'] },
    category: 'Creative',
    technologies: ['React', 'Content-first design'],
    date: '2023',
    status: 'Archived',
    featured: false,
    links: { live: '#', source: '#' },
  },
  {
    id: 'taste-map',
    title: 'Taste Map',
    description: 'A personal index of restaurants, wines, and dishes that help me remember the places, flavors, and moments worth revisiting.',
    image: { label: 'Taste map', palette: ['#d8b9c4', '#704c4f'] },
    category: 'Personal',
    technologies: ['React', 'Custom data', 'UI design'],
    date: '2025',
    status: 'Exploring',
    featured: false,
    links: { live: '#', source: '#' },
  },
]

export const photography: Photo[] = [
  {
    id: 'kyoto-alley',
    title: 'Kyoto Alley, Evening',
    category: 'Travel',
    location: 'Kyoto, Japan',
    date: 'April 2025',
    caption: 'One quiet lane, the fading light, and a city that keeps its pace even after dusk.',
    image: { label: 'Kyoto alley', palette: ['#d7b18a', '#4f3b35'] },
  },
  {
    id: 'cliff-road',
    title: 'Cliff Road',
    category: 'Landscape',
    location: 'Big Sur, California',
    date: 'October 2024',
    caption: 'A stretch of road and a view that asks you to slow down and look longer.',
    image: { label: 'Cliff road', palette: ['#98a8b9', '#3a4b5d'] },
  },
  {
    id: 'old-doors',
    title: 'Old Doors',
    category: 'Architecture',
    location: 'Lisbon, Portugal',
    date: 'May 2024',
    caption: 'The texture of age is often the most memorable detail in a city.',
    image: { label: 'Old doors', palette: ['#c6b299', '#634d3c'] },
  },
  {
    id: 'market-stall',
    title: 'Market Stall',
    category: 'Street',
    location: 'Ho Chi Minh City, Vietnam',
    date: 'January 2024',
    caption: 'The city moves, but the market rhythm remains.',
    image: { label: 'Market stall', palette: ['#d1ab7b', '#5f4d46'] },
  },
  {
    id: 'food-table',
    title: 'After the Market',
    category: 'Food',
    location: 'Seoul, South Korea',
    date: 'March 2025',
    caption: 'A table of small dishes, a little noise, and a lot of attention.',
    image: { label: 'Food table', palette: ['#e1c6a5', '#7d5442'] },
  },
  {
    id: 'river-walk',
    title: 'River Walk',
    category: 'People',
    location: 'Paris, France',
    date: 'November 2023',
    caption: 'People passing, riverside light, and the gentle choreography of the everyday.',
    image: { label: 'River walk', palette: ['#adc1c7', '#46575c'] },
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: 'field-notes-from-a-long-train-ride',
    title: 'Field Notes from a Long Train Ride',
    date: 'March 18, 2025',
    category: 'Travel journal',
    tags: ['travel', 'slow living', 'notes'],
    excerpt: 'Every long train journey feels like a slow way to read a place — not all at once, but in layers.',
    cover: { label: 'Train window', palette: ['#c3b3a0', '#40576f'] },
    body: [
      'There is a kind of attention that only comes from moving slowly. Not the frantic, checklist attention of airports, but the softer kind that happens when the landscape has time to unfold alongside you.',
      'I was riding north by rail, watching the edges of towns soften and widen, cities turning into fields and then back again. The route was never the point. It was the pause in between: the way the light changed, the way a station name settled into my mind, the way a stranger’s cup of coffee became the whole morning in miniature.',
      'I keep returning to the idea that travel is not simply a collection of destinations. It is a set of details that continue acting on you after you have left. A rhythm, a scent, a sentence spoken in another language, a small decision to linger a little longer.',
      'This is what I am trying to make space for in my work, too: a slower way of observing and documenting. Not everything has to be optimized. Some things deserve time, ambiguity, and room to become more meaningful later.',
    ],
  },
  {
    id: 'a-collection-of-small-questions',
    title: 'A Collection of Small Questions',
    date: 'January 9, 2025',
    category: 'Notebook',
    tags: ['curiosity', 'writing', 'process'],
    excerpt: 'The best projects often begin as a question that refuses to be made tidy.',
    cover: { label: 'Notebook', palette: ['#d9c8b8', '#53606a'] },
    body: [
      'I have been thinking about the way a project begins. Not with a grand thesis, but with a small question that seems harmless until it keeps returning.',
      'What does a neighborhood sound like at 8:13 in the evening? What happens when a language changes from one region to the next? How do we remember a meal after the plates are cleared?',
      'The more I work, the more I appreciate the value of keeping questions open. It is easier to build something meaningful when it is allowed to become itself, rather than being forced into a narrow definition too early.',
    ],
  },
]
