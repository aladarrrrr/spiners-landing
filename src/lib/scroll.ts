/**
 * Smoothly scrolls to a section by its href selector
 * @param href - The selector for the element to scroll to (e.g., '#section-id')
 */
export function scrollToSection(href: string): void {
  if (!href.startsWith('#')) return

  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
