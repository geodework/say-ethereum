"use client"

import { useState, useEffect } from "react"

import { OptOut } from "@/lib/analytics"

const AnalyticsOptOut = () => {
  const [isOptedOut, setIsOptedOut] = useState(false)
  useEffect(() => {
    const matomoOptOut = OptOut.isOptedOut()
    if (matomoOptOut) {
      setIsOptedOut(true)
    }
  }, [])

  const handleCheckboxChange = () => {
    if (isOptedOut) {
      OptOut.removeOptedOut()
      setIsOptedOut(false)
    } else {
      OptOut.setOptedOut()
      setIsOptedOut(true)
    }
  }

  return (
    <div className="my-12 flex flex-col gap-4 bg-pink-100 p-8">
      <p>
        You can opt out of being tracked by Matomo Analytics and prevent the
        website from analyzing the actions you take using the website. This will
        prevent us from learning from your actions and creating a better website
        experience for you and other users.
      </p>

      <label className="flex gap-2">
        <input
          type="checkbox"
          checked={!isOptedOut}
          onChange={handleCheckboxChange}
        />
        {isOptedOut
          ? "You are opted out. Check this box to opt-in."
          : "You are not opted out. Uncheck this box to opt-out."}
      </label>
    </div>
  )
}

export default AnalyticsOptOut
