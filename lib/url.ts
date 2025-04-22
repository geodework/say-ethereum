const DOMAIN = "sayethereum.fun"

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_TARGET_ENV === "production") {
    return `https://${DOMAIN}`
  }
  if (process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
  }
  return "http://localhost:3000"
}
