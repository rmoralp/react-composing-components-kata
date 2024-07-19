import { Card } from '@/locked/ui/card'

import { EcommerceCardContent } from './EcommerceCardContent'
import { withRenderCount } from '@/locked/useRenderCount'
import { EcommerceCardContentImage } from './EcommerceCardContentImage'
import { EcommerceCardContentButton } from '@/components/EcommerceCard/EcommerceCardContentButton.tsx'

function EcommerceCardBase() {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl">
      <EcommerceCardContentImage />
      <div className="p-4 bg-background">
        <h3 className="text-xl font-bold">Classic Leather Sneakers</h3>
        <p className="text-sm text-muted-foreground">
          Timeless style and unbeatable comfort.
        </p>
        <EcommerceCardContent />
        <EcommerceCardContentButton />
      </div>
    </Card>
  )
}

export const EcommerceCard = withRenderCount(EcommerceCardBase)
