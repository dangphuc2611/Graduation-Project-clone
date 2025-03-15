"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Game {
  id: number
  title: string
  image: string
}

interface RecommendedCarouselProps {
  games: Game[]
}

export default function RecommendedCarousel({ games }: RecommendedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const totalSlides = Math.ceil(games.length / 2)

  const goToSlide = (index: number) => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides
    goToSlide(newIndex)
  }

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % totalSlides
    goToSlide(newIndex)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 flex gap-4">
              {games.slice(slideIndex * 2, slideIndex * 2 + 2).map((game) => (
                <div key={game.id} className="w-1/2">
                  <div className="bg-gray-200 aspect-video relative">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full"
        onClick={goToNextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

