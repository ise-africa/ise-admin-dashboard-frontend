import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { requestHandler2 } from "../HelperFunctions/requestHandler";
import { backend_url } from "../Utilities/global";
import { AppContext } from "./AppContext";
import { requestType } from "./AuthUserContext";

type UserContextValues = {
  createStudentDetails: createStudentDetailsType;
  setCreateStudentDetails: Dispatch<SetStateAction<createStudentDetailsType>>;
  isCreatingStudent: requestType;
  createStudent: () => void;
  editStudent: (id: string) => void;
};

type UserContextProviderType = {
  children: React.ReactNode;
};

type createStudentDetailsType = {
  full_name: string;
  email: string;
  bio: string;
  linkedIn_profile: string;
};

export const UserContext = createContext({} as UserContextValues);

const UserContextProvider = ({ children }: UserContextProviderType) => {
  // Context
  const { setNotifications } = useContext(AppContext);

  // States
  const [createStudentDetails, setCreateStudentDetails] =
    useState<createStudentDetailsType>({
      full_name: "",
      email: "",
      bio: "",
      linkedIn_profile: "",
    });
  const [isCreatingStudent, setIsCreatingStudent] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });

  // Utils
  const createStudent = async () => {
    await requestHandler2({
      url: `${backend_url}/api/ise/v1/admin/students`,
      method: "POST",
      data: {
        full_name: createStudentDetails.full_name,
        email: createStudentDetails.email,
      },
      state: isCreatingStudent,
      setState: setIsCreatingStudent,
      setNotificationsFailure: true,
      setNotifications: setNotifications,
      successFunction() {
        setIsCreatingStudent({
          isLoading: false,
          data: "User successfully created",
          error: null,
        });
        setCreateStudentDetails({
          full_name: "",
          email: "",
          bio: "",
          linkedIn_profile: "",
        });
      },
      requestCleanup: true,
    });
  };

  const editStudent = async (id: string) => {
    await requestHandler2({
      url: `${backend_url}/api/ise/v1/admin/edit_student/${id}`,
      method: "POST",
      data: createStudentDetails,
      state: isCreatingStudent,
      setState: setIsCreatingStudent,
      setNotificationsFailure: true,
      setNotificationsSuccess: true,
      setNotifications: setNotifications,
      successFunction() {
        setCreateStudentDetails({
          full_name: "",
          email: "",
          bio: "",
          linkedIn_profile: "",
        });
      },
      requestCleanup: true,
      successMessage: "User successfully edited",
    });
  };

  // const deactivateTutor = (id: string) => {
  //   requestHandler2({
  //     url: `${backend_url}/api/ise/v1/admin/tutors/close-account/${id}`,
  //     method: "GET",
  //   });
  // };

  return (
    <UserContext.Provider
      value={{
        createStudentDetails,
        setCreateStudentDetails,
        isCreatingStudent,
        createStudent,
        editStudent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
