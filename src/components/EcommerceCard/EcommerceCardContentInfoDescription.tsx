import { withRenderCount } from '@/locked/useRenderCount'

function EcommerceCardContentInfoDescriptionBase() {
  return (
    <p className="text-sm text-muted-foreground">
      Timeless style and unbeatable comfort.
    </p>
  )
}

export const EcommerceCardContentInfoDescription = withRenderCount(
  EcommerceCardContentInfoDescriptionBase
)
