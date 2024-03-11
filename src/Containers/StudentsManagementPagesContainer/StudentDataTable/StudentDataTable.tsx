import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './StudentDataTable.module.css'
import { AppContext } from '../../../Context/AppContext'
import Checkbox from '../../../Components/Checkbox/Checkbox'
import { activeToggleSetAll, activeTogglerRestAll } from '../../../HelperFunctions/activeTogglers'
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal'
import SendMessageModal from './Modals/SendMessageModal'
import ConfirmationModal from './Modals/ConfirmationModal'
import email from '../../../Assets/Images/emailIcon.svg'
import greenBar from '../../../Assets/Images/greenBar.svg'
import yellowBar from '../../../Assets/Images/yellowBar.svg'
import EmptyTabComponent from '../../../Components/EmptyTabComponent/EmptyTabComponent'
import noResultFound from '../../../Assets/Images/noResultFound.svg'

const StudentDataTable = () => {
   const navigate = useNavigate()

   // Context
   const { students, setStudents } = useContext(AppContext)

   // State
   const [displaySendMessageModal, setDisplaySendMessageModal] = useState(false)
   const [displayConfirmationModal, setDisplayConfirmationModal] =
      useState(false)
   const [searchTerm, setSearchTerm] = useState('')

   const filteredStudent = students.filter(data => {
      return (
         data.emailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
         data.studentName.toLowerCase().includes(searchTerm.toLowerCase())
      )
   });

   const engagement = [
      {
         status: 'Up',
         statusFigure: 2.1,
         totalNumber: 854,
         image: greenBar,
         title: 'All students',
      },
      {
         status: 'Dn',
         statusFigure: 5.1,
         totalNumber: 342,
         image: yellowBar,
         title: 'Active students',
      },
      {
         status: 'Up',
         statusFigure: 2.1,
         totalNumber: 5,
         image: greenBar,
         title: 'New students',
      },
   ]

   return (
      <section className={classes.container}>
         {displaySendMessageModal && (
            <AcceptedModal
               onClick={() => {
                  setDisplaySendMessageModal(false)
               }}
               body={
                  <SendMessageModal
                     onClick={() => {
                        setDisplaySendMessageModal(false)
                     }}
                     onClick2={() => {
                        setDisplaySendMessageModal(false)
                        setDisplayConfirmationModal(true)
                     }}
                  />
               }
            />
         )}
         {displayConfirmationModal && (
            <AcceptedModal
               onClick={() => {
                  setDisplayConfirmationModal(false)
               }}
               body={
                  <ConfirmationModal
                     onClick={() => {
                        setDisplayConfirmationModal(false)
                     }}
                  />
               }
            />
         )}
         <div className={classes.filterButton}>
            <span>Filter by:</span>
            <div>
               <button type="button">School</button>
               <button type="button">Cohort</button>
               <button type="button">Course</button>
            </div>
         </div>

         <div className={classes.engagement}>
            <div>
               {engagement.map((data, i) => {
                  return (
                     <div key={i} className={classes.engagementCard}>
                        <div>
                           <h3 className={classes.title}>{data.title}</h3>
                           <h1 className={classes.number}>{data.totalNumber.toString()}</h1>
                        </div>
                        <div>
                           <img src={data.image} alt={data.title} />
                           <span>{data.status} {data.statusFigure}%</span>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>

         <div className={classes.header}>
            <div className={classes.headerItem}>
               <div>
                  <Checkbox
                     isChecked={students.length > 0 && students.every(student => student.isActive)}
                     onChange={(isChecked) => {
                        activeToggleSetAll(students, setStudents, isChecked);
                     }}
                  />
                  <span>Select</span>
               </div>
               <div
                  onClick={() => {
                     setDisplaySendMessageModal(true)
                  }}
               >
                  <img src={email} alt="Send email to student" />
                  <span>Email</span>
               </div>
            </div>

            <div className={classes.seachInput}>
               <div className={classes.inputSection}>
                  <input
                     type="text"
                     placeholder="Search by name or email"
                     value={searchTerm}
                     onChange={e => setSearchTerm(e.target.value)}
                  />
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                  >
                     <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="#2E2E2E"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </div>
            </div>
            <div className={classes.pagination}>
               <p>1-20 of {students.length}</p>
               <div className={`${classes.pageButtons} ${classes.headerPageButton}`}>
                  <span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           d="M15 19L8 12L15 5"
                           stroke="#fff"
                           strokeWidth="2"
                           stroke-linecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </span>
                  <span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                     >
                        <path
                           d="M9 5L16 12L9 19"
                           stroke="#fff"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </span>
               </div>
            </div>
         </div>

         <div className={classes.body}>
            <div className={classes.tableHeader}>
               <span></span>
               <span>Name of Student</span>
               <span>Student Id</span>
               <span>Status</span>
               <span></span>
            </div>
            <div className={classes.tableBodyContainer}>
               {filteredStudent.length === 0 ? (
                  <EmptyTabComponent
                     image={noResultFound}
                     header={`No results for “${searchTerm}”`}
                     firstParagraph='Try a new search'
                     route='/students'
                     imageHeight={280}
                     buttontext='Retry  search'
                     buttonType='null'
                     buttonSvg={<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.5V5.25H1.93614M13.4536 6.75C13.0845 3.79027 10.5597 1.5 7.5 1.5C4.98197 1.5 2.82622 3.05113 1.93614 5.25M1.93614 5.25H5.25M13.5 13.5V9.75H13.0639M13.0639 9.75C12.1738 11.9489 10.018 13.5 7.5 13.5C4.44029 13.5 1.91549 11.2097 1.54642 8.25M13.0639 9.75H9.75" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                     }
                  />
               ) : (
                  filteredStudent.map((data, i) => {
                     return (
                        <div key={Math.random()} className={classes.tableBody}>
                           <Checkbox
                              isChecked={data.isActive}
                              onChange={() => {
                                 activeTogglerRestAll(i, students, setStudents);
                              }}
                           />
                           <div>
                              <img src={data.studentImage} alt={data.studentName} />
                              <span>{data.studentName}</span>
                           </div>
                           <span>#{data.studentId}</span>
                           <span>{data.status}</span>
                           <span
                              onClick={() => {
                                 navigate(
                                    `/students/${data.studentName
                                       .replaceAll(' ', '-')
                                       .toLowerCase()}`
                                 )
                              }}
                           >
                              View
                           </span>
                        </div>
                     )
                  })
               )}
            </div>
         </div>
      </section>
   )
}

export default StudentDataTable
