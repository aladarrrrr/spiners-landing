export interface NavLink {
  href: string
  label: string
}

export interface FooterSection {
  title: string
  links: NavLink[]
}

export interface SocialLink {
  icon: 'youtube' | 'discord'
  href: string
  label: string
}

/**
 * Main navigation links used in Navbar and Footer
 */
export const navLinks: NavLink[] = [
  { href: '#pourquoi', label: 'Pourquoi les Spins' },
  { href: '#equipe', label: 'Équipe' },
  { href: '#faq', label: 'FAQ' },
]

/**
 * Footer link sections
 */
export const footerSections: FooterSection[] = [
  {
    title: 'Navigation',
    links: navLinks,
  },
  {
    title: 'Légal',
    links: [
   { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' }
    ],
  },
]

/**
 * Social media links
 */
export const socialLinks: SocialLink[] = [
  { icon: 'youtube', href: '#', label: 'YouTube' },
  { icon: 'discord', href: '#', label: 'Discord' },
]
