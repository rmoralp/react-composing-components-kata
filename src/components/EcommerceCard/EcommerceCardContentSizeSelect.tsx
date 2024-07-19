import { withRenderCount } from '@/locked/useRenderCount'
import { useContext } from 'react'
import { SizeContext } from '@/components/EcommerceCard/index.tsx'

const options = [
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
]
function EcommerceCardContentSizeSelectBase() {
  const { size, setSize } = useContext(SizeContext)

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value)
  }

  return (
    <select onChange={onChange} role="select">
      {options.map((option) => (
        <option
          key={option.value}
          selected={size === option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

export const EcommerceCardContentSizeSelect = withRenderCount(
  EcommerceCardContentSizeSelectBase
)
