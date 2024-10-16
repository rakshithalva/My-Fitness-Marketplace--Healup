import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Star } from 'lucide-react'

const categories = [
  "All Products",
  "Supplements",
  "Home Fresheners",
  "Yoga Accessories",
  "Fitness Gear",
  "Mental Health Aids",
  "Wellness Gadgets"
]

const products = [
  {
    id: 1,
    name: "Organic Multivitamin",
    category: "Supplements",
    price: 29.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    name: "Lavender Essential Oil Diffuser",
    category: "Home Fresheners",
    price: 39.99,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    name: "Premium Yoga Mat",
    category: "Yoga Accessories",
    price: 49.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  // Add more product entries here...
]

export default function MarketplacePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Healup Marketplace</h1>
      
      <div className="flex items-center mb-8">
        <Input 
          type="text" 
          placeholder="Search products..." 
          className="max-w-sm mr-4"
        />
        <Button>
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>

      <Tabs defaultValue="All Products" className="mb-8">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid md:grid-cols-3 gap-8">
              {products
                .filter(product => category === "All Products" || product.category === category)
                .map((product) => (
                  <Card key={product.id}>
                    <CardHeader>
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                      <CardTitle>{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                      <p className="font-bold">${product.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span className="ml-1">{product.rating}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/marketplace/${product.id}`}>View Product</Link>
                      </Button>
                    </CardFooter>
                  </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}