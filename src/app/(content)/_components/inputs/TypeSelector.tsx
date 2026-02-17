'use client'
import { cn } from '@/common/utils'
import { Button } from '@/components/ui/button'
import { Building2, Video, type LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import type { EventFormValidatorType } from '../forms/event/validator'

export enum Option {
  PRESENCIAL = 'Presencial',
  ONLINE = 'Online',
}

interface TypeSelectorProps {
  defaultValue?: Option
  onChange?: (value: Option) => void
}

interface OptionButtonProps {
  handleSelect: (option: Option) => void
  icon: LucideIcon
  option: Option
  selectedValue: Option
}

export function TypeSelector({ defaultValue = Option.PRESENCIAL, onChange }: TypeSelectorProps) {
  const [selected, setSelected] = useState<Option>(defaultValue)

  const formContext = useFormContext<EventFormValidatorType>()

  function handleSelect(value: Option) {
    setSelected(value)
    onChange?.(value)
    formContext.setValue('type', value)
  }

  return (
    <div className="relative h-12 flex items-center w-full p-1 rounded-md border border-input bg-input-background">
      <div className={cn('absolute top-1 bottom-1 left-1 w-[calc(50%-6px)] rounded-sm bg-background4 transition-transform duration-300 ease-in-out', selected === Option.ONLINE && 'translate-x-[calc(100%+4px)]')} />

      <OptionButton
        handleSelect={handleSelect}
        icon={Building2}
        option={Option.PRESENCIAL}
        selectedValue={selected}
      />

      <OptionButton
        handleSelect={handleSelect}
        icon={Video}
        option={Option.ONLINE}
        selectedValue={selected}
      />
    </div>
  )
}

function OptionButton({
  handleSelect,
  icon: Icon,
  option,
  selectedValue,
}: OptionButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      className={cn('relative flex-1 z-10 dark:hover:bg-transparent dark:hover:text-foreground', selectedValue === option && 'font-semibold')}
      onClick={() => handleSelect(option)}
    >
      <Icon
        size={16}
        className={cn(selectedValue === option && 'text-ring!')}
      />

      {option}
    </Button>
  )
}
