'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { Option as TypeOption } from '../../inputs/TypeSelector'
import AboutEventForm from '../about-event'
import { PersonalizationForm } from '../personalization/personalization'
import { eventFormValidator, type EventFormValidatorType } from './validator'

export default function EventForm() {
  const form = useForm<EventFormValidatorType>({
    resolver: zodResolver(eventFormValidator),
    mode: 'onChange',
    defaultValues: {
      eventName: '',
      startDate: '',
      endDate: '',
      type: TypeOption.PRESENCIAL,
      location: '',
      description: '',
    },
  })

  async function handleFormSubmit(data: any) {
    console.log(data)
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-12"
      >
        <AboutEventForm />

        <PersonalizationForm />
      </form>
    </FormProvider>
  )
}
