import { withRenderCount } from '@/locked/useRenderCount'

function EcommerceCardContentInfoBase() {
  return (
    <>
      <h3 className="text-xl font-bold">Classic Leather Sneakers</h3>
      <p className="text-sm text-muted-foreground">
        Timeless style and unbeatable comfort.
      </p>
    </>
  )
}

export const EcommerceCardContentInfo = withRenderCount(
  EcommerceCardContentInfoBase
)
