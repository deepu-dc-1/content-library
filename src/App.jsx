import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import PublishedCourses from './pages/PublishedCourses'
import CourseForm from './pages/CourseForm'
import CoursesList from './pages/CoursesList'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/published-courses",
    element: <PublishedCourses />
  },
  {
    path: "/courses",
    element: <CoursesList />
  },
  {
    path: "/courses/:id",
    element: <CourseForm />
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
