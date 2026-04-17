import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import TextAreaInput from '../components/TextAreaInput'
import SelectInput from '../components/SelectInput'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import Header from '../components/Header'

const CourseForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [scormFile, setScormFile] = useState(null)
  const [pdfFile, setPdfFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // Form state for Step 2
  const [formData, setFormData] = useState({
    description: '',
    abstract: '',
    keywords: '',
    businessOwner: '',
    segment: '',
    solutionArea: '',
    industry: '',
    targetAudience: '',
    roleTenure: '',
    profession: '',
    discipline: '',
    skills: '',
    roleType: '',
    proficiencyLevel: '',
  })

  // Sample course data - replace with actual data from props or API
  const courseTitle = '2023 Security Foundations - Module 1: Protect your identity'
  const workItemId = 'S9251625'

  const handleFileSelect = (event, fileType) => {
    const file = event.target.files?.[0]
    if (file) {
      if (fileType === 'scorm') {
        setScormFile(file)
      } else if (fileType === 'pdf') {
        setPdfFile(file)
      }
    }
  }

  const handleCancel = () => {
    setCurrentStep(1)
    setScormFile(null)
    setPdfFile(null)
  }

  const handleSave = () => {
    if (!scormFile || !pdfFile) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep(2)
    }, 2000)
  }

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = () => {
    toast.success(`The course was published`)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f4ff_0%,#f8fafc_24%,#eef4ff_100%)] px-3 py-4 text-left text-[12px] md:px-5 lg:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <Header />

        {/* Course Header */}
        <div className="rounded-xl border border-slate-200 bg-white px-6 py-3 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Course Title */}
            <div>
              <p style={{lineHeight: 'normal'}} className="text-[11px] mb-1 text-slate-700">
                <span className='font-semibold tracking-[0.14em]'>Course title:</span> {courseTitle}
              </p>
            </div>

            {/* Work Item ID */}
            <div>
              <p style={{lineHeight: 'normal'}} className="text-[11px] mb-1 text-slate-700">
                <span className='font-semibold tracking-[0.14em]'>Work item ID:</span> {workItemId}
              </p>
            </div>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center">
          <div className="max-w-xl flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                  currentStep >= 1
                    ? 'bg-violet-600 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                1
              </div>
              <span className="font-semibold text-slate-900">Step 1: Upload Files</span>
            </div>
            <div
              className={`h-1 flex-1 mx-4 ${
                currentStep >= 2 ? 'bg-violet-600' : 'bg-slate-300'
              }`}
            ></div>
            <div className="flex items-center gap-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                  currentStep >= 2
                    ? 'bg-violet-600 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                2
              </div>
              <span className="font-semibold text-slate-900">Step 2: Review</span>
            </div>
          </div>
        </div>

        {/* Step 1: File Upload */}
        {currentStep === 1 && (
          <div className="rounded-xl border border-slate-200 bg-white px-6 py-3 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
            <h2 className="text-[14px] font-semibold text-slate-900">Upload Files</h2>
            <p className="mb-6 text-[12px] text-slate-600">
              Upload the required SCORM (.zip) and PDF file associated with this course. Both files must be provided to complete the process.
            </p>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {/* SCORM File Upload */}
              <div>
                <h5 className="text-base text-center font-semibold text-slate-700 mb-3">
                  Upload SCORM/Zip file
                </h5>
                <label className="flex items-center justify-center h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition">
                  <input
                    type="file"
                    onChange={(e) => handleFileSelect(e, 'scorm')}
                    className="hidden"
                  />
                  <div className="text-center">
                    <svg
                      className="w-8 h-8 text-violet-700 mx-auto mb-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <span className="text-slate-600 text-sm">Click to upload</span>
                  </div>
                </label>
                <p className="text-center text-slate-600 text-sm mt-3">
                  {scormFile ? scormFile.name : 'No file selected'}
                </p>
              </div>

              {/* PDF File Upload */}
              <div>
                <h5 className="text-base text-center font-semibold text-slate-700 mb-3">
                  Upload PDF file
                </h5>
                <label className="flex items-center justify-center h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition">
                  <input
                    type="file"
                    onChange={(e) => handleFileSelect(e, 'pdf')}
                    className="hidden"
                  />
                  <div className="text-center">
                    <svg
                      className="w-8 h-8 text-violet-700 mx-auto mb-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <span className="text-slate-600 text-sm">Click to upload</span>
                  </div>
                </label>
                <p className="text-center text-slate-600 text-sm mt-3">
                  {pdfFile ? pdfFile.name : 'No file selected'}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-8 justify-end">
              <Link
                to="/courses"
                className="flex h-9 cursor-pointer items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-slate-700 font-semibold transition hover:bg-slate-50"
              >
                Cancel
              </Link>
              <button
                type="button"
                onClick={handleSave}
                disabled={!scormFile || !pdfFile || isLoading}
                className={`flex h-9 cursor-pointer items-center justify-center rounded-lg px-6 font-semibold transition shadow-sm gap-2 ${
                  !scormFile || !pdfFile || isLoading
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : 'bg-violet-600 text-white hover:bg-violet-700'
                }`}
              >
                {isLoading && (
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {isLoading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Review */}
        {currentStep === 2 && (
          <div>
            <p className='mb-3'>Before proceeding, verify the accuracy of the auto-populated information in the fields below. If any fields are incorrect, return to your ADO content item and make the necessary edits.</p>
            <div className="flex flex-col gap-6">
              {/* Content Overview */}
              <article className="rounded-xl border border-slate-200 bg-white px-4 pt-3 pb-4 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
                <p style={{lineHeight: 'normal'}} className="mb-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                  Content Overview
                </p>

                <div className="space-y-4">
                  {/* Description */}
                  <div className='grid gap-4 md:grid-cols-2 mb-3'>
                    <TextAreaInput
                      label="Description"
                      value='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s'
                      onChange={(e) => handleFormChange('description', e.target.value)}
                      placeholder="Enter description"
                      disabled='true'
                      rows={2}
                    />

                    {/* Abstract */}
                    <TextAreaInput
                      label="Abstract"
                      value={formData.abstract}
                      onChange={(e) => handleFormChange('abstract', e.target.value)}
                      placeholder="Enter abstract"
                      rows={2}
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Keywords */}
                    <TextInput
                      label="Keywords"
                      value={formData.keywords}
                      onChange={(e) => handleFormChange('keywords', e.target.value)}
                      placeholder="Enter keywords separated by commas"
                    />

                    {/* Business Owner */}
                    <TextInput
                      label="Business owner"
                      value='John Doe'
                      onChange={(e) => handleFormChange('businessOwner', e.target.value)}
                      placeholder="Enter business owner"
                      disabled='true'
                    />
                  </div>
                </div>
              </article>

              {/* Audience Targeting */}
              <article className="rounded-xl border border-slate-200 bg-white px-4 pt-3 pb-4 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
                <p style={{lineHeight: 'normal'}} className="mb-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                  Audience Targeting
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  {/* Segment */}
                  <TextInput
                    label="Segment"
                    value={formData.segment}
                    onChange={(e) => handleFormChange('segment', e.target.value)}
                    placeholder="Enter segment"
                  />

                  {/* Solution Area */}
                  <SelectInput
                    disabled='true'
                    label="Solution area"
                    value={'solution1'}
                    onChange={(e) => handleFormChange('solutionArea', e.target.value)}
                    options={[
                      { label: 'Solution 1', value: 'solution1' },
                      { label: 'Solution 2', value: 'solution2' },
                    ]}
                    placeholder="Select Solution Area"
                  />

                  {/* Industry */}
                  <TextInput
                    label="Industry"
                    value={formData.industry}
                    onChange={(e) => handleFormChange('industry', e.target.value)}
                    placeholder="Enter industry"
                  />

                  {/* Target Audience */}
                  <TextInput
                    label="Target audience"
                    value={formData.targetAudience}
                    onChange={(e) => handleFormChange('targetAudience', e.target.value)}
                    placeholder="Enter target audience"
                  />

                  {/* Role Tenure */}
                  <TextInput
                    label="Role tenure"
                    value={formData.roleTenure}
                    onChange={(e) => handleFormChange('roleTenure', e.target.value)}
                    placeholder="Enter role tenure"
                  />
                </div>
              </article>

              {/* Role & Skill Classification */}
              <article className="rounded-xl border border-slate-200 bg-white px-4 pt-3 pb-4 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
                <p style={{lineHeight: 'normal'}} className="mb-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                  Role & Skill Classification
                </p>

                <div className="grid gap-4 grid-cols-3">
                  {/* Profession */}
                  <SelectInput
                    label="Profession"
                    value={formData.profession}
                    onChange={(e) => handleFormChange('profession', e.target.value)}
                    options={[
                      { label: 'Profession 1', value: 'profession1' },
                      { label: 'Profession 2', value: 'profession2' },
                    ]}
                    placeholder="Select Profession"
                  />

                  {/* Discipline */}
                  <SelectInput
                    label="Discipline"
                    value={formData.discipline}
                    onChange={(e) => handleFormChange('discipline', e.target.value)}
                    options={[
                      { label: 'Discipline 1', value: 'discipline1' },
                      { label: 'Discipline 2', value: 'discipline2' },
                    ]}
                    placeholder="Select Discipline"
                  />

                  {/* Skills */}
                  <SelectInput
                    label="Skills"
                    value={formData.skills}
                    onChange={(e) => handleFormChange('skills', e.target.value)}
                    options={[
                      { label: 'Skill 1', value: 'skill1' },
                      { label: 'Skill 2', value: 'skill2' },
                    ]}
                    placeholder="Select Skills"
                  />

                  {/* Role Type */}
                  <TextInput
                    label="Role type"
                    value={formData.roleType}
                    onChange={(e) => handleFormChange('roleType', e.target.value)}
                    placeholder="Enter role type"
                  />

                  {/* Proficiency Level */}
                  <SelectInput
                    label="Proficiency level"
                    value={formData.proficiencyLevel}
                    onChange={(e) => handleFormChange('proficiencyLevel', e.target.value)}
                    options={[
                      { label: 'Beginner', value: 'beginner' },
                      { label: 'Intermediate', value: 'intermediate' },
                      { label: 'Advanced', value: 'advanced' },
                    ]}
                    placeholder="Select Proficiency Level"
                  />
                </div>
              </article>

              {/* Buttons */}
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="flex h-9 cursor-pointer items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-slate-700 font-semibold transition hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex h-9 cursor-pointer items-center justify-center rounded-lg bg-violet-600 px-6 text-white font-semibold transition hover:bg-violet-700 shadow-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseForm
