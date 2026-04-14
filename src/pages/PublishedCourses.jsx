import React, { useState } from 'react'

const courses = [
  {
    id: 'S9251624',
    title: '20-Day Networking Challenge',
    catalogue: 'MA, MAAS',
    curriculumManager: 'dbramble',
    contentOwner: 'Employee Learning & Development',
    lmsId: 'S9251624',
    description:
      'Gain insights into how to recognize security threats, learn how to adopt healthy security behaviors, and discover tools and resources to improve security awareness.',
    abstract: 'In this module you will learn more about the dangers and symptoms of malware, and how to protect your systems.',
    assetType: '',
    trainingType: 'Professional',
    duration: '22.2',
    proficiency: 'Intermediate',
    liveAssetLink: 'https://learningplayer.microsoft.com/activity/S9251625/launch',
    programName: 'Security Foundations Learning Path',
    subCatalog: '',
    fiscalYear: 'FY23',
    segment: ['Account Team Unit ATU', 'Customer Success Unit CSU', 'Industry Solutions'],
    solutionArea: [],
    mcemStage: ['Inspire and Design', 'Listen and Consult', 'Empower and Achieve, Manage'],
    industry: ['Cross-Industry'],
    profession: ['All'],
    discipline: ['All'],
    skills: ['Security and Compliance', 'Security Principles', 'Knowledge Management', 'Security Principles'],
    displayInCatalogs: 'No',
    displayInReporting: 'Yes',
    comments: 'Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 'S9251625',
    title: '2023 Security Foundations - Module 1: Protect your identity',
    catalogue: 'MA, MAAS',
    curriculumManager: 'dbramble',
    contentOwner: 'Employee Learning & Development',
    lmsId: 'S9251625',
        description:
      'Gain insights into how to recognize security threats, learn how to adopt healthy security behaviors, and discover tools and resources to improve security awareness.',
    abstract: 'In this module you will learn more about the dangers and symptoms of malware, and how to protect your systems.',
    assetType: '',
    trainingType: 'Professional',
    duration: '22.2',
    proficiency: 'Intermediate',
    liveAssetLink: 'https://learningplayer.microsoft.com/activity/S9251625/launch',
    programName: 'Security Foundations Learning Path',
    subCatalog: '',
    fiscalYear: 'FY23',
    segment: ['Account Team Unit ATU', 'Customer Success Unit CSU', 'Industry Solutions'],
    solutionArea: [],
    mcemStage: ['Inspire and Design', 'Listen and Consult', 'Empower and Achieve, Manage'],
    industry: ['Cross-Industry'],
    profession: ['All'],
    discipline: ['All'],
    skills: ['Security and Compliance', 'Security Principles', 'Knowledge Management', 'Security Principles'],
    displayInCatalogs: 'No',
    displayInReporting: 'Yes',
    comments: 'Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 'S9251626',
    title: '2023 Security Foundations - Module 2: Protect your device and code',
    catalogue: 'MA, MAAS',
    curriculumManager: 'dbramble',
    contentOwner: 'Employee Learning & Development',
    lmsId: 'S9251626',
        description:
      'Gain insights into how to recognize security threats, learn how to adopt healthy security behaviors, and discover tools and resources to improve security awareness.',
    abstract: 'In this module you will learn more about the dangers and symptoms of malware, and how to protect your systems.',
    assetType: '',
    trainingType: 'Professional',
    duration: '22.2',
    proficiency: 'Intermediate',
    liveAssetLink: 'https://learningplayer.microsoft.com/activity/S9251625/launch',
    programName: 'Security Foundations Learning Path',
    subCatalog: '',
    fiscalYear: 'FY23',
    segment: ['Account Team Unit ATU', 'Customer Success Unit CSU', 'Industry Solutions'],
    solutionArea: [],
    mcemStage: ['Inspire and Design', 'Listen and Consult', 'Empower and Achieve, Manage'],
    industry: ['Cross-Industry'],
    profession: ['All'],
    discipline: ['All'],
    skills: ['Security and Compliance', 'Security Principles', 'Knowledge Management', 'Security Principles'],
    displayInCatalogs: 'No',
    displayInReporting: 'Yes',
    comments: 'Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
]

const filterConfig = [
  { key: 'catalogue', label: 'Catalogue' },
  { key: 'curriculumManager', label: 'Curriculum Manager' },
  { key: 'contentOwner', label: 'Content Owner' },
]

const iconButtonClass =
  'flex h-9 w-9 items-center justify-center rounded-lg border border-violet-200 bg-white text-violet-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50'

const headerIconButtonClass =
  'flex h-8 w-8 items-center justify-center rounded-full border border-white/55 bg-white/15 text-white backdrop-blur-sm'

function MultiSelectDropdown({ label, options, selectedValues, onToggle, isOpen, onOpenChange }) {
  const selectedCount = selectedValues.length

  return (
    <div className="relative mb-1">
      <p className="text-[10px] font-medium text-slate-700">{label}</p>
      <button
        type="button"
        onClick={() => onOpenChange(isOpen ? null : label)}
        className="flex h-6 w-full items-center justify-between rounded-[2px] border border-slate-400 bg-white px-2.5 text-left transition"
      >
        <span className="text-[12px] text-slate-700">{selectedCount > 0 ? `${selectedCount} selected` : 'All'}</span>
        <svg className={`h-3.5 w-3.5 text-slate-700 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen ? (
        <div className="absolute left-0 right-0 z-20 mt-1 rounded-[2px] border border-slate-400 bg-white p-1.5 shadow-md">
          <div className="max-h-44 space-y-1 overflow-y-auto pr-1">
            {options.map((option) => {
              const isSelected = selectedValues.includes(option)

              return (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2 px-1.5 py-1.5 text-[12px] text-slate-700 hover:bg-slate-100"
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggle(option)}
                    className="h-3.5 w-3.5 rounded-[2px] border-slate-400 text-violet-700 focus:ring-violet-500"
                  />
                  <span>{option}</span>
                </label>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function DetailField({ label, value }) {
  return (
    <div>
      <p style={{lineHeight: 'normal'}} className="text-[10px] mb-1 font-semibold  tracking-[0.14em] text-slate-700">{label}</p>
      <p style={{lineHeight: 'normal'}} className="text-[12px] leading-5 text-slate-700">{value || 'Not available'}</p>
    </div>
  )
}

const valueOrFallback = (value) => (value && String(value).trim() ? value : 'Not available')
const listOrFallback = (items) => (items && items.length > 0 ? items.join(', ') : 'Not available')

const PublishedCourses = () => {
  const [selectedCourseId, setSelectedCourseId] = useState(courses[1].id)
  const [searchQuery, setSearchQuery] = useState('')
  const [openDropdown, setOpenDropdown] = useState(null)
  const [selectedFilters, setSelectedFilters] = useState({
    catalogue: [],
    curriculumManager: [],
    contentOwner: [],
  })

  const filterOptions = {
    catalogue: [...new Set(courses.map((course) => course.catalogue).filter(Boolean))],
    curriculumManager: [...new Set(courses.map((course) => course.curriculumManager).filter(Boolean))],
    contentOwner: [...new Set(courses.map((course) => course.contentOwner).filter(Boolean))],
  }

  const filteredCourses = courses.filter((course) => {
    const query = searchQuery.trim().toLowerCase()
    const matchesSearch =
      query.length === 0 ||
      course.title.toLowerCase().includes(query) ||
      course.id.toLowerCase().includes(query) ||
      course.skills.some((skill) => skill.toLowerCase().includes(query))

    const matchesCatalogue =
      selectedFilters.catalogue.length === 0 || selectedFilters.catalogue.includes(course.catalogue)
    const matchesManager =
      selectedFilters.curriculumManager.length === 0 ||
      selectedFilters.curriculumManager.includes(course.curriculumManager)
    const matchesOwner =
      selectedFilters.contentOwner.length === 0 || selectedFilters.contentOwner.includes(course.contentOwner)

    return matchesSearch && matchesCatalogue && matchesManager && matchesOwner
  })

  const selectedCourse =
    filteredCourses.find((course) => course.id === selectedCourseId) || filteredCourses[0] || null

  const handleFilterToggle = (filterKey, option) => {
    setSelectedFilters((current) => {
      const existing = current[filterKey]
      const nextValues = existing.includes(option)
        ? existing.filter((value) => value !== option)
        : [...existing, option]

      return {
        ...current,
        [filterKey]: nextValues,
      }
    })
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f4ff_0%,#f8fafc_24%,#eef4ff_100%)] px-3 py-4 text-left text-[12px] md:px-5 lg:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-0">
        <header
          className="flex items-center justify-between rounded-t-[4px] border border-fuchsia-500/60 border-b-0 px-3 py-2 shadow-sm"
          style={{
            backgroundImage: 'linear-gradient(90deg, #bf3ccc 0%, #c23dbb 34%, #cb408f 68%, #de4d83 100%)',
          }}
        >
          <div className="flex items-center gap-3">
            <button type="button" className={headerIconButtonClass}>
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                <path d="M3.25 8.25 10 3l6.75 5.25V16a.75.75 0 0 1-.75.75h-4.25v-5h-3.5v5H4A.75.75 0 0 1 3.25 16V8.25Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </button>
            <h1 className="text-[15px] font-semibold text-white">Content Library Management</h1>
          </div>

          <button type="button" className={headerIconButtonClass}>
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
              <path d="M10 13.75v-.25c0-1.45 1.75-1.7 1.75-3.4 0-1.03-.8-1.85-2-1.85-1.02 0-1.72.45-2.2 1.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="10" cy="15.7" r=".8" fill="currentColor" />
            </svg>
          </button>
        </header>

        <section className="-mt-px grid gap-4 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-b-3xl mt-px rounded-t-none border border-slate-200 bg-white p-3.5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)] md:p-4">
            {/* <div className="flex items-center justify-between gap-3">
              <div>
                <p className="mt-1 font-semibold text-slate-900">Browse published items</p>
              </div>
              <button type="button" className={iconButtonClass}>
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                  <path d="M3.75 10h12.5M10 3.75V16.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div> */}

            <div className="rounded-xl border border-violet-100 bg-violet-50/60 p-2">
              <div className="mt-1">
                {filterConfig.map((filter) => (
                  <MultiSelectDropdown
                    key={filter.key}
                    label={filter.label}
                    options={filterOptions[filter.key]}
                    selectedValues={selectedFilters[filter.key]}
                    onToggle={(option) => handleFilterToggle(filter.key, option)}
                    isOpen={openDropdown === filter.label}
                    onOpenChange={setOpenDropdown}
                  />
                ))}
              </div>

              <label className="flex items-center gap-2.5 mt-3 rounded-md border border-violet-200 bg-white px-3 py-1 shadow-sm">
                <svg className="h-4 w-4 text-violet-500" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="5.75" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search by title or LMS ID"
                  className="w-full border-none bg-transparent text-[12px] text-slate-700 outline-none placeholder:text-slate-400"
                />
              </label>

            </div>

            <div className="mt-4 max-h-[calc(100vh-20rem)] space-y-2.5 overflow-y-auto pr-1">
              {filteredCourses.map((course) => {
                const isActive = selectedCourse?.id === course.id

                return (
                  <button
                    key={course.id}
                    type="button"
                    onClick={() => setSelectedCourseId(course.id)}
                    className={`w-full rounded-xl border p-2 text-left transition ${
                      isActive
                        ? 'border-violet-300 border-l-4 border-l-violet-600 rounded-l-2xl bg-[linear-gradient(180deg,#f5f3ff_0%,#ffffff_100%)] shadow-md shadow-violet-100/80'
                        : 'border-slate-200 bg-white hover:border-violet-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-base text-[12px] font-semibold tracking-tight text-slate-900">{course.id}</p>
                        <p className="text-[11px] leading-5 text-slate-600">{course.title}</p>
                      </div>
                    </div>
                  </button>
                )
              })}

              {filteredCourses.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
                  <p className="text-sm font-medium text-slate-700">No courses match the current filters.</p>
                  <p className="mt-2 text-[12px] text-slate-500">Clear one or more selections to broaden the result set.</p>
                </div>
              ) : null}
            </div>
          </aside>

          <section className='mt-5'>
            {selectedCourse ? (
              <>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-md font-semibold tracking-tight text-slate-900">{selectedCourse.title}</h3>
                  <div className="mt-3 mb-5 flex gap-10">
                    <DetailField label="LMS ID" value={selectedCourse.lmsId} />
                    <DetailField label="Content Owner" value={selectedCourse.contentOwner} />
                    <DetailField label="Curriculum Manager" value={selectedCourse.curriculumManager} />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-start">
                  <button type="button" className={`cursor-pointer ${iconButtonClass}`}>
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                      <path d="M4.75 15.25h2.1l7.7-7.7-2.1-2.1-7.7 7.7v2.1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                      <path d="m11.6 5.4 2.1 2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <article className="rounded-xl border border-slate-200 bg-white px-4 py-3 mb-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
                <p style={{lineHeight: 'normal'}} className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">Course Overview</p>
                <div className="">
                  <div>
                    <p style={{lineHeight: 'normal'}} className="text-[10px] mb-1 font-semibold  tracking-[0.14em] text-slate-800">Description</p>
                    <p style={{lineHeight: 'normal'}} className="text-[12px] leading-6 text-slate-700">{valueOrFallback(selectedCourse.description)}</p>
                  </div>
                  <div className='mt-3'>
                    <p style={{lineHeight: 'normal'}} className="text-[10px] mb-1 font-semibold  tracking-[0.14em] text-slate-700">Abstract</p>
                    <p style={{lineHeight: 'normal'}} className="text-[12px] leading-6 text-slate-700">{valueOrFallback(selectedCourse.abstract)}</p>
                  </div>
                </div>

                <div className="mt-3 grid gap-4 md:grid-cols-4">
                  <DetailField label="Asset Type" value={selectedCourse.assetType} />
                  <DetailField label="Training Type" value={selectedCourse.trainingType} />
                  <DetailField label="Duration" value={selectedCourse.duration} />
                  <DetailField label="Proficiency Level" value={selectedCourse.proficiency} />
                </div>

                <div className="mt-3">
                  <p style={{lineHeight: 'normal'}} className="text-[10px] mb-1 font-semibold  tracking-[0.14em] text-slate-700">Live Asset Link</p>
                  <p style={{lineHeight: 'normal'}} className="break-all text-[12px] leading-6 text-slate-700">{valueOrFallback(selectedCourse.liveAssetLink)}</p>
                </div>
              </article>

              <article className="rounded-xl border border-slate-200 bg-white px-4 py-3 mb-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
                <p style={{lineHeight: 'normal'}} className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">Catalog Metadata</p>
                <div className="grid gap-4 md:grid-cols-4">
                  <DetailField label="Program Name" value={selectedCourse.programName} />
                  <DetailField label="Catalog" value={selectedCourse.catalogue} />
                  <DetailField label="Sub-Catalog" value={selectedCourse.subCatalog} />
                  <DetailField label="Fiscal Year" value={selectedCourse.fiscalYear} />
                </div>
              </article>


              <article>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 mb-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
                  <p style={{lineHeight: 'normal'}} className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">Audience And Classification</p>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className='col-span-2'>
                      <p style={{lineHeight: 'normal'}} className="text-[10px] mb-1 font-semibold  tracking-[0.14em] text-slate-700">Segment</p>
                      <p style={{lineHeight: 'normal'}} className="text-[12px] leading-6 text-slate-700">{listOrFallback(selectedCourse.segment)}</p>
                    </div>
                    <div className='col-span-2'>
                      <p style={{lineHeight: 'normal'}} className="text-[10px] mb-1 font-semibold  tracking-[0.14em] text-slate-700">MCEM Stage</p>
                      <p style={{lineHeight: 'normal'}} className="text-[12px] leading-6 text-slate-700">{listOrFallback(selectedCourse.mcemStage)}</p>
                    </div>
                  </div>
                  <div className="mt-3 grid gap-4 md:grid-cols-4">
                    <div>
                      <p style={{lineHeight: 'normal'}} className="text-[10px] mb-1 font-semibold  tracking-[0.14em] text-slate-700">Solution Area</p>
                      <p style={{lineHeight: 'normal'}} className="text-[12px] leading-6 text-slate-700">{listOrFallback(selectedCourse.solutionArea)}</p>
                    </div>
                    
                    <div>
                      <p style={{lineHeight: 'normal'}} className="text-[10px] mb-1 font-semibold  tracking-[0.14em] text-slate-700">Industry</p>
                      <p style={{lineHeight: 'normal'}} className="text-[12px] leading-6 text-slate-700">{listOrFallback(selectedCourse.industry)}</p>
                    </div>

                    <div>
                      <p style={{lineHeight: 'normal'}} className="text-[10px] mb-1 font-semibold  tracking-[0.14em] text-slate-700">Profession</p>
                      <p style={{lineHeight: 'normal'}} className="text-[12px] leading-6 text-slate-700">{listOrFallback(selectedCourse.profession)}</p>
                    </div>

                    <div>
                      <p style={{lineHeight: 'normal'}} className="text-[10px] mb-1 font-semibold  tracking-[0.14em] text-slate-700">Discipline</p>
                      <p style={{lineHeight: 'normal'}} className="text-[12px] leading-6 text-slate-700">{listOrFallback(selectedCourse.discipline)}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="mt-3">
                      <p style={{lineHeight: 'normal'}} className="text-[10px] mb-1 font-semibold  tracking-[0.14em] text-slate-700">Skills</p>
                      <p style={{lineHeight: 'normal'}} className="text-[12px] leading-6 text-slate-700">{listOrFallback(selectedCourse.skills)}</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-xl border border-slate-200 bg-white px-4 py-3 mb-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
                <p style={{lineHeight: 'normal'}} className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em]  text-slate-600">Publishing Details</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <DetailField label="Display in Catalogs" value={selectedCourse.displayInCatalogs} />
                  <DetailField label="Display in Reporting" value={selectedCourse.displayInReporting} />
                </div>

                <div className="mt-3">
                  <p style={{lineHeight: 'normal'}} className="text-[10px] mb-1 font-semibold  tracking-[0.14em] text-slate-700">Comments</p>
                  <p style={{lineHeight: 'normal'}} className="text-[12px] leading-6 text-slate-700">{valueOrFallback(selectedCourse.comments)}</p>
                </div>
              </article>
              </>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
                <p className="text-lg font-semibold text-slate-900">No course selected</p>
                <p className="mt-2 text-[12px] text-slate-500">Update the filters or search term to bring published courses back into view.</p>
              </div>
            )}
          </section>
        </section>
      </div>
    </div>
  )
}

export default PublishedCourses
