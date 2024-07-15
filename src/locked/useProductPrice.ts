import { sleep } from '@/lib/sleep'
import { useQuery } from '@tanstack/react-query'

function getRandomNumber(min: number, max: number) {
  return (Math.random() * (max - min) + min).toFixed(1)
}

export function useProductPrice({
  productId,
  size,
}: {
  productId: string
  size: string | number
}) {
  return useQuery({
    queryKey: ['product', productId, size],
    queryFn: async () => {
      await sleep(100)
      return getRandomNumber(10, 150)
    },
  })
}
