import z from 'zod'

export const contactSchema = z.object({
  name: z.string().min(4, { message: 'El nombre debe tener al menos 4 caracteres' }),
  email: z
    .string()
    .min(1, { message: 'El correo es requerido' })
    .email({ message: 'El correo no es valido' }),
  number: z
    .string()
    .min(10, { message: 'El teléfono debe tener 10 digitos' })
    .max(10, { message: 'El teléfono debe tener 10 digitos' })
    .refine((value) => {
      return !!parseInt(value)
    }, { message: 'El teléfono debe ser un número' }),
  message: z.string().optional()
})