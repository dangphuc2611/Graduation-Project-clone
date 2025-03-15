import Link from "next/link"

export default function CategoryDropdown() {
  const categories = [
    { name: "Action", href: "/category/action" },
    { name: "Adventure", href: "/category/adventure" },
    { name: "RPG", href: "/category/rpg" },
    { name: "Strategy", href: "/category/strategy" },
    { name: "Horror", href: "/category/horror" },
  ]

  return (
    <div className="absolute top-full left-0 mt-1 w-40 bg-white border shadow-lg z-10">
      <ul>
        {categories.map((category) => (
          <li key={category.name} className="border-b border-gray-100 last:border-b-0">
            <Link href={category.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

