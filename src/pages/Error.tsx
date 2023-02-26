import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
  const error: any = useRouteError();
  console.error(error);
  return (
    <div id='error=page'>
        <h1>OOPSS!</h1>
        <p>an unexpexted error has occured</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default Error
