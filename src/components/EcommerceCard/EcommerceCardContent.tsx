import { withRenderCount } from '@/locked/useRenderCount'
import { EcommerceCardContentSizeSelect } from './EcommerceCardContentSizeSelect'
import { EcommerceCardContentPrice } from './EcommerceCardContentPrice'
import { Button } from '@/locked/ui/button.tsx'

function EcommerceCardContentBase() {
  return (
    <div className="p-4 bg-background">
      <h3 className="text-xl font-bold">Classic Leather Sneakers</h3>
      <p className="text-sm text-muted-foreground">
        Timeless style and unbeatable comfort.
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <EcommerceCardContentSizeSelect />
        </div>
        <EcommerceCardContentPrice />
      </div>
      <Button className="mt-4 w-full">Add to Cart</Button>
    </div>
  )
}

export const EcommerceCardContent = withRenderCount(EcommerceCardContentBase)
