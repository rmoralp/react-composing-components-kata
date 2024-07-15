import { ComponentType, useRef, useState } from 'react'

function useRenderCount() {
  const renderCountRef = useRef(0)

  renderCountRef.current += 1

  return renderCountRef.current
}

interface WithRenderCountProps {
  renderCount: number
}

export function withRenderCount<P extends object>(
  Component: ComponentType<P & WithRenderCountProps>
): ComponentType<P> {
  const componentName = Component.displayName || Component.name

  const WrappedComponent: React.FC<P> = (props: P) => {
    const [count, setCount] = useState(0)
    const renderCount = useRenderCount()

    return (
      <div className="relative">
        <div className="top-0 left-0 w-[35px] flex gap-2 text-[9px] border border-gray-400 bg-gray-200 leading-none justify-center">
          <p className="cc-count" data-testid="cc-count">
            {renderCount}
          </p>
          <button
            className="cc-increment px-1 hover:bg-blue-400 sr-only"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>

        <Component
          {...(props as P & WithRenderCountProps)}
          renderCount={renderCount}
          count={count}
        />
      </div>
    )
  }

  WrappedComponent.displayName = `WithRenderCount(${componentName || 'Component'})`

  return WrappedComponent
}
