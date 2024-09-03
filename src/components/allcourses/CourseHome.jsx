import React from 'react'
import Back from '../common/back/Back'
import CoursesCard from './CourseCard'
import OnlineCourse from './OnlineCourse'


const CourseHome = () => {
  return (
    <div>
        <Back title='Explore Courses'/>
        <CoursesCard/>
        <OnlineCourse/>
    </div>
  )
}

export default CourseHome