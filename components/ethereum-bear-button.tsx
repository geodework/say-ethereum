"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EthereumBearButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [rotation, setRotation] = useState(0)

  // Animate globe rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.1) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    setIsClicked(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
    // Reset the animation after 2 seconds
    setTimeout(() => setIsClicked(false), 3000)
  }

  return (
    <div className="fixed bottom-12 right-2 md:right-6 z-50 scale-90 md:scale-100">
      {/* Main button with brown bear and pink border */}
      <motion.button
        className="bg-gradient-to-b from-blue-100 to-blue-50 rounded-full p-3 shadow-lg border-4 border-pink-300 relative overflow-visible"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        aria-label="Scroll to top"
      >
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Globe background */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-200 to-blue-400"
              animate={{ rotate: rotation }}
              transition={{ type: "linear", duration: 0.05 }}
            >
              {/* Globe continents */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 15C24 12 30 12 32 15C34 18 40 18 44 15C48 12 50 18 48 21C46 24 46 30 48 33C50 36 48 42 44 42C40 42 36 45 36 48C36 51 30 51 28 48C26 45 20 45 16 48C12 51 10 45 12 42C14 39 14 33 12 30C10 27 12 21 16 21C20 21 24 18 20 15Z"
                  fill="#D6F3FF"
                  fillOpacity="0.6"
                />
              </svg>
            </motion.div>

            {/* Animated waves */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-8"
              animate={{
                x: [0, -10, 0, 10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 64 16"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8C8 4 16 12 24 8C32 4 40 12 48 8C56 4 64 12 72 8V16H0V8Z"
                  fill="#A0E4FF"
                  fillOpacity="0.6"
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-6"
              animate={{
                x: [0, 10, 0, -10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                ease: "easeInOut",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 64 12"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6C8 3 16 9 24 6C32 3 40 9 48 6C56 3 64 9 72 6V12H0V6Z"
                  fill="#D6F3FF"
                  fillOpacity="0.8"
                />
              </svg>
            </motion.div>
          </div>

          {/* Bear */}
          <div className="absolute inset-0">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Bear body - brown colors */}
              <ellipse
                cx="32"
                cy="48"
                rx="16"
                ry="12"
                fill="url(#bearBodyGradient)"
              />
              {/* Bear head */}
              <circle cx="32" cy="28" r="20" fill="url(#bearHeadGradient)" />
              {/* Bear ears */}
              <circle cx="18" cy="16" r="8" fill="url(#bearEarGradient)" />
              <circle cx="46" cy="16" r="8" fill="url(#bearEarGradient)" />
              {/* Inner ears */}
              <circle cx="18" cy="16" r="4" fill="#F8E0C0" />
              <circle cx="46" cy="16" r="4" fill="#F8E0C0" />
              {/* Bear face - no mouth */}
              <circle cx="26" cy="26" r="2.5" fill="#5D4037" /> {/* Left eye */}
              <circle cx="38" cy="26" r="2.5" fill="#5D4037" />{" "}
              {/* Right eye */}
              <ellipse cx="32" cy="32" rx="3" ry="2" fill="#5D4037" />{" "}
              {/* Nose */}
              {/* Rosy cheeks - kawaii style */}
              <circle cx="24" cy="30" r="3" fill="#FF9EB1" fillOpacity="0.3" />
              <circle cx="40" cy="30" r="3" fill="#FF9EB1" fillOpacity="0.3" />
              {/* Bear paws */}
              <circle cx="20" cy="52" r="6" fill="url(#bearPawGradient)" />{" "}
              {/* Left paw */}
              <circle cx="44" cy="52" r="6" fill="url(#bearPawGradient)" />{" "}
              {/* Right paw */}
              <circle cx="20" cy="54" r="2" fill="#A1887F" />{" "}
              {/* Left paw pad */}
              <circle cx="44" cy="54" r="2" fill="#A1887F" />{" "}
              {/* Right paw pad */}
              {/* Gradients for brown coloring */}
              <defs>
                <radialGradient
                  id="bearHeadGradient"
                  cx="0.5"
                  cy="0.5"
                  r="0.5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0%" stopColor="#D7B98E" />
                  <stop offset="100%" stopColor="#C19A6B" />
                </radialGradient>
                <radialGradient
                  id="bearBodyGradient"
                  cx="0.5"
                  cy="0.3"
                  r="0.6"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0%" stopColor="#D7B98E" />
                  <stop offset="100%" stopColor="#C19A6B" />
                </radialGradient>
                <radialGradient
                  id="bearEarGradient"
                  cx="0.5"
                  cy="0.5"
                  r="0.5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0%" stopColor="#D7B98E" />
                  <stop offset="100%" stopColor="#C19A6B" />
                </radialGradient>
                <radialGradient
                  id="bearPawGradient"
                  cx="0.5"
                  cy="0.5"
                  r="0.5"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0%" stopColor="#D7B98E" />
                  <stop offset="100%" stopColor="#C19A6B" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Ethereum symbol in bear's hands - more prominent grey */}
          <motion.div
            className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            animate={{
              y: isClicked ? [-5, 0, -5] : isHovered ? -2 : 0,
              scale: isClicked ? [1, 1.2, 1] : isHovered ? 1.1 : 1,
              rotate: isClicked ? [-5, 5, -5, 5, 0] : 0,
            }}
            transition={{
              duration: isClicked ? 0.5 : 0.3,
              ease: "easeInOut",
            }}
          >
            {/* Glow effect for Ethereum */}
            <div className="absolute inset-0 bg-gray-400 rounded-full filter blur-lg opacity-50 scale-150"></div>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"
                fill="url(#ethGradient)"
              />
              <defs>
                <linearGradient
                  id="ethGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0%" stopColor="#9E9E9E" />
                  <stop offset="100%" stopColor="#616161" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
        {/* Scroll to Top text with arrow */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
          <span
            className="text-xs font-medium text-pink-600 whitespace-nowrap tracking-wide"
            style={{
              textShadow: "1px 1px 0 #fff",
              fontFamily: "\"Comic Sans MS\", cursive",
            }}
          >
            ｡･ﾟTo Top ⤴ﾟ･｡
          </span>
        </div>
      </motion.button>

      {/* Speech bubble that appears when clicked */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className="absolute bottom-full right-0 mb-2 bg-gradient-to-b from-white to-blue-50 rounded-xl p-3 shadow-lg border-2 border-pink-300"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <p className="text-sm font-medium text-gray-700 whitespace-normal max-w-[200px]">
                We pursue the geographic decentralization of Ethereum(≧◡≦)
              </p>
              <div className="absolute -bottom-5 right-4 w-4 h-4 bg-blue-50 border-r-2 border-b-2 border-pink-300 transform rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sparkles that appear when hovered - matching the image */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Top right sparkle */}
            <motion.div
              className="absolute -top-2 -right-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: [0.8, 1.2, 0.8],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z"
                  fill="#FFD700"
                />
              </svg>
            </motion.div>

            {/* Bottom right sparkle */}
            <motion.div
              className="absolute bottom-0 -right-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: [0.7, 1, 0.7],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 1.8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.3,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z"
                  fill="#FFD700"
                />
              </svg>
            </motion.div>

            {/* Left sparkle */}
            <motion.div
              className="absolute top-1/2 -left-4 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: [0.9, 1.1, 0.9],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0L11.25 6.75L18 9L11.25 11.25L9 18L6.75 11.25L0 9L6.75 6.75L9 0Z"
                  fill="#FFD700"
                />
              </svg>
            </motion.div>

            {/* Bottom left sparkle */}
            <motion.div
              className="absolute -bottom-2 -left-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: [0.8, 1.1, 0.8],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 1.7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.2,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L8.75 5.25L14 7L8.75 8.75L7 14L5.25 8.75L0 7L5.25 5.25L7 0Z"
                  fill="#FFD700"
                />
              </svg>
            </motion.div>

            {/* Dotted line connecting sparkles */}
            <svg
              className="absolute inset-0 w-full h-full"
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: "scale(1.4)",
                opacity: 0.6,
                pointerEvents: "none",
              }}
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#FFD700"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
              />
            </svg>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
