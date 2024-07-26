import { backend_url } from "../Utilities/global";
import useGetHook from "./useGetHook";

const useStudents = () => {
  return useGetHook(`${backend_url}/api/ise/v1/students/all`);
};

export const useStudentsById = (id: string) => {
  return useGetHook(`${backend_url}/api/ise/v1/admin/student/profile/${id}`);
};

export const useStudentsReferralById = (id: string) => {
  return useGetHook(`${backend_url}/api/ise/v1/admin/enrolled/referrals/${id}`);
};

export default useStudents;
