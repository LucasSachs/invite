'use client'

import { cn } from '@/common/utils'
import { Switch as SwitchPrimitive } from 'radix-ui'

export function Switch({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & { size?: 'sm' | 'default' }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn('hover:cursor-pointer peer group/switch inline-flex shrink-0 items-center rounded-full border border-input shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-8 data-[size=default]:w-16 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-ring data-[state=unchecked]:bg-input-background', className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn('mx-1 pointer-events-none block rounded-full data-[state=checked]:bg-white bg-input ring-0 transition-transform group-data-[size=default]/switch:size-6 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%+4.5px)] data-[state=unchecked]:translate-x-0')}
      />
    </SwitchPrimitive.Root>
  )
}
