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
};

type UserContextProviderType = {
  children: React.ReactNode;
};

type createStudentDetailsType = {
  full_name: string;
  email: string;
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
      data: createStudentDetails,
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
        });
      },
      requestCleanup: true,
    });
  };
  return (
    <UserContext.Provider
      value={{
        createStudentDetails,
        setCreateStudentDetails,
        isCreatingStudent,
        createStudent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
