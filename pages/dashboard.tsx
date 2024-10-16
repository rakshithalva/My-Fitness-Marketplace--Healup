import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Welcome to your dashboard, {session.user.name}!</h1>
      <p className="mt-4">This is where you'll see personalized content and manage your account.</p>
    </div>
  )
}