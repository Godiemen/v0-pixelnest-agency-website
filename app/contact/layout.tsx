import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Pixelnest | Web & App Development Agency in Durban',
  description: 'Get in touch with Pixelnest for web development, mobile apps, UI/UX design, and digital marketing services in Durban and across South Africa.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
