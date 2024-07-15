import { Button } from '@/locked/ui/button'
import { withRenderCount } from '@/locked/useRenderCount'

function EcommerceCardContentButtonBase() {
  return <Button className="mt-4 w-full">Add to Cart</Button>
}

export const EcommerceCardContentButton = withRenderCount(
  EcommerceCardContentButtonBase
)
