import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, Heart } from 'lucide-react'

// Mock data for products
const products = [
  {
    id: "1",
    name: "Organic Multivitamin",
    category: "Supplements",
    price: 29.99,
    rating: 4.5,
    description: "Our Organic Multivitamin is a comprehensive blend of essential vitamins and minerals derived from organic whole foods. It's designed to support overall health and well-being, boost immunity, and fill nutritional gaps in your diet.",
    features: [
      "Made with organic ingredients",
      "Contains 20 essential vitamins and minerals",
      "Supports immune system health",
      "Promotes energy and vitality",
      "Free from artificial additives and preservatives"
    ],
    usage: "Take 2 capsules daily with a meal or as directed by your healthcare professional.",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
    ],
    reviews: [
      { id: 1, user: "John D.", rating: 5, comment: "Great product! I feel more energetic since I started taking these." },
      { id: 2, user: "Sarah M.", rating: 4, comment: "Good quality multivitamin. Wish the capsules were a bit smaller." },
      { id: 3, user: "Mike R.", rating: 5, comment: "Excellent supplement. I've noticed an improvement in my overall health." }
    ]
  },
  // Add more product entries here...
]

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={product.images[0]} alt={product.name} className="w-full h-96 object-cover rounded-lg mb-4" />
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <img key={index} src={image} alt={`${product.name} ${index + 2}`} className="w-full h-32 object-cover rounded-lg" />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <div className="flex items-center mb-4">
            <Star className="h-5 w-5 fill-current text-yellow-400" />
            <span className="ml-1 text-lg">{product.rating}</span>
            <span className="ml-2 text-sm text-muted-foreground">({product.reviews.length} reviews)</span>
          </div>
          <p className="mb-6">{product.description}</p>
          <div className="flex space-x-4 mb-8">
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button variant="outline">
              <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
            </Button>
          </div>
          <Tabs defaultValue="features">
            <TabsList>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <ul className="list-disc pl-5">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="usage">
              <p>{product.usage}</p>
            </TabsContent>
            <TabsContent value="reviews">
              {product.reviews.map((review) => (
                <Card key={review.id} className="mb-4">
                  <CardContent className="pt-4">
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span className="ml-1">{review.rating}</span>
                      <span className="ml-2 font-semibold">{review.user}</span>
                    </div>
                    <p>{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}