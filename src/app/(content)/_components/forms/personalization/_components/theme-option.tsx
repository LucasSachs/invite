import type { StaticImport } from 'next/dist/shared/lib/get-img-props'

import Image from 'next/image'

interface ThemeOptionProps {
  title: string
  image: StaticImport
}

export function ThemeOption({
  image,
  title,
}: ThemeOptionProps) {
  return (
    <div className="p-1 border border-input bg-background4 rounded-md flex flex-col gap-2 hover:cursor-pointer">
      <Image
        src={image}
        alt={`${title} image`}
        className="size-full"
      />

      <p className="text-center mb-1 text-sm">
        {title}
      </p>
    </div>
  )
}
