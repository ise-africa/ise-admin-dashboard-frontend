import { createContext, useState } from "react";
import { requestHandler2 } from "../HelperFunctions/requestHandler";

type SchoolContextValues = {};

type SchoolContextProviderProps = {
  children: React.ReactNode;
};

export const SchoolContext = createContext({} as SchoolContextValues);

const SchoolContextProvider = ({ children }: SchoolContextProviderProps) => {
  // States
  const [createSchoolData, setCreateSchoolData] = useState({
    name: "",
    image: "",
    description: "",
    tagline: "",
  });

  //   Requests
  //   const createSchool = () => {
  //     requestHandler2({url: ``})
  //   }

  return <SchoolContext.Provider value={{}}>{children}</SchoolContext.Provider>;
};

export default SchoolContextProvider;
