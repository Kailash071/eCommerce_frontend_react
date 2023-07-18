import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom/dist'
const ErrorElement = () => {
    const error = useRouteError()
  return (
    <div className='container'>
       <h1>{error.status}</h1>
        <p>{error.message}</p>
        <p>
          Go Back    {<NavLink to="/"/>}
        </p>
    </div>
  )
}

export default ErrorElement