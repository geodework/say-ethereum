export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_DOMAIN) {
    // Production domain (if set)
    return `https://${process.env.NEXT_PUBLIC_DOMAIN}`
  }
  if (process.env.VERCEL_URL) {
    // Vercel deployment (preview or production)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  // Development
  return "http://localhost:3000"
}
