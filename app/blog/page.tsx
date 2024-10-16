import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "10 Easy Ways to Boost Your Immune System",
    excerpt: "Discover simple lifestyle changes that can significantly improve your body's natural defenses.",
    author: "Dr. Jane Smith",
    date: "2023-05-15",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "The Benefits of Meditation for Mental Health",
    excerpt: "Learn how regular meditation practice can reduce stress, anxiety, and improve overall mental well-being.",
    author: "Mark Johnson",
    date: "2023-05-10",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Nutrition Tips for a Balanced Diet",
    excerpt: "Explore the essential components of a healthy diet and how to incorporate them into your daily meals.",
    author: "Sarah Lee",
    date: "2023-05-05",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Health & Wellness Blog</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{post.category} | {post.date}</p>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link">
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}