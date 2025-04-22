import { ANALYTICS_OPT_OUT_KEY } from "./constant"
import { isProduction } from "./platform"

export class OptOut {
  static isOptedOut() {
    return localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === "true"
  }

  static setOptedOut() {
    localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "true")
  }

  static removeOptedOut() {
    localStorage.removeItem(ANALYTICS_OPT_OUT_KEY)
  }
}

export function isAnalyticsOptedOut() {
  return !isProduction || OptOut.isOptedOut()
}
