import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router'
import Header from '../components/Header'

const sampleCourses = [
  {
    id: '1365',
    workItemId: '154783',
    title: 'Course 1 - Test Maple 9.23',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s',
    releaseDate: '2023-01-15',
  },
  {
    id: '1364',
    workItemId: '154782',
    title: 'LP Test Maple 9.23',
    description: 'Lorem Ipsum has been the standard dummy text ever since the 1500s',
    releaseDate: '2023-02-20',
  },
  {
    id: '1366',
    workItemId: '154784',
    title: 'Course 2 Test Maple 9.23',
    description: 'Lorem Ipsum is simply dummy text of the printing industry.',
    releaseDate: '2023-03-10',
  },
  {
    id: '1367',
    workItemId: '154828',
    title: 'MCAPS Leader Launch Guide',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s',
    releaseDate: '2023-04-05',
  },
  {
    id: '1369',
    workItemId: '155241',
    title: 'Test_NK_1',
    description: 'Lorem Ipsum has been the standard dummy text ever since the 1500s',
    releaseDate: '2023-05-12',
  },
  {
    id: '1370',
    workItemId: '154783',
    title: 'Course 1 - Test Maple 9.23',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s',
    releaseDate: '2023-01-15',
  },
  {
    id: '1371',
    workItemId: '154782',
    title: 'LP Test Maple 9.23',
    description: 'Lorem Ipsum has been the standard dummy text ever since the 1500s',
    releaseDate: '2023-02-20',
  },
  {
    id: '1372',
    workItemId: '154784',
    title: 'Course 2 Test Maple 9.23',
    description: 'Lorem Ipsum is simply dummy text of the printing industry.',
    releaseDate: '2023-03-10',
  },
]

const CoursesList = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('ascending')
  const [appliedSearchQuery, setAppliedSearchQuery] = useState('')
  const [appliedSortOrder, setAppliedSortOrder] = useState('ascending')

  let filteredCourses = sampleCourses.filter((course) => {
    const query = appliedSearchQuery.trim().toLowerCase()
    return (
      query === '' ||
      course.title.toLowerCase().includes(query) ||
      course.workItemId.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query)
    )
  })

  // Apply sorting based on the applied sort order
  if (appliedSearchQuery !== '' || appliedSortOrder !== 'ascending') {
    filteredCourses = filteredCourses.sort((a, b) => {
      const dateA = new Date(a.releaseDate)
      const dateB = new Date(b.releaseDate)
      return appliedSortOrder === 'ascending' ? dateA - dateB : dateB - dateA
    })
  }

  const handleFilter = () => {
    setAppliedSearchQuery(searchQuery)
    setAppliedSortOrder(sortOrder)
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f4ff_0%,#f8fafc_24%,#eef4ff_100%)] px-3 py-4 text-left text-[12px] md:px-5 lg:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <Header />

        {/* Search Bar and Filters */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex gap-4">
            {/* Search Input - 50% width */}
            <div className="w-1/2">
              <label className="flex items-center gap-2.5 rounded-md border border-violet-200 bg-white px-3 py-2 shadow-sm">
                <svg className="h-4 w-4 text-violet-500" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="5.75" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search Title / Work Item ID"
                  className="w-full border-none bg-transparent text-[12px] text-slate-700 outline-none placeholder:text-slate-400"
                />
              </label>
            </div>

            {/* Filter Controls - 50% width */}
            <div className="w-1/2 flex gap-3">
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                className="flex-1 rounded-md border border-violet-200 bg-white px-3 py-2 text-[12px] text-slate-700 shadow-sm outline-none cursor-pointer hover:border-violet-300 transition-colors duration-200"
              >
                <option value="ascending">Release date: Ascending</option>
                <option value="descending">Release date: Descending</option>
              </select>

              <button
                type="button"
                onClick={handleFilter}
                className="cursor-pointer rounded-md bg-violet-500 px-4 py-2 text-[12px] font-semibold text-white hover:bg-violet-600 transition-colors duration-200 shadow-sm"
              >
                Filter courses
              </button>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-4 gap-4 auto-rows-fr mb-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200 hover:border-violet-300 flex flex-col h-full"
              >
                <div className="course-tile flex flex-col h-full">
                  <div>
                    <div className="text-[13px] font-semibold text-slate-900 min-w-max mb-2 leading-normal">{course.id}</div>
                    <div className="flex-1 items-end relative">
                      <div className="mb-2">
                        <p className="text-[12px] text-slate-700 font-semibold leading-normal">Title: </p>
                        <p className="text-[12px] text-slate-700 leading-normal">{course.title}</p>
                      </div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-[12px] text-slate-700 font-semibold leading-normal">Work Item ID: </p>
                          <p className="text-[12px] text-slate-700">{course.workItemId}</p>
                        </div>
                        <div>
                          <p className="text-[12px] text-slate-700 font-semibold leading-normal">Release Date: </p>
                          <p className="text-[12px] text-slate-700">{course.releaseDate}</p>
                        </div>
                      </div>
                      <div className='mb-2'>
                        <p className="text-[12px] text-slate-700 font-semibold leading-normal">Description: </p>
                        <p className="text-[12px] text-slate-700 line-clamp-2 leading-normal">{course.description}</p>
                      </div>
                      
                    </div>
                  </div>
                  
                  <Link to={`/courses/${course.id}`} className="cursor-pointer bottom-1 mt-auto w-full flex items-center justify-between rounded-md border border-violet-500 px-3 py-2 hover:text-white text-violet-700 uppercase hover:bg-violet-600 transition-colors duration-200">
                    <span className="text-[12px] font-semibold">Upload documents</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-12 text-center">
              <p className="text-sm font-medium text-slate-700">No courses match your search.</p>
              <p className="mt-2 text-[12px] text-slate-500">Try adjusting your search terms.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CoursesList
