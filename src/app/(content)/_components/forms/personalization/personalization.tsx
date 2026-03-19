'use client'

import babyImage from '@/assets/images/baby.png'
import birthdayImage from '@/assets/images/birthday.png'
import carnavalImage from '@/assets/images/carnaval.png'
import childImage from '@/assets/images/child.png'
import easterImage from '@/assets/images/easter.png'
import graduateImage from '@/assets/images/graduate.png'
import halloweenImage from '@/assets/images/halloween.png'
import kitchenImage from '@/assets/images/kitchen.png'
import marryImage from '@/assets/images/marry.png'
import otherImage from '@/assets/images/other.png'
import partyImage from '@/assets/images/party.png'
import santaImage from '@/assets/images/santa.png'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import FormTitle from '@/components/ui/form-title'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { PaintbrushVertical } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'
import { EventFormValidatorType } from '../event/validator'
import { ColorOption } from './_components/color-option'
import { ThemeOption } from './_components/theme-option'

export function PersonalizationForm() {
  const { control } = useFormContext<EventFormValidatorType>()

  return (
    <div className="flex flex-col">
      <FormTitle
        icon={PaintbrushVertical}
        text="Personalização"
        className="mb-6"
      />

      <div className="flex flex-col gap-4 mb-7">
        <Label>
          Cor principal
        </Label>

        <div className="grid gap-3 grid-cols-11">
          <ColorOption className="bg-ring" />
          <ColorOption className="bg-navy" />
          <ColorOption className="bg-purple" />
          <ColorOption className="bg-fuchsia" />
          <ColorOption className="bg-pink" />
          <ColorOption className="bg-destructive" />
          <ColorOption className="bg-orange" />
          <ColorOption className="bg-yellow" />
          <ColorOption className="bg-lime" />
          <ColorOption className="bg-green" />
          <ColorOption className="bg-cyan" />
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-7">
        <Label>
          Tema do evento
        </Label>

        <div className="grid gap-2 grid-cols-4 grid-rows-3">
          <ThemeOption
            image={birthdayImage}
            title="Aniversário"
          />

          <ThemeOption
            image={childImage}
            title="Infantil"
          />

          <ThemeOption
            image={graduateImage}
            title="Formatura"
          />

          <ThemeOption
            image={marryImage}
            title="Casamento"
          />

          <ThemeOption
            image={babyImage}
            title="Chá de bebê"
          />

          <ThemeOption
            image={kitchenImage}
            title="Chá de panela"
          />

          <ThemeOption
            image={carnavalImage}
            title="Carnaval"
          />

          <ThemeOption
            image={easterImage}
            title="Páscoa"
          />

          <ThemeOption
            image={partyImage}
            title="São João"
          />

          <ThemeOption
            image={halloweenImage}
            title="Halloween"
          />

          <ThemeOption
            image={santaImage}
            title="Natal"
          />

          <ThemeOption
            image={otherImage}
            title="Outro"
          />
        </div>
      </div>

      <FieldGroup>
        <div className="w-1/2">
          <Controller
            name="style"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="style">
                  Estilo
                </FieldLabel>

                <div className="flex items-center gap-3">
                  <Switch
                    id="style"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />

                  <Label htmlFor="style">
                    {field.value ? 'Claro' : 'Escuro'}
                  </Label>
                </div>

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

        <div>
          <Controller
            name="style"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="style">
                  Estilo
                </FieldLabel>

                <div className="flex items-center gap-3">
                  <Switch
                    id="style"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />

                  <Label htmlFor="style">
                    {field.value ? 'Claro' : 'Escuro'}
                  </Label>
                </div>

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>
      </FieldGroup>
    </div>
  )
}
