import { redirect } from 'next/navigation'

// Handle redirects for common 404 issues
export function handleRedirects(pathname: string) {
  // Remove UTM parameters and redirect to clean URL
  if (pathname.includes('?utm_')) {
    const cleanPath = pathname.split('?')[0]
    redirect(cleanPath)
  }
  
  // Handle /home redirects
  if (pathname === '/home' || pathname === '/home/') {
    redirect('/')
  }
  
  // Handle www redirects (should be handled at domain level, but adding as backup)
  if (pathname.startsWith('/www.')) {
    redirect(pathname.replace('/www.', '/'))
  }
}

export default handleRedirects
