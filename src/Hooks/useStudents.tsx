import { backend_url } from "../Utilities/global";
import useGetHook from "./useGetHook";

const useStudents = () => {
  return useGetHook(`${backend_url}/api/ise/v1/admin/students`);
};

export default useStudents;
