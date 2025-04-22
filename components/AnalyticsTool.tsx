"use client"

import { useEffect } from "react"
import { push } from "@socialgouv/matomo-next"

const SITE_ID = "2"

const AnalyticsTool = () => {
  useEffect(() => {
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    push(["trackPageView"])
    push(["enableLinkTracking"])
    ;(() => {
      const u = "https://geodework.matomo.cloud/"
      push(["setTrackerUrl", `${u}matomo.php`])
      push(["setSiteId", SITE_ID])

      const d = document
      const g = d.createElement("script")
      const s = d.getElementsByTagName("script")[0]
      g.async = true
      g.src = "https://cdn.matomo.cloud/geodework.matomo.cloud/matomo.js"

      if (s && s.parentNode) {
        s.parentNode.insertBefore(g, s)
      } else {
        d.head.appendChild(g)
      }
    })()
  }, [])

  return <></>
}

export default AnalyticsTool
