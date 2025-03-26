import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Activity, Brain, Code, Coffee, Dumbbell, Heart, Timer } from "lucide-react"

export function FloatingIcons({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  const icons = [
    <Dumbbell key="dumbbell" className="w-8 h-8 text-green-400/50" />,
    <Activity key="activity" className="w-8 h-8 text-blue-400/50" />,
    <Heart key="heart" className="w-8 h-8 text-red-400/50" />,
    <Code key="code" className="w-8 h-8 text-yellow-400/50" />,
    <Timer key="timer" className="w-8 h-8 text-purple-400/50" />,
    <Coffee key="coffee" className="w-8 h-8 text-orange-400/50" />,
    <Brain key="brain" className="w-8 h-8 text-pink-400/50" />,
  ]

  useEffect(() => {
    // Update dimensions only on client side
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full h-full">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-16 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            {icons[i % icons.length]}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

