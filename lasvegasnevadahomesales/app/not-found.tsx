import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Las Vegas Nevada Home Sales',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for could not be found. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Or try one of these popular pages:</p>
            <div className="mt-2 space-x-4">
              <Link href="/properties" className="text-blue-600 hover:underline">
                Properties
              </Link>
              <Link href="/strategies" className="text-blue-600 hover:underline">
                Strategies
              </Link>
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 