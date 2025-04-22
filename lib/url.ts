import { isProduction } from "./platform"
import { DOMAIN } from "./constant"

export const getBaseUrl = () => {
  if (isProduction) {
    return `https://${DOMAIN}`
  }
  if (process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
  }
  return "http://localhost:3000"
}
