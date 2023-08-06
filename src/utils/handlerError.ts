import type { CmdError } from '@/apis/axios'
import { AxiosError } from 'axios'

const isAxiosError = (error: any): error is AxiosError => {
  return error.config
}

const isCmdError = (error: any): error is CmdError => {
  return error.isCmdError
}

export const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    console.error('isAxiosError')
  } else if (isCmdError(error)) {
    console.error(error.message)
  } else {
    console.error(error)
  }
}
