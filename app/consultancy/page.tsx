import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: 1,
    name: "Personal Training",
    description: "One-on-one fitness coaching tailored to your goals and fitness level.",
    price: 75,
    duration: "60 minutes",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    name: "Nutrition Consultation",
    description: "Personalized dietary advice to help you achieve optimal health through nutrition.",
    price: 90,
    duration: "45 minutes",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    name: "Mental Health Therapy",
    description: "Professional counseling to support your mental and emotional well-being.",
    price: 120,
    duration: "50 minutes",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
]

export default function ConsultancyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Expert Consultations</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded-t-lg" />
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
              <p className="font-bold mt-2">${service.price} / {service.duration}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/consultancy/${service.id}`}>Book Session</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}