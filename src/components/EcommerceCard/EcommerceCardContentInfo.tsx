import { withRenderCount } from '@/locked/useRenderCount'
import { EcommerceCardContentInfoDescription } from './EcommerceCardContentInfoDescription'
import { EcommerceCardContentInfoTitle } from './EcommerceCardContentInfoTitle'

function EcommerceCardContentInfoBase() {
  return (
    <>
      <EcommerceCardContentInfoTitle />
      <EcommerceCardContentInfoDescription />
    </>
  )
}

export const EcommerceCardContentInfo = withRenderCount(
  EcommerceCardContentInfoBase
)
