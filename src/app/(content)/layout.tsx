import type { PropsWithChildren } from 'react'

import brand from '@/assets/images/brand.png'
import { cn } from '@/common/utils'
import { baloo2 } from '@/lib/fonts'
import Image from 'next/image'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full max-h-[768] h-full bg-background2 rounded-xl p-5 grid grid-cols-[auto_820px] gap-5">
        <Image
          src={brand}
          alt="Brand"
          className="hidden md:block"
        />

        <div className="overflow-y-auto bg-background3 rounded-xl px-32.5 py-20">
          <h1 className={cn(baloo2.className, 'text-foreground2 text-[28px]')}>Crie seu convite</h1>
        </div>
      </div>
    </div>
  )
}
