'use client'

import { Copy, Check } from 'lucide-react'
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
    name: 'Donate ♥',
    href: 'https://geodework.com/donate',
  },
]

const email = 'sayethereum@geodework.com'

const product = 'Local Ethereum Newsletter'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="bg-pink-300 p-6 sm:py-4 text-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-center mb-4">
          ✧･ﾟ Say Ethereum ✧･ﾟ A pronunciation guide ✧･ﾟ
        </p>

        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <p className="font-bold text-lg">Created by</p>
            <a
              href="https://geodework.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold hover:text-purple-100"
            >
              &copy; Geodework {new Date().getFullYear()}
            </a>
          </div>

          <div className="text-center mb-4">
            <p className="text-sm mb-2">Sign up for:</p>
            <a
              href="https://localethereum.beehiiv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm underline hover:text-purple-100"
            >
              {product}
            </a>
          </div>

          <div className="text-center mb-4">
            <p className="text-sm mb-2">Tell us how we can improve!</p>
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

          <div className="flex gap-4 justify-center mb-4">
            {sns.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-purple-100"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
