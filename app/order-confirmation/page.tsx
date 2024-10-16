import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function OrderConfirmationPage() {
  // Mock order data
  const orderNumber = "HU12345"
  const orderDate = new Date().toLocaleDateString()
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-xl mb-8">Your order has been successfully placed and is being processed.</p>
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
          <p><strong>Order Number:</strong> {orderNumber}</p>
          <p><strong>Order Date:</strong> {orderDate}</p>
          <p><strong>Estimated Delivery:</strong> {estimatedDelivery}</p>
        </div>
        <p className="mb-8">
          We've sent a confirmation email to your registered email address with all the order details.
          You can also track your order status in your account dashboard.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/account/orders">View Order</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}