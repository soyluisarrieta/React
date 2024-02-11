import { z } from 'zod'

export const userSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'El nombre debe ser una cadena de texto.',
      required_error: 'El nombre es requerido.'
    })
    .min(2, 'El nombre debe tener al menos 2 caracteres.')
    .max(25, 'El nombre debe tener un máximo de 25 caracteres.'),
  lastname: z
    .string({
      invalid_type_error: 'El apellido debe ser una cadena de texto.',
      required_error: 'El apellido es requerido.'
    })
    .min(2, 'El apellido debe tener al menos 2 caracteres.')
    .max(25, 'El apellido debe tener un máximo de 25 caracteres.'),
  email: z
    .string({
      invalid_type_error: 'El correo electrónico debe ser una cadena de texto.',
      required_error: 'El correo electrónico es requerido.'
    })
    .email('¡Correo electrónico no válido!')
    .min(5, 'El correo electrónico debe tener al menos 5 caracteres.')
})
