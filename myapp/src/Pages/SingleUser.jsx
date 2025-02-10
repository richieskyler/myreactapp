import React from 'react'
import { useParams } from 'react-router-dom'

const SingleUser = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>SingleUser</div>
  )
}

export default SingleUser