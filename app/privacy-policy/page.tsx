import { generateMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import { EPage } from '@/lib/constant'
export const metadata: Metadata = generateMetadata({
  params: { pageType: EPage.PrivacyPolicy },
})

export default function PrivacyPolicy() {
  return (
    <main className="flex-1 bg-blue-50 py-8 px-4">
      <article className="max-w-4xl mx-auto bg-pink-50 rounded-3xl border-4 border-dashed border-pink-200 p-6 md:p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-400 mb-4 font-comic">
            Privacy Policy
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto font-comic">
            Last Updated: March 25, 2025
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto font-comic">
            Under Construction
          </p>
        </div>
      </article>
    </main>
  )
}
