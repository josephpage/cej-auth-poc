/* eslint-disable */
import * as Joi from 'joi'
import { configurationSchema } from './configuration.schema'

export default () => {
  const configuration = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5050
  }

  return Joi.attempt(configuration, configurationSchema)
}
