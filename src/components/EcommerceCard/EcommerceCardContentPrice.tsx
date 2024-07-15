import { withRenderCount } from '@/locked/useRenderCount'

function EcommerceCardContentPriceBase({ price }: { price?: string }) {
  return price ? (
    <div className="text-2xl font-bold" data-testid="cc-price">
      {price} €
    </div>
  ) : null
}

export const EcommerceCardContentPrice = withRenderCount(
  EcommerceCardContentPriceBase
)
