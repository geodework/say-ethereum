'use client'

import { SITE_NAME } from '@/lib/constant'
import { Copy, Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const sns = [
  {
    name: 'GitHub',
    href: 'https://github.com/geodework',
  },
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com/geodework',
  },
  {
    name: 'Donate',
    href: 'https://geodework.com/donate',
    isDonate: true,
  },
]

const email = 'sayethereum@geodework.com'

const product = 'Local Ethereum Newsletter'

const internalLinks = [
  {
    name: 'Terms of Use',
    href: '/terms-of-use',
  },
  {
    name: 'Privacy Policy',
    href: '/privacy-policy',
  },
]

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="bg-pink-300 p-6 sm:py-8 text-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-center mb-6">
          `✧･ﾟ {SITE_NAME} ✧･ﾟ A pronunciation guide ✧･ﾟ`
        </p>

        <div className="flex flex-col items-center gap-4">
          {/* Section 1: Newsletter & Feedback */}
          <div className="text-center p-3 rounded-lg w-full max-w-md">
            <p className="text-sm mb-2">Sign up for:</p>
            <a
              href="https://localethereum.beehiiv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base font-medium border-b border-dotted border-purple-200 pb-1 hover:border-purple-300 hover:text-purple-100 transition-colors duration-300"
            >
              ✉️ {product} ✉️
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm mb-1">Tell us how we can improve!</p>
            <button
              onClick={handleCopy}
              className="text-sm hover:text-purple-100 flex items-center gap-2 mx-auto"
            >
              {email}
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Section 2: Social Links */}
          <div className="flex gap-4 justify-center">
            {sns.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-purple-100"
              >
                {s.name}
                {s.isDonate && <span className="text-purple-400 ml-1">♥</span>}
              </a>
            ))}
          </div>

          <hr className="w-1/2 border-purple-200 my-4" />

          <div className="flex gap-4 justify-center text-xs">
            {internalLinks.map((l) => (
              <Link
                href={l.href}
                className="hover:text-purple-100"
                key={l.name}
              >
                {l.name}
              </Link>
            ))}
          </div>

          <hr className="w-1/2 border-purple-200 my-4" />

          <div className="text-center">
            <a
              href="https://geodework.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-purple-100"
            >
              &copy; Geodework {new Date().getFullYear()}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
