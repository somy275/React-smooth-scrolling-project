// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Smooth1 from './components/Smooth1'
import Smooth2 from './components/Smooth2'
import Smooth3 from './components/Smooth3'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<><Smooth1/></>,
    },
    {
path: '/Smooth2',
element:<><Smooth2 /></>
    },
    {
    path: '/Smooth3',
element:<><Smooth3/></>
    }
  ])
  return (
    <>
    {/* <Smooth1/> */}
    <RouterProvider router={router} />
    </>
  )
}

export default App