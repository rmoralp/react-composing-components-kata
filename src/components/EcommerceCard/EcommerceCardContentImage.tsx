import { withRenderCount } from '@/locked/useRenderCount'

function EcommerceCardContentImageBase() {
  return (
    <div className="relative">
      <img
        src="/placeholder.svg"
        alt="Shoe Image"
        width={500}
        height={500}
        className="h-64 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}

export const EcommerceCardContentImage = withRenderCount(
  EcommerceCardContentImageBase
)
