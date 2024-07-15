import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { IncrementButton } from '@/locked/IncrementButton'
import { EcommerceCard } from '@/components/EcommerceCard'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <EcommerceCard />,
  },
])
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative">
        <IncrementButton />
        <div className="py-[50px] max-w-screen-sm m-auto px-2">
          <RouterProvider router={router} />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
