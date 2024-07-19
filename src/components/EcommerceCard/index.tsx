import { Card } from '@/locked/ui/card'

import { EcommerceCardContent } from './EcommerceCardContent'
import { withRenderCount } from '@/locked/useRenderCount'
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react'

export const SizeContext = createContext<{
  size: string
  setSize: Dispatch<SetStateAction<string>>
}>({ size: '0', setSize: () => {} })

function Size({ children }: PropsWithChildren) {
  const [size, setSize] = useState('7')

  return (
    <SizeContext.Provider value={{ size, setSize }}>
      {children}
    </SizeContext.Provider>
  )
}

function EcommerceCardBase() {
  return (
    <Size>
      <Card className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl">
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
        <EcommerceCardContent />
      </Card>
    </Size>
  )
}

export const EcommerceCard = withRenderCount(EcommerceCardBase)
