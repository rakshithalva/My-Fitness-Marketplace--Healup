import { useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Paypal, Smartphone } from 'lucide-react'

const paymentMethods = [
  { id: 'credit-card', name: 'Credit Card', icon: CreditCard },
  { id: 'paypal', name: 'PayPal', icon: Paypal },
  { id: 'upi', name: 'UPI', icon: Smartphone },
]

const shippingMethods = [
  { id: 'standard', name: 'Standard Shipping', price: 5.99, estimatedDays: '5-7 business days' },
  { id: 'express', name: 'Express Shipping', price: 14.99, estimatedDays: '2-3 business days' },
]

export default function CheckoutPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethods[0].id)
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(shippingMethods[0].id)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Process payment and create order
    router.push('/order-confirmation')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="John Doe" required />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Main St" required />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="NY" required />
                </div>
                <div>
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input id="zipCode" placeholder="10001" required />
                </div>
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Method</h2>
            <RadioGroup value={selectedShippingMethod} onValueChange={setSelectedShippingMethod}>
              {shippingMethods.map((method) => (
                <div key={method.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={method.id} id={method.id} />
                  <Label htmlFor={method.id}>
                    {method.name} - ${method.price.toFixed(2)} ({method.estimatedDays})
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Method</h2>
            <Tabs value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod}>
              <TabsList>
                {paymentMethods.map((method) => (
                  <TabsTrigger key={method.id} value={method.id}>
                    <method.icon className="mr-2 h-4 w-4" />
                    {method.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="credit-card">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input id="expiryDate" placeholder="MM/YY" required />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="paypal">
                <p>You will be redirected to PayPal to complete your payment.</p>
              </TabsContent>
              <TabsContent value="upi">
                <div>
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input id="upiId" placeholder="yourname@upi" required />
                </div>
              </TabsContent>
            </Tabs>

            <Button type="submit" className="mt-8 w-full">Place Order</Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          {/* Add order summary component here */}
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

function OrderSummary() {
  // Mock data for order summary
  const orderItems = [
    { id: 1, name: "Organic Multivitamin", price: 29.99, quantity: 2 },
    { id: 2, name: "Yoga Mat", price: 49.99, quantity: 1 },
  ]

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 5.99 // Standard shipping
  const total = subtotal + shipping

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Your Items</h3>
      {orderItems.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.name} x{item.quantity}</span>
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="border-t border-gray-300 my-4"></div>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold text-lg mt-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  )
}