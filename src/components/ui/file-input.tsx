'use client'

import { EventFormValidatorType } from '@/app/(content)/_components/forms/event/validator'
import { Upload } from 'lucide-react'
import { type ChangeEvent } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { Button } from './button'
import { FieldLabel } from './field'
import { Input } from './input'

export function FileInput() {
  const { setValue } = useFormContext<EventFormValidatorType>()

  const formFile = useWatch({ name: 'coverPhoto' })

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]

    if (file) setValue('coverPhoto', file)
  }

  return (
    <div className="flex gap-2 items-center">
      <Button
        asChild
        className="bg-background4 h-10"
      >
        <FieldLabel
          htmlFor="coverPhoto"
          className="flex gap-2"
        >
          <Upload
            className="text-ring size-4"
            strokeWidth={1.5}
          />

          <p className="text-foreground2 font-semibold">Selecionar</p>
        </FieldLabel>
      </Button>

      <span className="text-muted-foreground">
        {formFile?.name ?? 'Nenhum arquivo selecionado'}
      </span>

      <Input
        id="coverPhoto"
        type="file"
        hidden
        onChange={handleFileChange}
        accept="image/*"
      />
    </div>
  )
}
