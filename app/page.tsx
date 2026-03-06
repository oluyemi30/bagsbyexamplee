import { ArrowRight, Code2, Zap, BookOpen, Github, MessageCircle, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-neutral-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-black">
              B
            </div>
            <span className="font-bold text-lg">Bags by Example</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://docs.bags.fm" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
              Docs
            </a>
            <a href="https://github.com/bagsfm" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://discord.gg/bagsapp" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
              Discord
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Bags by examples
          </h1>
          <p className="text-xl text-neutral-300 mb-8 text-balance max-w-2xl mx-auto">
            Master the Bags API through hands-on tutorials. Build powerful token launch applications with code examples and interactive guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#guides" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all">
              Start Building <ArrowRight size={20} />
            </a>
            <a href="https://docs.bags.fm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/50 rounded-lg font-semibold hover:bg-primary/10 transition-all">
              View Documentation <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Essential Guides */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Essential Guides</h2>
            <p className="text-neutral-400">Get started with foundational tutorials to launch tokens on Solana</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {essentialGuides.map((guide) => (
              <div key={guide.id} className="group relative overflow-hidden rounded-xl bg-neutral-900/50 border border-primary/20 hover:border-primary/50 p-6 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="inline-block p-3 bg-primary/20 rounded-lg mb-4">
                    <guide.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{guide.title}</h3>
                  <p className="text-sm text-neutral-400 mb-4">{guide.description}</p>
                  <div className="text-xs text-neutral-500">{guide.duration} min</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section id="guides" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Learning Path</h2>
            <p className="text-neutral-400">Progress from basics to advanced token launch implementations</p>
          </div>

          {/* Beginner */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                1
              </span>
              Beginner
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beginnerTutorials.map((tutorial) => (
                <TutorialCard key={tutorial.id} tutorial={tutorial} />
              ))}
            </div>
          </div>

          {/* Intermediate */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                2
              </span>
              Intermediate
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {intermediateTutorials.map((tutorial) => (
                <TutorialCard key={tutorial.id} tutorial={tutorial} />
              ))}
            </div>
          </div>

          {/* Advanced */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                3
              </span>
              Advanced
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedTutorials.map((tutorial) => (
                <TutorialCard key={tutorial.id} tutorial={tutorial} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Build on Bags */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Build with Bags</h2>
            <p className="text-neutral-400">The most powerful API for Solana token launches</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-neutral-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Bags Ecosystem</h2>
            <p className="text-neutral-400">Integrate with powerful tools and services</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemTools.map((tool) => (
              <div key={tool.id} className="rounded-xl bg-neutral-900/50 border border-primary/20 p-6 hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
                <p className="text-sm text-neutral-400 mb-4">{tool.description}</p>
                <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Developer Resources</h2>
            <p className="text-neutral-400">Everything you need to build, deploy, and scale</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <a
                key={resource.id}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl bg-neutral-900/50 border border-primary/20 hover:border-primary/50 p-8 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                    <p className="text-sm text-neutral-400">{resource.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center font-bold text-black text-sm">
                  B
                </div>
                <span className="font-bold">Bags</span>
              </div>
              <p className="text-sm text-neutral-400">Token launches powered by Solana</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="https://docs.bags.fm" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">API Docs</a></li>
                <li><a href="https://github.com/bagsfm" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="https://dev.bags.fm" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Developer Portal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="https://discord.gg/bagsapp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="https://x.com/bagsapp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-neutral-400">© 2025 Bags. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="https://github.com/bagsfm" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://discord.gg/bagsapp" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="https://x.com/bagsapp" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TutorialCard({ tutorial }: { tutorial: (typeof beginnerTutorials)[0] }) {
  return (
    <div className="group rounded-xl bg-neutral-900/50 border border-primary/20 hover:border-primary/50 p-6 transition-all hover:shadow-lg hover:shadow-primary/10">
      <div className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded mb-4">
        {tutorial.difficulty}
      </div>
      <h4 className="font-semibold text-lg mb-2">{tutorial.title}</h4>
      <p className="text-sm text-neutral-400 mb-4">{tutorial.description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-primary/10">
        <span className="text-xs text-neutral-500">{tutorial.duration} min</span>
        <a href={tutorial.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors flex items-center gap-1">
          View <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}

const essentialGuides = [
  {
    id: 1,
    icon: Code2,
    title: 'Launch a Token',
    description: 'Create and deploy Solana tokens using the Bags API',
    duration: 10,
  },
  {
    id: 2,
    icon: Zap,
    title: 'Setup Project',
    description: 'Configure TypeScript & Node.js with the Bags SDK',
    duration: 5,
  },
  {
    id: 3,
    icon: BookOpen,
    title: 'API Basics',
    description: 'Understand authentication and core API concepts',
    duration: 8,
  },
  {
    id: 4,
    icon: Code2,
    title: 'Trade Tokens',
    description: 'Implement token trading functionality',
    duration: 12,
  },
]

const beginnerTutorials = [
  {
    id: 1,
    title: 'Get API Key',
    description: 'Set up your API key and authenticate your first request to Bags',
    difficulty: 'Easy',
    duration: 5,
    link: 'https://docs.bags.fm/faq/how-to-get-api-key#how-do-i-get-an-api-key',
  },
  {
    id: 2,
    title: 'Deploy First Token',
    description: 'Create your first Solana token on devnet using the Bags API',
    difficulty: 'Easy',
    duration: 15,
    link: 'https://docs.bags.fm/how-to-guides/launch-token#launch-a-token',
  },
  {
    id: 3,
    title: 'Understanding Solana',
    description: 'Learn Solana blockchain basics and how token launches work',
    difficulty: 'Easy',
    duration: 10,
    link: 'https://docs.bags.fm',
  },
]

const intermediateTutorials = [
  {
    id: 4,
    title: 'Create Partner Key',
    description: 'Set up partner keys to claim fees from token launches',
    difficulty: 'Medium',
    duration: 20,
    link: 'https://docs.bags.fm/how-to-guides/create-partner-key#create-partner-key',
  },
  {
    id: 5,
    title: 'Claim Partner Fees',
    description: 'Implement fee claiming functionality for your token launches',
    difficulty: 'Medium',
    duration: 25,
    link: 'https://docs.bags.fm/how-to-guides/claim-partner-fees#claim-partner-fees',
  },
  {
    id: 6,
    title: 'Trade Tokens',
    description: 'Build token trading features with the Bags API',
    difficulty: 'Medium',
    duration: 30,
    link: 'https://docs.bags.fm/how-to-guides/trade-tokens#',
  },
]

const advancedTutorials = [
  {
    id: 7,
    title: 'Token Lifetime Fees',
    description: 'Build advanced fee tracking and analytics for tokens',
    difficulty: 'Hard',
    duration: 40,
    link: 'https://docs.bags.fm/api-reference/get-token-lifetime-fees',
  },
  {
    id: 8,
    title: 'Claim Fee Positions',
    description: 'Implement complex fee position claiming strategies',
    difficulty: 'Hard',
    duration: 45,
    link: 'https://docs.bags.fm/how-to-guides/claim-fees#',
  },
  {
    id: 9,
    title: 'Custom Integrations',
    description: 'Build custom applications integrating multiple Bags endpoints',
    difficulty: 'Hard',
    duration: 60,
    link: 'https://docs.bags.fm',
  },
]

const benefits = [
  {
    id: 1,
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Leverage Solana\'s 400ms block times for instant token launches and trades',
  },
  {
    id: 2,
    icon: Code2,
    title: 'Developer Friendly',
    description: 'Simple REST API and TypeScript SDK with comprehensive documentation',
  },
  {
    id: 3,
    icon: BookOpen,
    title: 'No Platform Fees',
    description: 'Launch tokens with only Solana network costs, no Bags platform fees',
  },
  {
    id: 4,
    icon: Zap,
    title: 'Partner Program',
    description: 'Earn fees by integrating token launches into your platform',
  },
]

const ecosystemTools = [
  {
    id: 1,
    name: 'Solana CLI',
    description: 'Command-line tools for managing accounts and transactions',
    link: 'https://docs.solana.com/cli',
  },
  {
    id: 2,
    name: 'Web3.js',
    description: 'JavaScript library for interacting with Solana blockchain',
    link: 'https://solana-labs.github.io/solana-web3.js/',
  },
  {
    id: 3,
    name: 'Anchor Framework',
    description: 'Framework for building Solana programs efficiently',
    link: 'https://www.anchor-lang.com/',
  },
  {
    id: 4,
    name: 'Metaplex',
    description: 'Create and manage tokens and NFTs on Solana',
    link: 'https://www.metaplex.com/',
  },
  {
    id: 5,
    name: 'Jupiter',
    description: 'Solana DEX aggregator for token swaps',
    link: 'https://jup.ag/',
  },
  {
    id: 6,
    name: 'Magic Eden',
    description: 'NFT marketplace and launchpad for Solana',
    link: 'https://magiceden.io/',
  },
]

const resources = [
  {
    id: 1,
    title: 'API Documentation',
    description: 'Complete endpoint documentation with examples and use cases',
    link: 'https://docs.bags.fm',
  },
  {
    id: 2,
    title: 'GitHub Repository',
    description: 'SDKs, examples, and code templates to kickstart your project',
    link: 'https://github.com/bagsfm',
  },
  {
    id: 3,
    title: 'Developer Portal',
    description: 'Manage API keys, track usage, and monitor your applications',
    link: 'https://dev.bags.fm',
  },
  {
    id: 4,
    title: 'Discord Community',
    description: 'Connect with other developers and get support from the team',
    link: 'https://discord.gg/bagsapp',
  },
]
