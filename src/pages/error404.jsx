import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className="flex justify-center bg-white items-center min-h-screen">
      <h1 className='text-3xl font-bold'>Oops!</h1>
      <p className='my-2'>Sorry, an unexpected error has occurred.</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage
