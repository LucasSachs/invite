import { cn } from '@/common/utils'
import type { HTMLAttributes } from 'react'

type ColorOptionProps = HTMLAttributes<HTMLDivElement>

export function ColorOption({ className }: ColorOptionProps) {
  return (
    <div className="p-1.5 bg-background4 rounded-full size-10 flex items-center justify-center hover:cursor-pointer">
      <div className={cn('rounded-full size-full', className)} />
    </div>
  )
}
