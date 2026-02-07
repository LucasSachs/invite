import * as z from 'zod'

z.config(z.locales.pt())
z.config({
  customError: (iss) => {
    switch (iss.code) {
      case 'too_small': return `Deve ter no mínimo ${iss.minimum} caracteres`
      case 'too_big': return `Deve ter no máximo ${iss.maximum} caracteres`
    }
  },
})

export { z }
