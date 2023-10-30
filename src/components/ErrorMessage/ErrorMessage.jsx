import React from 'react'
import { useSelector } from 'react-redux'
import { getError } from 'store/selectors/contactSelectors'

const ErrorMessage = () => {
  const error = useSelector(getError)
  return (
    <h2>Error occurred: { error?.message }</h2>
  )
}

export default ErrorMessage