import { sleep } from '@/lib/sleep'
import { Button } from '@/locked/ui/button'

const handleOnClick = async () => {
  const buttons = document.querySelectorAll(
    '.cc-increment'
  ) as NodeListOf<HTMLButtonElement>

  for (const button of buttons) {
    button.click()
    await sleep(10)
  }
}

export function IncrementButton() {
  return (
    <Button className="absolute top-1 right-1 z-50" onClick={handleOnClick}>
      Increment
    </Button>
  )
}
