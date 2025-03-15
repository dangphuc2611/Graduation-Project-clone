import GameCard from "@/components/game-card"
import FeaturedSection from "@/components/featured-section"
import RecommendedCarousel from "@/components/recommended-carousel"

export default function Home() {
  // Placeholder game data
  const featuredGames = [
    { id: 1, title: "Game 1", image: "/placeholder.svg?height=100&width=150" },
    { id: 2, title: "Game 2", image: "/placeholder.svg?height=100&width=150" },
    { id: 3, title: "Game 3", image: "/placeholder.svg?height=100&width=150" },
    { id: 4, title: "Game 4", image: "/placeholder.svg?height=100&width=150" },
  ]

  const recommendedGames = [
    { id: 1, title: "Recommended Game 1", image: "/placeholder.svg?height=150&width=240" },
    { id: 2, title: "Recommended Game 2", image: "/placeholder.svg?height=150&width=240" },
    { id: 3, title: "Recommended Game 3", image: "/placeholder.svg?height=150&width=240" },
  ]

  const newGames = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `New Game ${i + 1}`,
    image: "/placeholder.svg?height=120&width=200",
  }))

  const topGames = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Top Game ${i + 1}`,
    image: "/placeholder.svg?height=120&width=200",
  }))

  const upcomingGames = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Upcoming Game ${i + 1}`,
    image: "/placeholder.svg?height=120&width=200",
  }))

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Featured section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="md:col-span-3">
            <FeaturedSection />
          </div>
          <div className="md:col-span-1">
            <div className="bg-blue-500 p-4 h-full">
              <h2 className="text-white text-xl font-bold mb-4">TITLE</h2>
              <div className="grid grid-cols-2 gap-2">
                {featuredGames.map((game) => (
                  <div key={game.id} className="bg-gray-200 aspect-video"></div>
                ))}
              </div>
              <h2 className="text-white text-xl font-bold mt-4">TITLE</h2>
            </div>
          </div>
        </div>

        {/* Recommended Games Carousel */}
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">RECOMMENDED GAMES YOU SHOULD PLAY</h2>
          <RecommendedCarousel games={recommendedGames} />
        </div>

        {/* Game Categories */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="border-b-2 border-gray-300 pb-2">
            <h2 className="text-sm font-bold">NEW & TRENDING</h2>
          </div>
          <div className="border-b-2 border-gray-300 pb-2">
            <h2 className="text-sm font-bold">TOP SELLERS</h2>
          </div>
          <div className="border-b-2 border-gray-300 pb-2">
            <h2 className="text-sm font-bold">POPULAR UPCOMING</h2>
          </div>
        </div>

        {/* Game Grids */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* New & Trending */}
          <div>
            <div className="grid grid-cols-1 gap-4">
              {newGames.slice(0, 4).map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>

          {/* Top Sellers */}
          <div>
            <div className="grid grid-cols-1 gap-4">
              {topGames.slice(0, 4).map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>

          {/* Popular Upcoming */}
          <div>
            <div className="grid grid-cols-1 gap-4">
              {upcomingGames.slice(0, 4).map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-8 text-center">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold">FOOTER</h2>
        </div>
      </footer>
    </div>
  )
}

