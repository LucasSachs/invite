import { parseDate } from '@/common/helpers/date/parse-date'
import { z } from '@/config/zod'
import { isAfter } from 'date-fns'

export const eventFormValidator = z.object({
  eventName: z
    .string()
    .min(3)
    .max(255),

  startDate: z
    .string(),

  endDate: z
    .string(),

  // TODO > Get better validation here
  type: z
    .string(),

  location: z
    .string(),

  description: z
    .string(),

  style: z
    .boolean(),
})

  .refine(({ startDate: startDateAsString }) => {
    const startDateAsDate = parseDate(startDateAsString)

    if (!startDateAsDate || isNaN(startDateAsDate.getTime())) return false

    return true
  }, {
    error: 'Data inválida',
    path: ['startDate'],
  })

  .refine(({ endDate: endDateAsString }) => {
    const endDateAsDate = parseDate(endDateAsString)

    if (!endDateAsDate || isNaN(endDateAsDate.getTime())) return false

    return true
  }, {
    error: 'Data inválida',
    path: ['endDate'],
  })

  .refine(({ startDate: startDateAsString }) => {
    const startDateAsDate = parseDate(startDateAsString) as Date
    const nowDate = new Date()

    const isStartDateBeforeToday = isAfter(startDateAsDate, nowDate)

    return isStartDateBeforeToday
  }, {
    error: 'A data inicial deve ser posterior ao momento atual',
    path: ['startDate'],
  })

  .refine(({
    startDate: startDateAsString,
    endDate: endDateAsString,
  }) => {
    const startDateAsDate = parseDate(startDateAsString) as Date
    const endDateAsDate = parseDate(endDateAsString) as Date

    const isEndDateAfterStartDate = isAfter(endDateAsDate, startDateAsDate)

    return isEndDateAfterStartDate
  }, {
    error: 'A data final deve ser posterior à data de início',
    path: ['endDate'],
  })

export type EventFormValidatorType = z.infer<typeof eventFormValidator>
