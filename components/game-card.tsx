import Image from "next/image"
import Link from "next/link"

interface Game {
  id: number
  title: string
  image: string
}

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/game/${game.id}`}>
      <div className="bg-gray-200 aspect-video w-full relative">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={game.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </Link>
  )
}

