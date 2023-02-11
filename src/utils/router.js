import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import React from 'react'
import Gallery from '../pages/gallery/Gallery'
import Weather from '../pages/weather/Weather'

export const router = createBrowserRouter([
  {
    element: <App/>,
    path: '/',
    children: [
      {
        path: 'weather',
        element: <Weather/>
      },
      {
        path: 'gallery',
        element: <Gallery/>
      }
    ]
  }
])
