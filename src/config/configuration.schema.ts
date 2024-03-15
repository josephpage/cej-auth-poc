import * as Joi from 'joi'

export const configurationSchema = Joi.object({
  port: Joi.number()
})
