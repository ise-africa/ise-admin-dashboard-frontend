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
  createTutor: () => void;
  createAdmin: () => void;
  passwords: passwordsType;
  setPasswords: Dispatch<SetStateAction<passwordsType>>;
  changeAdminPassword: (id: string) => void;
  changeAdminRole: (id: string, role: string) => void;
  resendAdminInvite: (email: string) => void;
  closeAdminAccount: (id: string, deactivationReason: string) => void;
};

type UserContextProviderType = {
  children: React.ReactNode;
};

export type createStudentDetailsType = {
  full_name: string;
  email: string;
  bio: string;
  linkedIn_profile: string;
  role?: string;
};

export type passwordsType = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
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
      role: "",
    });
  const [isCreatingStudent, setIsCreatingStudent] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
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

  const createTutor = () => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/admin/tutors`,
      method: "POST",
      data: {
        first_name: createStudentDetails?.full_name?.split(" ")[0] || "",
        last_name: createStudentDetails?.full_name?.split(" ")[1] || "",
        email: createStudentDetails?.email,
      },
      setNotifications: setNotifications,
      setNotificationsFailure: true,
      state: isCreatingStudent,
      setState: setIsCreatingStudent,
      requestCleanup: true,
    });
  };

  const createAdmin = () => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/admin`,
      method: "POST",
      data: {
        first_name: createStudentDetails?.full_name?.split(" ")[0] || "",
        last_name: createStudentDetails?.full_name?.split(" ")[1] || "",
        email: createStudentDetails?.email,
        role: createStudentDetails?.role?.replaceAll(" ", "-").toLowerCase(),
      },
      setNotifications: setNotifications,
      setNotificationsFailure: true,
      state: isCreatingStudent,
      setState: setIsCreatingStudent,
      requestCleanup: true,
    });
  };

  const changeAdminPassword = (id: string) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/admin/${id}/change-password`,
      method: "PATCH",
      data: passwords,
      setNotifications: setNotifications,
      setNotificationsFailure: true,
      state: isCreatingStudent,
      setState: setIsCreatingStudent,
      requestCleanup: true,
      successFunction() {
        setIsCreatingStudent((prevState) => {
          return { ...prevState, data: "Password changed successfully" };
        });
      },
    });
  };

  const changeAdminRole = (id: string, role: string) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/admin/${id}/modify-role`,
      method: "PUT",
      data: { role },
      setNotifications: setNotifications,
      setNotificationsFailure: true,
      state: isCreatingStudent,
      setState: setIsCreatingStudent,
      successFunction() {
        setIsCreatingStudent((prevState) => {
          return { ...prevState, data: "Role changed successfully" };
        });
      },
      requestCleanup: true,
    });
  };

  const resendAdminInvite = (email: string) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/admin/resend-admin-invitation`,
      method: "POST",
      data: { email },
      setNotifications: setNotifications,
      setNotificationsFailure: true,
      state: isCreatingStudent,
      setState: setIsCreatingStudent,
      successFunction() {
        setIsCreatingStudent((prevState) => {
          return { ...prevState, data: "Invite sent successfully" };
        });
      },
      requestCleanup: true,
    });
  };

  const closeAdminAccount = (id: string, deactivationReason: string) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/admin/deactivate/${id}`,
      method: "POST",
      data: { deactivationReason },
      setNotifications: setNotifications,
      setNotificationsFailure: true,
      state: isCreatingStudent,
      setState: setIsCreatingStudent,
      successFunction() {
        setIsCreatingStudent((prevState) => {
          return { ...prevState, data: "Admin account closed successfully" };
        });
      },
      successMessage: "Admin account closed successfully",
      setNotificationsSuccess: true,
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
        editStudent,
        createTutor,
        createAdmin,
        passwords,
        setPasswords,
        changeAdminPassword,
        changeAdminRole,
        resendAdminInvite,
        closeAdminAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
