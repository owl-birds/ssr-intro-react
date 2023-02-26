import React from 'react'

import './App.css'

// router 
import {  RouterProvider} from "react-router-dom"
import { app_router } from './routes/Route'



function App() {

  return (
    <div className="App">
        <RouterProvider router={app_router}/>
    </div>
  )
}

export default App
