import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { requestHandler2 } from "../HelperFunctions/requestHandler";
import { backend_url } from "../Utilities/global";
import { AppContext } from "./AppContext";
import { requestType } from "./AuthUserContext";

type SchoolContextValues = {
  createSchoolData: createSchoolType;
  setCreateSchoolData: Dispatch<SetStateAction<createSchoolType>>;
  createSchool: () => void;
  createSchoolRequest: requestType;
  updateSchool: (id: string) => void;
  toggleActivate: (id: string) => void;
};

type SchoolContextProviderProps = {
  children: React.ReactNode;
};

export type createSchoolType = {
  name: string;
  image: { frontendFile: string; file: File | null };
  description: string;
  tagline: string;
  benefits: string[];
};

export const SchoolContext = createContext({} as SchoolContextValues);

const SchoolContextProvider = ({ children }: SchoolContextProviderProps) => {
  // Context
  const { setNotifications } = useContext(AppContext);

  // States
  const [createSchoolData, setCreateSchoolData] = useState<createSchoolType>({
    name: "",
    image: { frontendFile: "", file: null },
    description: "",
    tagline: "",
    benefits: [""],
  });
  const [createSchoolRequest, setCreateSchoolRequest] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });

  // Formdata
  const createSchoolFormData = new FormData();

  // Requests
  const createSchool = () => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/school/create-school`,
      method: "POST",
      isMultipart: true,
      data: createSchoolFormData,
      setState: setCreateSchoolRequest,
      state: createSchoolRequest,
      setNotificationsFailure: true,
      setNotifications: setNotifications,
    });
  };

  const updateSchool = (id: string) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/school/update/${id}`,
      method: "PATCH",
      isMultipart: true,
      data: createSchoolFormData,
      setState: setCreateSchoolRequest,
      state: createSchoolRequest,
      setNotificationsFailure: true,
      setNotifications: setNotifications,
      setNotificationsSuccess: true,
      successMessage: "School was edited successfully",
      requestCleanup: true,
    });
  };

  const toggleActivate = (id: string) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/school/admin/${id}/toggle`,
      method: "PATCH",
      setState: setCreateSchoolRequest,
      state: createSchoolRequest,
      setNotificationsFailure: true,
      setNotifications: setNotifications,
      setNotificationsSuccess: true,
      requestCleanup: true,
      // successMessage: "School was edited successfully",
    });
  };

  // Effects
  useEffect(() => {
    createSchoolFormData.append("name", createSchoolData.name);
    createSchoolFormData.append("image", createSchoolData.image.file as File);
    createSchoolFormData.append("description", createSchoolData.description);
    createSchoolFormData.append("tagline", createSchoolData.tagline);
    createSchoolFormData.append(
      "importance",
      createSchoolData?.benefits?.toString()
    );
  }, [createSchoolData]);

  return (
    <SchoolContext.Provider
      value={{
        createSchoolData,
        setCreateSchoolData,
        createSchool,
        createSchoolRequest,
        updateSchool,
        toggleActivate,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolContextProvider;
