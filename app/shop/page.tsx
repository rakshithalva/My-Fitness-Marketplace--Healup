import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Organic Multivitamin",
    description: "A comprehensive blend of essential vitamins and minerals for overall health.",
    price: 29.99,
    category: "Supplements",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    name: "Aromatherapy Diffuser",
    description: "Create a calming atmosphere with this sleek essential oil diffuser.",
    price: 39.99,
    category: "Home Wellness",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    name: "Yoga Mat",
    description: "High-quality, non-slip yoga mat for your daily practice.",
    price: 49.99,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
]

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Wellness Shop</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <p>{product.description}</p>
              <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/shop/${product.id}`}>View Product</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}