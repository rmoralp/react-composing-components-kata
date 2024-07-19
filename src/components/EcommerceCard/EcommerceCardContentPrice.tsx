import { withRenderCount } from '@/locked/useRenderCount'
import { useProductPrice } from '@/locked/useProductPrice.ts'
import { useContext } from 'react'
import { SizeContext } from '@/components/EcommerceCard/index.tsx'

function EcommerceCardContentPriceBase() {
  const { size } = useContext(SizeContext)

  const { data: price } = useProductPrice({
    productId: 'product-id',
    size,
  })

  return price ? (
    <div className="text-2xl font-bold" data-testid="cc-price">
      {price} €
    </div>
  ) : null
}

export const EcommerceCardContentPrice = withRenderCount(
  EcommerceCardContentPriceBase
)
