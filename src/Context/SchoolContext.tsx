import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
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
  createCourse: createCourseType;
  setCreateCourse: Dispatch<SetStateAction<createCourseType>>;
  createCourseRequest: (
    schoolId: string,
    stage: number,
    courseId?: string
  ) => void;
  unPublishModule: (id: string) => void;
  publishModule: (id: string) => void;
  deleteModule: (id: string) => void;
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

export type createCourseType = {
  name?: string;
  course_objective?: { id: number; value: string }[];
  schoolId?: string;
  difficulty_level?: string;
  description?: string;
  image?: { frontendFile: string; file: File | null };
  cohort_name?: string;
  application_deadline?: string;
  start_date?: string;
  duration?: string;
  tutorId?: string;
  price?: string | number;
  total_capacity?: string;
  has_installment?: boolean;
  paid?: boolean;
  has_discount?: boolean;
};

export const SchoolContext = createContext({} as SchoolContextValues);

const SchoolContextProvider = ({ children }: SchoolContextProviderProps) => {
  // Context
  const { setNotifications } = useContext(AppContext);

  // Router
  const [_, setSearchParams] = useSearchParams();

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
  const [createCourse, setCreateCourse] = useState<createCourseType>({
    name: "",
    course_objective: [],
    schoolId: "",
    difficulty_level: "",
    description: "",
    image: { frontendFile: "", file: null },
    cohort_name: "",
    application_deadline: "",
    start_date: "",
    duration: "",
    tutorId: "",
    price: "",
    total_capacity: "",
    has_installment: false,
    paid: false,
    has_discount: true,
  });

  // Formdata
  const createSchoolFormData = new FormData();
  const createCourseFormData = new FormData();

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
      successMessage: "School status was changed successfully",
    });
  };

  const createCourseRequest = (
    schoolId: string,
    stage: number,
    courseId?: string
  ) => {
    requestHandler2({
      url:
        stage === 1
          ? `${backend_url}/api/ise/v1/courses/create-course/step${String(
              stage
            )}`
          : `${backend_url}/api/ise/v1/courses/create-course/step${String(
              stage
            )}/${courseId}`,
      method: stage === 1 ? "POST" : "PUT",
      data:
        stage === 1
          ? {
              name: createCourse.name,
              course_objective: createCourse.course_objective,
              schoolId: Number(schoolId),
              difficulty_level: createCourse.difficulty_level,
            }
          : stage === 2
          ? createCourseFormData
          : stage === 3 && {
              cohort_name: createCourse?.cohort_name,
              application_deadline: createCourse?.application_deadline,
              start_date: createCourse?.start_date,
              duration: createCourse?.duration,
              tutorId: createCourse?.tutorId || 1,
              price: createCourse?.price,
              total_capacity: Number(createCourse?.total_capacity),
              has_installment: createCourse?.has_installment,
              paid: createCourse?.price ? true : false,
              has_discount: createCourse?.has_discount,
            },
      isMultipart: stage === 1 || stage === 3 ? false : true,
      setState: setCreateSchoolRequest,
      state: createSchoolRequest,
      setNotificationsFailure: true,
      setNotifications: setNotifications,
      requestCleanup: true,
      successFunction: (res) => {
        console.log(res, "Response");
        if (stage === 1) {
          setSearchParams({ step: "2", courseId: res?.data?.id });
        }
        if (stage === 2) {
          setSearchParams({ step: "3", courseId: res?.data?.id });
        }
        if (stage === 3) {
          setSearchParams({ step: "4", courseId: res?.data?.id });
        }
      },
      // successMessage: "School was edited successfully",
    });
  };

  const unPublishModule = (id: string) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/course-modules/admin/unpublish-module/${id}`,
      method: "PATCH",
      setState: setCreateSchoolRequest,
      state: createSchoolRequest,
      setNotificationsFailure: true,
      setNotifications: setNotifications,
      setNotificationsSuccess: true,
      requestCleanup: true,
      successMessage: "Module submission was reversed successfully",
    });
  };

  const publishModule = (id: string) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/course-modules/admin/publish-module/${id}`,
      method: "PATCH",
      setState: setCreateSchoolRequest,
      state: createSchoolRequest,
      setNotificationsFailure: true,
      setNotifications: setNotifications,
      setNotificationsSuccess: true,
      requestCleanup: true,
      successMessage: "Module was published successfully",
    });
  };

  const deleteModule = (id: string) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/course-modules/admin/delete-module/${id}`,
      method: "DELETE",
      setState: setCreateSchoolRequest,
      state: createSchoolRequest,
      setNotificationsFailure: true,
      setNotifications: setNotifications,
      setNotificationsSuccess: true,
      requestCleanup: true,
      successMessage: "Module was deleted successfully",
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

  useEffect(() => {
    createCourseFormData.append(
      "description",
      createCourse.description as string
    );
    createCourseFormData.append(
      "cover_image",
      createCourse?.image?.file as File
    );
  }, [createCourseFormData]);

  return (
    <SchoolContext.Provider
      value={{
        createSchoolData,
        setCreateSchoolData,
        createSchool,
        createSchoolRequest,
        updateSchool,
        toggleActivate,
        createCourse,
        setCreateCourse,
        createCourseRequest,
        unPublishModule,
        publishModule,
        deleteModule,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolContextProvider;
