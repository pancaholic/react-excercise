import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className="flex justify-center bg-white items-center min-h-screen flex-col">
      <h1 className='text-5xl font-bold '>Oops!</h1>
      <p className='text-2xl my-2'>Sorry, an unexpected error has occurred.</p>
      <p className='text-xl text-red-500 font-semibold'>{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage
