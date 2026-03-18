import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import FormTitle from '@/components/ui/form-title'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import { TypeSelector } from '../inputs/TypeSelector'
import { EventFormValidatorType } from './event/validator'

export default function AboutEventForm() {
  const { control } = useFormContext<EventFormValidatorType>()

  return (
    <div className="flex flex-col">
      <FormTitle
        icon={Calendar}
        text="Sobre o evento"
        className="mb-6"
      />

      <FieldGroup>
        <Controller
          name="eventName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="eventName">
                Título
              </FieldLabel>

              <Input
                {...field}
                id="eventName"
                aria-invalid={fieldState.invalid}
                placeholder="Nome do evento"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <div className="flex gap-4">
          <Controller
            name="startDate"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="startDate">
                  Início
                </FieldLabel>

                <PatternFormat
                  {...field}
                  id="startDate"
                  aria-invalid={fieldState.invalid}
                  placeholder="DD/MM/AAAA, --:--"
                  customInput={Input}
                  format="##/##/####, ##:##"
                  mask="_"
                />

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="endDate"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="endDate">
                  Fim
                </FieldLabel>

                <PatternFormat
                  {...field}
                  id="endDate"
                  aria-invalid={fieldState.invalid}
                  placeholder="DD/MM/AAAA, --:--"
                  customInput={Input}
                  format="##/##/####, ##:##"
                  mask="_"
                />

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

        <div className="flex gap-4">
          <Controller
            name="type"
            control={control}
            render={({ fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="type">
                  Tipo
                </FieldLabel>

                <TypeSelector />
              </Field>
            )}
          />

          <Controller
            name="location"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="location">
                  Local
                </FieldLabel>

                <Input
                  {...field}
                  id="location"
                  aria-invalid={fieldState.invalid}
                  placeholder="Link ou endereço"
                />

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

        <Controller
          name="description"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="description">
                Descrição
              </FieldLabel>

              <Textarea
                {...field}
                id="description"
                aria-invalid={fieldState.invalid}
                placeholder="Escreva sobre os detalhes do evento"
                className="min-h-34 resize-none"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </div>
  )
}
