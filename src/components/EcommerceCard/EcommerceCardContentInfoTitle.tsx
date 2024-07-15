import { withRenderCount } from '@/locked/useRenderCount'

function EcommerceCardContentInfoTitleBase() {
  return <h3 className="text-xl font-bold">Classic Leather Sneakers</h3>
}

export const EcommerceCardContentInfoTitle = withRenderCount(
  EcommerceCardContentInfoTitleBase
)
