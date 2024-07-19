import { withRenderCount } from '@/locked/useRenderCount'
import { EcommerceCardContentSizeSelect } from './EcommerceCardContentSizeSelect'
import { EcommerceCardContentPrice } from './EcommerceCardContentPrice'
import { useProductPrice } from '@/locked/useProductPrice'
import { useState } from 'react'

function EcommerceCardContentBase() {
  const [size, setSize] = useState('7')
  const { data: price } = useProductPrice({
    productId: 'product-id',
    size,
  })

  const onSizeChange = (value: string) => {
    setSize(value)
  }
  return (
    <div className="mt-4 flex items-center justify-between">
      <div>
        <EcommerceCardContentSizeSelect
          size={size}
          onValueChange={onSizeChange}
        />
      </div>
      <EcommerceCardContentPrice price={price} />
    </div>
  )
}

export const EcommerceCardContent = withRenderCount(EcommerceCardContentBase)
