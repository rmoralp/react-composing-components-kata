import { Card } from '@/locked/ui/card'

import { EcommerceCardContent } from './EcommerceCardContent'
import { withRenderCount } from '@/locked/useRenderCount'
import { EcommerceCardContentImage } from './EcommerceCardContentImage'

function EcommerceCardBase() {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl">
      <EcommerceCardContentImage />
      <EcommerceCardContent />
    </Card>
  )
}

export const EcommerceCard = withRenderCount(EcommerceCardBase)
