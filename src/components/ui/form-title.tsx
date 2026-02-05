import { cn } from '@/common/utils'
import { baloo2 } from '@/lib/fonts'
import type { LucideIcon } from 'lucide-react'

interface FormTitleProps extends React.ComponentProps<'div'> {
  icon: LucideIcon
  text: string
}

export default function FormTitle({
  icon: Icon,
  text,
  className,
  ...props
}: FormTitleProps) {
  return (
    <div
      className={cn('flex items-center gap-3', className)}
      {...props}
    >
      <Icon
        className="size-6 text-muted-foreground"
        strokeWidth={1.5}
      />

      <p className={cn(baloo2.className, 'text-lg text-foreground2')}>{text}</p>
    </div>
  )
}
