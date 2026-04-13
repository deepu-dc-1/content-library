import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import PublishedCourses from './pages/PublishedCourses'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/published-courses",
    element: <PublishedCourses />
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
