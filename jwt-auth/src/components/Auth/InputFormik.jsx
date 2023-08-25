import React, { useState, useEffect } from 'react'
import { Input } from '@nextui-org/react'
import { useField } from 'formik'

function InputFormik ({ name, ...props }) {
  const [field, meta, helpers] = useField(name)
  const [showError, setShowError] = useState(false)
  const [timer, setTimer] = useState()

  useEffect(() => {
    clearTimeout(timer)

    if (field.value) {
      const timerId = setTimeout(() => setShowError(true), 1000)
      setTimer(timerId)
    } else {
      setShowError(false)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [field.value])

  return (
    <Input
      validationState={showError && meta.error ? 'invalid' : 'valid'}
      errorMessage={showError ? meta.error : ''}
      value={field.value}
      onValueChange={(value) => {
        helpers.setValue(value)
      }}
      {...props}
    />
  )
}

export default InputFormik
