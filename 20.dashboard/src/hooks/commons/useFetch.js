import nProgress from 'nprogress'
import { toast } from 'sonner'

import { csrfService } from '../services'

export async function useFetch ({ service, payload, successMessage = '¡Solicitud realizada correctamente!', formikActions }) {
  nProgress.start()
  try {
    await csrfService()
    nProgress.inc(0.3)
    await service(payload)
    toast.success(successMessage)
    return true
  } catch (err) {
    // TODO: Use error logging service here.

    if (err.response.status === 500) {
      toast.error('Se produjo un error inesperado. Por favor, vuelve a intentarlo más tarde.')
    } else if (err instanceof Error && 'response' in err) {
      formikActions.setErrors(err.response.data.errors)
      toast.error('Uno o más campos tienen errores. Por favor, revisa y vuelve a intentarlo.')
    } else {
      toast.error('Se produjo un error inesperado. Por favor, vuelve a intentarlo más tarde.')
    }
    console.error(err.response.data)
    return false
  } finally {
    nProgress.done()
  }
}
