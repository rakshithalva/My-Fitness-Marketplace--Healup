import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Healup</h1>
        <p className="text-xl mb-8">Your journey to a healthier life starts here</p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/blog">Read Our Blog</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/shop">Shop Products</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-8 mb-16">
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Health Blog</h2>
          <p className="mb-4">Discover the latest in health and wellness with our expert-written articles.</p>
          <Button asChild variant="link">
            <Link href="/blog">Explore Articles</Link>
          </Button>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Wellness Shop</h2>
          <p className="mb-4">Find premium health products to support your wellness journey.</p>
          <Button asChild variant="link">
            <Link href="/shop">Browse Products</Link>
          </Button>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Expert Consultations</h2>
          <p className="mb-4">Get personalized advice from our team of health and wellness professionals.</p>
          <Button asChild variant="link">
            <Link href="/consultancy">Book a Session</Link>
          </Button>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Marketplace</h2>
          <p className="mb-4">Explore our curated selection of health and wellness products from trusted brands.</p>
          <Button asChild variant="link">
            <Link href="/marketplace">Visit Marketplace</Link>
          </Button>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
        <p className="mb-8">Stay updated with the latest health tips, product releases, and exclusive offers.</p>
        <Button>Sign Up for Newsletter</Button>
      </section>
    </div>
  )
}