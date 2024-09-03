'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinte-moving-cards';

const ITCourses = [
    {
      quote: 'I have completed this Bachelor course in 2013 from very renowned, GANPAT UNIVERSITY, India',
      name: 'Course Name : B.Sc(CA & IT)',
      title: 'CGPA : 7.2'
    },
    {
      quote: 'I have completed this Master/Post Graduate course in 2015 from very renowned, GANPAT UNIVERSITY, India',
      name: 'Course Name : M.Sc(CA & IT)',
      title: 'CGPA : 7.9'
    },
    {
      quote: 'I have completed this Graduate Diploma course in 2020 from very renowned, WINTEC College, NZ',
      name: 'Course Name : Grad Diploma in Software Engineering ',
      title: 'CGPA : 9.0/ A++'
    }
  ];
const Cards = () => {
  
  return (
    <div className=''>
      <div className='heading'>
          Completed {''}
         <span className='text-purple'>Courses</span>
      </div>
       
       <div>
        <div>
          <InfiniteMovingCards
          items={ITCourses}
          direction='right'
          speed='slow'/>
        </div>
       </div>
    </div>
  )
}

export default Cards