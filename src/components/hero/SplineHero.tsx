'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineHero() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Spotlight className="absolute -top-40 left-0 opacity-40" fill="white" />
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  )
}
