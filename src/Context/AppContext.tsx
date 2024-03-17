import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { sideNavItems } from '../Utilities/sideNavItems';
import { SupportTrackingData, SupportTrackingDataType } from '../Utilities/SupportTrackingData';
import { adminsData, adminsDataType } from '../Utilities/admins';
import { tutorsData, tutorsDataType } from '../Utilities/tutors';
import { studentsData, studentsDataType } from '../Utilities/students';
import { schoolsData, schoolsDataType } from '../Utilities/schools';

type AppContextProviderProps = {
  children: React.ReactNode
}

type AppContextProps = {
  screenWidthState: number
  showGetStarted: {
    rightCta: boolean
    dashboard: boolean
    showModdal: boolean
  }
  setShowGetStarted: Dispatch<
    SetStateAction<{
      rightCta: boolean
      dashboard: boolean
      showModdal: boolean
    }>
  >
  displayRatemodal: boolean
  setDisplayRateModal: Dispatch<SetStateAction<boolean>>
  displaySharemodal: boolean
  setDisplayShareModal: Dispatch<SetStateAction<boolean>>
  navItmesState: any[]
  setNavItemsState: Dispatch<SetStateAction<any>>
  supportData: SupportTrackingDataType[];
  setSupportData: Dispatch<SetStateAction<SupportTrackingDataType[]>>
  adminData: adminsDataType[];
  setAdminData: Dispatch<SetStateAction<adminsDataType[]>>
  tutors: tutorsDataType
  setTutors: Dispatch<SetStateAction<tutorsDataType>>
  students: studentsDataType[]
  setStudents: Dispatch<SetStateAction<studentsDataType[]>>
  schools: schoolsDataType[]
  setSchools: Dispatch<SetStateAction<schoolsDataType[]>>
}

export const AppContext = createContext({} as AppContextProps)

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // Utils
  const screenWidth = window.innerWidth

  // States
  const [screenWidthState, setScreenWidthState] = useState<number>(screenWidth)
  const [showGetStarted, setShowGetStarted] = useState<{
    rightCta: boolean
    dashboard: boolean
    showModdal: boolean
  }>({
    rightCta: true,
    dashboard: true,
    showModdal: false,
  })
  const [displayRatemodal, setDisplayRateModal] = useState(false)
  const [displaySharemodal, setDisplayShareModal] = useState(false)
  const [navItmesState, setNavItemsState] = useState(
    sideNavItems.map((data) => {
      return { ...data, isActive: false }
    })
  )
  const [supportData, setSupportData] = useState<SupportTrackingDataType[]>(SupportTrackingData);
  const [adminData, setAdminData] = useState<adminsDataType[]>(adminsData);
  const [students, setStudents] = useState<studentsDataType[]>(studentsData)
  const [schools, setSchools] = useState<schoolsDataType[]>(schoolsData)
  const [tutors, setTutors] = useState<tutorsDataType>(
    tutorsData as tutorsDataType
  )


  //   Effects
  useEffect(() => {
    setScreenWidthState(screenWidth)
  }, [screenWidth])

  return (
    <AppContext.Provider
      value={{
        screenWidthState,
        showGetStarted,
        setShowGetStarted,
        displayRatemodal,
        setDisplayRateModal,
        displaySharemodal,
        setDisplayShareModal,
        navItmesState,
        setNavItemsState,
        supportData,
        setSupportData,
        adminData,
        setAdminData,
        tutors,
        setTutors,
        students,
        setStudents,
        schools,
        setSchools
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
