import React, { useState, useEffect } from 'react'
import { Input } from '@nextui-org/react'
import { useField } from 'formik'

function InputFormik ({ name, className, ...props }) {
  const [field, meta, helpers] = useField(name)
  const [showError, setShowError] = useState(false)
  let timer

  useEffect(() => {
    clearTimeout(timer)

    if (field.value) {
      timer = setTimeout(() => setShowError(true), 1000)
    } else {
      setShowError(false)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [field.value])

  return (
    <div className='flex flex-col gap-1'>
      <Input
        validationState={showError && meta.error ? 'invalid' : 'valid'}
        errorMessage={showError ? meta.error : ''}
        value={field.value}
        onValueChange={(value) => {
          helpers.setValue(value)
        }}
        {...props}
      />
    </div>
  )
}

export default InputFormik
