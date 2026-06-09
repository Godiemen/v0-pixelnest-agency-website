import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Pixelnest Web & App Development Agency',
  description: 'View our recent web development, mobile app, and UI/UX design projects for businesses in Durban and across South Africa.',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
