import React from 'react'
import Header from './Header'
import '../Styles/Job.css'
import Find from './Find'
import JobCard from './JobCard'

const Job = () => {
  return (
    <div className='container'>
        <Header/>
        <Find/>
        <JobCard/>
    </div>
  )
}

export default Job