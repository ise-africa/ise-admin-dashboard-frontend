import { SWRConfiguration } from "swr";
import { requestHandler2 } from "../HelperFunctions/requestHandler";
import { backend_url } from "../Utilities/global";
import useGetHook from "./useGetHook";

const useTutors = () => {
  return useGetHook(`${backend_url}/api/ise/v1/admin/tutors`);
};

export const useTutorsById = (id: string) => {
  return useGetHook(`${backend_url}/api/ise/v1/admin/tutors/${id}`);
};

export const useTutorsAssignedCourses = (id: string) => {
  return useGetHook(`${backend_url}/api/ise/v1/admin/tutors/${id}`);
};

export default useTutors;
