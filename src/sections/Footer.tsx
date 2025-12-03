import { motion } from 'framer-motion'
import { Youtube, MessageCircle } from 'lucide-react'
import logoFull from '@/assets/logo-full.png'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Pourquoi les Spins', href: '#pourquoi' },
      { label: 'L\'équipe', href: '#equipe' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '#' },
      { label: 'Politique de confidentialité', href: '#' },
    ],
  },
]

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: MessageCircle, href: '#', label: 'Discord' },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-dark-100 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <img
              src={logoFull}
              alt="Spiners"
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Coaching Spins & Go nouvelle génération.
              Rejoins une équipe de coachs expérimentés et passe au niveau supérieur.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-dark/50 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon hover:border-neon/50 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-neon transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Spiners. Tous droits réservés.</p>
            <p className="text-center md:text-right max-w-xl">
              Le poker comporte des risques. Joue de manière responsable.
              18+ uniquement. Le coaching ne garantit pas de gains.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
